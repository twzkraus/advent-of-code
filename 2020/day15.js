/*
--- Day 15: Rambunctious Recitation ---
You catch the airport shuttle and try to book a new flight to your vacation island. Due to the storm, all direct flights have been cancelled, but a route is available to get around the storm. You take it.

While you wait for your flight, you decide to check in with the Elves back at the North Pole. They're playing a memory game and are ever so excited to explain the rules!

In this game, the players take turns saying numbers. They begin by taking turns reading from a list of starting numbers (your puzzle input). Then, each turn consists of considering the most recently spoken number:

If that was the first time the number has been spoken, the current player says 0.
Otherwise, the number had been spoken before; the current player announces how many turns apart the number is from when it was previously spoken.
So, after the starting numbers, each turn results in that player speaking aloud either 0 (if the last number is new) or an age (if the last number is a repeat).

For example, suppose the starting numbers are 0,3,6:

Turn 1: The 1st number spoken is a starting number, 0.
Turn 2: The 2nd number spoken is a starting number, 3.
Turn 3: The 3rd number spoken is a starting number, 6.
Turn 4: Now, consider the last number spoken, 6. Since that was the first time the number had been spoken, the 4th number spoken is 0.
Turn 5: Next, again consider the last number spoken, 0. Since it had been spoken before, the next number to speak is the difference between the turn number when it was last spoken (the previous turn, 4) and the turn number of the time it was most recently spoken before then (turn 1). Thus, the 5th number spoken is 4 - 1, 3.
Turn 6: The last number spoken, 3 had also been spoken before, most recently on turns 5 and 2. So, the 6th number spoken is 5 - 2, 3.
Turn 7: Since 3 was just spoken twice in a row, and the last two turns are 1 turn apart, the 7th number spoken is 1.
Turn 8: Since 1 is new, the 8th number spoken is 0.
Turn 9: 0 was last spoken on turns 8 and 4, so the 9th number spoken is the difference between them, 4.
Turn 10: 4 is new, so the 10th number spoken is 0.
(The game ends when the Elves get sick of playing or dinner is ready, whichever comes first.)

Their question for you is: what will be the 2020th number spoken? In the example above, the 2020th number spoken will be 436.

Here are a few more examples:

Given the starting numbers 1,3,2, the 2020th number spoken is 1.
Given the starting numbers 2,1,3, the 2020th number spoken is 10.
Given the starting numbers 1,2,3, the 2020th number spoken is 27.
Given the starting numbers 2,3,1, the 2020th number spoken is 78.
Given the starting numbers 3,2,1, the 2020th number spoken is 438.
Given the starting numbers 3,1,2, the 2020th number spoken is 1836.
Given your starting numbers, what will be the 2020th number spoken?

Your puzzle input is 1,0,16,5,17,4.
*/

/*
  traverse puzzle
  first 3 numbers are starters
  after that, follow a pattern:
    first time spoken: current player says 0
    otherwise: go backward through array and announce how long ago the number was spoken

  keep track of the last time a number was spoken (in an object) as well as the current index
  each time a number comes up:
    if it's in the object
      return the value of currentIdx - lastIdx
    if it's not in the obj
      return 0
    either way, save currentIdx in that place in the object

  ex:
input:   0, 3, 6
result:          0, 3, 3, 1, 0, 4, 0

*/

const puzzle = `1,0,16,5,17,4`;

const ex1 = `1,3,2`;
const expect1 = 1;
const ex2 = `2,1,3`;
const expect2 = 10;
const ex3 = `1,2,3`;
const expect3 = 27;
const ex4 = `2,3,1`;
const expect4 = 78;
const ex5 = `3,2,1`;
const expect5 = 438;
const ex6 = `3,1,2`;
const expect6 = 1836;

const solvePart1 = (puzzle, targetIdx) => {
  const nums = puzzle.split(',');
  const lastIndices = {};
  for (let i = 0; i < nums.length - 1; i++) {
    lastIndices[nums[i]] = i + 1;
  }

  let prevNum = nums[nums.length - 1];
  let i = nums.length;

  while (i < targetIdx) {
    if (lastIndices[prevNum]) {
      let newNum = i - lastIndices[prevNum];
      lastIndices[prevNum] = i;
      prevNum = newNum;
    } else {
      lastIndices[prevNum] = i;
      prevNum = 0;
    }
    i++;
  }
  return prevNum;
}

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('Failed. Expected', expected , 'but got', actual);
  }
}

assertEqual(solvePart1('0,3,6', 9), 4);
assertEqual(solvePart1(ex1, 2020), expect1);
assertEqual(solvePart1(ex2, 2020), expect2);
assertEqual(solvePart1(ex3, 2020), expect3);
assertEqual(solvePart1(ex4, 2020), expect4);
assertEqual(solvePart1(ex5, 2020), expect5);
assertEqual(solvePart1(ex6, 2020), expect6);

console.log('part 1 attempt is', solvePart1(puzzle, 2020));
// 1294 is correct

/*
--- Part Two ---
Impressed, the Elves issue you a challenge: determine the 30000000th number spoken. For example, given the same starting numbers as above:

Given 0,3,6, the 30000000th number spoken is 175594.
Given 1,3,2, the 30000000th number spoken is 2578.
Given 2,1,3, the 30000000th number spoken is 3544142.
Given 1,2,3, the 30000000th number spoken is 261214.
Given 2,3,1, the 30000000th number spoken is 6895259.
Given 3,2,1, the 30000000th number spoken is 18.
Given 3,1,2, the 30000000th number spoken is 362.
Given your starting numbers, what will be the 30000000th number spoken?

*/

const p2expect1 = 175594;
const p2expect2 = 2578;
const p2expect3 = 261214;
const p2expect4 = 6895259;
const p2expect5 = 18;
const p2expect6 = 362;

// assertEqual(solvePart1(ex1, 30000000), p2expect1);
// assertEqual(solvePart1(ex2, 30000000), p2expect2);
// assertEqual(solvePart1(ex3, 30000000), p2expect3);
// assertEqual(solvePart1(ex4, 30000000), p2expect4);
// assertEqual(solvePart1(ex5, 30000000), p2expect5);
// assertEqual(solvePart1(ex6, 30000000), p2expect6);

console.log('part 2 attempt is', solvePart1(puzzle, 30000000));
// 573522 is correct!
