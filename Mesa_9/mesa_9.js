//1 - undefined
//2 - Spiderman
//3 - uma string qualquer

//Array invertido
//1
let array = ["0", "1", "2", "3"];
function imprimirInverso() {
    console.log(array[3])
    console.log(array[2])
    console.log(array[1])
    console.log(array[0])
}
imprimirInverso();
//2
function inverter(){
    console.log(array = ["0", "1", "2", '3'])
}
 inverter()


//somarArray()
function somarArray([a, b, c]){
    let soma = [a+b+c]
    console.log(soma);
}
somarArray([1,2,3]);

//Simulação Array.join()
function join([a, b, c]){
    let join_prin = [''+ a + b + c + '']
    console.log(join_prin)
}
join(["o", "l", "á"])
join(["sau", "da", "ção"])

//Coleção de Filmes

//1

let filmes = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];

console.log(filmes[1]);

//2

function maiuscula([a]){
    console.log(filmes[a].toUpperCase())
}
maiuscula([1]);
maiuscula([3]);

//3

let filmes1 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function doisarrays(){
    let somaArrays = [filmes + ' ,' + filmes1];
    console.log(somaArrays)
}
doisarrays()

//4
filmes1.pop()
let somaArrays = [filmes + filmes1];
let apagado = "Fortnite";

console.log(somaArrays);

//5

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacao_media(){
    let media1 = [asiaScores[0]+asiaScores[1]+asiaScores[2]+asiaScores[3]+asiaScores[4]+asiaScores[5]+asiaScores[6]+asiaScores[7]+asiaScores[8]]/9;
    let media2 = [euroScores[0]+euroScores[1]+euroScores[2]+euroScores[3]+euroScores[4]+euroScores[5]+euroScores[6]+euroScores[7]+euroScores[8]]/9;
    if (media1 == media2){
        console.log("as médias são iguais")
    }else{
        console.log("as médias são diferentes")
    }
}
comparacao_media()