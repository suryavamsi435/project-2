document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Show the confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.classList.remove('hidden');

    // Reset the form fields
    this.reset();
});