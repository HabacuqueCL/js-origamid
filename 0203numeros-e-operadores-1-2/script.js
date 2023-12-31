//NUMEROS
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
// Precisão para até 15 digitos depois disso ele arredonda
// 2e10 *depois do 'e' vem a quantidade de casas


//OPERADORES ARITMETICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4 Restane inteiro da divisao
// Lembrando que soma + em Strings serve para concatenar


//OPERADORES ARITMETICOS (STRINGS)
var soma = '100' + 50; // 10050  
// Em casos de soma de Number com String sempre cocatena
var subtracao = '100' - 50; // 50 
// Na subtracao 'se possivel' ele converte a String para numero e faz a conta
var multiplicacao = '100' * '2'; // 200
// Em casos de multiplicacao de duas Stings elas sao convertidas e feito o calculo
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
// É possível verificar se uma variável é NaN ou não com a função isNaN()


//NAN = NOT A NUMBER
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)


//A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Parênteses para priorizar uma expressão


//OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// Mesma coisa para o decremento --x


//OPERADORES ARITMÉTICOS UNÁRIOS
// O + e - tenta transformar o valor seguinte em Number
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28'; //Vai transformar a String em Number e retornar um Number e nao uma String mais
+idade; // 28 (Number)
-idade; // -28 (Number)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
// O - antes de um número torna ele negativo


//GUIA COMPLETO DE OPERADORES
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators


//EXERCÍCIOS
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN

NaN01 = 'Total e 10' * 10;
NaN02 = '500 ml' / 2;

// Somar a string '200' com o número 50 e retornar 250

var soma = +'200' + 50;

// Incremente o número 5 e retorne o seu valor incrementado

var incremento = 5;
++incremento
console.log(incremento)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// Resultado

var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'