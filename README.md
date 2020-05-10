# Gōrudendoragon

## Running the backend.
1. Make sure you have [Composer](https://getcomposer.org/) & [PHP](https://www.php.net/downloads) installed!
2. Open a terminal in the `backend` folder and run `composer install`.
3. Copy the `.env.example` file and name the new file `.env`.
4. Make sure the database credentials in your new `.env` file match your actual credentials.
5. (on first time running) Run '`php artisan migrate:fresh --seed`' to insert default data.
6. Run `php artisan serve` in your terminal.
7. Voilà! View the API at [http://localhost:8000](http://localhost:8000).

## Running the frontend.
1. Make sure you have [Node](https://nodejs.org/en/) & [Vue CLI](https://cli.vuejs.org/) installed!
2. Open a terminal in the `frontend` folder and run `npm i`.
3. Run `npm start` in your terminal.
4. Voilà! View the page at [http://localhost:8080](http://localhost:8080).