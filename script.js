const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the chicken go to the seance? To talk to the other side!",
    "Why don't some animals play cards? Because they're afraid of cheetahs!"
];
let jokeIndex = 0;

function nextJoke() {
    jokeIndex = (jokeIndex + 1) % jokes.length;
    document.querySelector('.joke-content').innerText = jokes[jokeIndex];
}

// Load first joke on page load
window.onload = nextJoke;
