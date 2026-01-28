const { testIngredients } = require ('./src/testIngredients');
const { Cauldron }  = require ('./src/cauldron');

console.log(testIngredients);

const potion = Cauldron.createPotion(testIngredients);

console.log(potion);