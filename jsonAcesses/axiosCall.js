var axios = require('axios')

function axoiosCall() {
    return new Promise((resolve, reject) => {
        let apiKey = '2a087cfb839bc21a9a51673c5a2e606e';
        let city = 'portland';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        axios.get(url).then(res => {
            console.log('resss', res);
        })

    }).catch(err => {
        console.log("errr", err);

    })


}
axoiosCall()