

                    //const src="https://unpkg.com/leaflet/dist/leaflet.js";

                    const apiKey = "2a6e4864588d051d19a67b90d996f4f8";
                    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
                    
                    /*const searchBox = document.querySelector(".search input");
                    const searchBtn = document.querySelector(".search button");
                    const weatherIcon = document.querySelector(".weather-icon");
                    
                    // Default view (you can adjust)
                    let map = L.map('map').setView([51.505, -0.09], 10); 
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 19,
                    }).addTo(map);
                    
                    async function scanWeather(city)
                    {
                        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
                        var data = await response.json();
                        
                        console.log(data);
                        
                        document.querySelector(".city").innerHTML = data.name;
                        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
                        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
                        
                        if(data.weather[0].main == "Clear"){
                            weatherIcon.src = "images/clear.png";
                        }
                        else if(data.weather[0].main == "Clouds"){
                            weatherIcon.src = "images/clouds.png";
                        }
                        else if(data.weather[0].main == "Rain"){
                            weatherIcon.src = "images/rain.png";
                        }
                        else if(data.weather[0].main == "Mist"){
                            weatherIcon.src = "images/mist.png";
                        }
                        else if(data.weather[0].main == "Drizzle"){
                            weatherIcon.src = "images/drizzle.png";
                        }
                        else if(data.weather[0].main == "Snow"){
                            weatherIcon.src = "images/snow.png";
                        }

                         // Update map view based on city coordinates
            const lat = data.coord.lat;
            const lon = data.coord.lon;
            map.setView([lat, lon], 10);
            L.marker([lat, lon]).addTo(map);
                    }
                
                searchBtn.addEventListener("click", ()=>{
                    scanWeather(searchBox.value);
                })*/
                    const searchBox = document.querySelector(".search input");
                    const searchBtn = document.querySelector(".search button");
                    const weatherIcon = document.querySelector(".weather-icon");
                    
                   
                    
                    async function scanWeather(city) {
                        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
                        var data = await response.json();
                    
                        // Update weather info
                        document.querySelector(".city").innerHTML = data.name;
                        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
                        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
                    
                        // Update weather icon
                        if (data.weather[0].main === "Clear") {
                            weatherIcon.src = "images/clear.png";
                        } else if (data.weather[0].main === "Clouds") {
                            weatherIcon.src = "images/clouds.png";
                        } else if (data.weather[0].main === "Rain") {
                            weatherIcon.src = "images/rain.png";
                        }
                    
                       
                    }
                    
                    searchBtn.addEventListener("click", () => {
                        scanWeather(searchBox.value);
                    });
                    