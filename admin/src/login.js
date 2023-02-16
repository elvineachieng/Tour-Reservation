const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formObject = Object.entries(new FormData(form));
    console.log(formObject);
});