window.onload = function(){



        function resultadoCep(dadosCep){

        for(let rua in dadosCep){

            if(document.querySelector(`#${rua}`)){
            document.querySelector(`#${rua}`).value= dadosCep[rua];

            


            
                for(let bairro in dadosCep){
        
                    if(document.querySelector(`#${bairro}`)){
                    document.querySelector(`#${bairro}`).value= dadosCep[bairro];
        

                    

                        for(let cidade in dadosCep){
                
                            if(document.querySelector(`#${cidade}`)){
                            document.querySelector(`#${cidade}`).value= dadosCep[cidade];
                

                            

                                for(let uf in dadosCep){
                        
                                    if(document.querySelector(`#${uf}`)){
                                    document.querySelector(`#${uf}`).value= dadosCep[uf];
                        
                                    
        }
        }
    }

let dadosCep = async function(cep){

    let url = `https://viacep.com.br/ws/${cep}/json/`;
    try {

    let dadosFetch = await fetch(url);

    let dadosJson = await dadosFetch.json();
    resultadoCep(dadosJson)

    

} catch(error){
    alert(error);
}

}

    
    const btnBuscar = document.querySelector("#buscarCep");
    const CEP_      = document.querySelector("#NumeroCep");

    btnBuscar.addEventListener('click', function(){
        
        dadosCep(CEP    _.value);

    })

}