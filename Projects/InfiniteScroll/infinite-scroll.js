/** @format */

const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

let photosArray = [];

let numOfImages = 5;

const apiUrl = `${document.location.origin}/InfiniteScroll/photosData.json`;

console.log(apiUrl);

// helper function for setting the attributes
function setAttributes(element, attributes) {
  for (let keys in attributes) {
    element.setAttribute(keys, attributes[keys]);
  }
}

// values from an api

function displayPhotos(photosData, numberOfItems) {
  //   console.log(photosArray);
  if (photosData.length > 0) {
    for (let i = 0; i < numOfImages; i++) {
      if (i < numOfImages) {
        const image = document.createElement("img");
        setAttributes(image, {
          src: photosData[i].urls.regular,
          alt: photosData[i].alt_description,
          title: photosData[i].alt_description,
        });
        imageContainer.appendChild(image);
      }
    }
  } else {
    imageContainer.style.display = "none";
    notFound.style.display = "block";
  }
}

async function getPhotos() {
  try {
    loader.style.display = "flex";
    const response = await fetch(apiUrl);
    photosArray = await response.json();

    if (!photosArray) {
      throw new Error("Data Not Loaded Successfully");
    } else {
      setTimeout(() => {
        loader.style.display = "none";
      }, 1000);
      displayPhotos(photosArray, numOfImages);
    }
  } catch (error) {
    console.log("Data Not Found:", error.message);
  }
}

window.addEventListener("scroll", () => {
  let documentHeight = document.body.scrollHeight;
  let currentScroll = window.scrollY + window.innerHeight;

  let modifier = 200;

  if (currentScroll + modifier > documentHeight) {
    numOfImages += 5;
    loader.style.display = "flex";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
    displayPhotos(photosArray, numOfImages);
  }
});

getPhotos();
