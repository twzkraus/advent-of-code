/*
--- Day 4: Giant Squid ---
You're already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can't see any sunlight. What you can see, however, is a giant squid that has attached itself to the outside of your submarine.

Maybe it wants to play bingo?

Bingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is marked on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board wins. (Diagonals don't count.)

The submarine has a bingo subsystem to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input). For example:

7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
After the first five numbers are drawn (7, 4, 9, 5, and 11), there are no winners, but the boards are marked as follows (shown here adjacent to each other to save space):

22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
After the next six numbers are drawn (17, 23, 2, 0, 14, and 21), there are still no winners:

22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
Finally, 24 is drawn:

22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
At this point, the third board wins because it has at least one complete row or column of marked numbers (in this case, the entire top row is marked: 14 21 17 24 4).

The score of the winning board can now be calculated. Start by finding the sum of all unmarked numbers on that board; in this case, the sum is 188. Then, multiply that sum by the number that was just called when the board won, 24, to get the final score, 188 * 24 = 4512.

To guarantee victory against the giant squid, figure out which board will win first. What will your final score be if you choose that board?
*/

const exampleCallOrder = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1`;

const rawExampleBoards = `22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

const callOrder = `67,3,19,4,64,39,85,14,84,93,79,26,61,24,65,63,15,69,48,8,82,75,36,96,16,49,28,40,97,38,76,91,83,7,62,94,21,95,6,10,43,17,31,34,81,23,52,60,54,29,70,12,35,0,57,45,20,71,78,44,90,2,33,68,53,92,50,73,88,47,58,5,9,87,22,13,18,30,59,56,99,11,77,55,72,32,37,89,42,27,66,41,86,51,74,1,46,25,98,80`;
const rawBoards = `24 75 59 41 17
58 74 64 92 39
68  8 78 85 72
18  3 22  4 34
11 76  6 28 50

21 31 36 13 87
80 91 63 62 77
46 93 40 16 25
47 66 30 54 74
56 59 86 72 37

92 43 68 60 81
 3 78 75 73 12
90 50 31 67 76
28 63 52 95 61
 6 38 79 19 17

81 20 61 60 86
43 27 50 21 85
77 84 68 76 24
33 13 89  1 48
 6 57 30 11  5

66 24 22 86  2
67 77 72 88 87
21 60 89 36 32
39 37 29 17 31
78 97 63 94 91

85 71 86 16 54
98 11 82 89 17
38 23 99 59 69
58 12 74 15 93
41  5 52 48 26

 3 32 61 29 27
98 74 34 58 23
24 54 76 79 88
71 90 97 96 68
21 33 72 47 82

13 70 59  7 91
74 88 85 50 15
35  8 40 93  6
95 29 52 18 99
57 64  0  9 39

72  6 74 64  0
73  9 46 52 98
81 68 14 69 48
25 17  5 54 19
11 47 33 23 62

45 14 90 59 97
43 46 58 55 29
80 53  2 37 78
40 79 57 52 72
92 13 54 25 19

39 78 99 84  2
80 53 24 51  5
33 20 48 43 66
82 13 52 30 98
14 16 26 44 74

38 35 45 83 94
18 28 41 22 13
44  9 10 98 58
64 73 24 31 34
39 85 50 77 63

71 18 68 47 65
25 40 82 69 44
30  6 72 73  7
80 24 41 79  2
11 20 96 84 54

16  6 38 75 25
56  2 51 69 81
15 54 91 85 90
94  0  7 71 30
28 17 76 67 31

13 12 23  7 71
91 89 84 40 78
44 83 90 21 31
77 17  3 95 42
87 82 38 30 67

44 64 60 76 36
21 39 86 89 34
 5 54 24 14 58
78 55 98 74 69
 2 97 42 59 51

51 35 78 54 40
 9 52  5 66 19
92 74 68 90 73
76 11 60 67 22
44  7  1 89 15

93 72  3 95 13
77  1 32 35  5
68 91 98 23 51
59 19 31 57 56
54 46 92 88 26

84 91 40  9 73
90 41 51 12 10
 0 61 89 13  8
62 74  5 45 92
65 27 78 26 31

54 21 32 84 42
68 25 76  3 40
24 15 59 12  2
72 49 73 31 93
35 67 70 60 91

55 34 51 76 54
73 28  5 87 52
24 36 65 49 27
99 10 12 44 50
23 77 53 80  4

30 42 92 11 40
83 49 41 72 54
73 97 18  4 37
 0 15 70 55 33
71 26 46 25 81

22 35 41 71 58
55 39 18 85 45
79 44  9 38  2
47  4 23 34 82
49 63 88 81 29

49 82 40 37 77
17 45 92  7 65
51 38 91 68 32
73 57 69 85 50
87 10 95 59  1

57 27 95 59 87
78 96 82 63 52
39 17 14 74 21
47 64 28 94 65
40  3 49 25 61

97  9 24 80 27
 5 36 83 15 29
86 33 32 61  2
87 48 82 91  4
35 10 16 85 65

17 12 43 96  5
36 76 29 51 73
98 66 27 97 91
78 28  2 61 30
95 70 19 47 54

98 88 51 32  7
89 61 16 91 95
94 23 19 77 70
42 90 36 26 44
99 71  5 57 13

14 43 97 72 83
39 73 58 16 59
51  2 28 24 18
40 70 65 27 91
 4 44 68 74 56

90  9 71 23 73
11 95 62 36 38
77 34 60 67 41
28 48 98 40 42
47 51 82 87 63

19 41 57 61 50
64 84  8 81 11
83 68 31 66 90
 2 72 71 96 79
78 89 77 60  4

73 88 72 23 68
98 52 21 89 43
48 29 10  8  6
49  3 54 37 12
83 34 51 77 66

52 16 94 84 81
 3 87 99 72 98
48 10 44 32 22
 9 69 36 74 62
51 42 91 68 60

39 54 16 97 14
58 84 89 15 20
67 49 19 55 86
10 44 76 12 96
74 36 51 41  2

27 22 90 79 86
47 73  2 53 58
31 89 37 19 12
20 83 87 23 30
32  8 92 55 68

19 39 64 53 12
32  7 80 72 79
82 96 21 13 40
18 25 61  9 70
84 95 42 36 52

48 12 29 61  7
34 13 99 98  6
74 36 66 91 88
75 85 93 80 83
96 11 44 47 39

79 43 28 16 75
66 64 17 71 72
36 30 19 60 38
 1 13 77 69 94
78  6 97 93 63

86 45 14 38 37
35 20 15 68 55
92  3  0 90  8
88 32 87 17 22
33 34 78 13 43

87 92 58 95  6
35 23 54 40 97
82 64 88 10 94
63  8 26 98 18
42 76 39 50 51

75 13  4 72 95
11 50 15 47 52
12 73 80 74 70
68 30 21 37 58
91  2 24 32 82

76 66  4 68 79
19 73 24 51 96
16 52 26 78  7
48 30 17 82 92
28 88 90 71 59

95 18 69 85 63
16 78 97 10 41
53 98 73 87 19
15 35 94 57 82
48 40 14  3 38

39 40 78 64 87
90 69 83 18 16
58 91 36 23 74
25 51 99  4 76
62 10 88  2  1

72 95 34  2 84
38 12 97 92 47
24 23 41 10 75
56 87 68 45 89
14 85 52 98 79

96 97 15 98 17
76 13  6 38 81
66 90 51 36 85
95 48 40 99 94
69 88 19  4  1

20 36 93 50 35
13 15  6 49 92
 0 70 38 29 22
68 34 73 89 71
 5 10 12 79 31

16 63 34 29  2
43 57 18 51 67
83 47 49 17 96
84 33 40  7 50
60 30 41 81 76

86 85  4 48 61
34 46 89 78 23
83  8 43 57 30
21 36  7 75 37
29 40 62 60 54

47 28 42 39 57
16 46 54 52 55
78 84 32 95 23
27 26  9 75 62
90 85  0 65 37

89 46  4 81 55
68 13 79 18 90
57 73 21 15 32
59 56 62 58 36
45 98 64 33 12

89 92  3 69 78
45 50 12 71 72
18 87 64 48 88
84 77 53 17 62
68  6 83 91  2

 5 80 25 90 19
21 86 66 69 61
22 59 39 54 91
 9 27 14 24 40
95 74 18 63 11

84 63 42 80 61
23 39 49 92 25
56 64 70  2 88
99 29 15 26  9
82 91 35  7 40

 4 93 44 42 16
78 72 32 73 81
84 91 85 82 69
88 49 59 92 96
61 99 19 33 38

87  2 46 16 83
29 31 45 37 51
25 65 26 89 19
80 17 27  8 73
54  4 76  0 12

50 65 47 43 31
58 94 90 71 12
27  3 81 45  9
 1 33 37 15 83
96 26 41 77 57

22 54 71 73  5
64 77 15 98 38
61 90 20 57 40
60 18 83 72 12
34 91 87 41 21

82 29 51 16 61
37 41 86 20 19
59 30 43 15 53
17 83  5 14 89
78 70  1 12 62

19 95 68 67 92
14 70 73 62 29
40  9 97 82 66
11 50 77 47 53
20 75 88 94 93

48 39 62 56 44
95 43 10 89 60
40  0 73 17 59
50  2  8  4  5
24 79 20 13 96

25 40 36 54 13
46 48 37 71 26
29 42 27 44 23
24 61 79  3 90
97 21 43 86 18

95  4 14 12 71
11 55 50 83 85
 9 43 29 32 28
78 20 63 87 40
61 84 37 75 77

 4 96 87 22  2
95 70 39 35 49
23 27 19 43  0
42 75 36 52 11
13  8 57 88 46

37  5 87 58 86
65 78 89 57 79
70 40 14 80 97
88 55 68 28 13
53 59 24 26  1

 5 95 59 71 23
44 57 34 65 83
49 93  9 77 28
37 69 79 99 73
17 27 33 66 85

75 61 32  0 16
65 59 47 25 81
87 97  8 50 70
78 34 38 42 51
22 63  6 66  1

65 68 77  1 19
53 14  7 88  9
11 22 40 25 39
69 93 37 72  5
90 80 38 10 16

15 81 62 68 44
26 70 43 55 89
22 69  8 94 51
52 19 79 96 10
24 48 63 74 84

36  9 57  4 40
95 98 58 70 87
45 97 92 23 86
 6 31 15 78 12
90 75 48 41  3

34 97 31 92 20
59  6 89 79 70
39 90 16 72 91
76 75 85 47 68
86 62 32 19 64

44  5 72 25 32
87 18 93 33  0
22 96 46  4 28
61 81 77 52 80
66 24 63 23 45

53 33 99 31 75
60 39 56 89 57
76 81 14 95 23
 8 19 98 13  5
49 91 54 47  7

11 58 44  6 94
31 87 50 77 22
49  9 40 24 60
86 36 12  3 71
59 99 68 20 66

83 11 93 36  6
73 55 97 48 18
 3 43 51 90 57
38 65 39 95 68
94 24 59 20 34

53 57 69  3 16
 2 91 22 24 26
44 84 31 28 82
46 94 65 78 99
55 49 11 66 21

10 53 20 69 41
70 12 56  2 94
87 23 74 60 55
59 67 18 38 22
71  4 51 81 39

59 32 64 66 53
20 11 27 10 81
41 93 12 45 99
70 94 77 16 76
30 79 57  0 90

84  8 76 13 98
96  1  9 65 38
23 30 64  3 95
70 26 34 86 79
 2 22 77 41 68

77 11 55 80 21
45 70 28  0 57
38 74 33 86 22
42 13 66 61 83
46 94  7 82 40

53 68 94 71 64
44 99 86 66 97
80 33 48 74 45
29 13 11 15 62
36 89  9 47 56

49 90 16 55 14
68 13 27 47 46
54 93 97 10 31
33 58  6 83 48
63 28 95  8 62

72 60 12 24 20
 1 22 90 58 65
84  5 96 80 33
64 15 47 23 46
63 36  6 31 91

19 27 96 54 36
33 32 65 11 26
 0 47 25 59 56
41 45 76 14 98
52 22 31 66 38

 7 91  5 18 14
 4 19 54 42 71
31 82 81 61 39
58 51 70 10 55
43 60 15 89 21

85 31 75 55 76
92 93 54 98 44
21 22  6 79 20
34 64  7 82 78
53 36 96 37 19

84 58 35 68 76
79 91 92 25 29
93 83 23 22 80
51 28 53 60 40
 0 62 77 49 39

35 38 24 88 53
61 30 52 49 83
20 97  6 16 55
60 43 14 67  4
66  9 85 28 77

73 57 65 36 50
18 94 14 59 67
 7 78 40  6 13
86 49  5 22 66
63 32 68 44 80

52 95 93 25 16
 0 83 41 77 49
13 63 65 84 69
51  9 39 47 24
92  4 14  8 66

70 31 33 69 50
36 29 76 56 64
97 11 40 19 81
18 57 10 24 15
30 44 42 89 60

42 97  9 38 60
48 62 53 70 27
49 72 90 86 18
69 50  8 78 84
28 13 17 10 35

84  7 60 17 36
30  1  3 89 49
45 10 85 97 76
31 38 16  2 12
43 58 11 77 78

53 20 98 94 82
54 62 27 92 83
60 41 66  5 30
58 15 90 88  3
38 45  7 26 37

62 94 17 55 28
27 86 26 42 87
90 18 84 20 85
92 97 59 83  0
89 21 25 36 11

89 60 41 91 54
16  9 57 40 53
87 56 64 23 27
13 42 84  2 52
66 77 80  0 38

58 23 55 96 75
56  8 19 52 10
98 13 70 62 73
 6 64 86  4 12
51 91 93 29 34

55  8 99 51 70
33 30 52 58 10
38 31 87  9 61
63 46 15 48 24
32 94 40 74 21

 5 70 26 48 28
41 35 93 34 44
46 86 19  0 27
 7 81 51 95 15
36 84 76 75 92

34  0 31 21  3
23 96 49 51 11
42 27 47 66 91
93 89 16 62 54
22 71 26 32 99`;

