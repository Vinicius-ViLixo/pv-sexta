export {semaforo, diaSemana, fatorial}


function semaforo(n1){
    let msg="";
    
    if(n1 === "vermelho"){
    
        msg = "aguarde";
    
    }
    
    else if(n1 === "verde"){
    
        msg = "pode passar";
    
    }
    
    else{
    
        msg="invalido"
    
    }
    
    return msg
}

function diaSemana(n1){
    let msg ="";
    if(n1 === 0){
       msg = "domingo"; 
    }
    else if(n1 === 1){
        msg = "segunda";
    }
    else if(n1 === 2){
        msg = "terça";
    }
    else if(n1 === 3){
        msg = "quarta";
    }
    else if(n1 === 4){
        msg = "quinta";
    }
    else if(n1 === 5){
        msg = "sexta";
    }
    else if(n1 === 6){
        msg = "sabado";
    }
    else{
        msg= "invalido";
    }
    return msg;
}

function fatorial(n1){
    for(let i = n1; i-1<=n1; i--){
        let x = n1 * i;
    }
    return x;
}