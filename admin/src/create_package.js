//CREATE PACKAGE
const form = document.getElementById('create_package');
console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new formData(form);
    console.log(form);
});