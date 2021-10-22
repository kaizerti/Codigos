window.onload = function(){

// function tabuada(numero){

//     let tabuada=0;
//     if(typeof numero !== 'number'){

//         alert("Digite um valor numerico válido");
//     } else{
//         if(numero < 1  ||   numero > 10 ){
//             alert("Digite um valor entre 1 e 10")
//         }else {
//             console.log(`Tabuada do ${numero}`); 
//          while(tabuada <= 10){
         
//          console.log(` ${numero} x ${tabuada} = ${(numero * tabuada)}` );
//          tabuada++;
//      }

//         }
//     }






const tab = document.querySelector("#tabuada");
const btn = document.querySelector("#calcular");
const resp = document.querySelector("#resposta");

btn.addEventListener('click',function(){

    let numero = Number(tab.value);
    let tabuada=0;
     if( isNaN(numero) ){

         resp.innerHTML = "Digite um valor numerico válido";
     } else{
         if(numero < 1  ||   numero > 10 ){
            resp.innerHTML = "Digite um valor entre 1 e 10";
         }else {
             console.log(`Tabuada do ${numero}`); 
                resp.innerHTML = `Tabuada do ${tab.value} `
          while(tabuada <= 10){
         
            resp.innerHTML +=`<br> ${numero} x ${tabuada} = ${(numero * tabuada)}`;
          tabuada++;
      }

         }
    }



})
}