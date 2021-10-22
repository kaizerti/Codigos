// function teste(){
//     alert("Estou na functioin teste");
//     return nome;
// }

//teste();

//teste();
//console.log( teste() );




//let msg = (nome)=>{
//    return nome     //return é sempre a ultima instrução.
//};


//console.log( msg("Kaizer"));

// (function(produto, preco){
// alert("O produto é "+ produto + " e o preço é de r$ "+preco);
// })("Biscoito", 2.35)

let v1 = prompt("Digite o valor1");
let v2 = prompt("Digite o valor2");

const soma = (valor1, valor2)=>{
    let resultado = Number(valor1) * Number(valor2); // aqui esta usando soma (+) mas pode ser divisão (/) multiplicação (*) ou subtração (-)
    console.log(resultado);
}

soma(v1, v2);