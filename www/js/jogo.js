window.onload = function() {
    document.addEventListener('deviceready', inicio, false);
}

var container = document.getElementById('container');
var container_2 = document.getElementById('container_2');

function inicio() {

    container.style.display = 'none';
    var botao = document.getElementById('botao');
    var botao_2 = document.getElementById('botao_2');

    botao.addEventListener('click', apertou);
    botao_2.addEventListener('click', apertou_2);
}


var aux = 0;
var aux_2 = 0;
var numeroCerto = 5;

function apertou_2(){

    var campoNumero = document.getElementById('numero_2');
    var campoBotao = document.getElementById('botao_2');
    var container = document.getElementById('container');

    
    numeroCerto = campoNumero.value;
    container.style.display = 'block';
    container_2.style.display = 'none';
    

}

function apertou() {


    var campoSaida = document.getElementById('saida');

    var campoNumero = document.getElementById('numero');
    var campoNumero_2 = document.getElementById('numero_2');
    var campoBotao = document.getElementById('botao');


    var digitado = campoNumero.value;

    // campoSaida.innerHTML = {numeroCerto}

    // if (digitado != numeroCerto)
    // {
    //     campoSaida.innerHTML = "{dsd}"
    // }

    if (aux == 4)
    {
        campoSaida.innerHTML = 'Digite um número até 10:';
        campoNumero.value = '';
        campoNumero_2.value = '';
        container.style.display = 'none';
        container_2.style.display = 'block';
        aux = 0;

    }

    if(digitado == numeroCerto) {
        campoSaida.innerHTML = 'Acertou!';
        aux = 1;
    } else {
        if(digitado > numeroCerto) {
            campoSaida.innerHTML = 'Digite um número menor!';
            campoBotao.value = 'Verificar';

        } else {
            campoSaida.innerHTML = 'Digite um número maior!';
            campoBotao.value = 'Verificar';
        }
    }



    if (aux == 1)
    {
        campoBotao.value = 'JOGAR NOVAMENTE !!';
        aux= 4;
    }



    
}