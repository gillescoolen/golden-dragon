<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $primaryKey = 'name';
    protected $keyType = 'string';
    public $incrementing = false;

    public function dishes()
    {
        return $this->hasMany('App\Dish');
    }
}