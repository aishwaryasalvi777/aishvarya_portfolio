// --- Navbar Scroll Effect ---
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('black');
    } else {
        nav.classList.remove('black');
    }
});

// --- Optional: Drag to scroll (Mouse Interaction) ---
const sliders = document.querySelectorAll('.row__posters');
let isDown = false;
let startX;
let scrollLeft;

sliders.forEach(slider => {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});

// --- Modal Logic ---
const modal = document.getElementById("aboutModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

// Open the modal
btn.onclick = function() {
    modal.style.display = "flex";
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close if clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- Read more toggles for collapsible descriptions ---
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-more-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const container = e.target.previousElementSibling; // the .collapsible
            if (!container) return;
            container.classList.toggle('collapsed');
            e.target.textContent = container.classList.contains('collapsed') ? 'Read more' : 'Show less';
        });
    });
});