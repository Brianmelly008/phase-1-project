// index.js

// Function to fetch dog breeds from db.json
async function fetchDogBreeds() {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();
    return data.dogBreeds;
}

// Function to populate the breed select dropdown
async function populateBreedSelect() {
    const select = document.getElementById('breed-select');

    // Clear existing options
    select.innerHTML = '';

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Select a breed';
    defaultOption.value = '';
    select.appendChild(defaultOption);

    // Fetch dog breeds from db.json
    const breeds = await fetchDogBreeds();

    // Add options for each breed
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.text = breed;
        option.value = breed.toLowerCase().replace(' ', '-'); // Convert breed name to lowercase and replace spaces with dashes
        select.appendChild(option);
    });
}
// Function to fetch dog breed images
async function fetchBreedImage(breedName) {
    // Convert breed name to lowercase with spaces replaced by hyphens
    const formattedBreedName = breedName.toLowerCase().replace(' ', '-');
    
    const response = await fetch(`https://dog.ceo/api/breed/${formattedBreedName}/images/random`);
    const data = await response.json();
    return data.message;
}

// Function to handle viewGallery button click
function viewGallery() {
    const selectedBreed = document.getElementById('breed-select').value;
    const galleryContainer = document.getElementById('gallery-container');

    if (selectedBreed) {
        fetchBreedImage(selectedBreed)
            .then(imageUrl => {
                const breedImage = document.createElement('img');
                breedImage.src = imageUrl;
                breedImage.alt = `Picture of ${selectedBreed}`;
                galleryContainer.innerHTML = ''; // Clear previous content
                galleryContainer.appendChild(breedImage);
            })
            .catch(error => {
                console.error('Error fetching breed picture:', error);
            });
    } else {
        alert('Please select a breed');
    }
}


// Call the populateBreedSelect function to populate the breed select dropdown initially
populateBreedSelect();
