/* 

====================================================================

06 FUNCOES

====================================================================


Funcoes sao blocos de codigos criados para execultar uma determinada tarefa . 

uma funcao pode receber valores atraves de parametros e usar esses valores dentro dela.

ESTRUTURA >

function Nomedafuncao(parametro){
// codigo
}

a funcao so e executada quando e chamada . 

*/

// 1 FUNCAO SIMPLES

function dizerOi(){
    console.log("Oi!");
    
}

dizerOi();


// funcao com parametro 

// o parametro e uma variavel que recebe um valor 
// quando a funcao e chamada 


function mostrarNome(nome){
    console.log(nome);
}

mostrarNome("Misael");
mostrarNome("Joao");
mostrarNome("Maria");


/*
============================================================
   3 parametros usado em uma operacao

============================================================
*/


function calcularDobro(numero){
    console.log(numero * 2);    
}

calcularDobro(5)
calcularDobro(10)



// ================================================

// 4. Dois Parametros 

// ================================================


// os parametros sao separados por virgula , 


function calcularTotal(preco,quantidade){
    console.log(preco * quantidade);
}

calcularTotal(18,1)
calcularTotal(25,4)
calcularTotal(50,4)

// ================================================

// 5. Parametros mais calculo

// ================================================


function calcularDesconto(preco){
    console.log(preco * 0.10);
}

calcularDesconto(100)
calcularDesconto(400)
calcularDesconto(600)

/*

=====================================================
RESUMO 
=====================================================


function 
   cria uma funcao.

parametro
   e o nome que recebe um valor dentro da funcao

argumento
   e o valor enviado quando chamamos a funcao.


   exemplo :


function mostrarNome(nome){
    console.log(nome);

}

mostrarNome("Misael");

nome -> parametro
"Misael" -> argumento

uma funcao pode receber valores diferentes e executar a mesma tarefa . 
====================================================

*/