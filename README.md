# Random real address generator

Random real address is a OpenStreet based generator, NodeJS library. Create address.json on root your project.
# Installation (nodejs library)
 ```sh
npm install rrag
```
# Usage example
 ```sh
const rrag = require('rrag');
rrag.random();

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