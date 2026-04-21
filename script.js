let currentPage = 0;
const pages = document.querySelectorAll(".page");

function goToPage2() {
    switchPage("page1", "page2");
}

function goTPage3() {
    switchPage("page2", "page3");
}

function goToPage4() {
    switchPage("page3", "page4");
}

function switchPage(from, to) {
    document.getElementById(from).classList.remove("active");
    document.getElementById(to).classList.add("active");
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
