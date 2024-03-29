<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    protected $primaryKey = 'role';
    protected $keyType = 'string';
    public $incrementing = false;

    public function users()
    {
        return $this->hasMany('App\User');
    }
}
