//concat() "junta dois ou mais arrays";
// let nomes=["Marcelo", "Suelen", "Rafael", "Você", "Nos todos"];
// let nomes2=["Pedro", "Paulo", "Maria", "Samanta"];

// let todosOsNomes = nomes.concat(nomes2);

// console.log(nomes);
// console.log(nomes2);
// console.log(todosOsNomes);

// let qtdArraysNome = `O array nomes possui ${nomes.length} elementos`;


// console.log(qtdArraysNome);

//indexof( ) Procura um determinado elemento de um array, retorna uma posição
        //      0       1       2           3
// let nomes2=["Pedro", "Paulo", "Maria", "Samanta"];

// let buscaNome="José";

// if(nomes2.indexOf(buscaNome) != (-1) ){
//     alert(`Eu encontrei o nome ${buscaNome} e está posição ${nomes2.indexOf(buscaNome)}`);
// } else {
//     alert(`Não encontrei o ${buscaNome}`);
// }

//join( ) Transforma elementos de um array em um string.
// let nomes2=["Pedro", "Paulo", "Maria", "Samanta"];

// console.log(nomes2); //
// console.log(nomes2.join()); // "Pedro", "Paulo", "Maria", "Samanta"

// push ( ) Insere elementos no fim do array
//let frutas = ["Uva", "Morango", "Jaca", "Pessego"];
// frutas.push("Maça", "Laranja");
// frutas.push("Laranja");
// console.log( frutas.indexOf("Jaca"));

// let insertFruta = "Amora";

// if(frutas.indexOf(insertFruta) == -1){
//     console.log(`A fruta ${insertFruta} não está na lista`)   
//     frutas.push(insertFruta);

// } else {
//        console.log(`A fruta ${insertFruta} já está na lista`)
// }



// console.log(frutas);


//pop( ) Remove o ultimo elemento de um array.

// let frutas = ["Uva", "Morango", "Jaca", "Pessego"];

// frutas.pop();

// console.log(frutas);


//reverse( ) Inverte a ordem dos elemenetos de um array.

// let frutas = ["Uva", "Morango", "Jaca", "Pessego"];

// frutas.reverse();

// console.log(frutas);

// console.log(frutas[0]);



//shift( ) Remove o primeiro elemento de uma array.

// let frutas = ["Uva", "Morango", "Jaca", "Pessego"];
// frutas.shift();
// console.log(frutas);


//sort( ) Ordena elementos de um array em ordem crescente.

// let frutas = ["Uva", "Morango", "Jaca", "Pessego"];
// frutas.sort();
// console.log(frutas);


// let numeros = ['200', '64', '5487', '547', '324'];
// numeros.sort();
// console.log(numeros);


//toString( ) Converte um array em uma sting e retorna essa string.

// let frutas = ["Uva", "Morango", "Jaca", "Pessego"];
// console.log( frutas.toString());


//unshift( ) Insere um elemento no inicio do array.

//splice( ) corta ou remove um elemento de um array em um ponto indicado.
//agrupar com indexof

let nomes = ["Mariane", "Patati Patata", "Xuxa", "Balão Mágico"];


let indice  = nomes.indexOf("Balão Mágico");
let novaLista = nomes.splice(indice,1);

console.log(nomes);


