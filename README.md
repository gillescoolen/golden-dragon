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

## Documenting the Database.
1. Make sure you have [Node](https://nodejs.org/en/) & [dbdocs.io](https://dbdocs.io/) installed!
2. Run `dbdocs build docs/database.dbml` in your terminal.
3. Voilà! View the page at [dbdocs.io/GillesWHC/golden_dragon](https://dbdocs.io/GillesWHC/golden_dragon).

# Features
Apart from the basic features, there are 8 user stories we need to complete to get a decent grade.

## Customer

### 1.2
Als klant wil ik bij gerechten informatie zien over allergenen en pittigheid zodat ik hiermee rekening kan houden 
- De allergenen die minimaal getoond moeten worden zijn: bevat gluten, bevat lactose, bevat varkensvlees 
- De pittigheid wordt getoond op een driepuntschaal. Bij geen indicatie is een gerecht niet pittig. 

### 1.4
Als klant wil ik een herhalingsbestelling doen bij mijn tafel. Met andere woorden, er is een historie waaruit ik makkelijk een nieuwe bestelling kan plaatsen


## Cash Registry

### 2.2
Als klant wil ik een herhalingsbestelling doen bij mijn tafel. Met andere woorden, er is een historie waaruit ik makkelijk een nieuwe bestelling kan plaatsen

### 2.3
Als kassamedewerker kan ik per gerecht aangeven of de klant witte rijst, nasi/bami goreng, mihoen goreng of chinese bami wil. 

- Wanneer een gerecht besteld wordt, kan dit gelijk aangegeven worden. Meerdere nasi of bami bestellingen gaan via een nieuwe orderregel

## Website

### 3.2
Als klant wil ik een up-to-date PDF van het menu kunnen downloaden. (generatie vanuit de database). Hierbij worden ook eventuele aanbiedingen afgedrukt op een aparte pagina in de PDF.

### 3.4
Als klant wil ik via de website een afhaal bestelling doorgeven. Bij de bedanktpagina krijg een een printbare QR Code waar, het bestelnummer,  gerecht nummer(s) en naam in staat opgeslagen.

## Admin

### 4.1
Als admin kan ik gerechten toevoegen, aanpassen en verwijderen zodat het menu up-to-date gehouden kan worden. De nummering moet wel gelijk blijven. Je zal dus met a,b,c moeten werken bij huidige. Bij echt nieuwe gerechten/categorie kan de nummering doorlopen

### 4.2
Als admin kan ik gerechten toevoegen, aanpassen en verwijderen zodat het menu up-to-date gehouden kan worden. De nummering moet wel gelijk blijven. Je zal dus met a,b,c moeten werken bij huidige. Bij echt nieuwe gerechten/categorie kan de nummering doorlopen
