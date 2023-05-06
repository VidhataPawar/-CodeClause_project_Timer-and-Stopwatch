
var ifStop = true;

var hour = 0;
var minute = 0;
var second = 0;
var laps = null;
var lapNow = null;

function start() {

    if (ifStop == true) {
        ifStop = false;
        count();

    }
}

function count() {

    if (ifStop == false) {
        second = parseInt(second);
        minute = parseInt(minute);
        hour = parseInt(hour);

        second++;


        if (second == 60) {
            second = 0;
            minute++;
        }

        if (minute == 60) {
            minute = 0;
            hour++;
        }


        if (second < 10) {
            second = "0" + second;
        }

        if (minute < 10) {
            minute = "0" + minute;
        }

        if (hour < 10) {
            hour = "0" + hour;
        }

        gettimer();
       
        setTimeout("count()", 1000);


    }

}

function gettimer() {
    stopwatch.innerHTML = hour + " : " + minute + " : " + second;

}

function stop() {
    ifStop = true;
}

function reset() {
    ifStop == true;
    second = 0;
    minute = 0;
    hour = 0;

    stopwatch.innerHTML = "00 : 00 : 00";
    clearInterval(laps);

}

function lap() {

    if (ifStop == false || ifStop == true) {
        console.log("Lap")

        lapNow = `<div class="lap">${hour} : ${minute} : ${second} </div>`;
        lapRecord.innerHTML += lapNow;
    }



}
