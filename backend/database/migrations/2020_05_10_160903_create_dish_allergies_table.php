<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDishAllergiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dish_allergies', function (Blueprint $table) {
            $table->foreignId('dish_id');
            $table->foreign('dish_id')->references('id')->on('dishes')
                ->onDelete('cascade');

            $table->string('allergy');
            $table->foreign('allergy')->references('description')->on('allergies')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dish_allergies');
    }
}
