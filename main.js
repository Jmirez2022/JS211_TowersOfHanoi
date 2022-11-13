'use strict';

const assert = require('assert');
const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2],
  b: [1],
  c: []
};


// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (firstMove, secondMove) => {
  // making certain moves legal
 if (

 !stacks[secondMove].length ||
  stacks[secondMove][stacks[secondMove].length - 1] > stacks[firstMove][stacks[firstMove].length - 1]
 
  ) {
  return true
  //if its not those moves return false
 } else {

  return false;

}
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // all numbers should be in stack b from biggest to smallest
  if (stacks['b'].length === 4) {
    console.log("You are a super star")
    return true
    //if false dont say you win
  } else {

    return false
    
  }
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // startStack is the piece you want to move and endStack is where you want it
 stacks[endStack].push(stacks[startStack].pop());
}




// When is this function called? What should it do with its argument?
const towersOfHanoi = (start, end) => {
  // how its played
  if (isLegal(start, end)) {
    movePiece(start, end);
    checkForWin();
  } else {
    //illegal move try again
    console.log("give it another go")
    
  }
  
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
