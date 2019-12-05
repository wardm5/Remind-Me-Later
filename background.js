var cow = "mooh";
// function initializeClock2(id, endtime) {
//   var clock = document.getElementById(id);
//   // var daysSpan = clock.querySelector('.days');
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');
//   var t = getTimeRemaining(endtime);
//   hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//   minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//   secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//   console.log("testing 1 , 2 , 3");
// }
setInterval(function() {
    alert("Hello");
    // window.open('popup.html','mywin','width=300,height=250');
    PopupCenter('popup.html', 'mywin', 315, 250);
}, 150000000);

function PopupCenter(pageURL, title,w,h) {
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  return targetWin;
}
