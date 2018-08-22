
 exports.rra = function RRA() {
    const random = require('random-world')
    const NodeGeocoder = require('node-geocoder');
    const fs = require('fs')

    var options = {
        provider: 'openstreetmap'
    };
    var geocoder = NodeGeocoder(options);

    let latRand = `${random.integer(10000, 99999)}`;
    let longRand = `${random.integer(10000, 99999)}`;

    let cityArr = [
        {
            lat: 48.856578,
            lng: 2.351828,
            name: 'Paris'
        },
        {
            lat: 52.516667,
            lng: 13.388889,
            name: 'Berlin'
        },
        {
            lat: 50.113611,
            lng: 8.679722,
            name: 'Frankfurn'
        },
        {
            lat: 45.463889,
            lng: 9.191389,
            name: 'Milan'
        },
        {
            lat: 45.463889,
            lng: 9.191389,
            name: 'Milan'
        },
        {
            lat: 41.01224,
            lng: 28.976018,
            name: 'Stambul'
        },
        {
            lat: 51.507222,
            lng: -0.1275,
            name: 'London'
        },
        {
            lat: 40.383333,
            lng: -3.716667,
            name: 'Madrid'
        },
        {
            lat: 41.893056,
            lng: 12.483333,
            name: 'Rome'
        },
        {
            lat: 48.20855,
            lng: 16.372695,
            name: 'Wien'
        },
        {
            lat: 52.231432,
            lng: 21.000992,
            name: 'Warszawa'
        },
        {
            lat: 50.448160,
            lng: 30.480995,
            name: 'Kiev'
        }
    ]

    let locData = cityArr[Math.floor(Math.random() * cityArr.length)];

    // ROUND (10 - більша площа 100 - менша площа)
    let lat = Math.round(locData.lat * 10) / 10;
    let lng = Math.round(locData.lng * 10) / 10;


    // Or using Promise
    geocoder.reverse({ lat: `${lat + latRand}`, lon: `${lng + longRand}` })
        .then(function (res) {
            if (
                res[0].city == undefined ||
                res[0].country == undefined ||
                res[0].countryCode == undefined ||
                res[0].zipcode == undefined ||
                res[0].streetName == undefined ||
                res[0].streetNumber == undefined ||
                res[0].state == undefined
            ) {
                RRA()
            } else {
                let data = {
                    country: res[0].country,
                    short: res[0].countryCode,
                    state: res[0].state,
                    city: res[0].city,
                    street: res[0].streetName,
                    number: res[0].streetNumber,
                    zip: res[0].zipcode
                }
                let jsonData = JSON.stringify(data);
                console.log(jsonData);
                fs.writeFile('address.json',jsonData, err =>{ if(err) console.log(err)})
            }
        })
        .catch(function (err) {
            RRA()
        })
}
