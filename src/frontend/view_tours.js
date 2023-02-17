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
        packagePrice.innerHTML = data.package_price
        packageContainer.appendChild(packagePrice);

        const packageLocation = document.createElement('p');
        packageLocation.innerHTML = data.package_location;
        packageContainer.appendChild(packageLocation);

        const packageName = document.createElement('h2');
        packageName.innerHTML = data.package_name;
        packageContainer.appendChild(packageName);

        const packageFeatures = document.createElement('p');
        packageFeatures.innerHTML = data.package_features;
        packageContainer.appendChild(packageFeatures);

        const packageType = document.createElement('p');
        packageType.innerHTML = data.package_type;
        packageContainer.appendChild(packageType);

        const packageDetails = document.createElement('p');
        packageDetails.innerHTML = data.package_details;
        packageContainer.appendChild(packageDetails);

        const packageCreationDate = document.createElement('p');
        packageCreationDate.innerHTML = data.created_at;
        packageContainer.appendChild(packageCreationDate);

        const bookButton = document.createElement('button');
        modifyButton.innerHTML = 'book now'
        modifyButton.setAttribute('type', 'button');
        packageContainer.appendChild(modifyButton);
        root.appendChild(packageContainer)
    });
    console.log(responseData);
})
.catch ( (err) => {
    console.log(err);
})