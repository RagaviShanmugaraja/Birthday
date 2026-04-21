window.onload = function () {

    let currentPage = 0;
    const pages = document.querySelectorAll(".page");

    window.nextPage = function () {
        if (currentPage < pages.length - 1) {
            pages[currentPage].classList.remove("active");
            currentPage++;
            pages[currentPage].classList.add("active");
        }
    };

    const images = [
        "RRimage1.jpg",
        "RRimage2.jpg",
        "RRimage3.jpg",
        "RRimage4.jpg"
    ];

    let index = 0;
    const slideshow = document.getElementById("slideshow");

    setInterval(() => {
        if (slideshow) {
            index = (index + 1) % images.length;
            slideshow.src = images[index];
        }
    }, 2000);

};
