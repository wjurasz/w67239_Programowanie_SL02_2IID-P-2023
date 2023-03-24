function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stornie!";
    }

for (var i=0; i <=100; i++) {
if ( i % 2 ==0) {
    console.log(i)
}
}


function printAlert(){
    alert("Alert")
}


function getvariables() {
liczba1 = prompt('podaj pierwsza liczbe: ')
liczba2 = prompt('podaj druga liczbe: ')
window.alert(+liczba2 + +liczba1)
}

function timer(){
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

hours = (hours < 10 ? '0': " ") + hours;
minutes = (minutes < 10 ? '0': " ") + minutes;
seconds = (seconds < 10 ? '0': " ") + seconds;
document.getElementById("clock").innerHTML = hours + ":" + minutes + ":"+ seconds;
}
setInterval(timer,1000);




// function rolex(){
//     var today = Date();
//     window.alert(today)
// setInterval(rolex,1000)
// }