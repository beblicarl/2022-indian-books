const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 8000;

const booksWrittenIn2022 = {
  "the ambuja story: How a Group of Ordinary Men Created an Extraordinary Company":
    {
      author: "Narotam Sekhsaria",
      year: 2022,
    },
  "1971: Charge of the Gorkhas and other stories": {
    author: "Rachna Bisht Rawat",
    year: 2022,
  },
  "vahana masterclass": {
    author: "Alfredo Covelli",
    year: 2022,
  },
  "india’s 71-Year test: The Journey to Triumph in Australia": {
    author: "	R. Kaushik",
    year: 2022,
  },
  "right under our nose": {
    author: "R. Giridharan",
    year: 2022,
  },
  "making of a general-a himalayan echo": {
    author: "Lt. Gen. Konsam Himalay Singh",
    year: 2022,
  },
  "the commonwealth of cricket": {
    author: "Ramachandra Guha",
    year: 2022,
  },
  "manohar parrikar-Off the record": {
    author: "Waman Subha Prabhu",
    year: 2022,
  },
  "the little book of encouragement": {
    author: "	Dalai Lama",
    year: 2022,
  },
  "beautiful things’ a memoir": {
    author: "Hunter Biden ",
    year: 2022,
  },
  "by many a happy accident: recollections of a life": {
    author: "	Former Vice President Mohammad Hamid Ansari",
    year: 2022,
  },
  "platform scale: for a post-pandemic world": {
    author: "Sangeet Paul Choudary",
    year: 2022,
  },
  "unfinished ": {
    author: "Priyanka Chopra Jonas",
    year: 2022,
  },
  "the terrible, horrible, very bad good news": {
    author: " Meghna Pant",
    year: 2022,
  },
  "asoca: a sutra": {
    author: "Irwin Allan Sealy",
    year: 2022,
  },
  "maverick messiah: a political biography of n t rama rao": {
    author: "Ramesh Kandula",
    year: 2022,
  },
  "rashtra pratham - 82 varshon ki swarnim gatha": {
    author: "	Amit Shah",
    year: 2022,
  },
  "stories i must tell: the journey of an actor": {
    author: "	Kabir Bedi",
    year: 2022,
  },
  "advantage india: the story of indian tennis": {
    author: "Anindya Dutta",
    year: 2022,
  },
  "dynasty to democracy: the untold story of smriti irani’s triumph": {
    author: "Anant Vijay",
    year: 2022,
  },
  "battle ready for 21st century": {
    author: "Lt Gen AK Singh and Brig. Narendra Kumar",
    year: 2022,
  },
  unknown: {
    author: "unknown",
    yeahr: "unknown",
  },
};
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const bookTitle = req.params.name.toLocaleLowerCase();
  if (booksWrittenIn2022[bookTitle]) {
    res.json(booksWrittenIn2022[bookTitle]);
  } else {
    res.json(booksWrittenIn2022["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
