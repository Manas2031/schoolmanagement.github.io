
    const textArray = ['Welcome to Jain Public School', 'Our Latest News', 'Admissions Open', 'Apply Now'];
    let currentIndex1 = 0;
    const movingTextElement = document.getElementById('movingText');

    setInterval(() => {
      movingTextElement.textContent = textArray[currentIndex1];
      currentIndex1 = (currentIndex1 + 1) % textArray.length;
    }, 2000); 

    // const imageArray = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg'];
    // let currentIndex = 0;
    // const imageContainer = document.getElementById('imageSlider');
    
    // function changeBackgroundImage() {
    //     imageContainer.style.backgroundImage = `url(${imageArray[currentIndex]})`;
    //     currentIndex = (currentIndex + 1) % imageArray.length;
    // }
    
    // changeBackgroundImage(); // Initial call to set the background image
    
    // setInterval(changeBackgroundImage, 3000); // Change the background image every 3 seconds
    
    // const imageArray = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg'];
    // let currentIndex1 = 0;
    // const imageContainer = document.getElementById('imageContainer');

    // function setBackgroundImage() {
    // imageContainer.style.backgroundImage = `url(${imageArray[currentIndex1]})`;
    // imageContainer.style.backgroundSize = 'cover';
    // imageContainer.style.backgroundPosition = 'center';
    //  }

    // setBackgroundImage();

    // setInterval(() => {
    // currentIndex1 = (currentIndex1 + 1) % imageArray.length;
    // setBackgroundImage();
    // }, 3000);
    
// Get the card elements
// const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];
// const cardsPerPage = 3;
// let currentPage = 0;

// function showCards() {
//   const cardRow = document.querySelector(".card-row");
//   cardRow.innerHTML = "";
//   const start = currentPage * cardsPerPage;
//   const end = start + cardsPerPage;
//   for (let i = start; i < end && i < images.length; i++) {
//     const col = document.createElement("div");
//     col.classList.add("col-md-4");
//     col.innerHTML = `
//       <div class="card">
//         <img src="${images[i]}" class="card-img-top" alt="...">
//       </div>
//     `;
//     cardRow.appendChild(col);
//   }
// }

// document.getElementById("prevBtn").addEventListener("click", () => {
//   currentPage = Math.max(0, currentPage - 1);
//   showCards();
// });

// document.getElementById("nextBtn").addEventListener("click", () => {
//   currentPage = Math.min(Math.ceil(images.length / cardsPerPage) - 1, currentPage + 1);
//   showCards();
// });

// showCards(); // Initial display


document.getElementById("nextButton").addEventListener("click", function () {
  const cardContainer = document.getElementById("cardContainer");
  const firstCard = cardContainer.firstElementChild;
  cardContainer.removeChild(firstCard);
  cardContainer.appendChild(firstCard.cloneNode(true));
});

document.getElementById("prevButton").addEventListener("click", function () {
  const cardContainer = document.getElementById("cardContainer");
  const lastCard = cardContainer.lastElementChild;
  cardContainer.removeChild(lastCard);
  cardContainer.insertBefore(lastCard.cloneNode(true), cardContainer.firstElementChild);
});



// Get the arrow button element
const arrowButton = document.getElementById('arrowButton');

// Show the arrow button when scrolling down
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        arrowButton.classList.add('show');
    } else {
        arrowButton.classList.remove('show');
    }
});

// Scroll to the top of the page when the arrow button is clicked
arrowButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});







