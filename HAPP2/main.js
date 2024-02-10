var i = 0;
var txt1 =
  "Dear .....!  <<              The day we met you for the first time is still fresh in our memories. That day changed our life because you walked into our life, and everything turned so beautiful. Since then, We have become a happy group surrounded by positivity, devotion and love that you have showered on us. We wish that you always stay close to us and keep making us feel lucky every day";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function redirect() {
	window.location.href = '../BOX3/nik.html';
}
