const options = {
     	method: 'GET',
 	headers: {
 		'X-RapidAPI-Key': '2572fba38bmshd5c0170c993c154p123adbjsn17d0d229ac79',
    	'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
 	}
 };

 const getWeather = (city)=>{
    cityName.innerHTML = city
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {   
    console.log(response)

    cloud_pct.innerHTML = response.cloud_pct + " "+"%"
    temp.innerHTML = response.temp +" "+ "\u2103"
    temp2.innerHTML = response.temp 
    feels_like.innerHTML = response.feels_like +" "+ "\u2103"
    humidity.innerHTML = response.humidity + " "+"%"
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp +" "+ "\u2103"
    max_temp.innerHTML = response.max_temp +" "+ "\u2103"
    wind_speed.innerHTML = ((response.wind_speed)*10).toFixed(1) +" "+"km/h"
    wind_speed2.innerHTML = ((response.wind_speed)*10).toFixed(1)
    wind_degrees.innerHTML = response.wind_degrees

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
 };
 
 submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
 })
getWeather("Pabna")

// weather for kolkata
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
.then(response => response.json())
.then((response) => {   
    console.log(response)   
    cloud_pct3.innerHTML = response.cloud_pct + " "+"%"
    temp3.innerHTML = response.temp +" "+ "\u2103"
    feels_like3.innerHTML = response.feels_like +" "+ "\u2103"
    humidity3.innerHTML = response.humidity + " "+"%"
    min_temp3.innerHTML = response.min_temp +" "+ "\u2103"
    max_temp3.innerHTML = response.max_temp +" "+ "\u2103"
    wind_speed3.innerHTML = ((response.wind_speed)*10).toFixed(1) +" "+"km/h"
    wind_degrees3.innerHTML = response.wind_degrees
    // For sunrise
    const timestampMilliseconds = response.sunrise
    const date = new Date(timestampMilliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    sunrise3.innerHTML = `0${hours-15}: ${minutes+22} AM`
    // for sunset
    const timestampMilliseconds2 = response.sunset
    const date2 = new Date(timestampMilliseconds2);
    const hours2 = date2.getHours();
    const minutes2 = date2.getMinutes();
    sunset3.innerHTML = `0${hours2-14}: ${minutes2} PM`    
})

// weather for London
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
.then(response => response.json())
.then((response) => {   
    console.log(response) 

    cloud_pct4.innerHTML = response.cloud_pct + " "+"%"
    temp4.innerHTML = response.temp +" "+ "\u2103"
    feels_like4.innerHTML = response.feels_like +" "+ "\u2103"
    humidity4.innerHTML = response.humidity + " "+"%"
    min_temp4.innerHTML = response.min_temp +" "+ "\u2103"
    max_temp4.innerHTML = response.max_temp +" "+ "\u2103"
    wind_speed4.innerHTML = ((response.wind_speed)*10).toFixed(1) +" "+"km/h"
    wind_degrees4.innerHTML = response.wind_degrees
    // For sunrise
    const timestampMilliseconds = response.sunrise
    const date = new Date(timestampMilliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    sunrise4.innerHTML = `0${hours-15}: ${minutes+22} AM`
    // for sunset
    const timestampMilliseconds2 = response.sunset
    const date2 = new Date(timestampMilliseconds2);
    const hours2 = date2.getHours();
    const minutes2 = date2.getMinutes();
    sunset4.innerHTML = `0${hours2-14}: ${minutes2} PM`    
})


// weather for NewYork
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
.then(response => response.json())
.then((response) => {   
    console.log(response) 

    cloud_pct5.innerHTML = response.cloud_pct + " "+"%"
    temp5.innerHTML = response.temp +" "+ "\u2103"
    feels_like5.innerHTML = response.feels_like +" "+ "\u2103"
    humidity5.innerHTML = response.humidity + " "+"%"
    min_temp5.innerHTML = response.min_temp +" "+ "\u2103"
    max_temp5.innerHTML = response.max_temp +" "+ "\u2103"
    wind_speed5.innerHTML = ((response.wind_speed)*10).toFixed(1) +" "+"km/h"
    wind_degrees5.innerHTML = response.wind_degrees
    // For sunrise
    const timestampMilliseconds = response.sunrise
    const date = new Date(timestampMilliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    sunrise5.innerHTML = `0${hours-15}: ${minutes+22} AM`
    // for sunset
    const timestampMilliseconds2 = response.sunset
    const date2 = new Date(timestampMilliseconds2);
    const hours2 = date2.getHours();
    const minutes2 = date2.getMinutes();
    sunset5.innerHTML = `0${hours2-14}: ${minutes2} PM`    
})

// weather for NewYork
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options)
.then(response => response.json())
.then((response) => {   
    console.log(response) 

    cloud_pct6.innerHTML = response.cloud_pct + " "+"%"
    temp6.innerHTML = response.temp +" "+ "\u2103"
    feels_like6.innerHTML = response.feels_like +" "+ "\u2103"
    humidity6.innerHTML = response.humidity + " "+"%"
    min_temp6.innerHTML = response.min_temp +" "+ "\u2103"
    max_temp6.innerHTML = response.max_temp +" "+ "\u2103"
    wind_speed6.innerHTML = ((response.wind_speed)*10).toFixed(1) +" "+"km/h"
    wind_degrees6.innerHTML = response.wind_degrees
    // For sunrise
    const timestampMilliseconds = response.sunrise
    const date = new Date(timestampMilliseconds);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    sunrise6.innerHTML = `0${hours-15}: ${minutes+22} AM`
    // for sunset
    const timestampMilliseconds2 = response.sunset
    const date2 = new Date(timestampMilliseconds2);
    const hours2 = date2.getHours();
    const minutes2 = date2.getMinutes();
    sunset6.innerHTML = `0${hours2-14}: ${minutes2} PM`    
})


 






