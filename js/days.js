let fecha = new Date("11/30/2024");
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#days");
let parrafoHoras = document.querySelector("#hours");
let parrafoMinutos = document.querySelector("#minutes");
let parrafoSegundos = document.querySelector("#seconds");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras");

spanFecha.innerText = fecha.toLocaleDateString();

setInterval(() => {
  
                  let hoy = new Date().getTime();

                  let distancia = msFecha - hoy;

                  let msPorDia = 1000 * 60 * 60 * 24;
                  let msPorHora = 1000 * 60 * 60;
                  let msPorMinuto = 1000 * 60;
                  let msPorSegundo = 1000;
  
                  let days = Math.floor(distancia / msPorDia);
                  let hours = Math.floor((distancia % msPorDia) / msPorHora);
                  let minutes = Math.floor((distancia % msPorHora) / msPorMinuto);
                  let seconds = Math.floor((distancia % msPorMinuto) / msPorSegundo;


                  parrafoDias.innerText = days;
                  parrafoHoras.innerText = hours < 10 ? "0" + hours : hours;
                  parrafoMinutos.innerText = minutes < 10 ? "0" + minutes : minutes;
                  parrafoSegundos.innerText = seconds < 10 ? "0" + seconds : seconds;


                  if (distancia < 0) {
                      clearInterval(intervalo);
                      cuentaAtras.innerHTML = "<p> Promoción Finalizada!!!</p>
                  }
  
}, 1000)
