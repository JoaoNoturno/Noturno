
document.addEventListener('DOMContentLoaded', function() {
    const minimizeButton = document.querySelector('.sidebar-control.minimize');
    const menuTitle = document.querySelector('.sidebar-header h2');

    minimizeButton.addEventListener('click', toggleSidebar);
    menuTitle.addEventListener('click', toggleSidebar); 
});

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const minimizeButtonIcon = document.querySelector('.sidebar-control.minimize i');
    
    sidebar.classList.toggle('minimized');
}


'use strict';

function typeWriter(elements) {
    elements.forEach((el) => {
        const textArray = el.innerHTML.split('');
        el.innerHTML = '';
        textArray.forEach((letter, i) =>
            setTimeout(() => (el.innerHTML += letter), 95 * i)
        );
    });
}

const allTerminals = document.querySelectorAll('.terminal');
typeWriter(allTerminals);

const texts = [
  { text: "Noturno", font: "Caveat" },
  { text: "João", font: "Gloria Hallelujah" },
  { text: "Noturno", font: "Anton" },
  { text: "João", font: "IBM Plex Mono" }
];

let index = 0;
const textContainer = document.getElementById('text-container');

function changeText() {
  textContainer.textContent = texts[index].text;
  textContainer.style.fontFamily = texts[index].font;
  index = (index + 1) % texts.length;
}

setInterval(changeText, 200);

window.onload = changeText;
