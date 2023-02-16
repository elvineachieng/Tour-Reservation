const form = document.getElementById('loginForm');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const formData = new FormData(form);
    const newAdminObject = {
        username: formData.get('username'),
        password: formData.get('password'),
    };
    fetch('http://localhost:3500/admin/login', {
        method: 'POST',
        body: JSON.stringify(newAdminObject),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
        if(data.error){
            console.log(data.error);
            return;
        }
        return window.location.href = '../';
    })
});