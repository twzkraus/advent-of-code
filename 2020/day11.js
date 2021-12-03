/*
--- Day 11: Seating System ---
Your plane lands with plenty of time to spare. The final leg of your journey is a ferry that goes directly to the tropical island where you can finally start your vacation. As you reach the waiting area to board the ferry, you realize you're so early, nobody else has even arrived yet!

By modeling the process people use to choose (or abandon) their seat in the waiting area, you're pretty sure you can predict the best place to sit. You make a quick map of the seat layout (your puzzle input).

The seat layout fits neatly on a grid. Each position is either floor (.), an empty seat (L), or an occupied seat (#). For example, the initial seat layout might look like this:

L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL
Now, you just need to model the people who will be arriving shortly. Fortunately, people are entirely predictable and always follow a simple set of rules. All decisions are based on the number of occupied seats adjacent to a given seat (one of the eight positions immediately up, down, left, right, or diagonal from the seat). The following rules are applied to every seat simultaneously:

If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
Otherwise, the seat's state does not change.
Floor (.) never changes; seats don't move, and nobody sits on the floor.

After one round of these rules, every seat in the example layout becomes occupied:

#.##.##.##
#######.##
#.#.#..#..
####.##.##
#.##.##.##
#.#####.##
..#.#.....
##########
#.######.#
#.#####.##
After a second round, the seats with four or more occupied adjacent seats become empty again:

#.LL.L#.##
#LLLLLL.L#
L.L.L..L..
#LLL.LL.L#
#.LL.LL.LL
#.LLLL#.##
..L.L.....
#LLLLLLLL#
#.LLLLLL.L
#.#LLLL.##
This process continues for three more rounds:

#.##.L#.##
#L###LL.L#
L.#.#..#..
#L##.##.L#
#.##.LL.LL
#.###L#.##
..#.#.....
#L######L#
#.LL###L.L
#.#L###.##
#.#L.L#.##
#LLL#LL.L#
L.L.L..#..
#LLL.##.L#
#.LL.LL.LL
#.LL#L#.##
..L.L.....
#L#LLLL#L#
#.LLLLLL.L
#.#L#L#.##
#.#L.L#.##
#LLL#LL.L#
L.#.L..#..
#L##.##.L#
#.#L.LL.LL
#.#L#L#.##
..L.L.....
#L#L##L#L#
#.LLLLLL.L
#.#L#L#.##
At this point, something interesting happens: the chaos stabilizes and further applications of these rules cause no seats to change state! Once people stop moving around, you count 37 occupied seats.

Simulate your seating area by applying the seating rules repeatedly until no seats change state. How many seats end up occupied?
*/

