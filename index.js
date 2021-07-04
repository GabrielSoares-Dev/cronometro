"use strict"


var hora = 0;
var minuto = 0;
var segundo = 0;
var temp = 1000;
var cronometro;
function start() {
    cronometro = setInterval(() =>{timer();}, temp)
}
function pausar() {
    clearInterval(cronometro);
}

function reset() {
    hora = 0;
    minuto = 0;
    segundo = 0;
    document.getElementById('contador').innerHTML = "00:00:00";

}

function timer() {
    segundo++;
    if(segundo == 60){
        segundo =0;
        minuto++;

        if(minuto == 60){
            minuto = 0;
            hora++;
        }
    }
    var formato = (hora <10 ? "0" +hora : hora) + ':'+ (minuto <10 ? "0"+minuto :minuto) + ":"+(segundo<10 ? '0' +segundo :segundo)
    document.getElementById('contador').innerHTML = formato;
}