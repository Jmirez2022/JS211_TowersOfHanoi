// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!



// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.



let design = `
<div id="top-row" data-row="top" class="red row" onclick="selectRow(this)"></div>
      <div id="middle-row" data-row="middle" class="yellow row" onclick="selectRow(this)"></div>
      <div id="bottom-row" class="green row" data-row="bottom" onclick="selectRow(this)">
        <div id="4" data-size="4" data-color="yellow" class="stone" ></div>
        <div id="3" data-size="3" data-color="red" class="stone" ></div>
        <div id="2" data-size="2" data-color="green" class="stone" ></div>
        <div id="1" data-size="1" data-color="blue" class="stone" ></div>
`

const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  stone = selectedRow.removeChild(selectedRow.lastChild);
  console.log(stone)
}

const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row") {
  
  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)

  pickUpStone(row.id)
} 
}

const dropStone = (rowID, stone) => {
  document.getElementById(rowID).appendChild(stone)
  stone = null
}
// this function can be called to get the last stone in the stack
// but there might be something wrong with it...

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}



// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

