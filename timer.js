
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

const disp = document.getElementById('disp');
var interval = null;

var total = 0;


totalvalue = () => {

    total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
}

Timer = () => {


    totalvalue();
    total--;

    if (total >= 0) {
        var hr = Math.floor(total / 3600);
        var min = Math.floor((total / 60) - (hr * 60));
        var sec = total - ((hr * 3600) + (min * 60));

        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (hr < 10) {
            hr = "0" + hr;
        }

        hour.value = hr;
        minute.value = min;
        second.value = sec;



    }
    else {
        disp.innerText = "Over";
    }
}
start.addEventListener('click', () => {

    disp.innerText = "Started";
    clearInterval(interval);
    interval = setInterval(Timer, 1000);


})


reset.addEventListener('click', () => {

    disp.innerText = "Timer"
    clearInterval(interval);
    hour.value = "0" + 0;
    minute.value = "0" + 0;
    second.value = "0" + 0;

})