// var deadline = new Date(Date.parse(new Date()) + 1 * 0 * 0 * 0 * 1000);
var deadline = new Date(Date.parse(new Date()) + 1 * 2 * 60 * 60 * 1000);
initializeClock2('clockdiv', deadline);
var storage = chrome.storage.local;

// var test = 'hello';
// chrome.storage.local.set({'key': test}, function() {
//   console.log('Value is set to ' + test);
// });
//
// chrome.storage.local.get(['key'], function(result) {
//   console.log('Value currently is ' + result.key);
// });

document.addEventListener('DOMContentLoaded', function() {
  var startTimerButton = document.getElementById('startTimer');
  var endTimerButton = document.getElementById('endTimer');

  // start timer button
  startTimerButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
        alert("start");
        initializeClock('clockdiv', deadline);
        var test = 'hello';
        chrome.storage.local.set({'key': test}, function() {
          console.log('Value is set to ' + test);
        });
    });
  }, false);

  // end timer button
  endTimerButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
        alert("end");
        chrome.storage.local.get(['key'], function(result) {
          console.log('Value currently is ' + result.key);
        });
    });
  }, false);
}, false);


function save() {
    storage.set({'deadline': deadline});
    // chrome.storage.local.set({'keywords': keywords});
}
function retrieve() {
    console.log(storage.get('deadline'));
}



//  https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  // var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    // 'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  // var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  function updateClock() {
    var t = getTimeRemaining(endtime);
    // daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function initializeClock2(id, endtime) {
  var clock = document.getElementById(id);
  // var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var t = getTimeRemaining(endtime);
  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

  // function updateClock() {
  //   var t = getTimeRemaining(endtime);
  //
  //   // daysSpan.innerHTML = t.days;
  //   hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  //   minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
  //   secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  //
  //   if (t.total <= 0) {
  //     clearInterval(timeinterval);
  //   }
  // }
  //
  // updateClock();
  // var timeinterval = setInterval(updateClock, 1000);
}
