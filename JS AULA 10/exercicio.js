let nomes = ["Suelen", "Marcelo", "Rafael", "José", "Marcos"];

const coisaNomes = ( name, novoNome, index)=>{
    console.log("Quantidade de elementos do array...: ", name.length);
    console.log(`Você escolheu o indice ${index} que é o elemento ${name[index]}`);
    console.log(`O nome ${novoNome} foi inserido no array`);
    name.push(novoNome);
    console.log("A quantidade de elementos atual do array é de..: ", name.length);
}

coisaNomes(nomes,"Marinei", 4);
coisaNomes(nomes,"Dulceneia", 2);
coisaNomes(nomes,"Sueln", 3);