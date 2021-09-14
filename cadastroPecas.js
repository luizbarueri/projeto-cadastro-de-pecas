//array com 13 'objetos' inseridos como cadastro de peças.
const pecas = [
    {id: 1, nome:'Carburador', peso: 1200},
    {id: 3, nome:'Oleo de Freio', peso: 500},
    {id: 2, nome:'Lampada 12v', peso: 90,},
    {id: 4, nome:'K2', peso: 101},
    {id: 5, nome:'Pastilha Freio', peso: 1200},
    {id: 6, nome:'Borracha Vedante', peso: 130,},
    {id: 7, nome:'Kit Gas', peso: 395},
    {id: 8, nome:'Parafusos Roda', peso: 180},
    {id: 9, nome:'Prabrisa Dianteiro', peso: 6200},
    {id: 10, nome:'Retrovisor Esq.', peso: 200,},
    {id: 11, nome:'Farol Traseiro', peso: 250},
    {id: 12, nome:'Jogo Velas', peso: 190},
    {id: 13, nome:'FEIJÃO não é peça', peso: 90}];

var qtd = pecas;
console.log("quantidade de entradas do 'array' na lista de peças: " + qtd.length);
console.log("------------------");
var i = 0;
var n = 0;
for(let x = 0; x < qtd.length; x++) {
    const atual = pecas[x];
    //Verifica se quantidade cadastrada é igual a 10.
    if (i > 10) {
        console.log("Cadastro não Permitido! Quantidade de peças não pode ser maior que 10.");
    } else {
        //verifica peso
        if (atual.peso.toFixed() > 100) {
            //verifica quant. caracteres
            if (atual.nome.length > 3) {
                console.log("Cadastro Permitido. Codigo: " + x + ", Peça: " + atual.nome + " Peso: " + atual.peso + " gramas");
                i++;
            } else {
                console.log("Cadastrado não Permitido! Nome não pode ser inferior a 3 caracteres.");
                console.log("Codigo: " + x + ", Nome: " + atual.nome + " Peso: " + atual.peso + " gramas"); 
                n++
            }       
        } else {
            console.log("Cadastrado não Permitido! Peso tem que ser maior que 100 gramas."); 
            console.log("Codigo: " + x + ", Nome: " + atual.nome + " Peso: " + atual.peso + " gramas");
            n++
        }    
    }
    console.log("*************************************")
}
console.log("Quantidade cadastrado....: " + i);
console.log("Quantidade Não cadastrado: " + n);
console.log ("total verificado: " + (i + n));

