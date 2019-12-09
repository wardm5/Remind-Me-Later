var hours = 0;
var minutes = 0;
var seconds = 0;
var timer;
var created = false;
var repeat = false;
var paused = false;

var setHours;
var setMinutes;
var seconds;

function start() {
    myClock();
    clearInterval(timer);
    timer = 0;
    timer = setInterval(myClock, 1000);
    created = true;
}

function pause() {
  paused = true;
}

function myClock() {
  if (!paused) {
      if (hours <= 0 && minutes <= 0 && seconds <= -1 && created) {
        PopupCenter('reminder.html', 'mywin', 315, 250);
        clearInterval(timer);
      } else {
          chrome.runtime.sendMessage({
              msg: "updateTime",
              data: {
                  hours: hours,
                  minutes: minutes,
                  seconds: seconds
              }
          });
      }
      if (minutes <= 0 && hours >= 1 && seconds <= 0) {
          minutes = 60;
          hours--;
      }
      if (seconds <= 0 && minutes >= 1) {
          seconds = 60;
          minutes--;
      }
      seconds--;
  }
}

function PopupCenter(pageURL, title,w,h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  return targetWin;
}
