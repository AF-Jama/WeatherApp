// client side

const {APIKEY} = require('../../config.js')

console.log("SUCCESFULL")
const burgerButton = document.getElementById('burgerButton')

burgerButton.addEventListener('click',e=>{
    e.preventDefault()

    console.log("CLICKED")

    const outerContainer = document.getElementById('links-outer-container')
    if(outerContainer.style.visibility === 'hidden'){
        outerContainer.style.visibility = 'visible'
        exitButton.style.visibility = 'visible';
        burgerButton.style.zIndex = '-10'
        outerContainer.style.zIndex = '100'
        return;
    }
})

const exitButton = document.getElementById('exit')

exitButton.addEventListener('click',e=>{
    e.preventDefault()

    const outerContainer = document.getElementById('links-outer-container')

    outerContainer.style.visibility = 'hidden';
    burgerButton.style.zIndex = 'auto'
    exitButton.style.visibility = 'hidden';
})

const body = document.querySelector('body')

console.log(body.style)

const searchButton = document.querySelector('#section-1 i')

console.log(searchButton)

searchButton.addEventListener('click',async e=>{
    e.preventDefault()

    const searchInput = document.getElementById('city-name-input')
    var errorDiv = document.getElementById('error')

    const cityName = document.querySelector('.city-name h1')
    const actualTemp = document.getElementById('actual-temp-number')
    const feelsLikeTemp = document.getElementById('feels-like-number')
    const windSpeedValue = document.querySelector('.wind-info-value')
    const humidityValue = document.querySelector('.humdity-info-value')
    const coordValue = document.querySelector('.coord-info-value')

    const searchInputValue = searchInput.value.trim()

    if(!searchInputValue){
        console.log("EMPTY")
        errorDiv.innerHTML = "You have entered an empty string, please try again"
        return;
    }
    errorDiv.innerHTML = ''
    const response = await getCountryData(searchInputValue)
    if(!response){
        errorDiv.innerHTML = "Weather data cannot be found for this location"
        return;
    }
    // dereference return promise response object

    let {name,main:{temp,feels_like,humidity},coord:{lon,lat},sys:{country},wind:{speed}} = response;
    console.log(name)
    console.log(speed)
    console.log(lon,lat)
    console.log(temp,feels_like)
    console.log(country)

    temp = temp.toFixed(1)
    temp = temp.toString()

    feels_like = feels_like.toFixed(1)
    feels_like = feels_like.toString()

    cityName.innerHTML = `${name}, ${country}`
    actualTemp.innerHTML = `${temp}`
    feelsLikeTemp.innerHTML = `${feels_like}`

    windSpeedValue.innerHTML = `${speed}`
    humidityValue.innerHTML = `${humidity}`
    coordValue.innerHTML = `(${lat.toFixed(2)},${lon.toFixed(2)})`



    return;
})


async function getCountryData(countryName){
    // method triggers get request to endpoint and returns promise json value
    try{
        console.log(1)
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${APIKEY}&units=metric`)
        if(!response.ok) throw new Error("Error")
        response = await response.json()
        console.log(3)
        return response; // returns promise value
    }catch{
        return null; // returns promise value of null, 
    }
}