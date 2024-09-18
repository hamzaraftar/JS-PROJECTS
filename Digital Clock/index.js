const houre = document.getElementById("hours");
const mintus = document.getElementById("mintues");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = "AM ";
  if (h > 12) {
    h = h - 12;
    am = "PM";
  }

  houre.innerText = h;
  mintus.innerText = m;
  second.innerText = s;
  ampm.innerText = am;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
