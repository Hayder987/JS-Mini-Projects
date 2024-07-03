

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2572fba38bmshd5c0170c993c154p123adbjsn17d0d229ac79',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city.toUpperCase()
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
     .then(response => response.json())
     .then(response => {

	console.log(response)
    cloud_pct.innerHTML = response.cloud_pct +" "+"%"
    feels_like.innerHTML = response.feels_like + ` \u2103`
    humidity.innerHTML = response.humidity + ` %`
    max_temp.innerHTML = response.max_temp + ` \u2103`
    min_temp.innerHTML = response.min_temp + ` \u2103`
    temp.innerHTML = response.temp + ` \u2103`
	temp2.innerHTML = response.temp + ` \u2103`
    wind_degrees.innerHTML = response.wind_degrees + ` \u00B0`
    wind_speed.innerHTML = ((response.wind_speed)*2.609).toFixed(1) +` km/h`

	// For sunrise
    const timestampMilliseconds = response.sunrise
    const date = new Date(timestampMilliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    sunrise.innerHTML = `0${hours-15}: ${minutes+22} AM`

    // for sunset
    const timestampMilliseconds2 = response.sunset
    const date2 = new Date(timestampMilliseconds2);
    const hours2 = date2.getHours();
    const minutes2 = date2.getMinutes();
    sunset.innerHTML = `0${hours2-14}: ${minutes2} PM`

})
.catch(err => console.error(err))

}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
   getWeather(city.value)
})
getWeather("Pabna")

