(function () {
    let weather = {
        //Store data from openweather
        data: {
            location: 'seattle',
            tempF: 0,
            tempC: 0,
            feelsLikeF: 0,
            feelsLikeC: 0,
            report: '',
            windSpeed: 0,
            windDirection: 0,
            humidity: 0,
        },
        //get data and assign to data object
        getData: async function () {
            const x = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.data.location}&appid=2ce4c90e826af0f3a3f83a9bf293c425`, {mode: "cors"});
            const y = await x.json();
            this.data.location = y.name;
            this.data.tempC = this.getTempC(y.main.temp);
            this.data.tempF = this.getTempF(y.main.temp);
            this.data.feelsLikeC = this.getTempC(y.main.feels_like);
            this.data.feelsLikeF = this.getTempF(y.main.feels_like);
            this.data.humidity = y.main.humidity;
            this.data.windSpeed = y.wind.speed;
            this.data.windDirection = y.wind.deg;
            this.data.report = y.weather[0].description;
        },
        //convert kelvin temp to farenheit
        getTempF: function (temp) {
            return Math.round((temp - 273.15) * (9/5) + 32);
        },
        //convert kelvin temp to celsius
        getTempC: function (temp) {
            return Math.round(temp - 273.15);
        },
        //convert degrees to a direction, ie: northwest or south
        getWindDirection: function () {
            //do stuff with the degrees from openweather data
        }
    }

    //testing functions and data assignment
    weather.getData();
    console.log(weather.data);
})();