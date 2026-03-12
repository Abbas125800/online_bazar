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
        Schema::create('post_size', function (Blueprint $table) {
            $table->foreignId('postId')->constrained('posts')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('sizeId')->constrained('sizes')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('stock')->default(0);
            $table->primary(['postId', 'sizeId']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_sizes');
    }
};
