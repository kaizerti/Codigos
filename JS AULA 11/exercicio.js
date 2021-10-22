let palavra = 'Dulcinéia';

(function(){

        document.write(`Esta palavra tem ${palavra.length} caracteres <br>`);
        document.write(`Esta palavra ${palavra.toUpperCase()} <br>`);
        document.write(`A letra '${palavra[2]}' é o terceiro carácter <br>`);
        document.write(`${palavra} ficou ${palavra.replace(palavra[2], 'x')}`);

        

})(palavra)