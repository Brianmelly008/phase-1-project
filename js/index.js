// index.js

// Function to fetch dog breeds from db.json
async function fetchDogBreeds() {
    const response = await fetch('db.json');
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

// Call the populateBreedSelect function to populate the breed select dropdown initially
populateBreedSelect();
