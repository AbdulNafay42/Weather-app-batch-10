var wetherInput = document.getElementById("weather");
navigator.geolocation.getCurrentPosition(loction=>{
console.log(loction.coords.accuracy)

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loction.coords.latitude}&lon=${loction.coords.longitude}&appid=29dffaa7b6b95f39254e0f0236b917bc&units=metric`)
.then(res => res.json())
.then(res => {
    document.getElementById("temp").innerHTML = `${Math.round(res.main.temp)}°c`;
    document.getElementById("city").innerHTML = res.name;
    document.getElementById("humid").innerHTML = `${Math.round(res.main.humidity)}%`;
    document.getElementById("wind").innerHTML = `${res.wind.speed}m/s`;

    if(res.weather[0].main == "Clear"){
        document.getElementById("weather-icon").src = "animations/clear-night.svg"  
    }
    else if(res.weather[0].main== "Rain"){
        document.getElementById("weather-icon").src =  "animations/rain.svg"
    }
    else if(res.weather[0].main== "Sunny"){
        document.getElementById("weather-icon").src = "animations/sunny.svg"
    }
    else if(res.weather[0].main== "Haze"){
        document.getElementById("weather-icon").src = "animations/haze.svg"
    } 
    else if(res.weather[0].main== "Snow"){
        document.getElementById("weather-icon").src ="animations/snow.svg"
    }
    else if(res.weather[0].main== "Wind"){
        document.getElementById("weather-icon").src = "animations/wind.svg"
    }
    else if(res.weather[0].main== "Drizzle"){
        document.getElementById("weather-icon").src = "animations/drizzle.svg"
    }   
    else if(res.weather[0].main== "Thunderstorm"){
        document.getElementById("weather-icon").src = "animations/thunderstorms.svg"
    }   
    else if(res.weather[0].main== "Clouds"){
        document.getElementById("weather-icon").src = "animations/cloudy.svg"
    }   
    else if(res.weather[0].main== "mist"){
        document.getElementById("weather-icon").src = "animations/mist.svg"
    }   
    else if(res.weather[0].main== "smoke"){
        document.getElementById("weather-icon").src = "animations/smoke.svg"
    }   
    else if(res.weather[0].main== "dust"){
        document.getElementById("weather-icon").src = "animations/dust.svg"
    }   
    else if(res.weather[0].main== "fog"){
        document.getElementById("weather-icon").src = "animations/fog.svg"
    }   
    else if(res.weather[0].main== "sand"){
        document.getElementById("weather-icon").src = "animations/sand.svg"
    }   
    else if(res.weather[0].main== "tornado"){
        document.getElementById("weather-icon").src = "animations/tornado.svg"
    }  
 
})


})

// function changeLocation() {
    var changeLoc = document.getElementById("changeLocation")
    var weather = document.getElementById("weather").value

    changeLoc.addEventListener("click", () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=29dffaa7b6b95f39254e0f0236b917bc&units=metric`)
    console.log()
    .then((res) => res.json)
    .then((res) => {
           document.getElementById("temp").innerHTML = `${Math.round(res.main.temp)}°c`;
        document.getElementById("city").innerHTML = res.name;
        document.getElementById("humid").innerHTML = `${Math.round(res.main.humidity)}%`;
        document.getElementById("wind").innerHTML = `${res.wind.speed}m/s`;
    
        if(res.weather[0].main == "Clear"){
            document.getElementById("weather-icon").src = "animations/clear-night.svg"  
        }
        else if(res.weather[0].main == "Rain"){
            document.getElementById("weather-icon").src =  "animations/rain.svg"
        }
        else if(res.weather[0].main== "Sunny"){
            document.getElementById("weather-icon").src = "animations/sunny.svg"
        }
        else if(res.weather[0].main== "Haze"){
            document.getElementById("weather-icon").src = "animations/haze.svg"
        } 
        else if(res.weather[0].main== "Snow"){
            document.getElementById("weather-icon").src ="animations/snow.svg"
        }
        else if(res.weather[0].main== "Wind"){
            document.getElementById("weather-icon").src = "animations/wind.svg"
        }
        else if(res.weather[0].main== "Drizzle"){
            document.getElementById("weather-icon").src = "animations/drizzle.svg"
        }   
        else if(res.weather[0].main== "Thunderstorm"){
            document.getElementById("weather-icon").src = "animations/thunderstorms.svg"
        }   
        else if(res.weather[0].main== "Clouds"){
            document.getElementById("weather-icon").src = "animations/cloudy.svg"
        }   
        else if(res.weather[0].main== "mist"){
            document.getElementById("weather-icon").src = "animations/mist.svg"
        }   
        else if(res.weather[0].main== "smoke"){
            document.getElementById("weather-icon").src = "animations/smoke.svg"
        }   
        else if(res.weather[0].main== "dust"){
            document.getElementById("weather-icon").src = "animations/dust.svg"
        }   
        else if(res.weather[0].main== "fog"){
            document.getElementById("weather-icon").src = "animations/fog.svg"
        }   
        else if(res.weather[0].main== "sand"){
            document.getElementById("weather-icon").src = "animations/sand.svg"
        }   
        else if(res.weather[0].main== "tornado"){
            document.getElementById("weather-icon").src = "animations/tornado.svg"
        }  
          
    })
  

})

