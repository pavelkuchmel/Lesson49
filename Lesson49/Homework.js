let currDate = new Date();
let nextYear = new Date("0/0/0");
nextYear.setFullYear(currDate.getFullYear() + 1);
let days = Math.floor((nextYear - currDate) / 1000 / 86400);
let hours = Math.floor(((nextYear - currDate) / 1000 % 86400) / 3600);
let minutes = Math.floor(((nextYear - currDate) / 1000 % 3600) / 60);
let seconds = Math.floor((nextYear - currDate) / 1000 % 60);
document.write('<div class="div1"> <div> <p class="days"> ' + days + ' </p> <p>Days</p> </div> <div> <p class="hours"> ' + hours + ' </p> <p>Hours</p> </div> <div> <p class="minutes"> ' + minutes + ' </p> <p>Minutes</p> </div> <div> <p class="seconds"> ' + seconds + ' </p> <p>Seconds</p> </div> </div>');
document.write('<p> </p>');
document.write('<table>' + '' +
    '<tr class="tr1"><td>' + days + '</td><td>' + hours + '</td><td>' + minutes + '</td><td>' + seconds + '</td></tr>' +
    '<tr class="tr2"><td>Days</td><td>Hours</td><td>Minutes</td><td>Seconds</td></tr>'+
    '</table>')
