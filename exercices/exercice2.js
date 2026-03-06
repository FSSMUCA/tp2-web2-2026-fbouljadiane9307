let valeurs = [0,1,"","0",null,undefined,NaN,false,[],{}];
let i;
for( i=0 ; i<10 ; i++){
    let type = valeurs[i] ? "truthy" : "falsy" ;
    if(valeurs[i]===""){
        console.log(String("(chaine vide)") + "->" + type);
    }
    else{
        console.log(String(valeurs[i]) + "->" + type);
    }
}