<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderDishesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_dishes', function (Blueprint $table) {
            $table->foreignId('order_id');
            $table->foreign('order_id')->references('id')->on('orders')
                ->onDelete('cascade');

            $table->foreignId('dish_id');
            $table->foreign('dish_id')->references('id')->on('dishes')
                ->onDelete('cascade');

            $table->integer('amount');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_dishes');
    }
}
