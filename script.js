// Redirect Functions
function goToYes() {
    window.location.href = "yes.html";
}

function goToNo() {
    window.location.href = "no.html";
}

function goHome() {
    window.location.href = "index.html";
}

function goBack() {
    window.location.href = "index.html";
}

// Floating Hearts Effect (More Natural Movement)
document.addEventListener("mousemove", function(e) {
    let heart = document.createElement("div");
    heart.innerText = "💖";
    heart.classList.add("floating-heart");
    document.body.appendChild(heart);

    let size = Math.random() * 20 + 10;
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    heart.style.fontSize = size + "px";

    setTimeout(() => { heart.remove(); }, 2000);
});

// Moving "No" Button (Less Extreme)
const noButton = document.getElementById("noButton");
if (noButton) {
    noButton.addEventListener("mouseover", function() {
        let x = (Math.random() - 0.5) * 300;
        let y = (Math.random() - 0.5) * 200;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Confetti for Yes Page
// Confetti for Yes Page
if (window.location.pathname.includes("yes.html")) {
    const confetti = document.getElementById("confetti");
    const ctx = confetti.getContext("2d");
    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * confetti.width,
            y: Math.random() * confetti.height,
            size: Math.random() * 5 + 2,
            speedY: Math.random() * 3 + 1
        });
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confetti.width, confetti.height);
        ctx.fillStyle = "#ff1493";

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            p.y -= p.speedY;
            if (p.y < 0) p.y = confetti.height;
        });

        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}

