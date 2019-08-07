// https://dev.to/thepracticaldev/daily-challenge-4-checkbook-balancing-hei
// @author Mohamed Elidrissi
const test = require('./test');

function balanceCheckbook(checkbook) {
  checkbook = checkbook.replace(/[^A-Za-z0-9\.\n ]/g, '');
  const reports = checkbook.match(/[0-9]+\s[A-Za-z]+\s[0-9]+(\.[0-9]{1,2})?/g);
  const expenses = checkbook.match(/ [0-9]+(\.[0-9]{1,2})?/g);
  const totalExpenses = expenses
    .reduce((p, c) => parseFloat(p) + parseFloat(c))
    .toFixed(2);
  let balance = checkbook.match(/^[0-9]+(\.[0-9]{1,2})?/g)[0];
  let output = `Original Balance: ${balance}\n`;

  reports.forEach((report, index) => {
    balance -= expenses[index];
    output += `${report} Balance ${balance.toFixed(2)}\n`;
  });

  output += `Total expense ${totalExpenses}\n`;
  output += `Average expense ${(totalExpenses / expenses.length).toFixed(2)}`;

  return output;
}

const checkbook1 = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`;

const balanced1 = `Original Balance: 1233.00
125 Hardware 24.8 Balance 1208.20
123 Flowers 93.5 Balance 1114.70
127 Meat 120.90 Balance 993.80
120 Picture 34.00 Balance 959.80
124 Gasoline 11.00 Balance 948.80
123 Photos 71.4 Balance 877.40
122 Picture 93.5 Balance 783.90
132 Tires 19.00 Balance 764.90
129 Stamps 13.6 Balance 751.30
129 Fruits 17.6 Balance 733.70
129 Market 128.00 Balance 605.70
121 Gasoline 13.6 Balance 592.10
Total expense 640.90
Average expense 53.41`;

test(balanced1, balanceCheckbook(checkbook1));

const checkbook2 = `1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10`;

const balanced2 = `Original Balance: 1000.00
125 Market 125.45 Balance 874.55
126 Hardware 34.95 Balance 839.60
127 Video 7.45 Balance 832.15
128 Book 14.32 Balance 817.83
129 Gasoline 16.10 Balance 801.73
Total expense 198.27
Average expense 39.65`;

test(balanced2, balanceCheckbook(checkbook2));
