// Assigning the values for three form elements
// Assigning function

function age() {
  var d1 = parseInt(document.getElementById("date").value);
  var m1 = parseInt(document.getElementById("month").value);
  var y1 = parseInt(document.getElementById("year").value);

  // getting current date from system
  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Making calculations

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  // Assigning user values

  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById("age").innerHTML =
    "Your Age is " + y + " Years " + m + " Months " + d + " Days";
}
