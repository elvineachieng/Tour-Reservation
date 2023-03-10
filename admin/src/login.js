const form = document.getElementById('loginForm');
const errorSpan = form.querySelector('span.error');
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
        console.log(data);
        if(data.error){
            errorSpan.textContent = data.statusText;
            return;
        }
        return window.location.href = './dashboard.html';
    })
});