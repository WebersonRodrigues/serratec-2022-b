
let temporizador = document.getElementById("temporizador");

let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro;

function iniciar(){

    // Aqui eu inicio o cronometro para rodar a cada 1 segundo
    cronometro = setInterval(() => {
        _timer();
    }, 1000);
}

function pausar(){
    //  Aqui eu estou parando o cronometro.
    clearInterval(cronometro);
}

function zerar(){
    pausar();
    horas = 0;
    minutos = 0;
    segundos = 0;
    _atualizarTempoNaTela();
}

// O underline indica que a função é privada, não deve ser usada fora desse arquivo js.
// Mas não impede de ser utilizada, semelhante a placa de proibido fumar rsrsrs
function _timer(){

    segundos++;

    if(segundos == 60){
        minutos++;
        segundos = 0;
    }
    
    if(minutos == 60){
        horas++;
        minutos = 0;
    }

    if(horas == 24){
        horas = 0;
    }

    _atualizarTempoNaTela();
}

function _atualizarTempoNaTela(){
    // 00:00:01

    // Se a condição for verdade, executa o que estiver depois do ?, se não executa o que estiver depois dos :.
    let ss = (segundos < 10) ? "0" + segundos : segundos;
    let mm = (minutos < 10) ? "0" + minutos : minutos;
    let hh = (horas < 10) ? "0" + horas : horas;

    // Aqui estou fazendo uma interpolação de string utilizando crases.
    temporizador.textContent = `${hh}:${mm}:${ss}`; 
}
