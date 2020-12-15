/*
--- Day 12: Rain Risk ---
Your ferry made decent progress toward the island, but the storm came in faster than anyone expected. The ferry needs to take evasive actions!

Unfortunately, the ship's navigation computer seems to be malfunctioning; rather than giving a route directly to safety, it produced extremely circuitous instructions. When the captain uses the PA system to ask if anyone can help, you quickly volunteer.

The navigation instructions (your puzzle input) consists of a sequence of single-character actions paired with integer input values. After staring at them for a few minutes, you work out what they probably mean:

Action N means to move north by the given value.
Action S means to move south by the given value.
Action E means to move east by the given value.
Action W means to move west by the given value.
Action L means to turn left the given number of degrees.
Action R means to turn right the given number of degrees.
Action F means to move forward by the given value in the direction the ship is currently facing.
The ship starts by facing east. Only the L and R actions change the direction the ship is facing. (That is, if the ship is facing east and the next instruction is N10, the ship would move north 10 units, but would still move east if the following action were F.)

For example:

F10
N3
F7
R90
F11
These instructions would be handled as follows:

F10 would move the ship 10 units east (because the ship starts by facing east) to east 10, north 0.
N3 would move the ship 3 units north to east 10, north 3.
F7 would move the ship another 7 units east (because the ship is still facing east) to east 17, north 3.
R90 would cause the ship to turn right by 90 degrees and face south; it remains at east 17, north 3.
F11 would move the ship 11 units south to east 17, south 8.
At the end of these instructions, the ship's Manhattan distance (sum of the absolute values of its east/west position and its north/south position) from its starting position is 17 + 8 = 25.

Figure out where the navigation instructions lead. What is the Manhattan distance between that location and the ship's starting position?
*/

const puzzle = `R180
E1
N1
R90
E4
F84
W3
F19
E5
N1
W5
W4
R90
S1
F70
R90
W2
S3
L180
E2
R90
E1
R90
N2
E3
F55
W3
R90
S2
E4
L90
F33
W4
S3
F11
N4
W4
F88
W3
F62
L90
S3
W3
N1
E3
E2
N1
E3
S3
E5
S4
W5
L90
W5
R90
E4
F36
N4
E4
E5
F47
R90
N3
E3
L180
S5
R90
S5
W2
S3
F43
W2
R180
W2
S2
L180
E2
F49
L90
F77
S5
E1
S2
F39
L180
F12
W1
L90
F60
S2
E3
N1
E5
R90
E1
N4
W4
S4
E2
L90
F100
E3
F58
S2
E4
F83
W3
N1
R90
F99
W5
W4
F19
N3
W1
W5
F70
R180
R90
F58
E5
N3
R90
N4
F86
N4
F70
L90
F36
R90
S4
R180
N5
F81
W5
R90
E5
L90
F73
S5
E3
N1
F27
E2
N3
L180
W2
F24
N2
L90
F69
N2
E3
F49
L90
S4
W5
F18
R180
F62
S2
F65
E3
F100
N1
F96
W1
F75
L180
W2
S2
F93
E5
S3
R90
S2
F34
R90
F83
S1
W1
F58
L180
N4
E1
R90
W2
F93
S3
F20
R90
N3
E3
N3
L90
F8
S3
F18
S3
N2
F6
L270
F70
W5
S3
F54
E2
F75
E3
R90
N2
W3
L90
E4
F58
N5
F97
W2
L90
W5
S2
W1
S5
F85
N1
E1
N4
E4
L90
E1
R90
S5
L180
R270
N1
L90
E4
N3
F45
N2
F68
R90
F36
N5
F82
S5
E4
R180
S2
L180
N3
R270
W5
F70
L90
W5
F80
W4
N2
R90
S3
W1
F23
N1
W1
N4
F70
S3
L180
F57
R90
L90
F55
L90
N4
F87
L90
F1
L270
F17
N5
R180
F84
R90
W5
F7
W1
S1
E3
F46
S5
E2
F23
R90
E4
W2
F96
E5
L90
F65
F3
S5
E5
N3
W4
L90
S2
F57
E1
R90
F68
E3
L90
W1
F29
N5
W5
N1
F95
N1
L90
F31
S5
L180
N2
W5
R90
F27
E1
R90
E3
S5
F10
R90
N4
E2
F25
S4
E5
F51
N3
W2
L90
S3
L180
F17
E4
F93
E3
L90
F41
L90
S5
L90
W5
N1
F81
L90
E4
W2
R90
W1
S5
R90
F39
W3
R90
N5
E1
L90
F82
S3
R90
W4
F66
F4
L90
F77
R90
E1
L90
F53
S4
F35
W1
F64
R90
F9
S1
E1
L90
W4
R90
S2
W5
R90
S4
L90
N3
F8
L180
N5
E5
N4
F35
N5
W1
N1
E5
F15
R180
F92
W3
L90
F4
L90
E1
S3
W3
R90
F37
N5
F19
S2
F98
L90
F24
W3
F68
N5
R90
W3
L90
W3
L90
S1
L90
S4
W3
F56
N4
R90
E3
W1
L90
E4
N3
R180
E1
S1
W2
R90
N3
F82
N2
F37
S3
L180
E2
L180
F6
N2
F96
E2
R180
E2
W3
R90
E2
S5
S1
F23
R90
W5
F75
S1
L90
S3
E1
F83
W4
L180
W5
L90
N1
E1
S2
F17
L90
S2
F53
R90
S3
N3
W1
N4
L180
L90
E3
F9
S5
F24
W3
E5
N2
F73
N1
F28
N2
W4
N3
F53
E5
F47
W2
F60
L90
E2
F19
S1
F63
W5
F100
N3
L180
F83
N4
W5
F37
S1
F50
E1
N2
W3
R90
F85
S4
F72
N4
L90
F48
R90
F99
R90
F58
W3
W4
F64
E1
R90
F74
L90
F23
N3
N3
E1
S1
W5
L180
F98
L90
F36
W4
S2
W3
F9
F72
W5
F78
N2
F65
S3
F47
S5
R90
F68
L180
W2
F7
E2
E3
S4
R90
N2
L180
W2
R180
E4
R90
W3
L90
E4
F54
L180
E2
F6
W5
F82
E4
R90
E4
F25
N2
R270
N4
F18
N5
R90
S3
R90
F38
R90
F97
W4
F85
S4
F56
E4
S1
F40
W3
F52
L90
F76
N4
F15
S2
F22
S5
L180
F91
L180
F8
L90
E4
N4
F67
L90
S3
R180
R90
N4
F71
W3
F34
E2
N1
F43
W5
L180
N5
W2
F42
R90
W3
F39
E1
S2
L180
N5
E3
N5
F28
E1
R90
S3
F40
L90
S2
S2
L90
W5
L90
F93
R180
W4
S4
W4
F100
S3
R90
E2
L180
W1
E3
S5
L90
F87
N1
R90
F3
R90
E5
R90
S3
F45
L90
S2
F42
R90
F95
L90
E1
N3
R90
F73
S3
E1
L90
S2
E3
L90
L270
F38
S5
R90
F42
L90
N1
F7
S3
F65
N2
F42
L180
W5
S4
E4
F65
S4
E5
F51
E4
R180
F70
R90
F28
N5
W5
N1
F96
L90
W4
S3
W3
F89
W1
L90
F75
L270
S3
R90
L90
F7
E2
F24
R180
S2
L180
F48
R90
F37
W2
R90
W4
L90
W3
F81
E4
N2
F39
E4
N1
W1
L90
F59`;

