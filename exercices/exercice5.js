let nombres=[0,NaN,Infinity,-Infinity,42,3.14,Number.MAX_SAFE_INTEGER + 1,-0];
for(let i of nombres){
    if(Number.isNaN(i)){
       console.log(i + " -> INVALIDE"); 
    }
    else if(i === Infinity || i === -Infinity ){
        console.log(i + " -> INFINI");
    }
    else if(i === "-0"){
        console.log(i+ "  -> ZERO NEGATIF");
    }
    else if(Number.isInteger(i)){
        console.log(i + "   -> ENTIER SUR");
    }
    else if (Number.isInteger(i) && Math.abs(i) > Number.MAX_SAFE_INTEGER) {
            console.log(n + " -> ENTIER HORS LIMITES")
    }
    else{
        console.log(i + " -> DECIMAL");
    }
    
}