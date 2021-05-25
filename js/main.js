// creating a RPG character Aurora
const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25

};

console.log(`Meet ${aurora.name}, she has ${aurora.health} health points and a strength of ${aurora.strength}`);

// aurora was harmed by a fire arrow and lost 20 health points
aurora.health -= 20;
console.log(`${aurora.name} was hit by a fire arrow and now she has only ${aurora.health} health points`);

// Adding a method to a RPG object

const kimfer = {
    name: 'Kimfer',
    health: 200,
    strength: 50,
    xp: 0,
    //returning kimfer character description
    describeKimfer() {
        return `Meet ${this.name}! He has ${this.health} health points and a strength of ${this.strength}. He have ${this.xp} experience points`;
    }
};
/* a way to describe the object kimfer 

console.log(`Meet ${kimfer.name}! He has ${kimfer.health} health points and a strength of ${kimfer.strength}`);

*/


/*
a better way to describe the object kimfer
Return the character description
function describe(character) {
    return `Meet ${kimfer.name}! He has ${kimfer.health} health points and a strength of ${kimfer.strength}`;
}
console.log(describe(kimfer));

THIS IS PROCEDURAL PROGRAMMING NOT OOP! 
*/

// The best way to describe the object kimfer (in my opinion it's cleaner and more organized)

console.log(kimfer.describeKimfer());

// kimfer learned a new attack and a new skill
kimfer. xp += 75;
console.log(kimfer.describeKimfer()); //xp is now 75





