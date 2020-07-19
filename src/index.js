console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    getImages();
    getBreeds();
});

function getImages(){
    const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
    fetch(imgUrl)
    .then (res => res.json())
    .then (json => json.message.forEach(image => renderImages(image)))
}

function renderImages(image){
    const imgDiv = document.getElementById("dog-image-container")
    const imgTag = document.createElement("img")
    imgTag.src = image
    imgDiv.appendChild(imgTag)
}
    
function getBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then (res => res.json())
    .then (json => {
        for(const breed in json.message){
        renderBreeds(breed, json.message[breed])
    }});
};

function renderBreeds(breed, breedVarieties){
    const breedList = document.getElementById("dog-breeds")
    const breedItem = document.createElement('li')
    
    //purple on click
    breedItem.addEventListener("click", () => {
        breedItem.style.color = "purple"
    });

    breedItem.innerHTML = `${breed}:<br> <em>${breedVarieties}</em><br><br>`
    breedList.appendChild(breedItem)

    //dropdown filtering
    const dropdown = document.getElementById("breed-dropdown")
    dropdown.addEventListener("change", (e) => {
        const letter = e.target.value

        if (letter !== breed.charAt(0)){
            breedItem.style.display = "none"
        } else {
            breedItem.style.display = "list-item"
        };
    });
};