let altura = 1.20;
let acompanhada = false;

function podeSubir(altura, acompanhada) {
    
    if (altura >= 1.40 && altura < 2) {
        console.log('Pode subir');

    } else if ((altura >= 1.20 && altura <= 1.40) && acompanhada) {
        console.log('Pode subir');

    } else {
        console.log('Não pode subir');
    }
}

podeSubir (altura, acompanhada);
