const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = Object.entries(new FormData(form));
    console.log(formData);
});