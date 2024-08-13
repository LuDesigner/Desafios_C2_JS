// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'HORA DO DESAFIO';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag); 
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial () {
    exibirTextoNaTela('h1', 'Desafios Java Script');
    exibirTextoNaTela('p', 'Escolha uma das funções');
}

mensagemInicial();

function hello() {
    // alert('Olá mundo');
    exibirTextoNaTela('p', 'Olá mundo');
    console.log('Olá Mundo');
}

function nome(){
    let nome = prompt('Qual é o seu nome?');
    exibirTextoNaTela('p', `Seja bem vindo ${nome}`);
    // alert(`Seja bem vindo ${nome}`);
}

function verificarConsole() {
    exibirTextoNaTela('p', `O Console foi clicado`);
    console.log('O Console foi clicado');
}

function verificarAlert() {
    // alert('Eu amo JS');
    exibirTextoNaTela('p', `Eu amo JS`);
    console.log('O Alert foi clicado');
}

function verificarPrompt() {
    let name = prompt('Qual é o seu nome?');
    verificarPrompt = prompt('Me diga uma cidade do Brasil');
    exibirTextoNaTela('p', `Estive na cidade ${verificarPrompt} e lembrei de você ${name} <3`);
    // alert(`Estive em ${verificarPrompt} e lembrei de você ${name}`);
    console.log('O Prompt foi clicado');
}

function verificarDob() {
    let dob1 = parseInt(prompt('Me diga um número inteiro'));
    if(dob1 != Number){
        exibirTextoNaTela('p', `Preencha o campo com um número`);
    }else{
        let resultad = (dob1 * 2);
    exibirTextoNaTela('p', `O dobro do valor ${dob1} é de ${resultad}`);
    }
    // alert(`O dobro do valor ${dob1} é de ${resultad}`)
}

function verificarSoma() {
    let valor1 = parseInt(prompt('Me diga um número inteiro'));;
    let valor2 = parseInt(prompt('Me diga um número inteiro'));;

    let resultado = (valor1 + valor2);
    exibirTextoNaTela('p', `O resultado do valor ${valor1} somado pelo valor ${valor2} é igual a ${resultado}`);

    // alert(`O resultado do ${valor1} somado ao ${valor2} é ${resultado}`)
    // console.log('A soma foi clicada');
    // console.log(`A soma do valor ${valor1} + ${valor2} é de ${resultado}`)
}

function verificarDivi() {
    let valor3 = parseInt(prompt('Me diga um número inteiro'));
    let valor4 = parseInt(prompt('Me diga outro número'));
    let divi = (valor3 / valor4);
    exibirTextoNaTela('p', `O resultado do valor ${valor3} dividido por ${valor4} é igual a ${divi}`);
    // alert(`O resultado do ${valor3} por ${valor4} é igual a ${divi}`);
}

function verificarSub() {
    let valor7 = parseInt(prompt('Me diga um número inteiro'));
    let valor8 = parseInt(prompt('Me diga outro número'));
    let sub = (valor7 - valor8);
    exibirTextoNaTela('p', `O resultado do valor ${valor7} subitraido por ${valor8} é igual a ${sub}`);
    // alert(`O resultado do ${valor7} por ${valor8} é igual a ${sub}`);
}

function verificarMult() {
    let valor5 = parseInt(prompt('Me diga um número inteiro'));
    let valor6 = parseInt(prompt('Me diga outro número'));
    let mult = (valor5 * valor6);
    exibirTextoNaTela('p', `O resultado do valor ${valor5} multiplicado por ${valor6} é igual a ${mult}`);
    // alert(`O resultado do ${valor5} por ${valor6} é igual a ${mult}`);
}

function verificarMed() {
    let valor9 = parseInt(prompt('Me diga um número inteiro'));
    let valor10 = parseInt(prompt('Me diga outro número'));
    let valor11 = parseInt(prompt('Me diga outro número'));
    let med = ((valor9 + valor10 + valor11)/3);
    exibirTextoNaTela('p', `O resultado da média dos valores ${valor9}, ${valor10} e ${valor11} é igual a ${med}`);
    // alert(`O resultado da média dos valores ${valor9}, ${valor10} e ${valor11} é igual a ${med}`);
}

function verificarMaior() {
    let nub1 = parseInt(prompt('Me diga um número inteiro'));
    let nub2 = parseInt(prompt('Me diga outro número inteiro'));

    if (nub1 > nub2){
        exibirTextoNaTela('p', `O número ${nub1} e maior que ${nub2}`);
        // alert(`O número ${nub1} e maior que ${nub2}`);
    } else if (nub1 == nub2){
        exibirTextoNaTela('p', `O número ${nub1} e igual ao número ${nub2}`);
        // alert(`O número ${nub1} e igual ao número ${nub2}`);
    } else {
        exibirTextoNaTela('p', `O número ${nub1} e menor que ${nub2}`);
        // alert(`O número ${nub1} e menor que ${nub2}`);
    }
}