const solvePart1 = (puzzle) => {
  //              N  E
  let position = [0, 0];
  const directions = {
    0: {
      val: 0,
      letter: 'E',
    },
    90: {
      val: 90,
      letter: 'S',
    },
    180: {
      val: 180,
      letter: 'W',
    },
    270: {
      val: 270,
      letter: 'N',
    },
  };
  let currentDirection = directions[0];

  const turn = (instruction) => {
    let startingD = currentDirection.val;
    let rotation = parseInt(instruction.slice(1));
    let modifier = 1;
    if (instruction[0] === 'L') {
      modifier = -1;
    }
    let newDirection = startingD + rotation * modifier;
    if (newDirection > 0) {
      newDirection = newDirection % 360;
    } else if (newDirection < 0) {
      newDirection += 360;
    }

    currentDirection = directions[newDirection];
  }

  const move = (instruction) => {
    let direction = instruction[0];
    if (direction === 'F') {
      direction = currentDirection.letter;
    }
    let distance = parseInt(instruction.slice(1));
    if (direction === 'N') {
      position[0] += distance;
    } else if (direction === 'S') {
      position[0] -= distance;
    } else if (direction === 'E') {
      position[1] += distance;
    } else if (direction === 'W') {
      position[1] -= distance;
    } else {
      console.log('error: instruction ', instruction, 'failed');
    }
  }

  const getManhattan = () => {
    return Math.abs(position[0]) + Math.abs(position[1]);
  }

  let instructions = puzzle.split('\n');

  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i];
    if ('NESWF'.includes(instruction[0])) {
      move(instruction);
    } else {
      turn(instruction);
    }
  }

  return getManhattan()
};

console.log(solvePart1(puzzle));
// 63 wasn't right
// 1424 was!
