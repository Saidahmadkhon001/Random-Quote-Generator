// Array of quotes and authors
const quotes = [
    {
        quote: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    }
];

// Function to generate a random quote
function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

// Function to display the quote
function displayQuote() {
    const randomQuote = getRandomQuote();
    const text = document.getElementById("text");
    const author = document.getElementById("author");
    text.classList.add("fade");
    author.classList.add("fade");
    setTimeout(function () {
        text.textContent = randomQuote.quote;
        author.textContent = "- " + randomQuote.author;
        text.classList.remove("fade");
        author.classList.remove("fade");
    }, 300);
}

// Display a quote when the page loads
displayQuote();

// Event listener for the "New Quote" button
document.getElementById("new-quote").addEventListener("click", displayQuote);
