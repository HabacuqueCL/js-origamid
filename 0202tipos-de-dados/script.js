//7 TIPOS DE DADOS
// Todos são primitivos exceto os objetos.
var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
// Primitivos são dados imutáveis.


//VERIFICAR TIPO DE DADO
var nome = 'André';
console.log(typeof nome); // retorna string
//typeof null retorna object


//STRING
// Você pode somar números com strings, o resultado final é sempre uma string.

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';


//ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido
// Não necessariamente precisamos atribuir valores a uma variável


//TEMPLATE STRING
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
// Você deve passar expressões / variáveis dentro de ${}


//EXERCICIOS
// Declare uma variável contendo uma string
var apelido = 'Cookie';
// Declare uma variável contendo um número dentro de uma string
var nascimento = '1994';
// Declare uma variável com a sua idade
var idade = 29;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Habacuque';
var sobrenome = 'Cavalcante';
var nomeSobrenome = `${nome} ${sobrenome}`;
// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);

