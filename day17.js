/*
--- Day 17: Conway Cubes ---
As your flight slowly drifts through the sky, the Elves at the Mythical Information Bureau at the North Pole contact you. They'd like some help debugging a malfunctioning experimental energy source aboard one of their super-secret imaging satellites.

The experimental energy source is based on cutting-edge technology: a set of Conway Cubes contained in a pocket dimension! When you hear it's having problems, you can't help but agree to take a look.

The pocket dimension contains an infinite 3-dimensional grid. At every integer 3-dimensional coordinate (x,y,z), there exists a single cube which is either active or inactive.

In the initial state of the pocket dimension, almost all cubes start inactive. The only exception to this is a small flat region of cubes (your puzzle input); the cubes in this region start in the specified active (#) or inactive (.) state.

The energy source then proceeds to boot up by executing six cycles.

Each cube only ever considers its neighbors: any of the 26 other cubes where any of their coordinates differ by at most 1. For example, given the cube at x=1,y=2,z=3, its neighbors include the cube at x=2,y=2,z=2, the cube at x=0,y=2,z=3, and so on.

During a cycle, all cubes simultaneously change their state according to the following rules:

If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. Otherwise, the cube becomes inactive.
If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive.
The engineers responsible for this experimental energy source would like you to simulate the pocket dimension and determine what the configuration of cubes should be at the end of the six-cycle boot process.

For example, consider the following initial state:

.#.
..#
###
Even though the pocket dimension is 3-dimensional, this initial state represents a small 2-dimensional slice of it. (In particular, this initial state defines a 3x3x1 region of the 3-dimensional space.)

Simulating a few cycles from this initial state produces the following configurations, where the result of each cycle is shown layer-by-layer at each given z coordinate (and the frame of view follows the active cells in each cycle):

Before any cycles:

z=0
.#.
..#
###


After 1 cycle:

z=-1
#..
..#
.#.

z=0
#.#
.##
.#.

z=1
#..
..#
.#.


After 2 cycles:

z=-2
.....
.....
..#..
.....
.....

z=-1
..#..
.#..#
....#
.#...
.....

z=0
##...
##...
#....
....#
.###.

z=1
..#..
.#..#
....#
.#...
.....

z=2
.....
.....
..#..
.....
.....


After 3 cycles:

z=-2
.......
.......
..##...
..###..
.......
.......
.......

z=-1
..#....
...#...
#......
.....##
.#...#.
..#.#..
...#...

z=0
...#...
.......
#......
.......
.....##
.##.#..
...#...

z=1
..#....
...#...
#......
.....##
.#...#.
..#.#..
...#...

z=2
.......
.......
..##...
..###..
.......
.......
.......
After the full six-cycle boot process completes, 112 cubes are left in the active state.

Starting with your given initial configuration, simulate six cycles. How many cubes are left in the active state after the sixth cycle?

*/

// If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. Otherwise, the cube becomes inactive.
// If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive.

/*
  iterate over the entire system 6 times--6 cycle boot process
  rules:
    active cube, 2-3 neighbors active: remains active. Otherwise, turns to inactive
    inactive cube, 3 neighbors are active: becomes active
  26 neighbors: 3x3x3 cube, excluding current
    if x, y, z are i, j, k:
    iterate from i - 1 to i + 1
      iterate from j - 1 to j + 1
        iterate from k - 1 to k + 1
          if (i === x && j === y && k === z), skip

  ex:

  z=0, start:
  .#.
  ..#
  ###

  z=0, after 1 round:
  #.#
  .##
  .#.

  */

 const puzzle =
 `#...#...
 #..#...#
 ..###..#
 .#..##..
 ####...#
 ######..
 ...#..#.
 ##.#.#.#`;

  const solvePart1 = (puzzle, rounds) => {
    let grid = puzzle.split('\n').map(row => row.split(''));
    let z = 0;
    let changeToActive = [];
    let changeToInactive = [];

    const countActiveNeighbors = (x, y, z) => {
      let numActive = 0;
      for (let i = y - 1; i <= y + 1; i++) {
        for (let j = x - 1; j <= x + 1; j++) {
          for (let k = z - 1; k <= z + 1; k++) {
            if (!(i === y && j === x && k === z)) {
              if (grid[i][j][k] === '#') {
                numActive++;
              }
            }
          }
        }
      }
      return numActive;
    };

    const makeActive = (x, y, z) => {
      changeToActive.push([x, y, z]);
    };

    const makeInactive = (x, y, z) => {
      changeToInactive.push([x, y, z]);
    };

    const makeActiveChanges = () => {
      let copy = JSON.parse(JSON.stringify(grid));
      changeToActive.forEach([x, y, z] => {
        copy[y][x][z] = '#';
      });
      changeToInactive.forEach([x, y, z] => {
        copy[y][x][z] = '.';
      });

      changeToActive = [];
      changeToInactive = [];
      return copy;
    }

    for (let numRounds = 0; numRounds < rounds; numRounds++) {
      for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
          let neighborsActive = countActiveNeighbors(x, y, z);
          console.log(neighborsActive, x, y, z);
          if (neighborsActive === 3) {
            makeActive(gridCopy, x, y, z);
          } else if (isActive(x, y, z) && neighborsActive !== 2) {
            makeInactive(gridCopy, x, y, z);
          }
        }
      }
      grid = makeActiveChanges();
    }
  }
