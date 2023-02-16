const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(form);
    const newAdminObject = {
        username: formData.get('username'),
        password: formData.get('password'),
    };
    fetch('http://localhost:3500/admin/login')
    console.log(newAdminObject);
});