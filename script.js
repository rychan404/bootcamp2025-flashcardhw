const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array
const numCards = flashcards.length;
// These two variables will come in handy
let currentIndex = 0; 
let showingTerm = true;

const content = document.getElementById('card-content');
const next = document.getElementById('next-btn');
const prev = document.getElementById('prev-btn');

// Start with this function to simply display the card
function displayCard() {
    content.innerText = `${flashcards[currentIndex].term}\n${flashcards[currentIndex].definition}`;
}

// The rest of the code you will write is apart of event listeners
next.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % numCards;
    displayCard();
});

prev.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + numCards) % numCards;
    displayCard();
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
