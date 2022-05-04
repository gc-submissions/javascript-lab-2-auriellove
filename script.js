const randomDamage = () => {
    min = Math.ceil(1);
    max =Math.floor(10);
    return Math.floor(Math.random() * (max - min + 1));
}
console.log(randomDamage(10));



const chooseOption=(opt1, opt2) => {
    let randNum= Math.random() * 1;
    if(randNum < 0.5) {
       randNum = 0; 
    } else {
        randNum = 1;
    }
    return randNum === 0 ? opt1 : opt2;
}
console.log(chooseOption("opt1","opt2"));

function attackPlayer(health) {
    let number= 0;
    number = health - randomDamage();
    return number;
}
console.log(attackPlayer(10));

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}
logHealth(`Auriel`, 100)

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}
logDeath(`Auriel`, `Brianna`)

const isDead = (health) => {
    return health <= 0 ? true:false;
}
console.log(isDead(5));


function fight(player1, player2, player1health, player2health) {
  while (true) {
    let attacker= chooseOption(player1, player2); 

        if (attacker === player1) {
            player2health = attackPlayer(player2health);
            logHealth(player2, player2health);
            if (isDead(player2health)) {
                logDeath(player1, player2);
                break;
            }
        } else {
            player1health = attackPlayer(player1health);
            logHealth(player1, player1health);
         if (isDead === player2health){
            logDeath(player2, player1);
            break;
        }
    }
  }
}

fight(`Auriel`, `Brianna`, 100, 30)
