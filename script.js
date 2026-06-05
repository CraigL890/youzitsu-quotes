// Database of Quotes
const quotes = [
    // SEASON 1
    { text: "What is evil? - Whatever springs from weakness.", highlight: "evil", author: "Friedrich Nietzsche", source: "The Antichrist", season: 1, episode: 1 },
    { text: "It takes a great talent and skill to conceal one's talent and skill.", highlight: "talent", author: "François de La Rochefoucauld", source: "Maxims", season: 1, episode: 2 },
    { text: "Man is an animal that makes bargains: no other animal does this - no dog exchanges bones with another.", highlight: "bargains", author: "Adam Smith", source: "The Wealth of Nations", season: 1, episode: 3 },
    { text: "We should not be upset that others hide the truth from us, when we hide it so often from ourselves.", highlight: "truth", author: "François de La Rochefoucauld", source: "Maxims", season: 1, episode: 4 },
    { text: "Hell is other people.", highlight: "Hell", author: "Jean-Paul Sartre", source: "No Exit", season: 1, episode: 5 },
    { text: "There are two kinds of lies; one concerns an accomplished fact, the other concerns a future duty.", highlight: "lies", author: "Jean-Jacques Rousseau", source: "Emile, or On Education", season: 1, episode: 6 },
    { text: "Nothing is as dangerous as an ignorant friend; a wise enemy is to be preferred.", highlight: "dangerous", author: "Jean de La Fontaine", source: "Fables", season: 1, episode: 7 },
    { text: "Abandon all hope, ye who enter here.", highlight: "hope", author: "Dante Alighieri", source: "Divine Comedy", season: 1, episode: 8 },
    { text: "Man is condemned to be free.", highlight: "free", author: "Jean-Paul Sartre", source: "Being and Nothingness", season: 1, episode: 9 },
    { text: "Every man has in himself the most dangerous traitor of all.", highlight: "traitor", author: "Søren Kierkegaard", source: "Works of Love", season: 1, episode: 10 },
    { text: "What people commonly call fate is mostly their own stupidity.", highlight: "fate", author: "Arthur Schopenhauer", source: "Parerga and Paralipomena", season: 1, episode: 11 },
    { text: "Genius lives only one story above madness.", highlight: "madness", author: "Arthur Schopenhauer", source: "Parerga and Paralipomena", season: 1, episode: 12 },

    // SEASON 2
    { text: "Remember to keep a clear head in difficult times.", highlight: "clear head", author: "Horace", source: "Odes", season: 2, episode: 1 },
    { text: "There are two main human sins from which all the others derive: impatience and indolence.", highlight: "sins", author: "Franz Kafka", source: "The Zürau Aphorisms", season: 2, episode: 2 },
    { text: "The greatest souls are capable of the greatest vices as well as of the greatest virtues.", highlight: "souls", author: "René Descartes", source: "Discourse on the Method", season: 2, episode: 3 },
    { text: "The material must be created.", highlight: "created", author: "Florence Nightingale", source: "Subsidiary Notes", season: 2, episode: 4 },
    { text: "Every failure is a step to success.", highlight: "failure", author: "William Whewell", source: "Lectures on the History of Moral Philosophy", season: 2, episode: 5 },
    { text: "Adversity is the first path to truth.", highlight: "Adversity", author: "Lord Byron", source: "Don Juan", season: 2, episode: 6 },
    { text: "To doubt everything or to believe everything are two equally convenient solutions; both dispense with the necessity of reflection.", highlight: "doubt", author: "Henri Poincaré", source: "Science and Hypothesis", season: 2, episode: 7 },
    { text: "The wound is at its heart.", highlight: "wound", author: "Virgil", source: "Aeneid", season: 2, episode: 8 },
    { text: "If you make a mistake and do not correct it, this is called a mistake.", highlight: "mistake", author: "Confucius", source: "Analects", season: 2, episode: 9 },
    { text: "People, often deceived by an illusive good, desire their own ruin.", highlight: "ruin", author: "Niccolò Machiavelli", source: "Discourses on Livy", season: 2, episode: 10 },
    { text: "A man who cannot command himself will always be a slave.", highlight: "slave", author: "Johann Wolfgang von Goethe", source: "Zahme Xenien", season: 2, episode: 11 },
    { text: "Force without wisdom falls of its own weight.", highlight: "wisdom", author: "Horace", source: "Odes", season: 2, episode: 12 },
    { text: "The worst enemy you can meet will always be yourself.", highlight: "enemy", author: "Friedrich Nietzsche", source: "Thus Spoke Zarathustra", season: 2, episode: 13 },

    // SEASON 3
    { text: "The strongest principle of growth lies in human choice.", highlight: "choice", author: "George Eliot", source: "Daniel Deronda", season: 3, episode: 1 },
    { text: "Man is wolf to man.", highlight: "wolf", author: "Plautus", source: "Asinaria", season: 3, episode: 2 },
    { text: "We never forget what we endeavor to forget.", highlight: "forget", author: "Friedrich Nietzsche", source: "Dawn", season: 3, episode: 3 },
    { text: "To work you have the right, but not to the fruits thereof.", highlight: "fruits", author: "Bhagavad Gita", source: "", season: 3, episode: 4 },
    { text: "Fortune favors the bold.", highlight: "bold", author: "Virgil", source: "Aeneid", season: 3, episode: 5 },
    { text: "It is better to receive an injury than to do one.", highlight: "injury", author: "Marcus Tullius Cicero", source: "Tusculan Disputations", season: 3, episode: 6 },
    { text: "People will do anything, no matter how absurd, in order to avoid facing their own souls.", highlight: "souls", author: "Carl Jung", source: "Psychology and Alchemy", season: 3, episode: 7 },
    { text: "He who cannot be a good follower cannot be a good leader.", highlight: "leader", author: "Aristotle", source: "Politics", season: 3, episode: 8 },
    { text: "Supreme excellence consists in breaking the enemy's resistance without fighting.", highlight: "excellence", author: "Sun Tzu", source: "The Art of War", season: 3, episode: 9 },
    { text: "The first cause of absurd conclusions I ascribe to the want of method.", highlight: "method", author: "Thomas Hobbes", source: "Leviathan", season: 3, episode: 10 },
    { text: "There is only one rule for being a good talker - learn to listen.", highlight: "listen", author: "Christopher Morley", source: "", season: 3, episode: 11 },
    { text: "Change your desires rather than the order of the world.", highlight: "desires", author: "René Descartes", source: "Discourse on the Method", season: 3, episode: 12 },
    { text: "Love is the best teacher.", highlight: "Love", author: "Pliny the Younger", source: "Epistles", season: 3, episode: 13 }
];

