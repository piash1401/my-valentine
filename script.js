const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

let noClicks = 0;

const noTexts = [
    "No 😢",
    "Please, puku puku? 🥺",
    "Pretty please 💕",
    "I'll give you chocolate 🍫",
    "And ice cream too 🍦",
    "I'll treat you like a queen 👑",
    "Last chance 😭",
    "Don't break my heart 💔",
    "Say yes already Pookieee😖",
    "I’ll cook for you janu🍝",
    "I’ll watch your favorite movie 🎬",
    "I’ll listen to you all day 💕",
    "I’ll reply fast always 📱",
    "I’ll say sorry first 😭",
    "I’ll let you win arguments 😅",
    "You’ll get unlimited hugs 🤗",
    "And unlimited kisses 😘",
    "I’ll write you cute texts 💌",
    "You’ll be my queen 👑",
    "I’ll protect your snacks 🍪",
    "I’ll remember every date 📅",
    "I’ll never ignore you 😭",
    "You’re too cute to say no 🥺",
    "Come onnnn gaviii😖",
    "Just click yes already 😭",
    "I’m begging now 😩",
    "Last chance 😢",
    "Final final last chance 😭",
    "Okay now I’m crying 😭💔",
    "You don’t love me? 🥺"    
];

noBtn.addEventListener('click', () => {
    noClicks++;

    // Change text
    noBtn.innerText = noTexts[noClicks % noTexts.length];

    // Make NO smaller
    let noSize = Math.max(8, 18 - noClicks * 2);
    noBtn.style.fontSize = noSize + "px";

    // Make YES bigger
    let yesSize = 18 + noClicks * 4;
    yesBtn.style.fontSize = yesSize + "px";

    // Move NO randomly
    noBtn.style.position = "relative";
    noBtn.style.left = Math.random() * 100 + "px";
    noBtn.style.top = Math.random() * 50 + "px";
});

yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div style="text-align:center; margin-top:100px;">
            <h1 style="color:#ff4d88;">YAYYYYY 💖💖💖</h1>
            <h2>I love you so much 😍</h2>
            <p>You just made me the happiest person 💕</p>
        </div>
    `;
});