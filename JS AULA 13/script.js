// let i=2;

// for (let x=0; x <=10; x++){

//     console.log(`O valor da interação é ${x} o x mais ele mesmo ${x++} `);
// }


// let Pessoas = {
//     nome: "Steven Roger",
//     idade: 90,
//     heroi: "Capitão América",
    
// }

// for(let propriedades in Pessoas){
//     console.log(Pessoas.nome);
//     console.log(Pessoas.idade);
// }



// let frutas = ["Melancia", "Manga", "Banana", "Uva"];
// for(let nomeFruta of frutas){
//     console.log(nomeFruta);
// }

// for (let x=0; x < frutas.length; x++){
// console.log(`O nome da fruta é ${frutas[x]} `);
// }


 let Herois = [
{
     identidadeSecreta: "Steven Roger",
     heroi: "Capitão América",

    },

    {
     identidadeSecreta: "Tony Stark",
     heroi: "Homem de ferro",


    }

 ];

 Herois.push({identidadeSecreta:"Diana", heroi:"Mulher Maravilha"});
 Herois.push({identidadeSecreta:"Bruce Bener", heroi:"Hulk"});

//  let marvel = Herois[1].identidadeSecreta;
//  console.log(marvel)

for(let marvel of Herois) {
    // console.log(marvel);
    for(let m in marvel){
        console.log(`${m} -> ${marvel[m]}`);
    }

}
     
 