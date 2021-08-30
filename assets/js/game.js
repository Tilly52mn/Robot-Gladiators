var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "AMy Android", "Robo Trumble"];
var enemyHealth = 50
var enemyAttack = 12
  window.alert("Welcome to Robot Gladiators!")
  var fight = function(enemyName){
    while(playerHealth > 0 && enemyHealth > 0){
     var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose")
 
     if(promptFight ==="skip" || promptFight === "SKIP"){
       var confirmSkip = window.confirm("Are you sure you'd like to quit?")
       //if yes(true), leave fight
       if(confirmSkip){
         window.alert(playerName + "  has decided to skip this fight. Goodbye!")
 
         playerMoney = playerMoney -10
         console.log("playermoney", playerMoney)
         break;
       }
     }
     //IF PALYER CHOOSES TO FIGHT, THEN FIGHT
     //if(promptFight ==="fight" || promptFight ==="FIGHT"){
       //HAVE PLAYER ATTACK
       enemyHealth = enemyHealth - playerAttack
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
     playerHealth = playerHealth - enemyAttack;
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
      enemyHealth = 50
    fight(pickedEnemyName)
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
    break;
  }
  }
  startGame()

startGame()