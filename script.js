function searchWeather(){
   search = searchBox.value;
   
 
 
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`)
 
   .then(res => res.json())
   .then(data => weatherData(data))
   .catch(error => alert('Cannot fetch weather data'))
   
 }
 
 function weatherData(data){
  countryData = data.sys.country;
  pressureData = data.main.pressure;
  climateData = data.main.temp;
  windData = data.wind.speed;

  // console.log(pressureData);
  // console.log(climateData);
  // console.log(windData);

  htmlData1 = `${countryData}`
  country.innerHTML = htmlData1;

  htmlData2 = `${climateData}%`
  climate.innerHTML = htmlData2;

  htmlData3 = `${windData} mps`
  wind.innerHTML = htmlData3;

  htmlData4 = `${pressureData} Pa`
  pressure.innerHTML = htmlData4;
 }

 
   
   
 
   