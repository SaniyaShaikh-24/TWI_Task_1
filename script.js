document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Additional security-related form validation can be added here if needed.

    alert('Thank you for reaching out. We will get in touch with you soon!');
});
