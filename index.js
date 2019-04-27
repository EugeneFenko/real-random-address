
exports.random = function RRA(local) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const NodeGeocoder = require('node-geocoder');
    const fs = require('fs');
    const latin = require('latinize');

    var options = {
        provider: 'openstreetmap',
        language: local
    };
    var geocoder = NodeGeocoder(options);

    let latRand = `${randomInteger(10000, 99999)}`;
    let longRand = `${randomInteger(10000, 99999)}`;

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
            lat: 52.231432,
            lng: 21.000992,
            name: 'Warszawa'
        },
        {
            lat: 43.3142,
            lng: 5.3984,
            name: 'Marseille'
        },
        {
            lat: 45.7585,
            lng: 4.8445,
            name: 'Lyon'
        },
        {
            lat: 48.1094,
            lng: -1.6740,
            name: 'Rennes'
        },
        {
            lat: 48.7780,
            lng: 9.1768,
            name: 'Stuttgart'
        },
        {
            lat: 49.48778,
            lng: 8.46625,
            name: 'Mannheim'
        },
        {
            lat: 51.2290,
            lng: 6.7842,
            name: 'Dusselldorf'
        },
        {
            lat: 51.3352,
            lng: 12.3795,
            name: 'Leipzig'
        },
        {
            lat: 52.4800,
            lng: -1.8951,
            name: 'Birmingham'
        },
        {
            lat: 53.4803,
            lng: -2.2468,
            name: 'Manchester'
        },
        {
            lat: 53.4041,
            lng: -2.9784,
            name: 'Liverpool'
        },
        {
            lat: 53.7598,
            lng: -2.7065,
            name: 'Preston'
        },
        {
            lat: 53.7976,
            lng: -1.5448,
            name: 'Leeds'
        },
        {
            lat: 54.9733,
            lng: -1.6154,
            name: 'Newcastle'
        },
        {
            lat: 43.7736,
            lng: 11.2551,
            name: 'Firenze'
        },
        {
            lat: 40.8458,
            lng: 14.2375,
            name: 'Napoli'
        },
        {
            lat: 41.1149,
            lng: 16.8712,
            name: 'Bari'
        },
        {
            lat: 45.4642,
            lng: 9.1866,
            name: 'Milano'
        },
        {
            lat: 45.4379,
            lng: 12.3281,
            name: 'Venezia'
        },
        {
            lat: 45.0692,
            lng: 7.6681,
            name: 'Tourine'
        },
        {
            lat: 51.507222,
            lng: -0.1275,
            name: 'London'
        },
        {
            lat: 52.4079,
            lng: 16.9200,
            name: 'Poznan'
        },
        {
            lat: 51.1070,
            lng: 17.0312,
            name: 'Wroclaw'
        },
        {
            lat: 50.0621,
            lng: 19.9372,
            name: 'Krakow'
        },
        {
            lat: 54.3493,
            lng: 18.6404,
            name: 'Gdansk'
        },
        {
            lat: 51.4010,
            lng: 21.1549,
            name: 'Radom'
        },
        {
            lat: 51.2492,
            lng: 22.5676,
            name: 'Lubline'
        },
        {
            lat: 54.1615,
            lng: 19.4048,
            name: 'Elblag'
        }
    ]

    let locData = cityArr[Math.floor(Math.random() * cityArr.length)];

    let lat = Math.round(locData.lat * 10) / 10;
    let lng = Math.round(locData.lng * 10) / 10;

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
                RRA(local)
            } else {
                let data = {
                    country: latin(res[0].country),
                    short: latin(res[0].countryCode),
                    state: latin(res[0].state),
                    city: latin(res[0].city),
                    street: latin(res[0].streetName),
                    number: latin(res[0].streetNumber),
                    zip: latin(res[0].zipcode)
                }
                let jsonData = JSON.stringify(data);
                fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })
            }
        })
        .catch(function (err) {
            RRA(local)
        })
}

