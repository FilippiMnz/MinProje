Velocimetro(190)
function Velocimetro(velocidade){
    const VelMax = 70;
    const KmPT = 5;
    if(velocidade <= VelMax)
        console.log('ta na normalidade');
    else{
         const pontuação =Math.floor((velocidade - VelMax) / KmPT);  
        if( pontuação >= 12)
            
            console.log("tu ta em cana parça");
        else
            console.log(pontuação);
    }
}