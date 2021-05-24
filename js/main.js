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