const parseBoards = (boardString) => {
  const boards = boardString.split("\n\n");
  return boards.map((board) =>
    board.split("\n").map((row) => row.split(/\s+/).filter((num) => num))
  );
};

const qaBoards = (boards) => {
  boards.forEach((board) => {
    const rows = board.length;
    board.forEach((row) => {
      const cols = row.length;
      if (rows !== 5 || cols !== 5) {
        console.log({ row, rows, cols });
      }
    });
  });
};

const boards = parseBoards(rawBoards);

const markAsCalled = (boards, currentNum) => {
  return boards.map((board) =>
    board.map((row) => row.map((num) => (num === currentNum ? "X" : num)))
  );
};

const isWinningBoard = (board) => {
  const hasWinningRow = board.find((row) => row.every((el) => el === "X"));
  let hasWinningCol;
  for (let i = 0; i < board[0].length; i++) {
    hasWinningCol = hasWinningCol || board.every((row) => row[i] === "X");
  }
  return Boolean(hasWinningRow || hasWinningCol);
};

const checkForWinners = (boards) => {
  return boards.find(isWinningBoard);
};

const sumRemaining = (board) => {
  return board.reduce(
    (boardSum, row) =>
      boardSum +
      row.reduce((rowSum, el) => {
        if (el !== "X") {
          return rowSum + parseInt(el);
        }
        return rowSum;
      }, 0),
    0
  );
};

