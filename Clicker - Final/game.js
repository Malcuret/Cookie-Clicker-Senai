const cookie = document.getElementById("cookie");
const cont = document.getElementById("cont");
const botaoAbrir = document.getElementById('abreLoja');
const botaoFechar = document.getElementById('fecharLoja');
const loja = document.getElementById('loja');
const iniciarBotao = document.getElementById("iniciar");
const tempo = document.getElementById("timer");

let contador = 0;
let timer = 60;  
let podeClicar = false;
let intervalo;

var recorde1 = Number(localStorage.getItem("recorde1"));
if (!recorde1) recorde1 = 0;
var nome1 = localStorage.getItem("nome1");
if (!nome1) nome1 = "Vazio";

var recorde2 = Number(localStorage.getItem("recorde2"));
if (!recorde2) recorde2 = 0;
var nome2 = localStorage.getItem("nome2");
if (!nome2) nome2 = "Vazio";

var recorde3 = Number(localStorage.getItem("recorde3"));
if (!recorde3) recorde3 = 0;
var nome3 = localStorage.getItem("nome3");
if (!nome3) nome3 = "Vazio";

document.getElementById("primeiro").innerText = "1º - " + nome1 + ": " + recorde1 + " pontos";
document.getElementById("segundo").innerText = "2º - " + nome2 + ": " + recorde2 + " pontos";
document.getElementById("terceiro").innerText = "3º - " + nome3 + ": " + recorde3 + " pontos";

iniciarBotao.addEventListener('click', function () {
    contador = 0;
    timer = 60;
    cont.innerText = contador;
    tempo.innerText = timer;
    podeClicar = true;
    iniciarBotao.style.display = "none";


    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(function () {
        if (timer > 0) {
            timer--;
            tempo.innerText = timer;
        }
        else {
            clearInterval(intervalo);
            podeClicar = false;
            alert("Fim de Jogo. Sua pontuação foi de " + contador + " clicks");
            atualizarRanking();
            iniciarBotao.style.display = "block";
        }
    }, 1000);
});

cookie.addEventListener('click', function () {
    if (podeClicar) {
        contador++;
        cont.innerText = contador;
    }
});

function pedirNome() {
    var nome = prompt("Parabéns! Você entrou no ranking! Digite suas iniciais:");
    if (nome == null || nome.trim() == "") {
        nome = "Anônimo";
    }
    return nome;
}
function atualizarRanking() {
    let entrouNoRanking = false;

    if (contador > recorde1) {
        recorde3 = recorde2;
        nome3 = nome2;

        recorde2 = recorde1;
        nome2 = nome1;

        recorde1 = contador;
        nome1 = pedirNome();
        entrouNoRanking = true;

    } else if (contador > recorde2) {
        recorde3 = recorde2;
        nome3 = nome2;

        recorde2 = contador;
        nome2 = pedirNome();
        entrouNoRanking = true;

    } else if (contador > recorde3) {
        recorde3 = contador;
        nome3 = pedirNome();
        entrouNoRanking = true;
    }

    if (entrouNoRanking) {
        document.getElementById("primeiro").innerText = "1º - " + nome1 + ": " + recorde1 + " pontos";
        document.getElementById("segundo").innerText = "2º - " + nome2 + ": " + recorde2 + " pontos";
        document.getElementById("terceiro").innerText = "3º - " + nome3 + ": " + recorde3 + " pontos";

        localStorage.setItem("recorde1", recorde1);
        localStorage.setItem("nome1", nome1);
        localStorage.setItem("recorde2", recorde2);
        localStorage.setItem("nome2", nome2);
        localStorage.setItem("recorde3", recorde3);
        localStorage.setItem("nome3", nome3);
    }
}

botaoAbrir.addEventListener('click', function () {
    loja.classList.add('aberta');
});

botaoFechar.addEventListener('click', function () {
    loja.classList.remove('aberta');
});

tempo.innerText = timer;

window.addEventListener('DOMContentLoaded', function () {
    const img = document.getElementById('cookie');
    const savedSkin = localStorage.getItem('selectedSkin');
    if (savedSkin) {
        img.src = savedSkin;
    }
});
