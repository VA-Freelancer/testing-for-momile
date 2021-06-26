let percentage = document.querySelector('.battery-percentage');
let percent = document.querySelector('.battery-percent');
navigator.getBattery().then(function (battery){
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = battery.level * 100 + '%';

})