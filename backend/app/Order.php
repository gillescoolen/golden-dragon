<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'comment', 'date'
    ];

    public function dishes()
    {
        return $this->belongsToMany('App\Dish')->withPivot(['amount', 'comment']);
    }
}
