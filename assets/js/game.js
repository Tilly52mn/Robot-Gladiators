var randomNumber = function(min,max){
  var value = Math.floor(Math.random()*(max-min+1) + min);

  return value;
}
var getPlayerName = function(){
  var name = "";
while ( name === "" || name === null){
  name = prompt("What is your robot's name?")
}
console.log("Your robot's name is " + name)
return name;
}


var playerInfo ={
  name: getPlayerName(),
  attack: 10,
  health: 100,
  money: 10,
  reset: function(){
  this.health = 100;
  this.money = 10;
  this.attack = 10;},
  refillHealth: function(){
    if(playerInfo.money >= 7){
      window.alert("Refilling player's health by 30 for 7 dollars.");
    this.health += 30;
    this.money -= 7;
    }
    else{
      window.alert("You don't have enough money!")
    }
  },
  upgradeAttack: function(){  if (this.money >= 7) {
    window.alert("Upgrading player's attack by 9 for 7 dollars.");
    this.attack += 9;
    this.money -= 7;
  } 
  else {
    window.alert("You don't have enough money!");
  }
  }
};
// you can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);


var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
  }
];
  window.alert("Welcome to Robot Gladiators!")
var fightOrSkip = function(){
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.')
  promptFight = promptFight.toLowerCase()
  if(promptFight ==="" || promptFight === null){
    window.alert("You need a valid answer! Please try again.")
    return fightOrSkip();
  }
  if(promptFight ==="skip"){
    var confirmSkip=window.confirm("Are you sure you'd like to quit?")
    if(confirmSkip){
      window.alert(playerInfo.name + " has decided to skip this fight.Goodbye!");
      playerInfo.money = playerInfo.money - 10;
      return true;
    }
  }
  return false;
}
  var fight = function(enemy){
    var isPlayersTurn = true;
    if(Math.random() >0.5){
      isPlayersTurn = false;
    }
    console.log(enemy);
    while(playerInfo.health > 0 && enemy.health > 0){
      if(isPlayersTurn){
     if(fightOrSkip()){
       break;
     }
       console.log(enemy.health)
       var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

       enemy.health = Math.max(0,enemy.health - damage)
       
       console.log(playerInfo.name + " attacked " + enemy.name +". " + enemy.name + " now has " + enemy.health + " health remaining");
       // check enemy's health
       if(enemy.health <=0) {
         window.alert(enemy.name + " has died!")  
         playerInfo.money = playerInfo.money + 20
         console.log("playerInfo.money", playerInfo.money)
         break;
       }
       else{
         window.alert( enemy.name +" still has " + enemy.health+ " health left")
       }
      }
      else{
       var damage = randomNumber(enemy.attack -3, enemy.attack)

     playerInfo.health = Math.max(0,playerInfo.health - damage);
       // Log a resulting message to the console so we know that it worked.
       console.log(enemy.name + " attacked " + playerInfo.name +". " + playerInfo.name + " now has " + playerInfo.health + " health remaining");
       // check enemy's health
       if(playerInfo.health <=0) {
         window.alert(playerInfo.name + " has died!")
         break
       }
       else{
         window.alert( playerInfo.name +" still has " + playerInfo.health+ " health left")
       }
   }
   isPlayersTurn = !isPlayersTurn
  }
    };
var startGame = function(){
playerInfo.reset();

  for(var i = 0; i < enemyInfo.length; i++){
    if (playerInfo.health > 0){
      window.alert( "Welcome to Robot Gladiators! Round " + (i + 1))
      var pickedEnemyObj = enemyInfo[i]
      pickedEnemyObj.health = randomNumber(40,60)
    fight(pickedEnemyObj)
    if (i < playerInfo.health > 0 && enemyInfo.length - 1) {
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")
      if(storeConfirm){
      shop();
      }
    }
    }
    else{
      window.alert("You have lost your robot in battle! Game Over!")
      break;
    }
  }
  endGame()
  };
  var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");
    if (playerInfo.health > 0){
      window.alert("Great job, you've survied the game!");
    } else{
      window.alert("You've lost your robot in battle.")
    }
    var highScore = localStorage.getItem("highscore")
    if(highScore === null){
      highScore = 0;
    }
if(playerInfo.money > highScore){
  localStorage.setItem("highscore", playerInfo.money);
  localStorage.setItem("name", playerInfo.name)
  alert(playerInfo.name + " now has the high score of " + playerInfo.money  + "!")
}
else{
  alert(playerInfo.name + " did not beat the high schore of " + highScore +"!")
}
  var playAgainConfirm = window.confirm("Would you like to play again");
  if(playAgainConfirm){
    startGame()
  }
  else{
    window.alert("Thank you for playing Robot Galdiators! Come back soon!")
  }
  }
  var shop = function() {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your heatlh, UPGRADE your attack, or LEAVE the store? Please enter one: 1 for REFILL, 2 for UPGRADE ,or 3 for LEAVE to make a choice")
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt){
      case 1:
        playerInfo.refillHealth();
        break;
      case 2:
        playerInfo.upgradeAttack();
        break;
      case 3:
         window.alert("Leaving the store.")
      break;
      default: window.alert("You didn't pick a valid optoin. Try again.");
      shop();
      break;
    }
  };
console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);
  startGame()