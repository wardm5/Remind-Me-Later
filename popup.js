console.log("created popup");
var zero = new Date(Date.parse(new Date()) + 1 * 0 * 0 * 0 * 1000);
var end = new Date(Date.parse(new Date()) + 1 * 2 * 60 * 60 * 1000);

var storage = chrome.storage.local;
var storedJSONDate;
var testdate;
var myTimer;

var hours = 2;
var minutes = 60;
var seconds = 60;


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
  // seconds = secondsSpan;
  // minutes = minutesSpan;
  // hours = hoursSpan;
  if (t.total <= 0) {
    clearInterval(myTimer);
  }
}

function initializeClock() {
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        // do something
    });
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
    // pauseTimer
  var startTimerButton = document.getElementById('startTimer');
  var pauseTimerButton = document.getElementById('pauseTimer');
  var resumeTimerButton = document.getElementById('resumeTimer');
  // start timer button
  startTimerButton.addEventListener('click', function() {
    end = new Date(Date.parse(new Date()) + 1 * 2 * 60 * 60 * 1000);
    myClock();
    var clock = document.getElementById('clockdiv');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    // seconds = secondsSpan;
    // minutes = minutesSpan;
    // hours = hoursSpan;
    myTimer = setInterval(myClock, 1000);

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
  }, false);

  // end timer button
  pauseTimerButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
        // alert("end");
        chrome.storage.sync.get(['misha'], function(result) {
            // storedJSONDate = result['misha'];
            // testdate = new Date(storedJSONDate);
            // console.log(testdate);
        });
        clearInterval(myTimer);
    });
  }, false);
  resumeTimerButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
        chrome.storage.sync.get(['misha'], function(result) {
        });
        myClock();
        myTimer = setInterval(myClock, 1000);
    });
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
    // 'days': days,
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
