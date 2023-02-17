//CREATE PACKAGE
const form = document.getElementById('create_package');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('http://localhost:3500/admin/create_packages', {
        method: 'POST',
        body: formData,
    })
    .then( response => response.json())
    .then( (responseData) =>{
        console.log(responseData);
    })
    .catch( (err) => {
        console.log(err);
    })
});