exports.ua = function RRA(local) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const NodeGeocoder = require('node-geocoder');
    const fs = require('fs');
    const latin = require('latinize');

    var options = {
        provider: 'openstreetmap',
        language: local
    };
    var geocoder = NodeGeocoder(options);

    let latRand = `${randomInteger(10000, 99999)}`;
    let longRand = `${randomInteger(10000, 99999)}`;

    let cityArr = [
        {
            lat: 50.0673,
            lng: 31.4450,
            name: 'Pereyaslav-Khm.'
        },
        {
            lat: 49.99159,
            lng: 36.23178,
            name: 'Harkiv'
        },
        {
            lat: 48.4717,
            lng: 35.0157,
            name: 'Dnipro'
        },
        {
            lat: 46.47234,
            lng: 30.71175,
            name: 'Odessa'
        },
        {
            lat: 49.23325,
            lng: 28.47913,
            name: 'Vinnica'
        },
        {
            lat: 49.84221,
            lng: 24.03228,
            name: 'Lviv'
        },
        {
            lat: 50.62229,
            lng: 26.24897,
            name: 'Rivne'
        },
        {
            lat: 51.4940,
            lng: 31.2872,
            name: 'Chernihiv'
        },
        {
            lat: 47.8508,
            lng: 35.1176,
            name: 'Zaporizhya'
        },
        {
            lat: 46.6455,
            lng: 32.6024,
            name: 'Kherson'
        }
    ]

    let locData = cityArr[Math.floor(Math.random() * cityArr.length)];

    let lat = Math.round(locData.lat * 10) / 10;
    let lng = Math.round(locData.lng * 10) / 10;

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
                RRA(local)
            } else {

                if (local == 'ru' || local == 'ua' || local == undefined) {

                    // RESULT RU-other
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
                    fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })

                } else {
                    if (/[а-яА-ЯЁё]/.test(JSON.stringify(res)) == true) { RRA(local) } else {
                        // RESULT non-RU
                        let data = {
                            country: latin(res[0].country),
                            short: latin(res[0].countryCode),
                            state: latin(res[0].state),
                            city: latin(res[0].city),
                            street: latin(res[0].streetName),
                            number: latin(res[0].streetNumber),
                            zip: latin(res[0].zipcode)
                        }
                        let jsonData = JSON.stringify(data);
                        fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })
                    }
                }
            }
        })
        .catch(function (err) {
            RRA(local)
        })
}

exports.fr = function RRA(local) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const NodeGeocoder = require('node-geocoder');
    const fs = require('fs');
    const latin = require('latinize');

    var options = {
        provider: 'openstreetmap',
        language: local
    };
    var geocoder = NodeGeocoder(options);

    let latRand = `${randomInteger(10000, 99999)}`;
    let longRand = `${randomInteger(10000, 99999)}`;

    let cityArr = [
        {
            lat: 43.3142,
            lng: 5.3984,
            name: 'Marseille'
        },
        {
            lat: 45.7585,
            lng: 4.8445,
            name: 'Lyon'
        },
        {
            lat: 48.1094,
            lng: -1.6740,
            name: 'Rennes'
        },
        {
            lat: 48.856578,
            lng: 2.351828,
            name: 'Paris'
        }
    ]

    let locData = cityArr[Math.floor(Math.random() * cityArr.length)];

    let lat = Math.round(locData.lat * 10) / 10;
    let lng = Math.round(locData.lng * 10) / 10;

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
                RRA(local)
            } else {

                if (local == 'ru' || local == 'ua' || local == undefined) {

                    // RESULT RU-other
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
                    fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })

                } else {
                    if (/[а-яА-ЯЁё]/.test(JSON.stringify(res)) == true) { RRA(local) } else {
                        // RESULT non-RU
                        let data = {
                            country: latin(res[0].country),
                            short: latin(res[0].countryCode),
                            state: latin(res[0].state),
                            city: latin(res[0].city),
                            street: latin(res[0].streetName),
                            number: latin(res[0].streetNumber),
                            zip: latin(res[0].zipcode)
                        }
                        let jsonData = JSON.stringify(data);
                        fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })
                    }
                }
            }
        })
        .catch(function (err) {
            RRA(local)
        })
}

exports.de = function RRA(local) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const NodeGeocoder = require('node-geocoder');
    const fs = require('fs')
    const latin = require('latinize');

    var options = {
        provider: 'openstreetmap',
        language: local
    };
    var geocoder = NodeGeocoder(options);

    let latRand = `${randomInteger(10000, 99999)}`;
    let longRand = `${randomInteger(10000, 99999)}`;

    let cityArr = [
        {
            lat: 48.7780,
            lng: 9.1768,
            name: 'Stuttgart'
        },
        {
            lat: 49.48778,
            lng: 8.46625,
            name: 'Mannheim'
        },
        {
            lat: 51.2290,
            lng: 6.7842,
            name: 'Dusselldorf'
        },
        {
            lat: 51.3352,
            lng: 12.3795,
            name: 'Leipzig'
        },
        {
            lat: 52.516667,
            lng: 13.388889,
            name: 'Berlin'
        },
        // {
        //     lat: 50.113611,
        //     lng: 8.679722,
        //     name: 'Frankfurt'
        // }
    ]

    let locData = cityArr[Math.floor(Math.random() * cityArr.length)];

    let lat = Math.round(locData.lat * 10) / 10;
    let lng = Math.round(locData.lng * 10) / 10;

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
                RRA(local)
            } else {

                if (local == 'ru' || local == 'ua' || local == undefined) {

                    // RESULT RU-other
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
                    fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })

                } else {
                    if (/[а-яА-ЯЁё]/.test(JSON.stringify(res)) == true) { RRA(local) } else {
                        // RESULT non-RU
                        let data = {
                            country: latin(res[0].country),
                            short: latin(res[0].countryCode),
                            state: latin(res[0].state),
                            city: latin(res[0].city),
                            street: latin(res[0].streetName),
                            number: latin(res[0].streetNumber),
                            zip: latin(res[0].zipcode)
                        }
                        let jsonData = JSON.stringify(data);
                        fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })
                    }
                }
            }
        })
        .catch(function (err) {
            RRA(local)
        })
}

