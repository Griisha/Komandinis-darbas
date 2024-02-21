const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const eurovisionTime = new Date('May 7 2024 22:00:00');
function countDown(){
    const currentTime = new Date();
    const difference = eurovisionTime - currentTime;
    const d = Math.floor(difference / 1000 / 60 / 60 / 24);
    const h = Math.floor(difference / 1000 / 60 / 60) % 24;
    const m = Math.floor(difference / 1000 / 60) % 60;
    const s = Math.floor(difference / 1000) % 60;
    days.textContent = d;
    h < 10 ? hours.textContent = '0' + h : hours.textContent = h;
    m < 10 ? minutes.textContent = '0' + m : minutes.textContent = m;
    s < 10 ? seconds.textContent = '0' + s : seconds.textContent = s;
}
setInterval(countDown, 1000);


