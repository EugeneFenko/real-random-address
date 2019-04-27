# Real random address generator
[![NpmVersion](https://img.shields.io/badge/npm-1.1.0-brightgreen.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/real-random-address)  [![NpmLicense](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://www.npmjs.com/package/real-random-address)

Real random address is a OpenStreet based generator, NodeJS library. 
Create address.json in root your project.
# Installation
 ```
npm i real-random-address
```
# How to use?
Step 1. Create the rrag.js file with the following code:
 ```js
const rrag = require('real-random-address');
rrag.random(); // => address.json  Get random cities from list!

// Countries
rrag.uk();
rrag.de();
rrag.fr();
rrag.it();
rrag.pl();
rrag.ua();
rrag.nl();

//Language options. Look 'Accept-Language'
rrag.random("en");
rrag.de("us");
rrag.pl("ru");
```
Step 2. Create yourApp.js file with the following code:
 ```js
const fs = require('fs')

// For read address.json
fs.readFile('address.json', (err,data)=>{

    // 1 example
    console.log(
        JSON.parse(data)
    )

    // 2 example
    let address = JSON.parse(data);
    console.log(`
    Country: ${address.country} - code ${address.short};
    State: ${address.state};
    City: ${address.city};
    Street: ${address.street};
    Number: ${address.number};
    Zip: ${address.zip}.
    `)

})
```
Step 3. In package.json create line:
 ```js
 ...
 "scripts": {
    "get-address-example": "node rrag.js && node yourApp.js"
  },
...
```
Step 4. Run script in terminal:
 ```sh
 npm run get-address-example
```
### Available countries:
 - United Kingdom
 - Germany
 - France
 - Italy
 - Poland
 - Ukraine
 - Netherlands
### Available cities:
 - In random:
Amsterdam
Bari
Berlin
Birmingham
Dusselldorf
Elblag
Enschede
Firenze
Frankfurn
Gdansk
Krakow
Leeds
Leipzig
Liverpool
London
London
Lubline
Lyon
Madrid
Manchester
Mannheim
Marseille
Milan
Milano
Napoli
Newcastle
Poznan
Preston
Radom
Rennes
Rome
Rotterdam
Stambul
Stuttgart
Tourine
Venezia
Warszawa
Wroclaw