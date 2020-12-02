let vals = [1864, 1880, 1300, 1961, 1577, 1900, 1307, 1818, 1736, 1846, 1417, 1372, 1351, 1860, 1738, 1525, 1798, 1218, 1723, 1936, 1725, 1998, 1466, 1922, 1782, 1947, 1717, 1914, 1843, 1732, 1918, 814, 1771, 1712, 1804, 1213, 1859, 1820, 1793, 1870, 1993, 1787, 1824, 1849, 1646, 1489, 1348, 1978, 1628, 1781, 2002, 1297, 1829, 1596, 1819, 1313, 1413, 1726, 1449, 1810, 1295, 1679, 1358, 1949, 1644, 1825, 1891, 490, 1962, 1939, 1228, 1889, 1977, 1980, 1763, 1752, 1983, 1785, 1678, 2000, 1857, 1658, 1863, 1330, 1380, 1799, 1789, 1633, 1663, 296, 1985, 1117, 1239, 1854, 1960, 2004, 1940, 1876, 1739, 1858, 1283, 1423, 1982, 1836, 1451, 1840, 1347, 1652, 1695, 1210, 1861, 1199, 1346, 1786, 1814, 1958, 1853, 1974, 1917, 1308, 654, 1743, 1847, 1367, 1559, 1614, 1897, 2003, 1886, 1885, 1682, 1204, 1986, 1816, 1994, 1817, 1751, 1701, 1619, 1970, 816, 1852, 1832, 1631, 703, 1604, 1444, 1842, 1984, 1259, 1948, 1620, 1681, 1822, 1865, 1521, 1741, 1455, 1909, 1764, 261, 1464, 1905, 1325, 1766, 1749, 1292, 1874, 1267, 1269, 1969, 1991, 1219, 1345, 1976, 1369, 1942, 1388, 1776, 1629, 1987, 1684, 1813, 1203, 1965, 1729, 1930, 1609, 1801, 1402, 121, 1833, 1898, 1957, 1051, 1430, 1893, 1784, 1800, 1910];

/*
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

// basically two sum
vals.forEach(val => {
  let rem = 2020 - val;
  if (vals.indexOf(rem) >= 0) {
    console.log(val * rem);
    // 982464
  }
});

/*
--- Part Two ---
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?
*/

// three sum
let totalMin = Math.min(...vals);
vals.forEach(val1 => {
  let rem1 = 2020 - val1;
  if (rem1 > totalMin) {
    vals.forEach(val2 => {
      let rem2 = rem1 - val2;
      if (rem2 >= totalMin && vals.indexOf(rem2) >= 0) {
        console.log(val1 * val2 * rem2);
        // 162292410
      }
    })
  }
});
