let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
    pages[currentPage].classList.remove("active");
    currentPage++;
    pages[currentPage].classList.add("active");
}



// Slideshow
const images = [
    <><img src="RRimage1.jpg"></img><img src="RRimage2.jpg"></img><img src="RRimage3.jpg"></img><img src="RRimage4.jpg"></img></>
    
];

let index = 0;
const slideshow = document.getElementById("slideshow");

setInterval(() => {
    if (slideshow) {
        index = (index + 1) % images.length;
        slideshow.src = images[index];
    }
}, 2000);
