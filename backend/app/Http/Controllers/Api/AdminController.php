<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AdminController extends Controller
{
    /**
     * آمار و داده‌های مدیریتی بر اساس جداول واقعی دیتابیس.
     * از Query Builder استفاده شده تا وابسته به نام‌گذاری مدل‌ها/کلیدهای اولیه نباشد.
     */
    public function stats(Request $request)
    {
        $user = $request->user();

        $stats = [
            'users'         => DB::table('users')->count(),
            'vendors'       => DB::table('users')->where('role', 'vendor')->count(),
            'customers'     => DB::table('customers')->count(),
            'posts'         => DB::table('posts')->count(),
            'orders'        => DB::table('orders')->count(),
            'revenue'       => (float) DB::table('payments')->where('status', 'paid')->sum('amount'),
            'subscriptions' => DB::table('seller_subscriptions')->count(),
        ];

        $ordersByStatus = DB::table('orders')
            ->select('status', DB::raw('count(*) as total'))
            ->groupBy('status')
            ->get();

        $ordersTrend = DB::table('orders')
            ->select(DB::raw('DATE(created_at) as day'), DB::raw('count(*) as total'))
            ->whereDate('created_at', '>=', Carbon::now()->subDays(6)->startOfDay())
            ->groupBy(DB::raw('DATE(created_at)'))
            ->orderBy('day')
            ->get();

        $paymentsByMethod = DB::table('payments')
            ->select('method', DB::raw('SUM(amount) as total'))
            ->where('status', 'paid')
            ->groupBy('method')
            ->get();

        $recentOrders = DB::table('orders')
            ->join('customers', 'orders.customer_id', '=', 'customers.id')
            ->select(
                'orders.id',
                'customers.firstName',
                'customers.lastName',
                'orders.total_price',
                'orders.payment_method',
                'orders.status',
                'orders.created_at'
            )
            ->orderByDesc('orders.created_at')
            ->limit(6)
            ->get()
            ->map(function ($row) {
                return [
                    'id'       => 'ORD-' . str_pad($row->id, 4, '0', STR_PAD_LEFT),
                    'customer' => trim(($row->firstName ?? '') . ' ' . ($row->lastName ?? '')),
                    'total'    => (float) $row->total_price,
                    'method'   => $row->payment_method,
                    'status'   => $row->status,
                    'date'     => $row->created_at ? date('Y-m-d', strtotime($row->created_at)) : null,
                ];
            });

        $latestUsers = DB::table('users')
            ->select('firstName', 'lastName', 'email', 'role', 'created_at')
            ->orderByDesc('created_at')
            ->limit(6)
            ->get()
            ->map(function ($row) {
                return [
                    'name'      => trim(($row->firstName ?? '') . ' ' . ($row->lastName ?? '')),
                    'role'      => $row->role,
                    'email'     => $row->email,
                    'joined_at' => $row->created_at ? date('Y-m-d', strtotime($row->created_at)) : null,
                ];
            });

        $lowInventory = DB::table('post_size')
            ->join('posts', 'post_size.postId', '=', 'posts.id')
            ->select('posts.id', 'posts.title', DB::raw('SUM(post_size.stock) as stock'))
            ->groupBy('posts.id', 'posts.title')
            ->orderBy('stock')
            ->limit(6)
            ->get()
            ->map(function ($row) {
                $stock = (int) $row->stock;
                return [
                    'title'  => $row->title,
                    'stock'  => $stock,
                    'status' => $stock <= 10 ? 'کمبود' : ($stock <= 25 ? 'رو به اتمام' : 'ایمن'),
                ];
            });

        $support = [
            'messages_last7' => DB::table('user_customer_messages')
                ->whereDate('created_at', '>=', Carbon::now()->subDays(7))
                ->count(),
            'avg_rating' => round((float) DB::table('ratings')->avg('rating'), 2),
        ];

        return response()->json([
            'user'             => $user,
            'stats'            => $stats,
            'orders_by_status' => $ordersByStatus,
            'orders_trend'     => $ordersTrend,
            'payments_by_method' => $paymentsByMethod,
            'recent_orders'    => $recentOrders,
            'latest_users'     => $latestUsers,
            'low_inventory'    => $lowInventory,
            'support'          => $support,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out'
        ]);
    }
}
