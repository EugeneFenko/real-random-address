# Real random address generator
[![NpmVersion](https://img.shields.io/badge/npm-1.0.3-brightgreen.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/real-random-address)  [![NpmLicense](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://www.npmjs.com/package/real-random-address)

Real random address is a OpenStreet based generator, NodeJS library. 
Create address.json in root your project.
# Installation (nodejs library)
 ```
npm i real-random-address
```
# Usage example
 ```js
const rrag = require('real-random-address');
rrag.random(); // => address.json 

// For read address.json
fs.readFile('address.json', (err,data)=>{
    JSON.parse(data)
})

//Language options for example. Look 'Accept-Language'
rrag.random("en");
rrag.random("us");
rrag.random("ru");

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