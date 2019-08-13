

var response = {
    "coord": {
        "lon": 80.28,
        "lat": 13.09
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        },  {
            "id": 804,
            "main": "Clouds",
            "description": "snow",
            "icon": "04d"
        },
        {
            "id": 805,
            "main": "Clouds",
            "description": "sun",
            "icon": "04d"
        },
        {
            "id": 806,
            "main": "Clouds",
            "description": "Scattered clouds",
            "icon": "04d"
        },
        {
            "id": 807,
            "main": "Clouds",
            "description": "Hot",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 311.15,
        "pressure": 1003,
        "humidity": 42,
        "temp_min": 311.15,
        "temp_max": 311.15
    },
    "visibility": 7000,
    "wind": {
        "speed": 5.1,
        "deg": 330
    },
    "clouds": {
        "all": 75
    },
    "dt": 1565602306,
    "sys": {
        "type": 1,
        "id": 9218,
        "message": 0.0084,
        "country": "IN",
        "sunrise": 1565569569,
        "sunset": 1565614923
    },
    "timezone": 19800,
    "id": 1264527,
    "name": "Chennai",
    "cod": 200
}
var climate=''
for(i=0;i<response.weather.length;i++){
    // console.log(response.weather[i].description);
    climate+=response.weather[i].description+","
}

// console.log("climate",response.main.temp-273.15+"c"+" "+climate.slice(0,-1)+".");
console.log('---',climate.substring(0,14));


