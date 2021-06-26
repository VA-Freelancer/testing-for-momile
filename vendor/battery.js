
let statusCharge = document.querySelector('#status');
let statusChargeAnimation = document.querySelector('#battery-level');
let statusLevelBattery = document.querySelector('#battery-level-digit');
let statusLevelBatteryWidth = document.querySelector('#battery-level');
let statusTimeBattery = document.querySelector('#charging-time');
let statusDisTimeBattery = document.querySelector('#discharging-time');
const staatusDevice = navigator.userAgent;
navigator.getBattery().then(function (battery){
    function updateAllBatteryInfo(){
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischarginInfo();
    }
    updateAllBatteryInfo()
    battery.addEventListener('chargingchange', function (){
        updateChargeInfo();
    });
    function  updateChargeInfo(){
     console.log(battery.charging);
     if(battery.charging){
         statusCharge.innerHTML = 'Заряжается';
         statusChargeAnimation.classList.add('battery-animation');
     }else{
         statusCharge.innerHTML = 'Разряжается';
         statusChargeAnimation.classList.remove('battery-animation');
     }
    }
    battery.addEventListener('levelchange',  updateLevelInfo);
    function updateLevelInfo(){
        statusLevelBattery.innerHTML = battery.level*100 + '%';
        statusLevelBatteryWidth.style.width = battery.level*100 + '%';
    }
    battery.addEventListener('chargintimechange', updateChargingInfo);
    function updateChargingInfo(){
        statusTimeBattery.innerHTML = battery.chargingTime;
    }
    battery.addEventListener('dischargintimechange', updateDischarginInfo);
    function updateDischarginInfo(){
        if (isFinite(battery.dischargingTime)){
            statusDisTimeBattery.innerHTML = battery.dischargingTime;
        }else if(!battery.dischargingTime || !staatusDevice.match('Windows')){
            statusDisTimeBattery.innerHTML = 'Электричество подается на ваш ПК';
        }
        else{
            statusDisTimeBattery.innerHTML = battery.dischargingTime;
        }

    }
})







//********************************************** другой плагин

let percentage = document.querySelector('.battery-percentage');
let percent = document.querySelector('.battery-percent');
navigator.getBattery().then(function (battery){
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = battery.level * 100 + '%';

})