function verificarMenor() {
    let nub3 = parseInt(prompt('Me diga um número inteiro'));
    let nub4 = parseInt(prompt('Me diga outro número inteiro'));

    if (nub3 > nub4){
        exibirTextoNaTela('p', `O número ${nub3} e maior que ${nub4}`);
        // alert(`O número ${nub3} e maior que ${nub4}`);
    } else if (nub3 == nub4){
        exibirTextoNaTela('p', `O número ${nub3} e igual ao número ${nub4}`);
        // alert(`O número ${nub3} e igual ao número ${nub4}`);
    } else {
        exibirTextoNaTela('p', `O número ${nub3} e menor que ${nub4}`);
        // alert(`O número ${nub3} e menor que ${nub4}`);
    }
}

// resolver número quebrado
function imc(){
    let imc1 = parseInt(prompt('Qual a sua altura? (informe somente número)'));
    let imc2 = parseInt(prompt('Qual o seu peso? (informe somente número)'));
    let resultadoImc = (imc2 / (imc1 * 2));
    exibirTextoNaTela('p', `O seu IMC é de ${resultadoImc}`);
}

// resolver número quebrado
function dolar(){
    let dolar1 = prompt('Qual a valor em Real? (informe somente número e use "." nos valores decimais)');
    let dolar2 = prompt('Qual o valor do Cambio? (informe somente número e use "." nos valores decimais)');
    let resultadoDolar = (dolar1 * dolar2);
    exibirTextoNaTela('p', `A conversão é de R$ ${resultadoDolar.toFixed(2)}`);
}

// resolver número quebrado
function metros(){
    let metros1 = prompt('Qual a largura? (informe somente número e use "." nos valores decimais)');
    let metros2 = prompt('Qual o cumprimento? (informe somente número e use "." nos valores decimais)');
    let resultadoMetros = (metros1 * metros2);
    exibirTextoNaTela('p', `O resultado dos metros quadrados é de R$ ${resultadoMetros.toFixed(2)}`);
}

function temp(){
    let temp01 = prompt('Olá, me digita a escala que deseja celsius ou fahrenheit');
    let x = parseInt(prompt("Escolha um valor para ver a diferença entre as temperaturas!"));
    let celsius = ((x * 1.8) + 32);
    let fahrenheit = ((x -32 ) / 1.8);

    if(temp01 === 'celsius'){
        return  exibirTextoNaTela('p', `A diferença da temperatura de ${temp01} para fahrenheit é de ${celsius}`);
    }else if(temp01 === 'fahrenheit'){
        return exibirTextoNaTela('p', `A diferença da temperatura de ${temp01} para celsius é de ${fahrenheit}`);
    }else{
        return "Escala inválida";
    }
}

function cres(){

    let a = parseInt(prompt("Me diga um número"));
    let b = parseInt(prompt("Me diga um número"));
    let c = parseInt(prompt("Me diga um número"));

    let numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    exibirTextoNaTela('p', `Números ordenados: ${numerosOrdenados.join(', ')}`);
    // console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}


function decr(){

    let d = parseInt(prompt("Me diga um número"));
    let e = parseInt(prompt("Me diga um número"));
    let f = parseInt(prompt("Me diga um número"));

    let numerosOrdenados = [d, e, f].sort((y, x) => x - y);
    exibirTextoNaTela('p', `Números ordenados: ${numerosOrdenados.join(', ')}`);
    // console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

function pali(){
    let palavraPali = prompt("Me diga uma palavra");
    let separandoAsLetrasDaPalavra = palavraPali.split("");

    let palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    if(palavraPali == palavraInvertida) {
        exibirTextoNaTela('p', `A palavra ` + palavraPali + ` é um palindromo:${separandoAsLetrasDaPalavra}`);
    } else {
        exibirTextoNaTela('p', `A palavra ` + palavraPali + ` não é um palindromo:${separandoAsLetrasDaPalavra}`);
    }
}

function parInp(){

    let numeroPI = parseInt(prompt("Digite um número qualquer"));

    total = numeroPI / 2;

    if( numeroPI % 2 == 0) {
        exibirTextoNaTela('p', `${numeroPI} é par`);
    } else {
        exibirTextoNaTela('p', `${numeroPI} é Impar`);
    }

}

function ida(){
    let ida01 = parseInt(prompt('Qual a sua idade?'));
        if(ida01 >= 18){
            return  exibirTextoNaTela('p', `Você tem ${ida01} anos e é maior de idade`);
        }else if(ida01 <= 17){
            return exibirTextoNaTela('p', `Você tem ${ida01} anos e é menor de idade`);
    } 
}

function bi() {

    let bi01 = parseInt(prompt('Qual a sua idade?'));

    if ((bi01 % 4 === 0 && bi01 % 100 !== 0) || bi01 % 400 === 0) {
        return exibirTextoNaTela('p', `${bi01} é ano bissexto`);
    } else {
        return exibirTextoNaTela('p', `${bi01} Não é ano bissexto`);
    }
}

function reiniciar() {
    mensagemInicial();
}
