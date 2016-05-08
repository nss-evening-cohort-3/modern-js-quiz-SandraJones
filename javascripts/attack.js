"use strict";
//must have jshint

var robotOneHealth;
var robotTwoHealth;

var RobotBuilder = (function(originalRobotBuilder){

//set robotOne's health to a variable, so it can be changed
originalRobotBuilder.setRobotOneHealth = function(robotOne) {
	robotOneHealth = robotOne.health;
};
//set robotTwo's health to a variable, so it can be changed
originalRobotBuilder.setRobotTwoHealth = function(robotTwo) {
	robotTwoHealth = robotTwo.health;
};

//creates a random healing function for robotOne or robotTwo
originalRobotBuilder.getHealthHealer = function(min, max) {
	return Math.random() * (max - min) + min;
};

originalRobotBuilder.healRobotOne = function() {
	var healerMist = Math.floor(RobotBuilder.getHealthHealer(20, 75));
	robotOneHealth += healerMist;
};

originalRobotBuilder.healRobotTwo = function() {
	var healerMist = Math.floor(RobotBuilder.getHealthHealer(20, 75));
	robotOneHealth += healerMist;
};

//main attack function for game play
originalRobotBuilder.attack = function (robotOne, robotTwo) {
	robotOneHealth -= RobotBuilder.attackDamage(robotTwo)
	robotTwoHealth -= RobotBuilder.attackDamage(robotOne)
	originalRobotBuilder.checkHealth(robotOneHealth, robotTwoHealth);
};

// --- Calculates the amount of damage caused by adding randomness for extra fun --- //
  originalRobotBuilder.attackDamage = function (char) {
    // --- Calculates a random damage amount
    let damageOutput = char.weapon.damage + Math.floor(Math.floor(Math.random() * char.strength) / 10)
    return damageOutput;
  };

  // --- Checks to see if either player is dead (at or below 0 points) --- //
  originalRobotBuilder.checkHealth = function(robotOne, robotTwo) {

    if (robotOneHealth <= 0) {
      // --- output message that robotTwo has won the game
      RobotBuilder.outputWinner("robotTwo");
    } else if (robotTwoHealth <= 0) {
      // --- output message that robotOne has won the game
      originalRobotBuilder.outputWinner("robotOne");
    } else {
      // --- If neither robot is destroyed, give stats so play can continue
     originalRobotBuilder.outputBattleStats(robotOne, robotTwo);
    }
  };
	return originalRobotBuilder;

})(RobotBuilder || {} );