// var hours;
// var minutes;
// var seconds;
// var endTime;
// var timer;
// var created = false;
// var paused;
//
// function start() {
//     if (created) {
//         timer = setTimeout(function() {
//             if (!paused) {
//                 PopupCenter('reminder.html', 'mywin', 315, 250);
//             }
//         }, ((hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds) * 1000));
//     }
// }
//
// function pause() {
//     clearTimeout(timer);
//     paused = true;
// }
//
// function resume() {
//     paused = false;
//     if (created) {
//         timer = setTimeout(function() {
//             if (!paused) {
//                 PopupCenter('reminder.html', 'mywin', 315, 250);
//             }
//         }, ((hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds) * 1000));
//     }
// }
//
// function PopupCenter(pageURL, title,w,h) {
//   var left = (screen.width/2)-(w/2);
//   var top = (screen.height/2)-(h/2);
//   var targetWin = window.open (pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
//   return targetWin;
// }
