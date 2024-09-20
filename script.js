Create a file named script.js and add the following code:


```javascript
const numDots = 100; // Number of dots
const dots = [];


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


function animateDots() {
    dots.forEach(dot => {
        dot.style.left = Math.random() * window.innerWidth + 'px';
        dot.style.top = Math.random() * window.innerHeight + 'px';
        dot.style.backgroundColor = rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255});
    });
}


function openGame(url) {
    const gameFrame = document.getElementById('gameFrame');
undefined
