/* =========================
   BEST FRIENDS DAY WEBSITE
   SCRIPT.JS (FINAL)
========================= */

/* =========================
   START MUSIC + JOURNEY
========================= */

const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
    bgMusic.play();
    startBtn.innerText = "Let’s Go 💜";
});

/* =========================
   EMOJI RAIN SYSTEM
========================= */

const emojiRain = document.getElementById("emojiRain");

const emojis = [
    "💜", "🕷️", "🦒", "🐧", "🌸",
    "✨", "🤍", "☕", "💌", "😂"
];

function createEmoji() {
    const span = document.createElement("span");

    span.classList.add("fallingEmoji");

    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = (Math.random() * 20 + 15) + "px";
    span.style.animationDuration = (Math.random() * 5 + 5) + "s";

    emojiRain.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 10000);
}

setInterval(createEmoji, 400);

/* =========================
   INSIDE JOKES TOGGLE
========================= */

const jokeButtons = document.querySelectorAll(".jokeBtn");

jokeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const joke = btn.nextElementSibling;

        if (joke.style.display === "block") {
            joke.style.display = "none";
        } else {
            joke.style.display = "block";
        }
    });
});

/* =========================
   QUIZ SYSTEM
========================= */

const answers = document.querySelectorAll(".answer");
const quizResult = document.getElementById("quizResult");

answers.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.classList.contains("correct")) {
            quizResult.innerHTML = "✅ Correct! Purple 💜 was the beginning of everything.";
        } else {
            quizResult.innerHTML = "❌ Nope 😂 Think again... hint: it’s something emotional 💜";
        }

    });
});

/* =========================
   MEMORY HUNT
========================= */

const huntItems = document.querySelectorAll(".huntItem");
const memoryText = document.getElementById("memoryText");

const memoryMessages = [
    "💜 Purple — where everything started",
    "🕷️ Spidey — your favorite troublemaker",
    "🦒 Giraffe — the nickname that stuck forever",
    "🐧 Operation Penguin — pure chaos unlocked",
    "🌸 Friendship survived everything"
];

huntItems.forEach((item, index) => {
    item.addEventListener("click", () => {

        memoryText.innerHTML = memoryMessages[index];

        item.style.transform = "scale(1.4)";
        item.style.opacity = "0.6";

        setTimeout(() => {
            item.style.transform = "scale(1)";
        }, 500);

    });
});

/* =========================
   SMOOTH SCROLL ON LOAD
========================= */

document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
    });
});

/* =========================
   SMALL HEART BURST EFFECT
========================= */

document.addEventListener("click", (e) => {

    const heart = document.createElement("div");
    heart.innerText = "💜";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.animation = "fadeUp 1s ease forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

});

/* Add animation dynamically */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-50px); opacity: 0; }
}
`;
document.head.appendChild(style);

/* =========================
   AUTO GREETING EFFECT
========================= */

window.addEventListener("load", () => {
    console.log("💜 Best Friends Day Website Loaded for Tuba Ara");
});