<?php

use App\Dish;
use JeroenZwart\CsvSeeder\CsvSeeder;

class DishSeeder extends CsvSeeder
{
    /** 
     *
     * tablename (string) - Name of table to insert data.
     * truncate (boolean TRUE) - Truncate the table before seeding.
     * header (boolean TRUE) - CSV has a header row, set FALSE if not.
     * mapping (array []) - Associative array of column names in order as CSV, if empty the first row of CSV will be used as header.
     * aliases (array []) - Associative array of CSV header names and column names; csvColumnName => aliasColumnName.
     * skipper (string %) - Skip a CSV header and data to import in the table.
     * validate (array []) - Validate a CSV row with Laravel Validation.
     * hashable (array ['password']) - Array of column names to hash there values. It uses Hash::make().
     * empty (boolean FALSE) - Set TRUE for keeping an empty value in the CSV file to an empty string instead of a NULL.
     * defaults (array []) - Array of table columns and it's values to seed, when they are empty in the CSV file.
     * timestamps (string/boolean TRUE) - Set Laravel's timestamp in the database while seeding; set as TRUE will use current time.
     * delimiter (string ;) - The used delimiter in the CSV files.
     * chunk (integer 50) - Insert the data of rows every chunk while reading the CSV.
     * encode (boolean TRUE) - Encode the value of rows to UTF-8
     *
     */
    public function __construct()
    {
        $this->truncate = false;
        $this->delimiter = ',';
        $this->mapping = ['prefix', 'index', 'suffix', 'name', 'price', 'category', 'description'];
        $this->file = '/database/seeds/csvs/dishes.csv';
        $this->timestamps = false;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        parent::run();
    }
}
