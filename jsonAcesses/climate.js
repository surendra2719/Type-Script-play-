var axios = require('axios');

function doTask(state,params) {
    return new Promise((resolve, reject) => {
        try {
            let apiKey = '2a087cfb839bc21a9a51673c5a2e606e';
            let city = 'chennai';
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            axios.get(url).then(function (response) {
                // console.log('resonse',response.data.main.temp);

                // console.log('Temp in kelvins',response.data.main.temp-273.15);
                let value=response.data.main.temp-273.15;
                let weatherData=response.data.weather[0].description;
                // console.log("Temparature in celicus",Math.round(value)+'c');
                let FinalTemparature =Math.round(value)+'°C'+" "+weatherData;
                console.log("Final temparature",FinalTemparature);
                
                let Weather = response;
                resolve({

                    'weatherResponse': Weather
                });
            }).catch(function (err) {
                console.log('err', err);
            });

        } catch (error) {
            resolve({
                "error": true
            });
        }
    });
}
doTask()