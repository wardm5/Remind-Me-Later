var hours;
var minutes;
var seconds;
var endtime;
var timer;

function start() {
    debugger;
    console.log("testing1");
    myClock();
    clearInterval(timer);
    myTimer = 0;
    myTimer = setInterval(myClock, 1000);
}

// function pause() {
//
// }

function myClock() {
  var t = getTimeRemaining();
  hours = t.hours;
  minutes = t.minutes;
  seconds = t.seconds;
  console.log(hours + "   " + minutes + "   " + seconds);
  if (t.total <= 0) {
    PopupCenter('reminder.html', 'mywin', 315, 250);
    clearInterval(myTimer);
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

function PopupCenter(pageURL, title,w,h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  return targetWin;
}
