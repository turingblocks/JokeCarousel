const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the chicken go to the seance? To talk to the other side!",
    "Why don't some animals play cards? Because they're afraid of cheetahs!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? Because they don't have the guts!"
];
let jokeIndex = 0;

function nextJoke() {
    jokeIndex = (jokeIndex + 1) % jokes.length;
    document.querySelector('.joke-content').innerText = jokes[jokeIndex];
}

function searchJokes() {
    const searchBox = document.getElementById('searchBox');
    const searchResults = document.getElementById('searchResults');
    const keyword = searchBox.value.toLowerCase();
    const matchingJokes = jokes.filter(joke => joke.toLowerCase().includes(keyword));
    searchResults.innerHTML = '';
    matchingJokes.forEach((joke, index) => {
        const jokeElement = document.createElement('div');
        jokeElement.innerText = joke;
        jokeElement.classList.add('search-result');
        jokeElement.onclick = () => selectJoke(index);
        searchResults.appendChild(jokeElement);
    });
}

function selectJoke(index) {
    jokeIndex = index;
    document.querySelector('.joke-content').innerText = jokes[jokeIndex];
}

// Load first joke on page load
window.onload = nextJoke;
