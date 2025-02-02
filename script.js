document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('#yesButton');
    const noButton = document.querySelector('#noButton');

    // Action when Yes button is pressed
    yesButton.addEventListener('click', () => {
        alert('You clicked Yes!');
        // You can replace this with any other action you want to take when Yes is clicked
    });

    // Action when No button is hovered (moves button and shows dot)
    noButton.addEventListener('mouseover', moveButton);
});

function moveButton() {
    const noButton = document.querySelector('#noButton');

    // Get current button position before moving
    const rect = noButton.getBoundingClientRect();
    const oldX = rect.left + window.scrollX;
    const oldY = rect.top + window.scrollY;

    // Get viewport dimensions, considering the button's size
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    // Generate random position within bounds
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Move the button
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Create a small dot at the old position
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${oldX}px`;
    dot.style.top = `${oldY}px`;
    document.body.appendChild(dot);

    // Remove dot after animation
    setTimeout(() => {
        dot.remove();
    }, 1000);
}
