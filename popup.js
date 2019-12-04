const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

document.addEventListener('DOMContentLoaded', function() {
  var startTimerButton = document.getElementById('startTimer');
  var endTimerButton = document.getElementById('endTimer');

  // start timer button
  startTimerButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
        alert("start");
    });
  }, false);

  // end timer button
  endTimerButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
        alert("end");
    });
  }, false);
}, false);

let countDown = new Date('Sep 30, 2020 00:00:00').getTime(),  // set this
    x = setInterval(function() {
      let now = new Date().getTime(),
          distance = countDown - now;
      // document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}
    }, second)
