// Set the date we're counting down to
var countDownDate = new Date("August 01, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes, and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the days, hours, minutes, and seconds left
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

 