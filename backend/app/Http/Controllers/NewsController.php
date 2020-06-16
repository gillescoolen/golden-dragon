<?php

namespace App\Http\Controllers;

use App\News;

class NewsController extends Controller
{
    public function all()
    {
        return News::all();
    }
}
