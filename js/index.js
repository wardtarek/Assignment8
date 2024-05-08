var qoutes = [
  {
    qoute:
      '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    author: "-- Winston S. Churchill",
  },
  {
    qoute:
      '"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."',
    author: "-- Helen Keller",
  },
  {
    qoute:
      '"We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty."',
    author: "-- Maya Angelou",
  },
  {
    qoute:
      '"The flower that blooms in adversity is the rarest and most beautiful of all."',
    author: "-- Walt Disney Company, Mulan",
  },
  {
    qoute:
      '"Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down."',
    author: "-- Roy T. Bennett",
  },
  {
    qoute:
      '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."',
    author: "-- Thomas A. Edison",
  },
];
var historyValue = [];
function generate() {
  var random = Math.floor(Math.random() * qoutes.length);
  var qoute = qoutes[random].qoute;
  var author = qoutes[random].author;
  if (historyValue.includes(random)) {
    generate()
  } else {
    document.getElementById("qoute").innerHTML = qoute;
    document.getElementById("author").innerHTML = author;
    historyValue.pop();
    historyValue.push(random);
    // console.log(historyValue);
  }
  // console.log(random);
}
