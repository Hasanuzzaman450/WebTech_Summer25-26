const themeBtn = document.getElementById("theme-btn"); // Dom Selection

themeBtn.addEventListener("click", function() { // Dom Mupulation
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

const couterBtn = document.getElementById("couter-btn");
const counterTxt = document.getElementById("counter-txt");
let count = 0;

couterBtn.addEventListener("click", function() {
    count += 1;
    counterTxt.textContent = count;
});


const nameInput = document.getElementById("name-input");
const namePreview = document.getElementById("name-preview");

nameInput.addEventListener("input", function() {
    const typedValue = nameInput.value.trim();

    if(typedValue === "") {
        namePreview.textContent = "friend!";
    } else {
        namePreview.textContent = typedValue;
    }
});

const toggleButton = document.getElementById("toggle-btn");
const sceretBox = document.getElementById("secretBox");

toggleButton.addEventListener("click", function() {
    sceretBox.classList.toggle('visible');
});