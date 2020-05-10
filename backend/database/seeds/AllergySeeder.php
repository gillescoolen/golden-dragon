<?php

use App\Allergy;
use Illuminate\Database\Seeder;

class AllergySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Allergy::insert([
            ['description' => 'Bevat gluten'],
            ['description' => 'Bevat lactose'],
            ['description' => 'Bevat varkensvlees'],
        ]);
    }
}
