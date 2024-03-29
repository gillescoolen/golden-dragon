<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            [
                'password' => bcrypt('password'),
                'role' => 'admin'
            ],
        ]);
        User::insert([
            [
                'password' => bcrypt('password'),
                'role' => 'kassamedewerker'
            ],
        ]);
        User::insert([
            [
                'password' => bcrypt('password'),
                'role' => 'serveerster'
            ],
        ]);
        User::insert([
            [
                'password' => bcrypt('password'),
                'role' => 'serveerster'
            ],
        ]);
        User::insert([
            [
                'password' => bcrypt('password'),
                'role' => 'klant'
            ],
        ]);
    }
}