let currentIndex = 0;


const quoteWrapper = document.getElementById("quote-wrapper");
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteSource = document.getElementById("quote-source");
const epIndicator = document.getElementById("ep-indicator");


function changeQuote(direction) {

    currentIndex += direction;


    if (currentIndex < 0) {
        currentIndex = quotes.length - 1;
    } else if (currentIndex >= quotes.length) {
        currentIndex = 0;
    }

    updateUI();
}


function updateUI() {
    const currentData = quotes[currentIndex];


    quoteWrapper.classList.remove("fade-anim");
    epIndicator.classList.remove("fade-anim");

  
    setTimeout(() => {
        // Format the quote to inject the pink span class
        let formattedText = currentData.text;
        if (currentData.highlight) {
            const spanHTML = `<span class="pink-text">${currentData.highlight}</span>`;
            formattedText = formattedText.replace(currentData.highlight, spanHTML);
        }


        quoteText.innerHTML = formattedText;
        quoteAuthor.innerText = currentData.author;
        quoteSource.innerText = currentData.source;
  
        const sNum = currentData.season.toString().padStart(2, '0');
        const eNum = currentData.episode.toString().padStart(2, '0');
        epIndicator.innerText = `SEASON ${sNum} EPISODE ${eNum}`;

        
        quoteWrapper.classList.add("fade-anim");
        epIndicator.classList.add("fade-anim");
    }, 50); 
}


updateUI();