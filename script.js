const lines = [
  "Initializing security modules...",
  "Loading encryption protocols...",
  "Establishing secure environment...",
  "Access Granted ✔"
];

let i = 0;
const terminal = document.getElementById("terminal-text");
const progress = document.querySelector(".progress");

function typeLine() {
  if (i < lines.length) {
    terminal.innerHTML += lines[i] + "\n";
    i++;
    setTimeout(typeLine, 600);
  } else {
    startLoading();
  }
}

function startLoading() {
  let width = 0;
  let interval = setInterval(() => {
    width++;
    progress.style.width = width + "%";
    if (width >= 100) {
      clearInterval(interval);
      document.getElementById("boot-screen").style.display = "none";
      document.getElementById("main-site").classList.remove("hidden");
    }
  }, 15);
}

typeLine();
