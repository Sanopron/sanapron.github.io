const numDots = 100; // Number of dots
const dots = [];

// Function to create a dot
function createDot() {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.position = 'absolute';
    dot.style.borderRadius = '50%';
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.opacity = Math.random();
    dot.style.left = Math.random() * window.innerWidth + 'px';
    dot.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(dot);
    dots.push(dot);
}

// Function to animate dots
function animateDots() {
    dots.forEach(dot => {
        dot.style.left = Math.random() * window.innerWidth + 'px';
        dot.style.top = Math.random() * window.innerHeight + 'px';
        dot.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    });
}

// Function to open the game in the iframe
function openGame(url) {
    const gameFrame = document.getElementById('gameFrame');
    gameFrame.src = url; // Set the iframe source to the game URL
}

// Create dots
for (let i = 0; i < numDots; i++) {
    createDot();
}

// Animate dots every second
setInterval(animateDots, 1000);
