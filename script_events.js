//function togglePopup(idname)
//{
  //  document.getElementById(idname).classList.toggle("active");
//}

// Set the date we're counting down to
var countDownDate = new Date("May 29, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days <  10)
  {
    var strDays = "0" + days;
  }
  else
  {
    strDays = days;
  }
  if (hours < 10)
  {
    var strHours = "0" + hours;
  }
  else
  {
    strHours = hours;
  }
  if (minutes < 10)
  {
    var strMinutes = "0" + minutes;
  }
  else
  {
    strMinutes = minutes;
  }
  if (seconds < 10)
  {
    var strSeconds = "0" + seconds;
  }
  else 
  {
    strSeconds = seconds;
  }

  // Display the result in the element with id="demo"
  document.getElementById("launch").innerHTML = strDays + " : " + strHours + " : "
  + strMinutes + " : " + strSeconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("launch").innerHTML = "EXPIRED";
  }
}, 1000);
