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
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('phone', 10)->nullable();
            $table->unsignedBigInteger('university_id');
            $table->foreign("university_id")->references("id")->on("universities")->onDelete('cascade');
<<<<<<< HEAD
            $table->timestamps();
=======
            $table->timestamps(); 
>>>>>>> 276d64a9614f72a256ff980d9a1c42b1a05e2b06
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('careers');
    }
};
