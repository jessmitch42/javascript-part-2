/* Create a constructor function called Warrior that can create 
new warriors. This function will take parameters name, and gender. 
name can be any string, gender can be M or F. 
It should create a warrior that has these properties:
name: the value that was passed to the constructor
gender: the value that was passed to the constructor
level: 1
weapon: wooden sword
power: a random number between 1 and 100

In addition to that, every object that gets created should have the 
following methods:
fight: will output to the console: " rushes to the arena with "
faceoff: faceoff takes one argument called opponent. Based on the 
power of each opponent, this method should output to the console 
which player won the fight based on their power. Be as creative as 
you like with the text of this method :)
Finally, create a bunch of warriors and make them fight together.
*/

function Warrior(name, gender) {
    this.name = name;
    if (gender === "M" || gender === "F") {
        this.gender = gender 
    };
    this.level = 1;
    this.weapon =  "wooden sword";
    this.power = Math.floor(Math.random()*100+1)
}

Warrior.prototype = {
    fight: function() {
        console.log(this.name + " rushes in the arena with " + this.weapon);
    },
    faceoff: function(opponent) {
        if (this.power > opponent.power) {
        console.log("After an epic fight, " + opponent.name + " dies in a pool of blood");
        }
        else if (this.power < opponent.power) {
        console.log("After an epic fight, " + this.name + " is dead, dead, dead! " + opponent.name + " wins!");
        }
        else {
        console.log("It's a draw! We're all just standing around |_(ツ)_/¯");
        }
}
};

var jess = new Warrior("Jess", "F");
var max = new Warrior("Maxime", "M");
var dennis = new Warrior("Dennis", "M");
var dylan = new Warrior("Dylan", "M");
var kash = new Warrior("Kash", "F");
var celine = new Warrior("Celine", "F");

jess.fight();
jess.faceoff(max);

dennis.fight();
dennis.faceoff(dylan);

kash.fight();
kash.faceoff(celine);
