const quotes = [
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Unknown"
  },
{
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke"
  },
  {
    text: "Stay positive, work hard, make it happen.",
    author: "Unknown"
  },
  {
    text: "Your only limit is your mind.",
    author: "Unknown"
  },
  {
    text: "Push yourself because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    text: "Don’t stop until you’re proud.",
    author: "Unknown"
  },
  {
    text: "Small steps every day lead to big results.",
    author: "Unknown"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Unknown"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Be stronger than your excuses.",
    author: "Unknown"
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn"
  },
  {
    text: "Work hard in silence, let success make the noise.",
    author: "Frank Ocean"
  },
  {
    text: "Success doesn’t come to you, you go to it.",
    author: "Marva Collins"
  },
  {
    text: "Never give up because great things take time.",
    author: "Unknown"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  }
];
const quoteColors = [
  "#ff5733",
  "#3498db",
  "#2ecc71",
  "#9b59b6",
  "#f39c12"
];

const authorColors = [
  "#e91e63",
  "#1abc9c",
  "#34495e",
  "#d35400",
  "#16a085"
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");

const nextButton = document.getElementById("new-quote");
const prevButton = document.getElementById("prev-quote");
const shareButton = document.getElementById("share-quote");

let currentIndex = 0;

function showQuote(index) {

  quoteText.innerText = quotes[index].text;
  authorText.innerText = "- " + quotes[index].author;
  document.getElementById("counter").innerText =
    `Quote ${index + 1} of ${quotes.length}`;

  const randomQuoteColor =
    quoteColors[Math.floor(Math.random() * quoteColors.length)];

  const randomAuthorColor =
    authorColors[Math.floor(Math.random() * authorColors.length)];

  quoteText.style.color = randomQuoteColor;
  authorText.style.color = randomAuthorColor;
  const backgrounds = [
    "linear-gradient(135deg, #1e3c72, #2a5298)",
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)",
    "linear-gradient(135deg, #f6d365, #fda085)"
  ];

  document.body.style.background =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
}

nextButton.addEventListener("click", () => {

  currentIndex++;

  if (currentIndex >= quotes.length) {
    currentIndex = 0;
  }

  showQuote(currentIndex);
});

prevButton.addEventListener("click", () => {

  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = quotes.length - 1;
  }

  showQuote(currentIndex);
});
const copyButton = document.getElementById("copy-quote");

copyButton.addEventListener("click", () => {

  const text =
    quoteText.innerText + " " + authorText.innerText;

  navigator.clipboard.writeText(text);

  alert("Quote Copied!");
});

showQuote(currentIndex);
setInterval(() => {

  currentIndex++;

  if (currentIndex >= quotes.length) {
    currentIndex = 0;
  }

  showQuote(currentIndex);

}, 5000);
shareButton.addEventListener("click", () => {

  const text =
    quoteText.innerText + " " + authorText.innerText;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(text)}`
  );

});