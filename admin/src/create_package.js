//CREATE PACKAGE
const form = document.getElementById('createPackage');
console.log(form);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new formData(form);
    console.log(form);
});