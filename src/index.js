async function getWeatherData(location) {
    const rawData = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=2ce4c90e826af0f3a3f83a9bf293c425', {mode: "cors"});
    const data = await rawData.json();
    console.log(data);
    
}

getWeatherData();