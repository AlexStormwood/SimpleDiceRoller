function rollDice(diceSize){
    // Math.floor always rounds down, so dicesize of 6 would be 0-5
    // Add 1 to guarantee that it stays within sensible range, 
    // eg. diceSize of 6 means possible results are 1-6 
    let diceTotal = Math.floor(Math.random() * diceSize) + 1;

    // Find the relevant DOM element and update its content to show the value
    //document.getElementById("diceTotal").textContent = diceTotal;

    // Return the dice total so another function can use it
    return diceTotal;
}

function diceManager(){
    // Retrieve & set up any required data
    let diceSize = document.getElementById("diceSize").value;
    let diceCount = document.getElementById("diceCount").value;
    let diceResultContainer = document.getElementById("individualDiceTotals");
    let diceRolls = [];
    let diceOverallTotal = 0;

    // Perform each dice roll
    for (let index = 0; index < diceCount; index++) {
        diceRolls.push(rollDice(diceSize));
    }

    // Clear old dice rolls from the screen
    diceResultContainer.innerHTML = '';

    // This could be in the other for loop but I like to keep it separate
    // for "separation of concerns" and debugging purposes
    diceRolls.forEach(roll => {
        // Calculate & display the overall total for the combined dice roll
        diceOverallTotal += roll;
        // For performance reasons, it may be better to move this next line to be after the loop ends.
        // However, in slower/long dice rolls, this may create a cool one-by-one pop-in effect.
        document.getElementById("diceTotal").textContent = diceOverallTotal;

        // Place each individual dice roll result in its own section of the page
        let newDiv = document.createElement("div");
        let newContent = document.createTextNode(roll);
        newDiv.appendChild(newContent);
        diceResultContainer.appendChild(newDiv);
    });
}

