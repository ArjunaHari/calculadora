let total = 0;






function soma(a,b){
    let valor1 = prompt("Digite o primeiro valor:");
    let valor2 = prompt("Digite o segundo valor:");
    a = parseInt(valor1);
    b = parseInt(valor2);
    total = a + b;
    alert(total);
}

function subtracao(a,b){
    let valor1 = prompt("Digite o primeiro valor:");
    let valor2 = prompt("Digite o segundo valor:");
    a = parseInt(valor1);
    b = parseInt(valor2);
    total = a - b
    alert(total);
}

function divisao(a,b){
    let valor1 = prompt("Digite o primeiro valor:");
    let valor2 = prompt("Digite o segundo valor:");
    a = parseInt(valor1);
    b = parseInt(valor2);
    total = a / b
    alert(total);
}

function multiplicacao(a,b){
    let valor1 = prompt("Digite o primeiro valor:");
    let valor2 = prompt("Digite o segundo valor:");
    a = parseInt(valor1);
    b = parseInt(valor2);
    total = a * b
    alert(total);
}

switch(sinal){
    case "+":
        soma(valor1,valor2)
        break;
    case "-":
        subtracao(valor1,valor2)
        break;
    case "/":
        divisao(valor1,valor2)
        break;
    case "*":
        multiplicacao(valor1,valor2)
        break;
    default:
        alert("ERRO!");
}

//if (sinal= "+"){
 //   soma(valor1,valor2);
//}else if (sinal = "-"){
 //   subtracao(valor1,valor2);
//}else if (sinal = "/"){
//    divisao(valor1,valor2);
//}else if (sinal = "*"){
//    multiplicacao(valor1,valor2);
//}else{
//    alert("Erro!");
//}