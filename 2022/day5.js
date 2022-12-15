/*
--- Day 5: Supply Stacks ---
The expedition can depart as soon as the final supplies have been unloaded from the ships. Supplies are stored in stacks of marked crates, but because the needed supplies are buried under many other crates, the crates need to be rearranged.

The ship has a giant cargo crane capable of moving crates between stacks. To ensure none of the crates get crushed or fall over, the crane operator will rearrange them in a series of carefully-planned steps. After the crates are rearranged, the desired crates will be at the top of each stack.

The Elves don't want to interrupt the crane operator during this delicate procedure, but they forgot to ask her which crate will end up where, and they want to be ready to unload them as soon as possible so they can embark.

They do, however, have a drawing of the starting stacks of crates and the rearrangement procedure (your puzzle input). For example:

    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
In this example, there are three stacks of crates. Stack 1 contains two crates: crate Z is on the bottom, and crate N is on top. Stack 2 contains three crates; from bottom to top, they are crates M, C, and D. Finally, stack 3 contains a single crate, P.

Then, the rearrangement procedure is given. In each step of the procedure, a quantity of crates is moved from one stack to a different stack. In the first step of the above rearrangement procedure, one crate is moved from stack 2 to stack 1, resulting in this configuration:

[D]        
[N] [C]    
[Z] [M] [P]
 1   2   3 
In the second step, three crates are moved from stack 1 to stack 3. Crates are moved one at a time, so the first crate to be moved (D) ends up below the second and third crates:

        [Z]
        [N]
    [C] [D]
    [M] [P]
 1   2   3
Then, both crates are moved from stack 2 to stack 1. Again, because crates are moved one at a time, crate C ends up below crate M:

        [Z]
        [N]
[M]     [D]
[C]     [P]
 1   2   3
Finally, one crate is moved from stack 1 to stack 2:

        [Z]
        [N]
        [D]
[C] [M] [P]
 1   2   3
The Elves just need to know which crate will end up on top of each stack; in this example, the top crates are C in stack 1, M in stack 2, and Z in stack 3, so you should combine these together and give the Elves the message CMZ.

After the rearrangement procedure completes, what crate ends up on top of each stack?
*/

