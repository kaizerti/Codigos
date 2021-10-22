window.onload = function(){

const btnBuscar = document.querySelector("#btnBuscar");
const txtNomeCli = document.querySelector("#nomeCliente");

btnBuscar.addEventListener('click', function(){

let dataSetCliente = txtNomeCli.dataSet.codigo;
let dataSetStatus = txtNomeCli.dataSet.statuscli;
console.log(dataSetStatus);


})

}