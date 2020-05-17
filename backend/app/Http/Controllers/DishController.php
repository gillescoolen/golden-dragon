<?php

namespace App\Http\Controllers;

use App\Dish;

class DishController extends Controller
{
    public function all()
    {
        return Dish::all();
    }

    public function single($id)
    {
        return Dish::where('id', '=', $id)->with('allergies')->first();
    }
}