const exampleDrawing1 = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 `;

const exampleSteps1 = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const drawing1 = `[T] [V]                     [W]    
[V] [C] [P] [D]             [B]    
[J] [P] [R] [N] [B]         [Z]    
[W] [Q] [D] [M] [T]     [L] [T]    
[N] [J] [H] [B] [P] [T] [P] [L]    
[R] [D] [F] [P] [R] [P] [R] [S] [G]
[M] [W] [J] [R] [V] [B] [J] [C] [S]
[S] [B] [B] [F] [H] [C] [B] [N] [L]
 1   2   3   4   5   6   7   8   9 `;

const steps1 = `
move 7 from 3 to 9
move 6 from 2 to 1
move 2 from 4 to 8
move 10 from 8 to 4
move 1 from 2 to 4
move 15 from 4 to 1
move 28 from 1 to 3
move 1 from 2 to 5
move 7 from 5 to 9
move 5 from 9 to 5
move 21 from 3 to 1
move 1 from 6 to 4
move 4 from 9 to 2
move 7 from 9 to 2
move 4 from 2 to 6
move 1 from 9 to 1
move 2 from 4 to 9
move 2 from 7 to 4
move 4 from 3 to 5
move 2 from 7 to 9
move 5 from 2 to 7
move 2 from 9 to 1
move 1 from 9 to 2
move 3 from 3 to 7
move 3 from 5 to 2
move 2 from 6 to 1
move 1 from 9 to 4
move 25 from 1 to 9
move 2 from 5 to 3
move 1 from 1 to 7
move 9 from 7 to 1
move 1 from 2 to 8
move 16 from 9 to 7
move 5 from 9 to 5
move 7 from 1 to 8
move 1 from 9 to 7
move 18 from 7 to 4
move 1 from 3 to 4
move 1 from 1 to 8
move 2 from 8 to 1
move 1 from 3 to 9
move 17 from 4 to 5
move 5 from 8 to 6
move 2 from 8 to 1
move 6 from 6 to 7
move 2 from 9 to 4
move 5 from 1 to 3
move 3 from 3 to 7
move 1 from 1 to 2
move 2 from 3 to 8
move 2 from 4 to 1
move 2 from 8 to 7
move 2 from 9 to 7
move 1 from 2 to 4
move 1 from 2 to 4
move 2 from 1 to 7
move 11 from 7 to 1
move 4 from 4 to 1
move 3 from 1 to 3
move 7 from 1 to 8
move 4 from 2 to 8
move 2 from 1 to 4
move 2 from 4 to 3
move 2 from 1 to 3
move 3 from 7 to 4
move 4 from 8 to 6
move 1 from 7 to 5
move 2 from 4 to 1
move 4 from 6 to 2
move 3 from 1 to 8
move 6 from 8 to 6
move 1 from 2 to 1
move 23 from 5 to 8
move 21 from 8 to 3
move 2 from 6 to 9
move 1 from 8 to 9
move 2 from 3 to 7
move 26 from 3 to 8
move 2 from 9 to 2
move 8 from 6 to 3
move 3 from 5 to 4
move 1 from 7 to 4
move 1 from 7 to 9
move 1 from 5 to 4
move 5 from 2 to 9
move 7 from 9 to 8
move 38 from 8 to 7
move 1 from 1 to 7
move 1 from 4 to 9
move 3 from 4 to 1
move 4 from 3 to 2
move 1 from 1 to 7
move 34 from 7 to 6
move 3 from 4 to 7
move 1 from 4 to 2
move 2 from 1 to 3
move 1 from 2 to 9
move 5 from 3 to 6
move 1 from 4 to 6
move 4 from 2 to 6
move 1 from 9 to 5
move 4 from 7 to 3
move 1 from 5 to 9
move 1 from 9 to 1
move 1 from 3 to 6
move 1 from 9 to 3
move 5 from 7 to 9
move 1 from 1 to 9
move 3 from 9 to 1
move 1 from 3 to 4
move 38 from 6 to 1
move 2 from 9 to 4
move 3 from 3 to 6
move 1 from 9 to 5
move 8 from 6 to 8
move 1 from 3 to 6
move 1 from 6 to 8
move 2 from 4 to 3
move 4 from 8 to 5
move 1 from 6 to 2
move 1 from 2 to 7
move 1 from 6 to 3
move 3 from 8 to 7
move 4 from 7 to 6
move 1 from 4 to 1
move 5 from 1 to 4
move 4 from 6 to 5
move 3 from 5 to 8
move 3 from 5 to 3
move 1 from 8 to 2
move 6 from 3 to 8
move 1 from 5 to 7
move 1 from 2 to 1
move 1 from 7 to 6
move 3 from 4 to 9
move 6 from 8 to 6
move 3 from 8 to 2
move 3 from 6 to 2
move 1 from 4 to 5
move 1 from 6 to 9
move 2 from 6 to 1
move 1 from 4 to 1
move 2 from 5 to 2
move 1 from 8 to 5
move 1 from 9 to 8
move 22 from 1 to 5
move 3 from 2 to 3
move 1 from 8 to 4
move 2 from 3 to 6
move 1 from 6 to 4
move 1 from 3 to 8
move 1 from 2 to 8
move 10 from 5 to 3
move 1 from 6 to 8
move 2 from 8 to 4
move 1 from 6 to 3
move 2 from 2 to 3
move 1 from 8 to 5
move 13 from 3 to 4
move 2 from 1 to 7
move 11 from 1 to 2
move 3 from 4 to 5
move 6 from 1 to 9
move 8 from 2 to 6
move 4 from 2 to 1
move 2 from 6 to 5
move 4 from 1 to 8
move 2 from 8 to 6
move 1 from 7 to 1
move 1 from 7 to 2
move 8 from 6 to 5
move 1 from 8 to 4
move 1 from 1 to 6
move 10 from 5 to 1
move 3 from 9 to 4
move 6 from 1 to 3
move 9 from 4 to 5
move 1 from 2 to 1
move 1 from 4 to 9
move 1 from 6 to 8
move 1 from 2 to 1
move 1 from 4 to 8
move 2 from 8 to 9
move 1 from 8 to 6
move 1 from 3 to 2
move 1 from 1 to 4
move 1 from 2 to 5
move 1 from 1 to 8
move 1 from 6 to 8
move 8 from 5 to 3
move 1 from 8 to 7
move 1 from 7 to 8
move 6 from 9 to 6
move 2 from 9 to 2
move 1 from 9 to 7
move 1 from 8 to 5
move 1 from 2 to 7
move 1 from 2 to 9
move 16 from 5 to 2
move 4 from 5 to 1
move 12 from 3 to 6
move 1 from 5 to 4
move 8 from 6 to 9
move 1 from 8 to 5
move 2 from 9 to 6
move 2 from 2 to 5
move 3 from 1 to 4
move 3 from 6 to 7
move 7 from 9 to 6
move 4 from 7 to 1
move 1 from 5 to 2
move 1 from 3 to 2
move 4 from 1 to 9
move 4 from 9 to 5
move 12 from 6 to 7
move 4 from 2 to 6
move 4 from 2 to 9
move 7 from 6 to 3
move 3 from 9 to 8
move 5 from 2 to 4
move 4 from 5 to 7
move 1 from 9 to 4
move 13 from 7 to 8
move 3 from 7 to 8
move 2 from 3 to 2
move 5 from 1 to 5
move 11 from 4 to 9
move 7 from 9 to 1
move 4 from 4 to 3
move 1 from 6 to 8
move 8 from 8 to 4
move 1 from 1 to 7
move 3 from 4 to 6
move 4 from 2 to 8
move 3 from 5 to 4
move 1 from 4 to 1
move 4 from 9 to 8
move 3 from 5 to 2
move 2 from 2 to 3
move 1 from 6 to 7
move 7 from 1 to 9
move 3 from 7 to 4
move 1 from 4 to 2
move 1 from 6 to 8
move 1 from 5 to 7
move 1 from 6 to 7
move 9 from 4 to 6
move 7 from 9 to 5
move 1 from 4 to 3
move 1 from 5 to 6
move 4 from 3 to 7
move 3 from 3 to 1
move 2 from 2 to 4
move 3 from 1 to 6
move 4 from 5 to 1
move 2 from 5 to 3
move 3 from 6 to 8
move 6 from 7 to 3
move 10 from 3 to 7
move 10 from 6 to 4
move 3 from 1 to 9
move 4 from 7 to 2
move 2 from 3 to 5
move 1 from 3 to 5
move 1 from 1 to 2
move 3 from 9 to 1
move 2 from 1 to 9
move 4 from 2 to 5
move 10 from 4 to 9
move 2 from 8 to 7
move 1 from 2 to 9
move 1 from 9 to 4
move 1 from 1 to 9
move 3 from 7 to 8
move 5 from 9 to 8
move 6 from 5 to 4
move 5 from 9 to 6
move 5 from 8 to 5
move 4 from 5 to 2
move 3 from 7 to 8
move 3 from 9 to 1
move 2 from 5 to 8
move 1 from 4 to 6
move 3 from 6 to 3
move 8 from 4 to 3
move 2 from 6 to 7
move 24 from 8 to 9
move 1 from 6 to 9
move 8 from 9 to 3
move 1 from 1 to 9
move 2 from 8 to 3
move 3 from 9 to 4
move 18 from 3 to 5
move 1 from 2 to 6
move 1 from 6 to 1
move 13 from 9 to 8
move 3 from 4 to 1
move 1 from 4 to 2
move 1 from 5 to 3
move 1 from 9 to 2
move 6 from 2 to 9
move 3 from 3 to 1
move 3 from 7 to 6
move 2 from 1 to 5
move 3 from 6 to 7
move 17 from 8 to 1
move 8 from 5 to 7
move 11 from 7 to 5
move 1 from 4 to 5
move 24 from 1 to 3
move 7 from 5 to 9
move 11 from 5 to 9
move 1 from 5 to 4
move 1 from 5 to 2
move 1 from 4 to 7
move 16 from 3 to 1
move 3 from 5 to 8
move 1 from 9 to 1
move 12 from 9 to 2
move 5 from 3 to 1
move 2 from 8 to 5
move 2 from 3 to 4
move 1 from 8 to 6
move 2 from 5 to 3
move 1 from 6 to 1
move 2 from 4 to 1
move 8 from 2 to 1
move 24 from 1 to 6
move 1 from 9 to 6
move 4 from 2 to 6
move 4 from 3 to 2
move 4 from 9 to 4
move 1 from 7 to 5
move 6 from 9 to 1
move 17 from 6 to 4
move 1 from 1 to 9
move 2 from 9 to 7
move 9 from 6 to 7
move 12 from 7 to 2
move 11 from 1 to 2
move 12 from 4 to 2
move 1 from 1 to 4
move 1 from 5 to 7
move 2 from 6 to 3
move 2 from 4 to 3
move 1 from 1 to 6
move 5 from 4 to 2
move 1 from 7 to 5
move 2 from 6 to 9
move 6 from 2 to 4
move 1 from 5 to 8
move 3 from 4 to 1
move 1 from 8 to 9
move 5 from 4 to 1
move 1 from 1 to 2
move 1 from 3 to 8
move 7 from 1 to 6
move 1 from 8 to 6
move 1 from 3 to 5
move 1 from 1 to 8
move 1 from 4 to 5
move 2 from 5 to 9
move 1 from 8 to 2
move 2 from 6 to 8
move 1 from 8 to 6
move 1 from 6 to 8
move 1 from 8 to 5
move 4 from 9 to 5
move 1 from 9 to 6
move 1 from 6 to 8
move 37 from 2 to 5
move 1 from 2 to 8
move 37 from 5 to 8
move 21 from 8 to 4
move 1 from 3 to 7
move 12 from 4 to 1
move 1 from 7 to 8
move 4 from 6 to 3
move 1 from 4 to 2
move 2 from 2 to 6
move 2 from 3 to 2
move 2 from 2 to 7
move 2 from 7 to 1
move 3 from 5 to 3
move 2 from 2 to 8
move 15 from 8 to 7
move 1 from 7 to 2
move 2 from 5 to 8
move 5 from 4 to 3
move 3 from 6 to 2
move 8 from 1 to 9
move 8 from 9 to 4
move 7 from 8 to 9
move 2 from 8 to 5
move 4 from 1 to 9
move 10 from 3 to 2
move 1 from 6 to 7
move 6 from 7 to 8
move 10 from 4 to 7
move 1 from 3 to 7
move 3 from 9 to 1
move 5 from 8 to 1
move 5 from 2 to 7
move 1 from 4 to 3
move 1 from 5 to 6
move 10 from 1 to 7
move 34 from 7 to 4
move 1 from 6 to 9
move 1 from 7 to 3
move 8 from 4 to 2
move 1 from 9 to 7
move 1 from 7 to 9
move 22 from 4 to 5
move 1 from 3 to 8
move 6 from 5 to 6
move 1 from 8 to 4
move 9 from 9 to 4
move 1 from 3 to 2
move 4 from 2 to 1
move 11 from 2 to 6
move 14 from 4 to 7
move 1 from 2 to 1
move 12 from 5 to 6
move 7 from 7 to 9
move 2 from 5 to 4
move 1 from 8 to 5
move 6 from 6 to 8
move 3 from 7 to 8
move 1 from 2 to 6
move 2 from 4 to 3
move 1 from 3 to 8
move 1 from 2 to 5
move 1 from 3 to 4
move 5 from 8 to 9
move 5 from 1 to 4
move 3 from 8 to 9
move 5 from 4 to 7
move 18 from 6 to 3
move 2 from 8 to 9
move 3 from 6 to 3
move 5 from 7 to 1
move 1 from 6 to 7
move 3 from 9 to 7
move 6 from 7 to 8
move 8 from 9 to 8
move 1 from 7 to 6
move 12 from 3 to 1
move 2 from 9 to 7
move 1 from 8 to 6
move 9 from 8 to 9
move 2 from 8 to 7
move 1 from 7 to 8
move 2 from 1 to 6
move 7 from 1 to 9
move 16 from 9 to 5
move 4 from 3 to 9
move 8 from 1 to 3
move 5 from 5 to 1
move 1 from 4 to 3
move 4 from 7 to 6
move 3 from 8 to 2
move 8 from 3 to 2
move 11 from 2 to 7
move 3 from 6 to 1
move 4 from 3 to 6
move 12 from 5 to 7
move 2 from 3 to 6
move 7 from 1 to 7
move 2 from 5 to 1
move 1 from 9 to 2
move 1 from 5 to 7
move 31 from 7 to 4
move 6 from 9 to 1
move 6 from 4 to 7
move 16 from 4 to 5
move 1 from 9 to 4
move 1 from 7 to 6
move 4 from 4 to 1
move 11 from 5 to 9
move 2 from 5 to 6
move 1 from 2 to 9
move 4 from 5 to 1
move 8 from 9 to 2
move 12 from 6 to 5
move 11 from 5 to 1
move 18 from 1 to 2
move 3 from 4 to 3
move 2 from 6 to 7
move 2 from 9 to 1
move 1 from 5 to 9
move 3 from 9 to 5
move 13 from 2 to 8
move 10 from 8 to 2
move 3 from 8 to 6
move 3 from 3 to 9
move 7 from 1 to 5
move 6 from 5 to 6
move 3 from 1 to 2
move 5 from 7 to 8
move 13 from 2 to 8
move 9 from 6 to 3`;

// i: drawing of crates and steps taken to move them
// o: list of the top crate from each stack

const createCargoState = (drawing) => {
  const rows = drawing.split("\n");
  const columns = {};
  let maxIndex;
  // grab column labels from bottom row
  rows[rows.length - 1]
    .split(" ")
    .filter(Boolean)
    .forEach((label) => {
      maxIndex = parseInt(label);
      columns[label] = [];
    });

  for (let i = rows.length - 2; i >= 0; i--) {
    const row = rows[i];
    for (let j = 1; j <= maxIndex; j++) {
      // values in row start at index 1 and recur every 4 chars
      const crateChar = row[4 * (j - 1) + 1];
      if (crateChar !== " ") {
        columns[j].push(crateChar);
      }
    }
  }
  return columns;
};

const modifyStacks = (stackState, numToMove, src, dest) => {
  let movingElement;
  while (numToMove) {
    movingElement = stackState[src].pop();
    stackState[dest].push(movingElement);
    numToMove--;
  }
  return stackState;
};

const getTopValFromEach = (stackState) => {
  let stringifiedCrates = "";
  let i = 1;
  let topVal;
  while (stackState[i]) {
    topVal = stackState[i].pop();
    stringifiedCrates += topVal;
    i++;
  }
  return stringifiedCrates;
};

const solvePart1 = (drawing, steps) => {
  // turn each stack into an array stack
  let stacks = createCargoState(drawing);
  // follow the steps by pop()-ing and push()-ing n times
  steps.split("\n").forEach((step) => {
    const instructionWords = step.split(" ");
    const count = instructionWords[1];
    const srcStack = instructionWords[3];
    const destStack = instructionWords[5];
    stacks = modifyStacks(stacks, count, srcStack, destStack);
  });
  return getTopValFromEach(stacks);
};

console.log("example 1 result is", solvePart1(exampleDrawing1, exampleSteps1));
console.log("part 1 result is", solvePart1(drawing1, steps1));
