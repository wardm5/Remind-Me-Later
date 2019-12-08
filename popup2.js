var inputHours = 0;
var inputMinutes = 0;
var inputSeconds = 15;

document.addEventListener('DOMContentLoaded', function() {
  var startTimerButton = document.getElementById('startTimer');
  var pauseTimerButton = document.getElementById('pauseTimer');
  var resumeTimerButton = document.getElementById('resumeTimer');
  // start timer button
  startTimerButton.addEventListener('click', function() {
    end = new Date(Date.parse(new Date()) + + (inputHours * 60 * 60 * 1000) + (inputMinutes * 60 * 1000) + (inputSeconds * 1000));
    chrome.runtime.getBackgroundPage(function (backgroundPage) {
        backgroundPage.endTime = end;
        backgroundPage.start();
    });
  }, false);

  // end timer button
  pauseTimerButton.addEventListener('click', function() {

  }, false);
}, false);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "updateTime") {
            //  To do something
            
        }
    }
);