exports.uk = function RRA(local) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const NodeGeocoder = require('node-geocoder');
    const fs = require('fs');
    const latin = require('latinize');

    var options = {
        provider: 'openstreetmap',
        language: local
    };
    var geocoder = NodeGeocoder(options);

    let latRand = `${randomInteger(10000, 99999)}`;
    let longRand = `${randomInteger(10000, 99999)}`;

    let cityArr = [
        {
            lat: 52.4800,
            lng: -1.8951,
            name: 'Birmingham'
        },
        {
            lat: 53.4803,
            lng: -2.2468,
            name: 'Manchester'
        },
        {
            lat: 53.4041,
            lng: -2.9784,
            name: 'Liverpool'
        },
        {
            lat: 53.7598,
            lng: -2.7065,
            name: 'Preston'
        },
        {
            lat: 53.7976,
            lng: -1.5448,
            name: 'Leeds'
        },
        {
            lat: 54.9733,
            lng: -1.6154,
            name: 'Newcastle'
        },
        {
            lat: 51.507222,
            lng: -0.1275,
            name: 'London'
        }
    ]

    let locData = cityArr[Math.floor(Math.random() * cityArr.length)];

    let lat = Math.round(locData.lat * 10) / 10;
    let lng = Math.round(locData.lng * 10) / 10;

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
                RRA(local)
            } else {

                if (local == 'ru' || local == 'ua' || local == undefined) {

                    // RESULT RU-other
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
                    fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })

                } else {
                    if (/[а-яА-ЯЁё]/.test(JSON.stringify(res)) == true) { RRA(local) } else {
                        // RESULT non-RU
                        let data = {
                            country: latin(res[0].country),
                            short: latin(res[0].countryCode),
                            state: latin(res[0].state),
                            city: latin(res[0].city),
                            street: latin(res[0].streetName),
                            number: latin(res[0].streetNumber),
                            zip: latin(res[0].zipcode)
                        }
                        let jsonData = JSON.stringify(data);
                        fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })
                    }
                }
            }
        })
        .catch(function (err) {
            RRA(local)
        })
}

exports.it = function RRA(local) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const NodeGeocoder = require('node-geocoder');
    const fs = require('fs');
    const latin = require('latinize');

    var options = {
        provider: 'openstreetmap',
        language: local
    };
    var geocoder = NodeGeocoder(options);

    let latRand = `${randomInteger(10000, 99999)}`;
    let longRand = `${randomInteger(10000, 99999)}`;

    let cityArr = [
        {
            lat: 43.7736,
            lng: 11.2551,
            name: 'Firenze'
        },
        {
            lat: 40.8458,
            lng: 14.2375,
            name: 'Napoli'
        },
        {
            lat: 41.1149,
            lng: 16.8712,
            name: 'Bari'
        },
        {
            lat: 45.4642,
            lng: 9.1866,
            name: 'Milano'
        },
        {
            lat: 45.4379,
            lng: 12.3281,
            name: 'Venezia'
        },
        {
            lat: 45.0692,
            lng: 7.6681,
            name: 'Tourine'
        },
        {
            lat: 41.893056,
            lng: 12.483333,
            name: 'Rome'
        }
    ]

    let locData = cityArr[Math.floor(Math.random() * cityArr.length)];

    let lat = Math.round(locData.lat * 10) / 10;
    let lng = Math.round(locData.lng * 10) / 10;

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
                RRA(local)
            } else {

                if (local == 'ru' || local == 'ua' || local == undefined) {

                    // RESULT RU-other
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
                    fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })

                } else {
                    if (/[а-яА-ЯЁё]/.test(JSON.stringify(res)) == true) { RRA(local) } else {
                        // RESULT non-RU
                        let data = {
                            country: latin(res[0].country),
                            short: latin(res[0].countryCode),
                            state: latin(res[0].state),
                            city: latin(res[0].city),
                            street: latin(res[0].streetName),
                            number: latin(res[0].streetNumber),
                            zip: latin(res[0].zipcode)
                        }
                        let jsonData = JSON.stringify(data);
                        fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })
                    }
                }
            }
        })
        .catch(function (err) {
            RRA(local)
        })
}

