// --- Main content for each step ---
const steps = [
    {
        title: "Welcome! 💖",
        message: "This is a small journey, just for you. Ready to begin?",
        button: "Let's Start"
    },
    {
        title: "Heyyy 🌹",
        message: "Every love story is beautiful, but ours is my favorite. Do you remember our first meeting?",
        button: "Yes, I do!"
    },
    {
        title: "Youuu ✨",
        message: "With every moment, my feelings for you have only grown stronger. Would you like to continue this journey with me?",
        button: "Absolutely! 💞"
    },
    {
        title: "Shhhh 💍",
        message: "Will you be mine, forever?",
        button: "Yes, I will! 💖",
        isFinal: true
    }
];

const quotes = [
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    "You are my today and all of my tomorrows.",
    "In you, I’ve found the love of my life and my closest, truest friend.",
    "Every moment spent with you is like a beautiful dream come true.",
    "Your love is the light that brightens my world.",
    "With you, forever isn’t long enough.",
    "You make my heart smile.",
    "I fall in love with you more and more each day."
];

// Placeholder song file: Use your own romantic song! Place it in the 'assets' folder and name it 'song.mp3'.

let currentStep = 0;
const app = document.getElementById('app');
const audio = document.getElementById('proposalSong');

function renderStep(stepIndex) {
    const step = steps[stepIndex];
    app.innerHTML = `
        <h1>${step.title}</h1>
        <p>${step.message}</p>
        <button id="nextBtn">${step.button}</button>
    `;
    document.getElementById('nextBtn').onclick = () => {
        if (stepIndex === 0) {
            // Start playing the song after clicking "Let's Start"
            audio.currentTime = 0;
            audio.play();
        }

        if (step.isFinal) {
            showProposal();
        } else {
            currentStep++;
            renderStep(currentStep);
        }
    }
}


function getRandomQuote() {
    const idx = Math.floor(Math.random() * quotes.length);
    return quotes[idx];
}

function showProposal() {
    app.innerHTML = `
        <h1>Mine Forever? 💖</h1>
        <div id="quotes" class="quote"></div>
        <button id="loveBtn">Lovee youu more</button>
    `;

    // Start falling roses
    startFallingRoses();

    // Show first random quote
    const quotesDiv = document.getElementById('quotes');
    quotesDiv.textContent = `"${getRandomQuote()}"`;

    document.getElementById('loveBtn').onclick = () => {
        quotesDiv.textContent = `"${getRandomQuote()}"`;
    };
}


function startFallingRoses() {
    const container = document.getElementById('fallingRosesContainer');

    setInterval(() => {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.style.left = `${Math.random() * 100}%`;
        rose.style.animationDuration = `${3 + Math.random() * 3}s`;
        rose.textContent = '🌹';
        container.appendChild(rose);

        // Remove rose after it falls
        setTimeout(() => {
            container.removeChild(rose);
        }, 7000);
    }, 300); // Adjust to add 1 rose every 300ms
}



// On load
renderStep(currentStep);