const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const showTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let minutes = addZero(time.getMinutes());
  let seconds = addZero(time.getSeconds());
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  if (hour >= 12) {
    hour -= 12;
    ampm = "P.M.";
  } else {
    ampm = "A.M.";
  }
  document.getElementById("hour").textContent = addZero(hour);
  document.getElementById("ampm").textContent = ampm;
};

const showDate = () => {
  let date = new Date();
  document.getElementById("day").textContent = days[date.getDay()];
  document.getElementById("month").textContent = months[date.getMonth()];
  document.getElementById("dayNumber").textContent = date.getDate();
  document.getElementById("year").textContent = date.getFullYear();
};

showTime();
showDate();
setInterval(showTime, 1000);

function addZero(zero) {
  if (zero.toString().length < 2) return "0".concat(zero);
  return zero;
}
