// function Pessoa(nome){

//     this.nome = nome;

    
// }

// Pessoa.prototype.msg = function(){

// alert("Olá " = this.nome);

// }

// let NovaPessoa = new Pessoa("José");
// let OutraPessoa = new Pessoa("Maria");

// NovaPessoa.msg();
// OutraPessoa.msg();
// // console.log(NovaPessoa.nome);

// console.log(NovaPessoa);


// let Pessoa2 = {
//     'nome':'',
//     'idade':''
    
// }


// //console.log(Pessoa2);
// Pessoa2.__proto__.msg = function(){
//     alert("Olá " + Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = "Marcelo";
// P.msg();
// console.log(P);

let Pessoa3 = [
    {
        'nome':'Marcelo',
        'idade': 36,
        'sexo' : 'M',
    },

    {
        'nome': 'Suelen',
        'idade': 36,
        'sexo' : 'F',


    },

    {
        'nome': 'Kaizer',
        'idade': 42,
        'sexo' : 'M',


    },

    {
        'nome': 'Giovanna',
        'idade': 11,
        'sexo' : 'F',


    },

]

let NPessoa = Pessoa3;


console.log(`Existem ${NPessoa.length} cadastradas`)
console.log(NPessoa[1].nome);
