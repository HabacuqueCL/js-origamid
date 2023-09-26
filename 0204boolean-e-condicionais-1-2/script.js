//BOOLEAN
//Existem dois valores booleanos false ou true.
var possuiGraduacao = true;
var possuiDoutorado = false;

//CONDICIONAIS IF E ELSE
//Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.
var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else
//O valor dentro dos parênteses sempre será avaliado em false ou true.

//CONDICIONAIS ELSE IF
//Se o if não for verdadeiro, ele testa o else if
var possuiGraduacao = true;
var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

//TRUTHY E FALSY
//Existem valores que retornam true e outros que retornam false quando verificados em uma expressao booleana.
//Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

//Todo o resto e truthy

//Truthy
if(true)
if(1)
if(" ")
if("Andre")
if({})

//OPERADOR LOGICO DE NEGACAO !
//O operador !, nega uma operacao booleana. Ou seja, !true e igual a false

//Truthy
if(!true) //false
if(!1) //false
if(!'') //true
if(!undefined) //true
if(!!' ') //true
if(!!'') //false
//dica, voce pode utilizar o !! para verificar se uma expressao e Truthy ou Falsy

//OPERADORES DE COMPARACAO
//Vao sempre retornar um valor booleano
10 > 5; //true
5 > 10; //false
20 < 10; //false
10 <= 10; //true
10 >= 11; //false

//OPERADORES DE COMPARACAO
//O == faz uma comparacao nao tao estrita e o === faz uma comparacao estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===
10 == '10'; //true
10 == 10; //true
10 === '10'; //false
10 === 10; //true
10 != 15; //true
10 != '10'; //false
10 !== '10'; //true