const puzzle = `LLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.L.LLLLLL.LLLLLL.LLL.LLLLLLLL.LLLLL.L.LLLLLLLLLLLLLLLL.LLLLLLL
LLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLL.LLLLLLLLLLLLL.L.LLLLLLLLLL.LLLLLL.LLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLL.LLL..LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL
LLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.L.LLLLLLLLLLLLLLLL.LLLLL.L
LLLLL.LLLLLLLLL.LLLLLLL.LLLL.L.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL
L.LLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLLLLL.LL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL
LLLLLLLLLLLLLLLLLLL.LLL.LLLLLL.L.LLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLL
LLLLL.LLLLLLLLL.LLLLLLLLLLL.LL.LLLLL.LLLLLL.LL.LLLLLLLL..LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL
LL.LL.LLL.LLLLLLLLLLLLL.LLLL.L.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.L.LLLLLLL
......L....L...L...L.....L........LLL..LL..LL..L.L..LL.L..L.....LL......L.LLL.L..L....LLL.......LL
LLLLL.LLLLLLLL.LLLLLLLL.LLLLL..LLLLL.LLL.LLLL..LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLL.LLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LL..L.L
LLLLL.LLLLLLL...LLLLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLL
LLLLL.LLLLLLLL..LLLLLLL.LLLLL.LL.LLL.LLLLLLLLL.LLL.LLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLL.LL.LLLLLLLLLLLL..LLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLL.LL.LLLLLL.LLLLLL.LLLLLLL
LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLL.LL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LL.LLLL
L.LL..LLLLLLLLL.LLLLLLL.L.LLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLL.LLLLLLLLLLLLLL
.L.......L..LL.....L.L.....L..............L.L.L.LL..LL.L.L..LLL.L..LL.............LLL.L......L.LL.
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LL.LLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.L.LLLL.LLLLLLL
LLLLL.LLL.LLLLL.LLLLLLL.LLLLLL..LLLLLLLLLLLLLLLLLLLL.LLL.L.LLLLLLLLLLLLLL.LLLLLLLLLL.LLLLL..L.LLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLL..LLLLLL.LLLLLLLLL.LLLLLLL.LL.LL.
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLL.L.LL.LLLLL..L..LLL.L.LLLLLLL..LLLLLLLL..LLLLL.LLLLLLL
LLLLL.LLL.LLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLLL.LLL.LLLLL.LL.LL.LLLL.LLLLLL.LL.LLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLL..LLLLLLLLLLLLL.L.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LL.LLLL
LLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.L.LLL.LLLLLL.LL.LLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL.LLL.LLLLLLLLLL
......L.....L...LL.L.L..L...L....L...LLL...LLLLL..L.....L.....L..L......L...L.L.......L..L.LL...L.
LL.LLL.LLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL.LL.LLLL.LLLLLLLLL.LL.LLLLLLLLLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLL..LLLLLLLLL..LLLLLLLL.LLLL.LLL..LLLLLLLLLLLLLLLL.LLLL.L.LLLLLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL..LLLLLL.LLLLLL.LLLLLL.LL.LLLLLLL
LLLLL..LL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL.LLLL..LLLLLLL
.LLL...LL.....L.L..L.LL..LL......LL.L.L........L.L.....LLLL.L.L.......L......LL.....LLLL....L.L.LL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LL.LLLL.LLLLLLLLLLLLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL
LLLL..LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL.L..LLLLLLL..LLLL.L.LLLLLLLLL.LLLLLL.LLLLLLL
LLLLLLLLLLLL.LL.LLLLLLL.LLLL.L.LLLLLLLLLLLL.LL.LLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL..LLLLL.LLLLLLL
LLLLLLLLLLL.LLL.LLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLLLLLLLLLL.LLLL.LLL.LLLLLLLLLLLLLLL.L.LLLLLLLLLLLLLL
.L.L...L...L.....L...LLLLLLL.LL....LL..LLL...L...L.LLL..L.L...L.L.L....L.LL.LLL..L....L..LL..L...L
LLLLLLLLLLL.LL..LLLL..L.LLLLLL.LLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL....LLLLLLLLLLL
LLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLL.LL.LLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLLL.LLLLLLLL.LLLL..LLL.LLLLLLLLLLLLLLL.LLLLLL.L.LLLL.LL.LLLL.LLLLLLLLLL..LLLLLLL
LLLLL..LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLL
LLLLL.LLLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.
LLLLL.LLLLLLLLLLLLL.LLL.LLLLLL..LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLL..LLLL.LLLL.LLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL
LLLLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLL.L.LLLLLLLLL..LLLLL.LL..LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL
L..L.L.LLL.LL.......LL.LL..LL.L...L..LLL........L.LL....LL...LL.L.....LL......L.L.L...L.L.L..L..L.
LLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LLLLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLL..LLLL.LL.LLLLLLLLL.LLLLLL.LLLLLLL
LL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLL.LLLL.LLLL.LLLLLL.L.LLLLL
LLLLL.LLLLLLL.L.L.L.LLL..LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLL.LLLLLLLLLLLLLL.LLLLL
LL....LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL
L.LLL.LLLLLLLLL.LL.LL.L.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL..LLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL..LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL
LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLL.LLLL.LLLLLLLL..LLLLLLLLLLLLLLL..LLLLLL..L.LLLL
LLLLL.LLL.LL.LL.L.LLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL
..LL....L.LL...L.......L.L...L.L..LLL....L...L.L..L...L......L...LLL.L.L...L..L.LL...L..L..L.L...L
LLLLL.LLLLLL....LLLLLLL.LLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLL..LLLLLL.LLLLLLL
LLLLL..LLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LL.LLLLLLLLLL.LLLL..LLLLLLLLLLLLL.L.LLLLLLLLLLLLLLLL.LLLL.LL
LLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLL.L.LLLLLLL
LLLLL.LLLLLLLLL.L.LLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLL.LLLLL..LLLLL.LLLLLLL
LLLL..LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLL.L
LLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLL.LLLLLLLLLLLLL.LLLLLLLLLLLL.L
LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL..LLLLLLLLL.LLLLLL.LLLLLLL
LLLLLLLLLLLLLLLLLLLLLLL.LL.LLL.LLLLL.LLLLLLLLL.LLLL.LLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLL.LL
LLLLL.LLLLLLLLL.LLLLLLL..LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL.L.LLLL.LLLL.LL
.L.....L.LL.......L.L..L.L...LLL.L.LL..LLL..L.L....L........L..L.L...L....L...L.LL..L.....L..LL..L
LLLLL.LLLLLLLLL.LLLLLLL.LLLL.LLL.LLLLLLLLLLLLL.LLLLLLLLL.LL.LLLLL.LLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLL
LLLLLLLLLLLLLLL.LL.LLLL.LLLLLL.LLLLL.LL.LLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLL
LLLLL.LLLL..LLL.LLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL..LL.LLL
LLLLL.LLLLLLLLLLLLLLLLLLLLLL.L.LLLLLL.L.LLLLLLLLLLL.LLLL.LL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLL..LLLLLLL
LLLLL.L.LLLLLL..LLLLL.L.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLL.LLLLLL..LLLLLLLLLLLLLLLLLLLLLLLL
LL.LL.LLLLLLLL.LLLLLLL.LLL.LLL...LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LL.L.LLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLL.LL.LLLLLL.LL.LLLL
LLLLL.LLLLLLLLL.LLLLLLL.LLLLL..LLLLL.LLL.LLLLLLLLL.LLLLL.LLLLLL.L.LLLLLLL.LLLLLL.LL.LLLLL.LLLLLLLL
LLLLL.LLL.LLLLL.LLLLLLLLLL.LLL.LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
........LL..LLL.....L.L...LLL...L.........L.L...L..L...LL.L.....L....L....L.....L....L....L.LLL...
LLLLL.LLLLL..LLLLLLLLLLLLL.LLL.LLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLLLL.LLL.LL.LLLLLLL
LLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLL.LLLL.LL.LL
LL.LL.LLLLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLLLLLLLLL
LLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLL.LLLLLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLL.LLLLL.L
LLLLL..LLLLLLLL.LLLLLLL.LLLLLLLLL.LL.LLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL
LLLLLLLLLLLLLLL.LLLLLL..LLLLLL.LLLLL.LLLLLLLL.LL.LLLLLLL.LLLLL.LL.LLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL
L.LL.....LL......LL.L.LL...LL..........LL.LLL...L..L..LL....L......L.....LL.....LL.L..L.LL.L.L....
LLLLL.LLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLL.LL.L.LLLLL.LLLLLLLLLL.LLLLLLLLLLLLLL.L.LLLLLLL
LLLLLLL.LLLLLLL.LLLLLLL.LLLLLL.LL.LLLLLLLLLLLL.LLLLLLLLL.L.LLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL
LLLLLLLLLLLLLLL.LL.LLLL.LLLLLL.LL.LL.LLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL
LLLLL.LLLLLLLLL.LLLLLL..LLL.LL.LLLLL.LLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLL.LLLL.L.
LLLLL.LLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLL.LL
LLLLL.LLLLLLLLL..LLLLLL.LLLLLL.LLLL.LLLLLL.LLL.LLLLL.LLL.LLLLLLL..LLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLL`;

