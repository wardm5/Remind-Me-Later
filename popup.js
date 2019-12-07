console.log("created popup");
var end;

var storage = chrome.storage.local;
var storedJSONDate;

var myTimer;
var check = false;

var inputHours = 0;
var inputMinutes = 0;
var inputSeconds = 15;

var resumeHours;
var resumeMinutes;
var resumeSeconds;

initializeClock();

function myClock() {
  var clock = document.getElementById('clockdiv');
  var t = getTimeRemaining(end);
  var clock = document.getElementById('clockdiv');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  chrome.runtime.getBackgroundPage(function (backgroundPage) {
      backgroundPage.created = true;
      backgroundPage.hours = t.hours;
      backgroundPage.minutes = t.minutes;
      backgroundPage.seconds = t.seconds;
      backgroundPage.start();
  });
  if (t.total <= 0) {
    clearInterval(myTimer);
  }
}

function initializeClock() {
    var clock = document.getElementById('clockdiv');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    hoursSpan.innerHTML = ('0' + 0).slice(-2);
    minutesSpan.innerHTML = ('0' + 0).slice(-2);
    secondsSpan.innerHTML = ('0' + 0).slice(-2);
}

// start and end button listen
document.addEventListener('DOMContentLoaded', function() {
  var startTimerButton = document.getElementById('startTimer');
  var pauseTimerButton = document.getElementById('pauseTimer');
  var resumeTimerButton = document.getElementById('resumeTimer');
  // start timer button
  startTimerButton.addEventListener('click', function() {
    end = new Date(Date.parse(new Date()) + + (inputHours * 60 * 60 * 1000) + (inputMinutes * 60 * 1000) + (inputSeconds * 1000));
    myClock();
    clearInterval(myTimer);
    myTimer = 0;
    myTimer = setInterval(myClock, 1000);
    check = false;
  }, false);

  // end timer button
  pauseTimerButton.addEventListener('click', function() {
    check = true;
    var t = getTimeRemaining(end);
    resumeSeconds = (t.seconds);
    resumeMinutes = t.minutes;
    resumeHours = (t.hours);
    console.log(resumeHours+ "     " + resumeMinutes + "    " + resumeSeconds);
    clearInterval(myTimer);
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        backgroundPage.hours = t.hours;
        backgroundPage.minutes = t.minutes;
        backgroundPage.seconds = t.seconds;
        backgroundPage.pause();
    });
  }, false);


  resumeTimerButton.addEventListener('click', function() {
    if (check) {
        console.log(resumeHours+ "     " + resumeMinutes + "    " + resumeSeconds);
        end = new Date(Date.parse(new Date()) + (resumeSeconds  * 1000) + (resumeMinutes * 60 * 1000) + (resumeHours * 60 * 60 * 1000));
        myClock();
        myTimer = setInterval(myClock, 1000);
        check = false;
        chrome.runtime.getBackgroundPage(function (backgroundPage) {
            backgroundPage.hours = resumeHours;
            backgroundPage.minutes = resumeMinutes;
            backgroundPage.seconds = resumeSeconds;
            backgroundPage.resume();
        });
    }
  }, false);
}, false);

//  https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// function initializeClock(id, endtime) {
//   zero = new Date(Date.parse(new Date()) + 1 * 0 * 0 * 0 * 1000);
//   initializeToZero(id, zero);
//   var clock = document.getElementById(id);
//   // var daysSpan = clock.querySelector('.days');
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');
//   function updateClock() {
//     var t = getTimeRemaining(endtime);
//     // daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }
//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

// function initializeToZero(id, endtime) {
//   // var timeinterval = setInterval(0, 1000);
//   // clearInterval(setInterval(endtime, 1000));
//   var clock = document.getElementById(id);
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');
//   var t = getTimeRemaining(endtime);
//   hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//   minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//   secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
// }


// if (!backgroundPage.created) {
//     backgroundPage.startTime = deadline.toJSON();
//     testdate = new Date(backgroundPage.startTime)
//     console.log(testdate); // Displays "mooh".
//     backgroundPage.created = true;
//     initializeToZero('clockdiv', zero);  // sets timer to 0
// } else {
//     zero = new Date(Date.parse(new Date()) + 1 * 0 * 0 * 0 * 1000);
//     chrome.storage.sync.get(['misha'], function(result) {
//         storedJSONDate = result['misha'];
//         testdate = new Date(storedJSONDate);
//         console.log(testdate);
//     });
//     initializeToZero('clockdiv', testdate);
//     initializeClock('clockdiv', testdate);
// }
// initializeToZero('clockdiv', zero);  // sets timer to 0


// var tempdeadline = new Date(Date.parse(new Date()) + 1 * 1 * 1 * 10 * 1000);
// initializeClock('clockdiv', tempdeadline);
// chrome.tabs.getSelected(null, function(tab) {
    // alert("start");
    // deadline = new Date(Date.parse(new Date()) + 1 * 2 * 60 * 60 * 1000);
    // initializeClock('clockdiv', deadline);

    // var curr = deadline.toJSON();
    // chrome.storage.sync.set({'misha': curr}, function() {
    //   // debugger;
    //   chrome.runtime.getBackgroundPage(function (backgroundPage) {
    //       backgroundPage.endTime = deadline.toJSON();
    //   });
    //   console.log('Value is set to ' + curr);
    // });
// });
