let total = 0;
var tela = "";
let valor1 = 0;
let valor2 = 0;
let conta = 0;
let sinal = "";

function igual(){
    switch(sinal){
    case "+":
        conta += parseInt(tela);
    document.getElementById('resultado').innerHTML = conta;
    tela="";
        break;
    case "-":
        conta -= parseInt(tela);
        document.getElementById('resultado').innerHTML = conta;
        tela="";
        break;
    case "/":
        conta /= parseInt(tela);
        document.getElementById('resultado').innerHTML = conta;
        tela="";
        break;
    case "*":
        conta *= parseInt(tela);
        document.getElementById('resultado').innerHTML = conta;
        tela="";
        break;
    default:
        alert("ERRO!");
}
    
}

function soma(){
    conta = parseInt(tela);
    tela = "";
    document.getElementById('resultado').innerHTML = "0";
    sinal = "+";
}



function subtracao(a,b){
    conta = parseInt(tela);
    tela = "";
    document.getElementById('resultado').innerHTML = "0";
    sinal = "-";
}

function divisao(a,b){
    conta = parseInt(tela);
    tela = "";
    document.getElementById('resultado').innerHTML = "0";
    sinal = "/";
}

function multiplicacao(a,b){
    conta = parseInt(tela);
    tela = "";
    document.getElementById('resultado').innerHTML = "0";
    sinal = "*";
}

function n1(){
    tela += "1";
    
    document.getElementById('resultado').innerHTML = parseInt(tela);
    
}

function n2(){
    tela += "2";
    document.getElementById('resultado').innerHTML = + tela;
     
}

function n3(){
    tela += "3";
    document.getElementById('resultado').innerHTML = + tela;
     
}

function n4(){
    tela += "4";
    document.getElementById('resultado').innerHTML = + tela;
     
}

function n5(){
    tela += "5";
    document.getElementById('resultado').innerHTML = tela;
     
}

function n6(){
    tela += "6";
    document.getElementById('resultado').innerHTML = tela;
     
}

function n7(){
    tela += "7";
    document.getElementById('resultado').innerHTML = tela;
     
}

function n8(){
    tela += "8";
    document.getElementById('resultado').innerHTML = tela;
     
}

function n9(){
    tela += "9";
    document.getElementById('resultado').innerHTML = tela;
     
}

function reset(){
    tela = "";
    document.getElementById('resultado').innerHTML = "0";
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