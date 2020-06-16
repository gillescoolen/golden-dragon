<?php

use App\News;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        News::insert([
            ['content' => 'Door de Corona crisis is De Gouden Draak op het moment slechts beperkt open. Het restaurant-gedeelte is gesloten. U kan uw favoriete gerechten nog wel afhalen. '],
        ]);
    }
}
