let currDate = new Date();
let nextYear = new Date("0/0/0");
nextYear.setFullYear(currDate.getFullYear() + 1);
let days = Math.floor((nextYear - currDate) / 1000 / 86400);
let hours = Math.floor(((nextYear - currDate) / 1000 % 86400) / 3600);
let minutes = Math.floor(((nextYear - currDate) / 1000 % 3600) / 60);
let seconds = Math.floor((nextYear - currDate) / 1000 % 60);
document.write('<p> <span class="days"> ' + days + ' </span> <span class="hours"> ' + hours + ' </span> <span class="minutes"> ' + minutes + ' </span> <span class="seconds"> ' + seconds + ' </span> </p>');
