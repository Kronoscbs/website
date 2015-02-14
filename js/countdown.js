function CountDownTimer(dt, id) {
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'Started!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + 'days ';
        document.getElementById(id).innerHTML += hours + 'hrs ';
        document.getElementById(id).innerHTML += minutes + 'mins ';
        document.getElementById(id).innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
}

CountDownTimer('02/26/2015 10:1 AM', 'countdown');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animateAllBlocks() {
    var myElements = document.querySelectorAll(".blocks");
    console.log(myElements);
    var randomnumber = getRandomInt(0, 7);
    console.log(randomnumber);
    myElements[randomnumber].className += " classthatisbright";
    setTimeout(function () {
        myElements[randomnumber].className = myElements[randomnumber].className.replace(/(?:^|\s)classthatisbright(?!\S)/g, '')
    }, 1200);
    setTimeout(animateAllBlocks, 2700);
}