exports.pl = function RRA(local) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const NodeGeocoder = require('node-geocoder');
    const fs = require('fs');
    const latin = require('latinize');

    var options = {
        provider: 'openstreetmap',
        language: local
    };
    var geocoder = NodeGeocoder(options);

    let latRand = `${randomInteger(10000, 99999)}`;
    let longRand = `${randomInteger(10000, 99999)}`;

    let cityArr = [
        {
            lat: 52.4079,
            lng: 16.9200,
            name: 'Poznan'
        },
        {
            lat: 51.1070,
            lng: 17.0312,
            name: 'Wroclaw'
        },
        {
            lat: 50.0621,
            lng: 19.9372,
            name: 'Krakow'
        },
        {
            lat: 54.3493,
            lng: 18.6404,
            name: 'Gdansk'
        },
        {
            lat: 51.4010,
            lng: 21.1549,
            name: 'Radom'
        },
        {
            lat: 51.2492,
            lng: 22.5676,
            name: 'Lubline'
        },
        {
            lat: 54.1615,
            lng: 19.4048,
            name: 'Elblag'
        },
        {
            lat: 52.231432,
            lng: 21.000992,
            name: 'Warszawa'
        }
    ]

    let locData = cityArr[Math.floor(Math.random() * cityArr.length)];

    let lat = Math.round(locData.lat * 10) / 10;
    let lng = Math.round(locData.lng * 10) / 10;

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
                RRA(local)
            } else {

                if (local == 'ru' || local == 'ua' || local == undefined) {

                    // RESULT RU-other
                    let data = {
                        country: latin(res[0].country),
                        short: latin(res[0].countryCode),
                        state: latin(res[0].state),
                        city: latin(res[0].city),
                        street: latin(res[0].streetName),
                        number: latin(res[0].streetNumber),
                        zip: latin(res[0].zipcode)
                    }
                    let jsonData = JSON.stringify(data);
                    fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })

                } else {
                    if (/[а-яА-ЯЁё]/.test(JSON.stringify(res)) == true) { RRA(local) } else {
                        // RESULT non-RU
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
                        fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })
                    }
                }
            }
        })
        .catch(function (err) {
            RRA(local)
        })
}

exports.nl = function RRA(local) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const NodeGeocoder = require('node-geocoder');
    const fs = require('fs');
    const latin = require('latinize');

    var options = {
        provider: 'openstreetmap',
        language: local
    };
    var geocoder = NodeGeocoder(options);

    let latRand = `${randomInteger(10000, 99999)}`;
    let longRand = `${randomInteger(10000, 99999)}`;

    let cityArr = [
        {
            lat: 52.372763, 
            lng: 4.893148,
            name: 'Amsterdam'
        },
        {
            lat: 51.923706, 
            lng: 4.477322,
            name: 'Rotterdam'
        },
        {
            lat: 52.220592, 
            lng: 6.895484,
            name: 'Enschede'
        }
    ]

    let locData = cityArr[Math.floor(Math.random() * cityArr.length)];

    let lat = Math.round(locData.lat * 10) / 10;
    let lng = Math.round(locData.lng * 10) / 10;

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
                RRA(local)
            } else {

                if (local == 'ru' || local == 'ua' || local == undefined) {

                    // RESULT RU-other
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
                    fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })

                } else {
                    if (/[а-яА-ЯЁё]/.test(JSON.stringify(res)) == true) { RRA(local) } else {
                        // RESULT non-RU
                        let data = {
                            country: latin(res[0].country),
                            short: latin(res[0].countryCode),
                            state: latin(res[0].state),
                            city: latin(res[0].city),
                            street: latin(res[0].streetName),
                            number: latin(res[0].streetNumber),
                            zip: latin(res[0].zipcode)
                        }
                        let jsonData = JSON.stringify(data);
                        fs.writeFile('address.json', jsonData, err => { if (err) {console.log(err)} else {console.log('Success! address.json created')} })
                    }
                }
            }
        })
        .catch(function (err) {
            RRA(local)
        })
}