var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var randomNumber = function(){
  var value = Math.floor(Math.random()*21) + 40;

  return value;
}
var enemyNames = ["Roborto", "AMy Android", "Robo Trumble"];
var enemyHealth = randomNumber(40,60);
var enemyAttack = 12
  window.alert("Welcome to Robot Gladiators!")
  var randomNumber = function(min,max){
    var value = Math.floor(Math.random()*(max-min+1) + min);

    return value;
  }
  var fight = function(enemyName){
    while(playerHealth > 0 && enemyHealth > 0){
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose")
 
     if(promptFight ==="skip" || promptFight === "SKIP"){
       var confirmSkip = window.confirm("Are you sure you'd like to quit?")
       //if yes(true), leave fight
       if(confirmSkip){
         window.alert(playerName + "  has decided to skip this fight. Goodbye!")
 
         playerMoney = Math.max(0,playerMoney -10)
         console.log("playermoney", playerMoney)
         break;
       }
     }
     //IF PALYER CHOOSES TO FIGHT, THEN FIGHT
     //if(promptFight ==="fight" || promptFight ==="FIGHT"){
       //HAVE PLAYER ATTACK
       console.log(enemyHealth)

       var damage = randomNumber(playerAttack - 3, playerAttack);

       enemyHealth = Math.max(0,enemyHealth - damage)
       
       console.log(playerName + " attacked " + enemyName +". " + enemyName + " now has " + enemyHealth + " health remaining");
       // check enemy's health
       if(enemyHealth <=0) {
         window.alert(enemyName + " has died!")  
         playerMoney = playerMoney + 20
         console.log("playermoney", playerMoney)
         break;
       }
       else{
         window.alert( enemyName +" still has " + enemyHealth+ " health left")
       }
       // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

       var damage = randomNumber(enemyAttack -3, enemyAttack)

     playerHealth = Math.max(0,playerHealth - damage);
       // Log a resulting message to the console so we know that it worked.
       console.log(enemyName + " attacked " + playerName +". " + playerName + " now has " + playerHealth + " health remaining");
       // check enemy's health
       if(playerHealth <=0) {
         window.alert(playerName + " has died!")
         break
       }
       else{
         window.alert( playerName +" still has " + playerHealth+ " health left")
       }
   }
    };
var startGame = function(){
  playerHealth = 100
  playerAttack = 10
  playerMoney = 10
  for(var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0){
      window.alert( "Welcome to Robot Gladiators! Round " + (i + 1))
      var pickedEnemyName = enemyNames[i]
      enemyHealth = randomNumber(40,60)
    fight(pickedEnemyName)
    if (i < playerHealth > 0 && enemyNames.length - 1) {
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
    if (playerHealth > 0){
    window.alert("Great job, you've survied the game! You have a score of " + playerMoney + ".");
  } else{
    window.alert("You've lost your robot in battle.")
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
    var shopOptionPrompt = window.prompt("Would you like to REFILL your heatlh, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', 'LEAVE to make a choice")
    switch (shopOptionPrompt){
      case "refill": 
      case "REFILL":
        if(playerMoney >= 7){
          window.alert("Refilling player's health by 30 for 7 dollars.");
          playerHealth = playerHealth + 30;
          playerMoney = playerMoney -7;
        }
        else{
          window.alert("You don't have enough money!")
        }
        break;
      case "upgrade" :
      case "UPGRADE" :
        if(playerMoney >= 7){ window.alert("Upgrading players attack by 9 for 7 dollars.");
      playerAttack = playerAttack + 9;
      playerMoney = playerMoney - 7;
        }
        else{
          window.alert("You don't have enough money!")
        }
        break;
      case "leave" :
      case "LEAVE": window.alert("Leaving the store.")
      break;
      default: window.alert("You didn't pick a valid optoin. Try again.");
      shop();
      break;
    }
  };
  startGame()