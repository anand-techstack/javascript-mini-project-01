const days1 = document.querySelector("#days");
const hours1 = document.querySelector("#hours");
const minutes1 = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
function newyear() {
  const currentyear = new Date().getFullYear();
  const newyear = new Date(`January 1 ${currentyear + 1} 00:00:00`);
  const currentdate = new Date();
  const diff = newyear - new Date();
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  days1.innerHTML = d < 10 ? "0" + d : d;
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  hours1.innerHTML = h < 10 ? "0" + h : h;
  const m = Math.floor((diff / 1000 / 60) % 60);
  minutes1.innerHTML = m < 10 ? "0" + m : m;
  const s = Math.floor((diff / 1000) % 60);
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(newyear, 1000);
