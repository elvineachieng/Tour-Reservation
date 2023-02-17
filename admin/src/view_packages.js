const root = document.getElementById('view_packages');

fetch('http://localhost:3500/admin/view_packages', {
    method: 'GET',
})
.then ( (response) => response.json())
.then( (responseData) => {
    responseData.data.map( (data) =>{
        const packageContainer = document.createElement('div');
        packageContainer.setAttribute('id', data.package_id);

        const packageImage = document.createElement('img');
        packageImage.setAttribute('src', 'http://localhost:3500/'+data.package_image);
        packageImage.setAttribute('alt', data.package_name);
        packageContainer.appendChild(packageImage);

        const packagePrice = document.createElement('p');
        
        packageContainer.appendChild(packagePrice);
        root.appendChild(packageContainer)
    });
    console.log(responseData);
})
.catch ( (err) => {
    console.log(err);
})