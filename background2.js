var hours;
var minutes;
var seconds;
var endTime;
var timer;
var created = false;
var paused;

function start() {

}

function pause() {

}

chrome.runtime.sendMessage({
    msg: "updateTime",
    data: {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
});


function myClock() {
  var t = getTimeRemaining();
  hours = t.hours;
  minutes = t.minutes;
  seconds = t.seconds;
  if (t.total <= 0) {
    clearInterval(myTimer);
  }
}

function getTimeRemaining() {
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
