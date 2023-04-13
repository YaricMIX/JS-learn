const countdownDate = new Date("January 1, 2024 00:00:00").getTime();

const countdownInterval = setInterval(() => {
const now = new Date().getTime();
const distance = countdownDate - now;

const hours = Math.floor(distance / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

const countdownElement = document.getElementById("countdown");
countdownElement.innerHTML = `Залишилось ${hours} годин ${minutes} хвилин ${seconds} секунд до Нового Року`;

if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Новий Рік настав!";
	}
}, 1000);
