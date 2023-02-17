const root = document.getElementById('view_packages');

fetch('http:localhost:3500/admin/view_packages', {
    method: 'GET',
    headers: {
        'content-type': 'application/json',
    }
})
.then ( (response) => response.json())