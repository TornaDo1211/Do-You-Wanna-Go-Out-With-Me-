document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.querySelector('#yesButton');
    const noButton = document.querySelector('#noButton');

    yesButton.addEventListener('click', () => {
        yesButton.textContent = 'Are you sure? 😍';
        yesButton.addEventListener('click', () => {
            window.location.href = 'yes.html';
        });
    });

    const noTexts = [
        "Are you really sure? 😢",
        "Think again... 💔",
        "Please reconsider 😭",
        "You might regret this... 😔",
        "Final answer? 😟"
    ];
    let clickCount = 0;

    noButton.addEventListener('click', () => {
        if (clickCount < noTexts.length) {
            noButton.textContent = noTexts[clickCount];
            clickCount++;
        } else {
            window.location.href = 'no.html';
        }
    });
});
