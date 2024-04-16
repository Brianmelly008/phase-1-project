// gallery.js

// Function to parse query parameters from URL
function parseQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryParams = queryString.split('&');
    queryParams.forEach(param => {
        const [key, value] = param.split('=');
        params[key] = value;
    });
    return params;
}

// Function to get the breed name from query parameters and display it
function displayBreedName() {
    const queryParams = parseQueryParams();
    const breedName = queryParams['breed'];
    const breedNameElement = document.getElementById('breed-name');
    if (breedName) {
        breedNameElement.textContent = breedName.replace('-', ' '); // Replace dashes with spaces
    } else {
        breedNameElement.textContent = 'Unknown Breed';
    }
}

// Function to display gallery images for the selected breed
function displayGallery() {
    const galleryElement = document.querySelector('.gallery');
    const queryParams = parseQueryParams();
    const breedName = queryParams['breed'];
    if (breedName) {
        // Replace this with your logic to fetch and display images for the selected breed
        // Example: 
        // const breedImages = getBreedImages(breedName); // Call a function to fetch images for the breed
        // breedImages.forEach(imageUrl => {
        //     const imgElement = document.createElement('img');
        //     imgElement.src = imageUrl;
        //     imgElement.alt = 'Breed Image';
        //     galleryElement.appendChild(imgElement);
        // });

        // Dummy images for demonstration
        const dummyImages = [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg'
        ];
        dummyImages.forEach(imageUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = `path_to_images/${imageUrl}`; // Replace "path_to_images" with your actual path
            imgElement.alt = 'Breed Image';
            galleryElement.appendChild(imgElement);
        });
    } else {
        galleryElement.innerHTML = '<p>No breed selected</p>';
    }
}

// Call functions to display breed name and gallery images when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayBreedName();
    displayGallery();
});
// gallery.js

// Function to parse query parameters from URL
function parseQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryParams = queryString.split('&');
    queryParams.forEach(param => {
        const [key, value] = param.split('=');
        params[key] = value;
    });
    return params;
}

// Function to get the breed name from query parameters and display it
function displayBreedName() {
    const queryParams = parseQueryParams();
    const breedName = queryParams['breed'];
    const breedNameElement = document.getElementById('breed-name');
    if (breedName) {
        breedNameElement.textContent = breedName.replace('-', ' '); // Replace dashes with spaces
    } else {
        breedNameElement.textContent = 'Unknown Breed';
    }
}

// Function to display gallery images for the selected breed
function displayGallery() {
    const galleryElement = document.querySelector('.gallery');
    const queryParams = parseQueryParams();
    const breedName = queryParams['breed'];
    if (breedName) {
        // Replace this with your logic to fetch and display images for the selected breed
        // Example: 
        // const breedImages = getBreedImages(breedName); // Call a function to fetch images for the breed
        // breedImages.forEach(imageUrl => {
        //     const imgElement = document.createElement('img');
        //     imgElement.src = imageUrl;
        //     imgElement.alt = 'Breed Image';
        //     galleryElement.appendChild(imgElement);
        // });

        // Dummy images for demonstration
        const dummyImages = [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg'
        ];
        dummyImages.forEach(imageUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = `path_to_images/${imageUrl}`; // Replace "path_to_images" with your actual path
            imgElement.alt = 'Breed Image';
            galleryElement.appendChild(imgElement);
        });
    } else {
        galleryElement.innerHTML = '<p>No breed selected</p>';
    }
}

// Call functions to display breed name and gallery images when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayBreedName();
    displayGallery();
});
