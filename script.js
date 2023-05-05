const circle = document.querySelector('.circle');
const text = document.querySelector('.text');

let i = 0;
const percentage = [0, 10, 25, 40, 65, 75, 80, 90, 100];
const circumference = circle.getTotalLength();

const interval = setInterval(() => {
    circle.style.strokeDashoffset = circumference - (percentage[i] / 100) * circumference;
    text.innerHTML = percentage[i] + "%";
    i++;
    if (i == percentage.length) {
        clearInterval(interval);
        text.innerHTML = "OK :)";
    }
}, 1000);




