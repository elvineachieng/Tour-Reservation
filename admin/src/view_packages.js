const root = document.getElementById('view_packages');

fetch('http:localhost:3500/admin/view_packages', {
    method: 'GET',
})
.then ( (response) => response.json())
.then( (responseData) => {
    console.log(responseData);
})
.catch ( (err) => {
    console.log(err);
})