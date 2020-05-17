<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name', 'price', 'index', 'character', 'spicyness', 'category'
    ];

    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function orders()
    {
        return $this->belongsToMany('App\Order');
    }

    public function allergies()
    {
        return $this->belongsToMany('App\Allergy');
    }
}
