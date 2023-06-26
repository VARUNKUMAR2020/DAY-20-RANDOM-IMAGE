function getRandomDogImage() {
  return new Promise((resolve, reject) => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.message;
        resolve(imageUrl); // Resolve the Promise with the image URL
      })
      .catch((error) => {
        reject(error); // Reject the Promise with the error
      });
  });
}

function getDogImage() {
  getRandomDogImage()
    .then((imageUrl) => {
      const imagesDiv = document.getElementById("images");
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imagesDiv.innerHTML = ""; // Clear previous images
      imagesDiv.appendChild(imgElement);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
