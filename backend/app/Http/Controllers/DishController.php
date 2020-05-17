<?php

namespace App\Http\Controllers;

use App\Dish;
use App\Http\Resources\DishResource;
use Illuminate\Http\Request;

class DishController extends Controller
{
    public function all()
    {
        return new DishResource(Dish::all());
    }

    public function single($id)
    {
        return new DishResource(Dish::find($id));
    }
}
