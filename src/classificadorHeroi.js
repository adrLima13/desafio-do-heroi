//Variaveis
let nomeHeroi = "ZikaDoBaile 😎";
let Rank = "";
let XP = 0;

//Funcao para atualizar Rank atraves da quantidade de XP
function atualizarRank(XP){
                if (XP <= 1000){
                return "🖤  Ferro 🖤";
        }   else if (XP <= 2000){
                return "🤎 Bronze 🤎";
        }   else if (XP <= 5000){
                return "🤍 Prata 🤍";     
        }   else if (XP <= 7000){
                return "💛 Ouro 💛";             
        }   else if (XP <= 8000){
                return "🩶 Platina 🩶";                    
        }   else if (XP <= 9000){
                return "🌠 Ascendente 🌠";                   
        }   else if (XP <= 10000){
                return "☪️ Imortal ☪️";                  
        }   else {
                return "🌟 Radiante 🌟";
        }
}

//Historia do Heroi
console.log("Ola meu nome e " + nomeHeroi + " vamos comigo nessa aventura 🫡 ?");
console.log("Nossa XP atual e " + XP + " 🥲.");
console.log("Vamos cacar alguns monstros para aumentar nossa XP e Rank 🤠 !");
console.log(nomeHeroi + " em sua primeira aventura, estava caminhando em uma floresta e encontrou uma 🪙 Raid com Bonus de XP 🪙.");
console.log(nomeHeroi + " entra na Raid e decide enfrentar os monstros 🧌 !");

//Ganho de XP
for (let i = 0; i < 11001; i+=1000){
        XP = i;
        Rank = atualizarRank(XP);        
        console.log("Com " + XP + " de XP, seu Rank é: " + Rank);
        console.log("Voce matou um monstro raro 🧌 e ganhou 1000 de XP !");
}

// Final da Historia

console.log(nomeHeroi + " tem " + XP + " de XP e alcancou o Rank maximo do jogo " + Rank + ".");
console.log("Ao final da 🪙 Raid com Bonus de XP 🪙" + nomeHeroi + "havia conquistado muita XP e subido muito seu Rank !");