const MAX_LENGTH = 12; // Define o limite máximo de caracteres

var res = document.querySelector('div#res')
var cnt = document.querySelector('div#conta')

function operador(op) {
    let ultimoChar = cnt.innerHTML.slice(-1); // Pega o último caractere

    // Impede que dois operadores sejam digitados seguidos
    if ("+-*/%".includes(ultimoChar)) {
        return;
    }

    if (op === "%") {
        var conteudo = cnt.innerHTML;

        // Pega o último número digitado
        var numeros = conteudo.match(/\d+(\.\d+)?$/);

        if (numeros) {
            var num = Number(numeros[0]);
            var result = num / 100;

            // Substitui o número original pela sua versão em porcentagem
            cnt.innerHTML = conteudo.replace(numeros[0], result);
        }
    } else {
        cnt.innerHTML += op;
    }
}

function numero(num) {
    if (cnt.innerHTML.length >= MAX_LENGTH) return; // Impede de ultrapassar o limite

    if (cnt.innerHTML === "0") {
        cnt.innerHTML = ""; // Remove o zero inicial ao começar a digitar
    }
    cnt.innerHTML += num;
}

function calcular() {
    try {
        res.innerHTML = eval(cnt.innerHTML); // Calcula a expressão inteira
    } catch {
        res.innerHTML = "Erro"; // Se houver erro, exibe "Erro"
    }
}

function limpar() {
    cnt.innerHTML = '0'
    res.innerHTML = ' '
}

function apagar() {
    cnt.innerHTML = cnt.innerHTML.slice(0, -1); // Remove o último caractere
    
    // Se apagar tudo, volta para "0"
    if (cnt.innerHTML === "") {
        cnt.innerHTML = "0"; 
        res.innerHTML = ' '
    }
}