var expVingador= 1
var nomeVingador= "Homem de Ferro"
var nivelVingador="Iniciante"

if (expVingador>=1 && expVingador<1000){
    nivelVingador="Ferro"
}
else if ( expVingador>1000 && expVingador<2001){
    nivelVingador="Bronze"
}

else if ( expVingador>2000 && expVingador<6001){
    nivelVingador="Prata"
}

else if ( expVingador>6000 && expVingador<7001){
    nivelVingador="Ouro"
}

else if ( expVingador>7000 && expVingador<8001){
    nivelVingador="Platina"
}

else if ( expVingador>8000 && expVingador<9001){
    nivelVingador="Ascendente"
}

else if ( expVingador>9000 && expVingador<10001){
    nivelVingador="Imortal"
}

else if ( expVingador>=10001){
    nivelVingador="Radiante"
}

console.log("O Vingador "+nomeVingador+" está no nível "+nivelVingador +", com "+expVingador+" de XP.")