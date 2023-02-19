(function () {
    let weather = {
        //Store data from openweather
        data: {
            //Data stored here
        },
        init: function() {
            this.getData('seattle')
        },
        //get data and assign to data object
        getData: async function (location) {
            const x = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2ce4c90e826af0f3a3f83a9bf293c425`, {mode: "cors"});
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

            this.render();
            this.addListener();
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
        },
        //Grab HTML elements and render data to DOM
        render: function () {
            const domLocation = document.getElementById('location');
            const domTempF = document.getElementById('tempF');
            const domTempC = document.getElementById('tempC');
            const domFeelsLikeF = document.getElementById('feelsLikeF');
            const domFeelsLikeC = document.getElementById('feelsLikeC');
            const domReport = document.getElementById('report');
            const domWindSpeed = document.getElementById('windSpeed');
            const domWindDirection = document.getElementById('windDirection');
            const domHumidity = document.getElementById('humidity');

            domLocation.textContent = this.data.location;
            domTempF.textContent = this.data.tempF;
            domTempC.textContent = this.data.tempC;
            domFeelsLikeF.textContent = this.data.feelsLikeF;
            domFeelsLikeC.textContent = this.data.feelsLikeC;
            domHumidity.textContent = this.data.humidity;
            domWindSpeed.textContent = this.data.windSpeed;
            domWindDirection.textContent = this.data.windDirection;
            domReport.textContent = this.data.report;
        },
        //Add listener and search function to the form
        addListener: function() {
            const form = document.querySelector('form');
            form.addEventListener('submit', e => {
                e.preventDefault();
                const userSearch = new FormData(form).get('search');
                this.getData(userSearch);
                form.reset();
            });
        },
    }
    weather.init();
})();