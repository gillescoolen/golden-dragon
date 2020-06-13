<?php

use App\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::insert([
            ['role' => 'klant'],
            ['role' => 'kassamedewerker'],
            ['role' => 'serveerster'],
            ['role' => 'admin']
        ]);
    }
}
