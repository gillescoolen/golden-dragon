<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Allergy extends Model
{
    protected $table = 'allergies';
    protected $primaryKey = 'name';
    protected $keyType = 'string';
    public $incrementing = false;

    public function dishes()
    {
        return $this->hasMany('App\Dish');
    }
}