<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('post_views', function (Blueprint $table) {
            $table->id();
            $table->foreignId('postId')->constrained('posts')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('userId')->nullable()->constrained('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('customerId')->nullable()->constrained('customers')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
            $table->unique(['postId', 'userId', 'customerId']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_views');
    }
};
