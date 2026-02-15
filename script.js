document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sent!';
            btn.style.backgroundColor = '#059669';
            
            setTimeout(() => {
                contactForm.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
            }, 3000);
            
            alert('Thanks for reaching out! (This is a demo form)');
        });
    }

    // Demo Simulation Logic
    const instructions = [
        { step: 'Step 1', text: 'Heat pan to medium-high' },
        { step: 'Step 2', text: 'Add olive oil' },
        { step: 'Step 3', text: 'Sauté onions until translucent' },
        { step: 'Step 4', text: 'Add garlic, stir frequently' },
        { step: 'Success', text: 'Perfectly cooked! Remove from heat.' }
    ];

    let currentStep = 0;
    const instructionBox = document.querySelector('.instruction-box');
    const stepNumberEl = document.querySelector('.step-number');
    const instructionTextEl = document.querySelector('.instruction-text');
    const statusBadge = document.querySelector('.status-badge');

    function updateDemo() {
        // Hide box
        instructionBox.classList.remove('active');
        
        setTimeout(() => {
            // Update content
            const instruction = instructions[currentStep];
            stepNumberEl.innerText = instruction.step;
            instructionTextEl.innerText = instruction.text;
            
            // Randomize status
            statusBadge.innerText = currentStep === instructions.length - 1 ? 'Complete' : 'Analyzing...';
            statusBadge.style.backgroundColor = currentStep === instructions.length - 1 ? '#10b981' : 'rgba(16, 185, 129, 0.9)';

            // Show box
            instructionBox.classList.add('active');

            // Move to next step
            currentStep = (currentStep + 1) % instructions.length;

        }, 1000); // Wait for fade out
    }

    // Start loop
    setInterval(updateDemo, 4000);
    // Initial call
    setTimeout(() => instructionBox.classList.add('active'), 500);
});
