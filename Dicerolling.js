

function rollDice(){

const numOfDice = document.getElementById("numOfDice").value;
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");
const values = [];
const images = [];

for(let i = 0; i < numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);//representation of an HTML file
    }//${value}- what value we get from the random rolling the picture name will match the value
    //example: my picture name for 5 doted dice is 5.png, the moment we roll 5 it will take the 5.png picture
    // so gotta be sure the "value" matches with the name of the correct picture.
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
}
const x = "Jabuka";

;
console.log(x);