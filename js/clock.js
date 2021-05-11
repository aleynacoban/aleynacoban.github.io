getName();
showTime();

function getName() {
   document.getElementById("myName").innerText = prompt("Adınız nedir?");
}
function showTime() {
  var date   = new Date();
  var hour   = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var day    = date.getDay();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
   
  var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  var time = hour + ":" + minute + ":" + second + " " + days[day];

  document.getElementById("myClock").innerHTML=time;
  setTimeout(showTime, 1000);

}
