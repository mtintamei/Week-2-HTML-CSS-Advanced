// Animations for Expense Tracker

document.addEventListener('DOMContentLoaded', () => {
    // Animate landing page elements
    gsap.from('.animate-text', {
        duration: 1,
        y: 50,
        opacity: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.animate-button', {
        duration: 1,
        scale: 0.5,
        opacity: 1,
        delay: 0.5,
        ease: 'back.out(1.7)'
    });

    // Animate page content on other pages
    gsap.from('.page-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    // Animate form elements
    gsap.from('form *', {
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
    });
});

// Parallax effect for background elements
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});
// Create expense chart
const ctx = document.getElementById('expenseChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Transportation', 'Utilities', 'Entertainment', 'Other'],
        datasets: [{
            data: [300, 150, 200, 100, 50],
            backgroundColor: ['#ff6b6b', '#4ecdc4', '#45aaf2', '#feca57', '#a55eea']
        }]
    },
    options: {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});