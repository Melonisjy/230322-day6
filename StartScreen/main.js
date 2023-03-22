function getTime() {
  const time = document.querySelector(".time");
  const newDate = new Date();

  // const hours = String(newDate.getHours()).padStart(2, "0");
  // const minutes = String(newDate.getMinutes()).padStart(2, "0");
  let hours = newDate.getHours();
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  const ampm = document.querySelector(".ampm");
  let what = "";
  if (hours > 12) {
    what = "PM";
  } else {
    what = "AM";
  }

  if (hours > 12) {
    hours -= 12;
  }
  // if (hours.toString().length === 1) {
  //   hours = "0" + hours;
  // }
  // if (minutes.toString().length === 1) {
  //   minutes = "0" + minutes;
  // }
  // if (seconds.toString().length === 1) {
  //   seconds = "0" + seconds;
  // }

  // time.innerText = hours + ":" + minutes + ":" + seconds;
  time.innerText = `${hours}:${minutes}:${seconds}`;
  ampm.innerText = `${what}`;
}

// setInterval(() => {
//   console.log(i + "setInterval");
// }, 1000); // 1000이 1초.

function getDate() {
  const date = document.querySelector(".date");
  const newDate = new Date();

  const years = newDate.getFullYear();
  const months = newDate.getMonth() + 1;
  const dates = newDate.getDate();

  date.innerText =
    `${years}` + "년 " + `${months}` + "월 " + `${dates}` + "일 ";
}

getTime();
getDate();

setInterval(getTime, 1000);
setInterval(getDate, 86400000);
