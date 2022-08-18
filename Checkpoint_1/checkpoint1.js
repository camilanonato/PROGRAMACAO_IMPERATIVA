let prato = "Macarrão";
let tempo = "32";


function microondas(tempo, prato){

    switch (prato){
        case "Pipoca":
            if(tempo==10){
                console.log("Prato pronto, bom apetite!!!")
            } else if(tempo<10){
                console.log("tempo insuficiente")
            } else if(tempo >= 2 * 10 && tempo < 3* 10){
                console.log("A comida queimou")
            } else{
                console.log("kabumm")
            }    
            break;
    
        case "Macarrão":
            if(tempo==8){
                console.log("Prato pronto, bom apetite!!!")
            } else if(tempo<8){
                console.log("tempo insuficiente")
            } else if(tempo >= 2 * 8 && tempo < 3* 8){
                console.log("A comida queimou")
            } else{
                console.log("kabumm")
            }
            break;
    
        case "Carne":
            if(tempo==15){
                console.log("Prato pronto, bom apetite!!!")
            } else if(tempo<15){
                console.log("tempo insuficiente")
            } else if(tempo >= 2 * 15 && tempo < 3* 15){
                console.log("A comida queimou")
            } else{
                console.log("kabumm")
            }
            break;
    
        case "Feijão":
            if(tempo==12){
                console.log("Prato pronto, bom apetite!!!")
            } else if(tempo<12){
                console.log("tempo insuficiente")
            } else if(tempo >= 2 * 12 && tempo < 3* 12){
                console.log("A comida queimou")
            } else{
                console.log("kabumm")
            }
            break;
    
        case "Brigadeiro":
            if(tempo==8){
                console.log("Prato pronto, bom apetite!!!")
            } else if(tempo<8){
                console.log("tempo insuficiente")
            } else if(tempo >= 2 * 8 && tempo < 3* 8){
                console.log("A comida queimou")
            } else{
                console.log("kabumm")
            }
        break;
    
        default:
            console.log("Prato inexistente");
    }
}

microondas(tempo, prato);

