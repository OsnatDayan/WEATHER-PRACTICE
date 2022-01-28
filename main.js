document.getElementById("showMe").addEventListener('click', function () {
    let cityName = document.getElementById('city').value;
    let inner = document.getElementById('weather');
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e819dbb43ffeed20feeb93509c926733&units=metric`).then(res => res.json()).then(resj => inner.innerHTML = resj.main.temp);
})