const solvePart1 = (parsedBoards, numsToCall) => {
  let numsCalled = 0;
  while (numsCalled < numsToCall.length) {
    // call a number, mark it as called on all boards
    const currentNum = numsToCall[numsCalled];
    parsedBoards = markAsCalled(parsedBoards, currentNum);
    // check for winners
    const winner = checkForWinners(parsedBoards);
    // if winner: sum remaining values on board
    if (winner) {
      return currentNum * sumRemaining(winner);
    }
    numsCalled++;
  }
};

console.log("part 1 answer is", solvePart1(boards, callOrder.split(",")));

/*
--- Part Two ---
On the other hand, it might be wise to try a different strategy: let the giant squid win.

You aren't sure how many bingo boards a giant squid could play at once, so rather than waste time counting its arms, the safe thing to do is to figure out which board will win last and choose that one. That way, no matter which boards it picks, it will win for sure.

In the above example, the second board is the last to win, which happens after 13 is eventually called and its middle column is completely marked. If you were to keep playing until this point, the second board would have a sum of unmarked numbers equal to 148 for a final score of 148 * 13 = 1924.

Figure out which board will win last. Once it wins, what would its final score be?
 */

const countLosers = (boards) => {
  return boards.reduce((count, board) => {
    if (isWinningBoard(board)) {
      return count;
    }
    return count + 1;
  }, 0)
};

const findLoser = (boards) => {
  return boards.find((board) => !isWinningBoard(board));
}

const solvePart2 = (parsedBoards, numsToCall) => {
  let numsCalled = 0;
  let loser;
  while (numsCalled < numsToCall.length) {
    // call a number, mark it as called on all boards
    const currentNum = numsToCall[numsCalled];
    parsedBoards = markAsCalled(parsedBoards, currentNum);
    // count losers
    const losersCount = countLosers(parsedBoards);
    // if 1 loser: find it, score it
    if (losersCount === 1) {
      loser = findLoser(parsedBoards);
    }
    if (losersCount === 0) {
      console.log({currentNum, sum: sumRemaining(loser), loser})
      return currentNum * (sumRemaining(loser) - currentNum);
    }
    numsCalled++;
  }
};

console.log('part 2 example answer is', solvePart2(parseBoards(rawExampleBoards), exampleCallOrder.split(",")));
console.log('part 2 answer is', solvePart2(boards, callOrder.split(",")));
