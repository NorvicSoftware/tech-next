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
        Schema::create('proyects', function (Blueprint $table) {
            $table->id();
			$table->string('title_project', 250);
            $table->integer('note');
            $table->integer('year');
            $table->string('manager', 100);
            $table->unsignedBigInteger('person_id');
            $table->foreign('person_id')->references('id')->on('persons')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyects');
    }
};
