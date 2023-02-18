async function GetWeatherData(location) {
    const rawData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=2ce4c90e826af0f3a3f83a9bf293c425`, {mode: "cors"});
    const data = await rawData.json();
    console.log(data);
    console.log(getC(data.main.temp, data.name));
    console.log(getF(data.main.temp, data.name));
    return getC(data.main.temp, data.name), getF(data.main.temp, data.name);
}

getWeatherData('seattle');

function getC(temp, location) {
    return`${Math.round(temp - 273.15)} degrees Celsius in ${location}`;
}

function getF(temp, location) {
    return`${Math.round((temp - 273.15) * (9/5) + 32)} degrees Farenheit in ${location}`;
}

let weather = {
    temp: getWeatherData('california')
}

console.log(weather.temp);