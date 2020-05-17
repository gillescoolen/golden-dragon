<?php

namespace App;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens;

    public $timestamps = false;

    protected $fillable = [
        'password',
    ];

    protected $hidden = [
        'password',
    ];
}
