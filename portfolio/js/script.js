//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// ====================scroll section active section=========================
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
/*================================= Sticky navbar ================================ */
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // =============remove overlay menu icon when clicked =========
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


//moving text home page
var typed = new Typed(".multiple-text", {
    strings: [
        "Student",
        "Frontend Apprentice",
        "Youtuber",
        "Programmer",
        "Photographer",],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

//============== scroll reveal animations ==============
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 
});

ScrollReveal().reveal('.heading', { origin: 'top' });



  //============ unavailable content =====================
  document.addEventListener('DOMContentLoaded', function () {
    const alertButtons = document.querySelectorAll('.btn');

    alertButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            alert('This feature is currently unavailable.');
        });
    });
});


  
  
  
  
  
  
