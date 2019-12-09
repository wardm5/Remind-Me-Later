var inputHours = 0;
var inputMinutes = 0;
var inputSeconds = 0;

var defaultHours = 0;
var defaultMinutes = 0;
var defaultSeconds = 15;

initializeClock();

function initializeClock() {

    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        if (backgroundPage.created) {
            inputHours = backgroundPage.hours;
            inputMinutes = backgroundPage.minutes;
            inputSeconds = backgroundPage.seconds;
        } else {
            inputHours = 0;
            inputMinutes = 1;
            inputSeconds = 15;
        }
    });
    var clock = document.getElementById('clockdiv');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    hoursSpan.innerHTML = ('0' + inputHours).slice(-2);
    minutesSpan.innerHTML = ('0' + inputMinutes).slice(-2);
    secondsSpan.innerHTML = ('0' + inputSeconds).slice(-2);
}

document.addEventListener('DOMContentLoaded', function() {
  var startTimerButton = document.getElementById('startTimer');
  var pauseTimerButton = document.getElementById('pauseTimer');
  // var resumeTimerButton = document.getElementById('resumeTimer');

  // start timer button
  startTimerButton.addEventListener('click', function() {
    end = new Date(Date.parse(new Date()) + (defaultHours * 60 * 60 * 1000) + (defaultMinutes * 60 * 1000) + (defaultSeconds * 1000));
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        backgroundPage.endtime = end;
        backgroundPage.repeat = true;
        // debugger;
        console.log("testing1");
        console.log(backgroundPage.start);
        backgroundPage.start();
        console.log("testing123");
    });
  }, false);

  // end timer button
  pauseTimerButton.addEventListener('click', function() {
    // do something
  }, false);
}, false);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "updateTime") {
            //  To do something
            var clock = document.getElementById('clockdiv');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');
            hoursSpan.innerHTML = ('0' + request.data.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + request.data.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + request.data.seconds).slice(-2);
        }
    }
);
