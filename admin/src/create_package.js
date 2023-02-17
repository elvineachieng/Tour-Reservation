//CREATE PACKAGE
const form = document.getElementById('create_package');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('http://localhost:3500/')
});