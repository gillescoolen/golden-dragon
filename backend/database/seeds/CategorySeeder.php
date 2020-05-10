<?php

use App\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::insert([
            ['name' => 'SOEP'],
            ['name' => 'VOORGERECHT'],
            ['name' => 'BAMI EN NASI GERECHTEN'],
            ['name' => 'COMBINATIE GERECHTEN (met witte rijst)'],
            ['name' => 'MIHOEN GERECHTEN'],
            ['name' => 'CHINESE BAMI GERECHTEN'],
            ['name' => 'INDISCHE GERECHTEN'],
            ['name' => 'EIERGERECHTEN (met witte rijst)'],
            ['name' => 'GROENTEN GERECHTEN (met witte rijst)'],
            ['name' => 'VLEES GERECHTEN (met witte rijst)'],
            ['name' => 'KIP GERECHTEN (met witte rijst)'],
            ['name' => 'GARNALEN GERECHTEN (met witte rijst)'],
            ['name' => 'OSSENHAAS GERECHTEN (met witte rijst)'],
            ['name' => 'VISSEN GERECHTEN (met witte rijst)'],
            ['name' => 'PEKING EEND GERECHTEN (met witte rijst)'],
            ['name' => 'TIEPAN SPECIALITEITEN (met witte rijst)'],
            ['name' => 'VEGETARISCHE GERECHTEN (met witte rijst)'],
            ['name' => 'KINDERMENUS'],
            ['name' => 'RIJSTTAFELS'],
            ['name' => 'BUFFET']
        ]);
    }
}
