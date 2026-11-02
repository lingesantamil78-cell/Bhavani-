const PASSWORD = "bhavani"; // password inga maathalam

const lock = document.getElementById("lock");
const wish = document.getElementById("wish");
const input = document.getElementById("pass");
const btn = document.getElementById("open");
const error = document.getElementById("error");
const heartsBox = document.getElementById("hearts");

const emojis = ["💖", "💗", "💕", "🌸", "💞", "✨"];

function spawnHeart() {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 22 + "px";
  h.style.animationDuration = 5 + Math.random() * 5 + "s";
  heartsBox.appendChild(h);
  setTimeout(() => h.remove(), 10000);
}

function unlock() {
  if (input.value.trim().toLowerCase() === PASSWORD) {
    lock.classList.remove("active");
    wish.classList.add("active");
    for (let i = 0; i < 25; i++) setTimeout(spawnHeart, i * 80);
    setInterval(spawnHeart, 450);
  } else {
    error.textContent = "Oops! Wrong password 🙈 Try again";
    input.classList.remove("shake");
    void input.offsetWidth;
    input.classList.add("shake");
  }
}

btn.addEventListener("click", unlock);
input.addEventListener("keydown", (e) => { if (e.key === "Enter") unlock(); });
