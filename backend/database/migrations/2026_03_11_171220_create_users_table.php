<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('firstName', 100);
            $table->string('lastName', 100)->nullable();
            $table->string('phone', 16)->unique()->nullable();
            $table->string('email', 128)->unique()->nullable();
            $table->string('userImage')->nullable();
            $table->string('backgroundImage')->nullable();
            $table->string('userPassword');
            $table->foreignId('distrectId')->constrained('distrects')->cascadeOnDelete()->cascadeOnUpdate();
            $table->enum('role', ['admin', 'vendor'])->default('vendor');
            $table->boolean('verified')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
