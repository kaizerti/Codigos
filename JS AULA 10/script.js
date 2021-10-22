//match() O método match procura uma palavra em uma string,
//g/i/m

let nome = "Kaizer Fabrício";

// console.log( nome.match('K'));




//O método search() procura pela ocorrencia retornando a posição na cadeia da string.

// console.log( nome.search(/f/i));
// console.log(nome[0]);


//replace() Este método substitui uma string por outra, simples assim, ele pesquisa.

// let str = `Lorem ipsum dolor sit amet consectetur`;

// let strOutra = str.replace(/i/gi, 'y');

// console.log(strOutra);


// O método locale compare() compara efetua  a comparação entr duas strings.

// let gato = "gato";
// let outroGato = "gato";
// console.log(gato.localeCompare(outroGato));


//toString() O uso do toString ira converter uma valor qualquer em uma string.

// let num = Number('10');

// console.log(num.toString());

//toLowerCase() Faz a conversão de uma string inteira para caracteres ninusculos (caixa baix).

// let str = `Lorem ipsum dolor sit amet consectetur`;

// console.log(str.toLowerCase());

//  let gato = "gato";
//  let outroGato = "GATO";

//  let cat1 = gato.toLowerCase();

//  let cat2 = outroGato.toLowerCase()

//  console.log(cat1.localeCompare(cat2));

//toUpperCase() Faz a conversão de uma string inteira para caracteres maisculos (caixa alta).

// let str = `Lorem ipsum dolor sit amet consectetur`;

// console.log( str.toUpperCase());


//trim() Faz a remoção  de espaços antes  e depois da string especificada.

// let str1 = "      Lorem ipsum dolor sit amet consectetur      ";

// document.write(str1.trim() ="<br>");

// console.log(str1.trim());

// let str2 = "         Lorem ipsum dolor sit amet consectetur          ";

// document.write(str1.trim() ="<br>");

// console.log(str2);


//NaN
//Quando uma string for passada para Number() parseInt ou parseFloat) e não
//consiga efetuar  a conversão será retornado NaN (Not a Number).
//isNaN().

// let num = '1';
// console.log(isNaN('8i'));

// if(!isNaN(num)){
//     console.log('Isto é um numero');

// } else {
//     console.log("Isto não é um número");
// }


//tofixed() A função ''toFixed()''  analisa um valor fluente e retorna uma
//string conforme o parametro de casas. 

let valor =  2.456;

console.log(valor.toFixed(1));

// O método toLocalestring() irá retornar uma string com uma representação
//da moeda definida como no parâmetro currency.
//toLocalString('pt-BR') {style; 'currency', currency; 'BR' })

console.log(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));