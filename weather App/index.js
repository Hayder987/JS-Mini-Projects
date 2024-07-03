
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2572fba38bmshd5c0170c993c154p123adbjsn17d0d229ac79',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


async function getData(city){
    cityName.innerHTML = city 

    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pabna', options);
        const result = await response.json();
        console.log(result);
        
        cloud_pct.innerHTML = result.cloud_pct + " "+"%"
        temp.innerHTML = result.temp +" "+ "\u2103"
        temp2.innerHTML = result.temp 
        feels_like.innerHTML = result.feels_like +" "+ "\u2103"
        humidity.innerHTML = result.humidity + " "+"%"
        humidity2.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp +" "+ "\u2103"
        max_temp.innerHTML = result.max_temp +" "+ "\u2103"
        wind_speed.innerHTML = ((result.wind_speed)*10).toFixed(1) +" "+"km/h"
        wind_speed2.innerHTML = ((result.wind_speed)*10).toFixed(1)
        wind_degrees.innerHTML = result.wind_degrees

        // For sunrise
        const timestampMilliseconds = result.sunrise
        const date = new Date(timestampMilliseconds);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        sunrise.innerHTML = `0${hours-15}: ${minutes+22} AM`
    
        // for sunset
        const timestampMilliseconds2 = result.sunset
        const date2 = new Date(timestampMilliseconds2);
        const hours2 = date2.getHours();
        const minutes2 = date2.getMinutes();
        sunset.innerHTML = `0${hours2-14}: ${minutes2} PM` 
    } 
    catch (err) {
        console.error(err);
    }  
    
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getData(city.value)
 })

getData("pabna")

// weather for kolkata 
async function getData2(){

    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options);
        const result = await response.json();
        console.log(result);
        
        cloud_pct3.innerHTML = result.cloud_pct + " "+"%"
        temp3.innerHTML = result.temp +" "+ "\u2103"
        feels_like3.innerHTML = result.feels_like +" "+ "\u2103"
        humidity3.innerHTML = result.humidity + " "+"%"
        min_temp3.innerHTML = result.min_temp +" "+ "\u2103"
        max_temp3.innerHTML = result.max_temp +" "+ "\u2103"
        wind_speed3.innerHTML = ((result.wind_speed)*10).toFixed(1) +" "+"km/h"
        wind_degrees3.innerHTML = result.wind_degrees
        // For sunrise
        const timestampMilliseconds = result.sunrise
        const date = new Date(timestampMilliseconds);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        sunrise3.innerHTML = `0${hours-15}: ${minutes+22} AM`
        // for sunset
        const timestampMilliseconds2 = result.sunset
        const date2 = new Date(timestampMilliseconds2);
        const hours2 = date2.getHours();
        const minutes2 = date2.getMinutes();
        sunset3.innerHTML = `0${hours2-14}: ${minutes2} PM`    

    } catch (error) {
        console.error(error);
    }
}
getData2()

// weather for London
async function getData3(){

    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options);
        const result = await response.json();
        console.log(result);
        
        cloud_pct4.innerHTML = result.cloud_pct + " "+"%"
        temp4.innerHTML = result.temp +" "+ "\u2103"
        feels_like4.innerHTML = result.feels_like +" "+ "\u2103"
        humidity4.innerHTML = result.humidity + " "+"%"
        min_temp4.innerHTML = result.min_temp +" "+ "\u2103"
        max_temp4.innerHTML = result.max_temp +" "+ "\u2103"
        wind_speed4.innerHTML = ((result.wind_speed)*10).toFixed(1) +" "+"km/h"
        wind_degrees4.innerHTML = result.wind_degrees
        // For sunrise
        const timestampMilliseconds = result.sunrise
        const date = new Date(timestampMilliseconds);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        sunrise4.innerHTML = `0${hours-15}: ${minutes+22} AM`
        // for sunset
        const timestampMilliseconds2 = result.sunset
        const date2 = new Date(timestampMilliseconds2);
        const hours2 = date2.getHours();
        const minutes2 = date2.getMinutes();
        sunset4.innerHTML = `0${hours2-14}: ${minutes2} PM`    

    } catch (error) {
        console.error(error);
    }
}
getData3()

// weather for Newyork
async function getData4(){

    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options);
        const result = await response.json();
        console.log(result);
        
        cloud_pct5.innerHTML = result.cloud_pct + " "+"%"
        temp5.innerHTML = result.temp +" "+ "\u2103"
        feels_like5.innerHTML = result.feels_like +" "+ "\u2103"
        humidity5.innerHTML = result.humidity + " "+"%"
        min_temp5.innerHTML = result.min_temp +" "+ "\u2103"
        max_temp5.innerHTML = result.max_temp +" "+ "\u2103"
        wind_speed5.innerHTML = ((result.wind_speed)*10).toFixed(1) +" "+"km/h"
        wind_degrees5.innerHTML = result.wind_degrees
        // For sunrise
        const timestampMilliseconds = result.sunrise
        const date = new Date(timestampMilliseconds);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        sunrise5.innerHTML = `0${hours-15}: ${minutes+22} AM`
        // for sunset
        const timestampMilliseconds2 = result.sunset
        const date2 = new Date(timestampMilliseconds2);
        const hours2 = date2.getHours();
        const minutes2 = date2.getMinutes();
        sunset5.innerHTML = `0${hours2-14}: ${minutes2} PM`    

    } catch (error) {
        console.error(error);
    }
}
getData4()


// weather for Sydney
async function getData5(){

    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney', options);
        const result = await response.json();
        console.log(result);
        
        cloud_pct6.innerHTML = result.cloud_pct + " "+"%"
        temp6.innerHTML = result.temp +" "+ "\u2103"
        feels_like6.innerHTML = result.feels_like +" "+ "\u2103"
        humidity6.innerHTML = result.humidity + " "+"%"
        min_temp6.innerHTML = result.min_temp +" "+ "\u2103"
        max_temp6.innerHTML = result.max_temp +" "+ "\u2103"
        wind_speed6.innerHTML = ((result.wind_speed)*10).toFixed(1) +" "+"km/h"
        wind_degrees6.innerHTML = result.wind_degrees
        // For sunrise
        const timestampMilliseconds = result.sunrise
        const date = new Date(timestampMilliseconds);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        sunrise6.innerHTML = `0${hours-15}: ${minutes+22} AM`
        // for sunset
        const timestampMilliseconds2 = result.sunset
        const date2 = new Date(timestampMilliseconds2);
        const hours2 = date2.getHours();
        const minutes2 = date2.getMinutes();
        sunset6.innerHTML = `0${hours2-14}: ${minutes2} PM`    

    } catch (error) {
        console.error(error);
    }
}
getData5()


