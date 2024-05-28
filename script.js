const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const humidityNumber = document.querySelector('.humidity-number')
const degree = document.querySelector('.degree')
 const windSpeedNumber = document.querySelector('.wind-speed-number')
 const description = document.querySelector('.description')
 const weatherImg = document.querySelector('.weather-img')
 
async function weather(){
    const city = input.value
    
    const api_key = "310e19dfb8bd0d327923152f881906ff";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const finalurl = await fetch(url).then((res) => res.json())

        if(finalurl.cod === 404){
            console.log('errr')
        }
        console.log(finalurl)
        cityName.innerText = finalurl.name
        humidityNumber.innerText = finalurl.main?.humidity + '%'
        degree.innerHTML = `${Math.round(finalurl.main?.temp - 273.15)}°c`
        windSpeedNumber.innerHTML = `${finalurl.wind?.speed}km/h`
        description.innerHTML = `${finalurl.weather[0].description}`

        
    switch(finalurl.weather[0].main){
        case 'Clouds':
            weatherImg.src = "clouds.png";
            break;
        case 'Clear':
            weatherImg.src = "clear.png";
            break;
        case 'Rain':
            weatherImg.src = "rain.png";
            break;
        case 'Mist':
            weatherImg.src = "mist.png";
            break;
        case 'Snow':
            weatherImg.src = "snow.png";
            break;
    }

   
    }


button.addEventListener('click' , ()=>{
    weather(input.value)
})