const ex = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

// If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
// If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
// Otherwise, the seat's state does not change.
// Floor (.) never changes; seats don't move, and nobody sits on the floor.

const solvePart1 = (puzzle) => {
  // i: puzzle
  // o: # of seats occupied when no seats change anymore

  const seats = puzzle.split('\n').map(row => row.split(''));

  const isSeat = (i, j) => {
    return seats[i][j] === 'L' || seats[i][j] === '#';
  }

  const isEmpty = (i, j) => {
    return seats[i][j] === 'L';
  }

  const countOccupiedNeighbors = (row, col) => {
    let neighbors = [];
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (!(i === row && j === col)) {
          neighbors.push([i, j]);
        }
      }
    }

    let countOcc = 0;
    neighbors.forEach(neighbor => {
      if (isSeat(...neighbor) && isEmpty(...neighbor)) {
        countOcc++;
      }
    });

    return countOcc;
  }

  const fillSeat = (i, j) => {
    seats[i][j] = '#';
  }

  const clearSeat = (i, j) => {
    seats[i][j] = 'L';
  }

  // visit each seat, check if its neighbors and decide whether it should be filled
  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      let numOcc = countOccupiedNeighbors(i, j);
      if (numOcc === 0 && isSeat(i, j)) {
        fillSeat(i, j);
      } else if (numOcc >= 4 && isSeat(i, j)) {
        clearSeat(i, j);
      }
    }
  }
  console.log(seats);
};

solvePart1(ex);