//declarando as constantes que iremos usar no código
const campo1 = document.querySelector("#nota1");
const campo2 = document.querySelector("#nota2");
const campo3 = document.querySelector("#nota3");
const retornoFuncao = document.querySelector("#retorno_funcao");
const resultadoMedia = document.querySelector("#resultado_media");
const situacaoAluno = document.querySelector("#situacao_aluno");

//verificar cada um dos campos, para ver se eles não estão sem nada, antes de fazer o cálculo
function calcularMedia() {
    if (campo1.value == '') {
        //SE O VALUE DO CAMPO1 FOR STRING VAZIA ("")
        retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 1, por isso não foi possível fazer a conta!";
        campo1.focus();
    } else {
        //SE O VALUE DO CAMPO1 TIVER ALGUMA COISA
        if (campo2.value == '') {
            //SE O VALUE DO CAMPO2 FOR STRING VAZIA ("")
            retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 2, por isso não foi possível fazer a conta!";
            campo2.focus();
        } else {
            //SE O VALUE DO CAMPO2 TIVER ALGUMA COISA
            if (campo3.value == '') {
                //SE O VALUE DO CAMPO3 FOR STRING VAZIA ("")
                retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 3, por isso não foi possível fazer a conta!";
                campo3.focus();
            } else {
                //SE TODOS OS INPUTS ESTIVEREM PREENCHIDOS
                retornoFuncao.innerHTML = "";

                let valor1 = Number(campo1.value);
                let valor2 = Number(campo2.value);
                let valor3 = Number(campo3.value);

                let media = (valor1 + valor2 + valor3) / 3;

                resultadoMedia.innerHTML = `O resultado da média da notas é de ${media.toFixed(2)}`;

                classificarAluno(media);
            }
        }
    }
}

function classificarAluno(notaMedia) {
    // se a nota for maior ou igual a 6 = aprovado
    // se for entre 6 e 3 ele ta em rec
    // menor igual a 3 ta reprovado
    if (notaMedia >= 6){
        situacaoAluno.innerHTML = "O aluno foi aprovado!";
    }
    else if (notaMedia < 6 && notaMedia > 3) {
        situacaoAluno.innerHTML = "O aluno está de recuperação";
    }
    else {
        situacaoAluno.innerHTML = "O aluno foi reprovado";
    }

}

//para começar o primeiro pensamento que devemos ter sempre é:
//  o que vamos fazer? onde queremos chegar? qual o resultado final?

//o segundo pensamento é:
//  como eu chego no meu resultado? através do que?
//  (pensar nas ferramentas que conhece para alcançar o resultado final)