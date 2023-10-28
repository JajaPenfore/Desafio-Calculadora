let Ranking = subtracao (200, 26)
function subtracao(Vitorias, Derrotas){
    return Vitorias - Derrotas
}  

let Nivel = Ranking
    if (Nivel <= 10){
        console.log("O Herói tem saldo de" , Ranking + " está no nível de Ferro ")
        } else if (Nivel <= 20){
            console.log("O Herói tem saldo de" , Ranking + " está no nível de Bronze" )
        } else if (Nivel <= 50){
            console.log("O Herói tem saldo de" , Ranking + " está no nível de Prata")
        } else if (Nivel <= 80){
            console.log("O Herói tem saldo de" , Ranking + " está no nível de Ouro")
        } else if (Nivel <= 90){
            console.log("O Herói tem saldo de" , Ranking + " está no nível de Diamante")
        } else if (Nivel <= 100){
            console.log("O Herói tem saldo de" , Ranking + " está no nível de Lendário")
        } else {
            console.log("O Herói tem saldo de" , Ranking + " está no nível de Imortal")
        } 

