// Function to load HTML components
async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            document.getElementById(id).innerHTML = text;
            
            // Re-initialize mobile menu listener after header loads
            if(id === 'header-placeholder') initMobileMenu();
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

// Mobile Menu Toggle Logic
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

// Execute on load
document.addEventListener("DOMContentLoaded", () => {
    loadComponent('header-placeholder', 'components/header.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});