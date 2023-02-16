const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(form.formData);
});