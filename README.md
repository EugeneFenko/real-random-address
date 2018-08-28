# Real random address generator
[![NpmVersion](https://img.shields.io/badge/npm-1.0.4-brightgreen.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/real-random-address)  [![NpmLicense](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://www.npmjs.com/package/real-random-address)

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
rrag.random(); // => address.json 

//Language options. Look 'Accept-Language'
rrag.random("en");
rrag.random("us");
rrag.random("ru");
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
### Available cities:
  - Paris
  - Berlin
  - Frankfurt
  - Milan
  - Stambul
  - London
  - Madrid
  - Rome
  - Wien
  - Warszawa