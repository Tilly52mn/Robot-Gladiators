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
   //repeat and execute as lon as the enemy-robot is alive
   while(enemyHealth > 0){
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose")
    //IF PALYER CHOOSES TO FIGHT, THEN FIGHT
    if(promptFight ==="fight" || promptFight ==="FIGHT"){
      //HAVE PLAYER ATTACK
      enemyHealth = enemyHealth - playerAttack
      console.log(playerName + " attacked " + enemyName +". " + enemyName + " now has " + enemyHealth + " health remaining");
      // check enemy's health
      if(enemyHealth <=0) {
        window.alert(enemyName + " has died!")  // Log a resulting message to the console so we know that it worked.
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
      }
      else{
        window.alert( playerName +" still has " + playerHealth+ " health left")
      }
      //if player chooses to skip
    } else if(promptFight ==="skip" || promptFight === "SKIP"){
      var confirmSkip = window.confirm("Are you sure you'd like to quit?")
      //if yes(true), leave fight
      if(confirmSkip){
        window.alert(playerName + "  has decided to skip this fight. Goodbye!")
        //subtrack moneyfor skipping
        playerMoney = playerMoney -2
      }
      //if no ask question again by running fight again
      else{
        fight()
      }
    } else{
      window.alert("You need to choose a valid option. Try again!")
    }
   }
 };
//execute fuction

for(var i = 0; i < enemyNames.length; i++){
  var pickedEnemyName = enemyNames[i]
  enemyHealth = 50
  fight(pickedEnemyName)
};