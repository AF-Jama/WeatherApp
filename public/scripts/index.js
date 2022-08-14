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
    console.log(response);
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