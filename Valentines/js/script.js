document.addEventListener('DOMContentLoaded', function () {
    const typingMessage = document.getElementById('typing-message');
    const continueButton = document.getElementById('continue-btn');
    const blushingEmoji = document.getElementById('blushing-emoji');
    const valentineMessage = document.getElementById('valentine-message');
    const popupBox = document.getElementById('popup-box');
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');
    const proposalContainer = document.getElementById('proposal-container');
    const proposalVideo = document.getElementById('proposal-video');

    const messages = [
        "Hey Rowan💕,...",
        "Here's something I wanted to say to you...",
        "I know that I sometimes make you feel bad and unsettled, but that doesn't change the fact that I love you. it's not supposed to be like this.",
        "It's supposed to be better, and I'm really sorry about it. I am trying my best to be with you.",
        "Please be sure that I love you and I can do anything for you.",
        "Hold on..."
    ];

    let currentMessageIndex = 0;
    let i = 0;

    function typeWriter() {
        if (i < messages[currentMessageIndex].length) {
            typingMessage.innerHTML += messages[currentMessageIndex].charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            continueButton.style.opacity = 1;

            if (currentMessageIndex === messages.length - 1) {
                showPopupBox();
            }
        }
    }

    setTimeout(typeWriter, 2000);

    function startNewTypingAnimation() {
        typingMessage.style.opacity = 1;
        continueButton.style.opacity = 0;
        blushingEmoji.style.opacity = 0;

        setTimeout(() => {
            typingMessage.innerHTML = '';
            i = 0;

            if (currentMessageIndex < messages.length - 1) {
                currentMessageIndex++;
                typeWriterNew(messages[currentMessageIndex], 0);
            } else {
                showPopupBox();
            }
        }, 1000);
    }

    function typeWriterNew(text, index) {
        if (index < text.length) {
            typingMessage.innerHTML += text.charAt(index);
            setTimeout(() => typeWriterNew(text, index + 1), 50);
        } else {
            continueButton.style.opacity = 1;
            blushingEmoji.style.opacity = 1;
        }
    }

    function showPopupBox() {
        popupBox.style.display = 'block';
        blushingEmoji.style.animation = 'blink 1s infinite';
        setTimeout(() => {
            valentineMessage.innerHTML = "will you hold on to me forever?";
            yesButton.style.opacity = 1;
            noButton.style.opacity = 1;
        }, 3000);
    }

    function showConfetti() {
        // Use confetti.js library to create a confetti blast
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Close the popup box after a delay
        setTimeout(() => {
            popupBox.style.display = 'none';
            // Additional action after confetti blast (if any)
            playFullScreenVideo();
        }, 3000);
    }

    function playFullScreenVideo() {
        // Hide all existing elements
        proposalContainer.style.display = 'none';

        // Display the full-screen video element
        proposalVideo.style.display = 'block';
    }

    continueButton.addEventListener('click', startNewTypingAnimation);
    yesButton.addEventListener('click', showConfetti);
    noButton.addEventListener('click', showConfetti);
});
