window.onload = function(){

    let produtos = [

        {descricao:'Banana', preco: 1.90},
        {descricao:'Uva', preco: 5.99},
        {descricao:'Goiaba', preco: 2.36},
        {descricao:'Mexirica', preco: 3.55},
        {descricao:'Manga', preco:3.99},
        {descricao:'Tomate', preco:6.00}

    ]
    
    const listaProdutos = document.querySelector("#listaProdutos");
    const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

    ( ()=>{
        let totais = 0;
        for(let pro of produtos){

            const filhoLi = document.createElement('li');

            for(listaP in pro ) {
                if(listaP == 'preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP] )
                    totais += pro[listaP];
                    } else {
                        listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}`;
                    }
            }
        }
        mostraTotalCompra.value = totais.toFixed(2);

    } ) 

}
