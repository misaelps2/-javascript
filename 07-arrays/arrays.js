/**

* ============================================
* JAVASCRIPT — FUNDAMENTOS
* Arquivo: arrays.js
* Tema: Arrays e acesso aos elementos
* ============================================
*
* Neste arquivo estou praticando:
*
* * Criacao de arrays
* * Armazenamento de diferentes valores
* * Acesso aos elementos por indice
* * Utilizacao da propriedade length
*
* Importante:
* Os indices de um array comecam em 0.
* O primeiro elemento fica no indice 0,
* o segundo no indice 1, e assim por diante.
  */

// Array com valores numericos representando idades.
const idade = [23, 44, 12, 66, 27];

// Array com nomes de tecnologias que estou estudando.
const tecnologias = ["JavaScript", "TypeScript", "Node.js"];

// Array com nomes de pessoas.
const nome = ["Joao", "Maria", "Misael", "Alice"];

// Exibe todos os elementos do array de tecnologias.
console.log(tecnologias);

// Acessa e exibe o primeiro elemento.
// O indice 0 corresponde ao primeiro elemento.
console.log(tecnologias[0]);

// Exibe a quantidade de elementos do array.
// A propriedade length retorna o tamanho do array.
console.log(tecnologias.length);

// Acessa o terceiro nome do array.
// O indice 2 corresponde ao terceiro elemento.
console.log(nome[2]);

// Acessa a quinta idade do array.
// O indice 4 corresponde ao quinto elemento.
console.log(idade[4]);

/**

* RESUMO DO APRENDIZADO
*
* 1. Arrays permitem armazenar varios valores
* em uma unica variavel.
*
* 2. Os indices comecam em zero.
*
* 3. A propriedade length informa a quantidade
* de elementos existentes no array.
*
* 4. Podemos acessar um elemento utilizando
* o nome do array e seu indice entre colchetes.
  */
