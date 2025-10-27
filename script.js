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

// Start with this function to simply display the card
function displayCard() {
    content.innerText = `${flashcards[currentIndex].term}\n${flashcards[currentIndex].definition}`;
}

// The rest of the code you will write is apart of event listeners


// This line will display the card when the page is refreshed
window.onload = displayCard;
