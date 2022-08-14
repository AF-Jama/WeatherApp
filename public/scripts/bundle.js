(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
    name:"APIKEY",
    APIKEY: "5e68a62ecfef116fd1a65d5960da3365"
}
},{}],2:[function(require,module,exports){
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

    if(!searchInput.value.trim()){
        console.log("EMPTY")
        errorDiv.innerHTML = "You have entered an empty string, please try again"
        return;
    }
    errorDiv.innerHTML = ''
    const searchValue = searchInput.value.trim()
    const response = await getCountryData(searchValue)
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
    try{
        console.log(1)
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${APIKEY}&units=metric`)
        if(!response.ok) throw new Error("Error")
        response = await response.json()
        console.log(3)
        return response;
    }catch{
        return null;
    }
}
},{"../../config.js":1}]},{},[2]);
