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


    