// Declarar constantes que iremos utilizar no código
const entrada1 = document.querySelector("#nota1");
const entrada2 = document.querySelector("#nota2");
const entrada3 = document.querySelector("#nota3");
const retornoFuncao = document.querySelector("#retorno_funcao");
const resultadoMedia = document.querySelector("#resultado_media");
const situacaoAluno = document.querySelector("#situacao_aluno");

// Criar a nossa função, verificar cada um dos inputs, para ver se eles possuem números, antes de fazer o cálculo da média
function calcularMedia() {
    if (entrada1.value == "") {
        // SE o valor de entrada1 é vazio, entra aqui na condição
        retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 1, por isso não foi possível fazer a conta!";
        entrada1.focus();
    } else {
        // O valor de entrada1 não é vazio, tem algum número dentro dele
        if (entrada2.value == ""){
            // SE o valor de entrada2 é vazio, entra aqui na condição
            retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 2, por isso não foi possível fazer a conta!";
            entrada2.focus();
        } else {
            // O valor de entrada2 não é vazio, tem algum número dentro dele
            if (entrada3.value == ""){
                // SE o valor de entrada3 é vazio, entra nessa condição
                retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 3, por isso não foi possível fazer a conta!";
                entrada3.focus();
            } else {
                // O valor de entrada 3 não é vazio, tem algum número dentro dele
                // e portanto todos os inputs estão preenchidos.

                retornoFuncao.innerHTML = "";

                // Pegando os valores dos inputs, transformando eles em número e guardando eles em variáveis
                let valor1 = Number(entrada1.value);
                let valor2 = Number(entrada2.value);
                let valor3 = Number(entrada3.value);

                let mediaNotas = (valor1 + valor2 + valor3) / 3;

                resultadoMedia.innerHTML = `O resultado da média das notas é ${mediaNotas.toFixed(2)}`;

                classificarAluno(mediaNotas);
            }
        }
    }
}

function classificarAluno(media) {
    // SE a media é maior ou igual a 6 o aluno é aprovado
    // SE a media entre 6 e 3 o aluno ta de recuperacao
    // SE a media não for nenhuma das anteriores (então menor do que 3), o aluno ta reprovado

    if (media >= 6){
        situacaoAluno.innerHTML = "O aluno foi aprovado";
    }
    else if (media < 6 && media >= 3) {
        situacaoAluno.innerHTML = "O aluno está de recuperação";
    }
    else {
        situacaoAluno.innerHTML = "O aluno foi reprovado";
    }
}

// 1° Passo - deve ser pensar no resultado
//    deve pensar o que queremos fazer? o que vamos fazer?
//    qual o resultado final que queremos alcançar?

// 2° Passo - pensar como chegar no resultado
//    com o conhecimento adquirido, como podemos chegar no resultado?
//    quais ferramentas posso usar? o que preciso usar?