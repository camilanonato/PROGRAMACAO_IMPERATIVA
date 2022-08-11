function somar (num1, num2) {
    return num1+num2;
}

function subtrair (num1, num2) {
    return num1-num2;
}

function multiplicar (num1, num2) {
    return num1*num2;
}

function dividir (num1, num2) {
    return num1/num2;
}

console.log ("-------------- Teste de Operações / Calculador --------------")


console.log (somar(5,5));
console.log (subtrair(5,5));
console.log (multiplicar(5,5));
console.log (dividir(5,5));

function quadradoDoNumero(x){
    return multiplicar(x, 1)*multiplicar(x, 1)
}
console.log("O quadrado do número é: " +quadradoDoNumero(8));

function mediaDeTresNumeros(num1, num2, num3){
    return [(dividir(num1, 1))+(dividir(num2,1))+(dividir(num3,1))]/3;
}

console.log("A média dos três número é: " + mediaDeTresNumeros(10, 20, 30));

function calculaPorcentagem (num1, num2){
    return dividir (num1, 100)*num2;
}
console.log("A porcentagem é: "+ calculaPorcentagem(200, 20));

function geradorDePorcentagem(num1, num2){
    return multiplicar(num1, 100)/num2;
}
console.log("A porcentagem é: "+geradorDePorcentagem(2,200));