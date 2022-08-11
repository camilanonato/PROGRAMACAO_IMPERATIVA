function converterPolegadasEmCm (polegadas) {
    return polegadas + " polegadas são equivalentes a " + polegadas*2.54 + " centímetros.";
}

console.log(converterPolegadasEmCm(5));

function retornarFrase(frase) {
    return frase + "!";
}

console.log(retornarFrase("Olá"));

function valorDaHoraDeTrabalho (salarioMensal) {
    const valorDaHoraDeTrabalho = salarioMensal/160;
    return "O valor da sua hora de trabalho é de R$ " + valorDaHoraDeTrabalho.toFixed(2);
}

console.log(valorDaHoraDeTrabalho(4200));

function letraMaiuscula (frase) {
    return "Escrevemos isso: '" + frase + "' e obtemos isso: '" + frase.toUpperCase() + "'";
}

console.log(letraMaiuscula("olá mundo"));

function tipoDeDado(dadoParaValidar) {
    return " O dado informado foi " + dadoParaValidar + ", ele é um(a): " + typeof dadoParaValidar;
}

console.log(tipoDeDado(7));

console.log(tipoDeDado("c"));

function calcularCirculo (raio) {
    return "A circunferência é de: " + (2* Math.PI * raio).toFixed(2);
}

console.log(calcularCirculo(6));