document.addEventListener('DOMContentLoaded', function () {
    getImages();
    getBreeds();
});

function getImages() {
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgURL)
    .then(res => res.json())
    .then(json => json.message.forEach(image => addImage(image)))
};

function addImage(imageURL) {
    const imgContainer = document.getElementById("dog-image-container");
    const newImg = document.createElement("img");
    newImg.src = imageURL;
    imgContainer.appendChild(newImg);
};

function getBreeds() {
    const breedURL = "https://dog.ceo/api/breeds/list/all"
    fetch(breedURL)
    .then(res => res.json())
    .then(json => {
        for(const breed in json.message) {
            addBreed(breed, json.message[breed]);
            }})
};

function addBreed(breed, subStuff) {
    let breedList = document.getElementById('dog-breeds');
    let li = document.createElement('li');
    li.innerText = `${breed}: ${subStuff}`;
    li.style.cursor = 'pointer';
    breedList.appendChild(li);

    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener('change', (event) => {

        const letter = event.target.value;

        if (letter !== breed.charAt(0)) {
            li.style.display = 'none';
        }
        else {
            li.style.display = 'list-item';
        }
        });

        li.addEventListener('click', () => {
            li.style.color = 'red';
        });
};


// function breedSelect(breed) {
//     const breedDropdown = document.getElementById("breed-dropdown")
//     breedDropdown.addEventListener('change', (event) => {
//         const letter = event.target.value;
//         // breed.filter(breeds => breeds.charAt(letter))
//         if (breed.charAt(0) == letter) {
//             breedList.appendChild(li);
//         }
//         else {
//             addBreed(breed)
//         }
//     });
// }

// function updateColor(event) {
//     event.target.style.color = 'red';
// }