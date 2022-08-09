let data = {
  tickets: [],
  airline: [],
  destination: [],
};

let airline = [
  "대한항공",
  "아시아나항공",
  "티웨이항공",
  "진에어",
  "에어서울",
  "제주항공",
  "이스타항공",
];
let destination = [
  "인천",
  "제주",
  "홍콩",
  "하노이",
  "오사카",
  "도쿄",
  "상하이",
  "파리",
  "런던",
  "사이판",
];

function getRandomDate(start, end) {
  const startDate = start.getTime();
  const endDate = end.getTime();

  return new Date(startDate + Math.random() * (endDate - startDate));
}

for (let i = 1; i <= 500; i++) {
  let randomAirline = Math.floor(Math.random() * airline.length);
  let randomDepartures =
    destination[Math.floor(Math.random() * destination.length)];
  let randomArrivals = randomDepartures;
  while (randomArrivals === randomDepartures) {
    randomArrivals =
      destination[Math.floor(Math.random() * destination.length)];
  }

  data.tickets.push({
    id: i,
    airline: airline[randomAirline],
    departures: randomDepartures,
    arrivals: randomArrivals,
    date: getRandomDate(new Date(2022, 9, 1), new Date(2022, 12, 31)),
    price: Math.floor(Math.random() * 1000000),
  });
}

var dictstring = JSON.stringify(data);

var fs = require("fs");
fs.writeFile("db.json", dictstring, function (err, result) {
  if (err) console.log("error", err);
});
