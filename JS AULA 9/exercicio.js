
//peso = prompt("D")


function valorImc(nome, peso){

    a = Number(alturaPessoa);
    p = Number(pesoPessoa);



    let imc = p / (a*2);


    console.log("Nome..:", nome);
    console.log("Altura..:", alturaPessoa);
    console.log("Peso..:", pesoPessoa);
    console.log("IMC..:",imc);

}

pesoPessoa = prompt("Digite o seu peso");
alturaPessoa = prompt("Digite sua altura");
nomePessoa = prompt("Digite seu nome");

valorImc(nomePessoa, alturaPessoa, pesoPessoa); 
