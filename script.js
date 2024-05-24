document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for contacting us, we will get back to you shortly.');
        form.reset();
    });
});