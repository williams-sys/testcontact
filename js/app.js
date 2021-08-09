


// responsive menu when on small devices to show the menus start
var domreyBars = document.getElementById("domrey-bars");
var domreyMenu = document.getElementById("domrey-menu");
var bodyChange = document.getElementById("nav");
domreyBars.addEventListener("click", () => {
    domreyBars.classList.toggle("rotate-domrey-bars");
    domreyMenu.classList.toggle("show-domrey-menu");
    bodyChange.classList.toggle("hide-on-scroll-page");
})
// responsive menu when on small devices to show the menus end


//side bar to normal start
var linkHome = document.getElementById("link-home");
var linkArrival = document.getElementById("link-arrival");
var linkEdition = document.getElementById("link-edition");
var linkSubscribe = document.getElementById("link-subscribe");
var linkBlog = document.getElementById("link-blog");
var linkContact = document.getElementById("link-contact");

linkHome.addEventListener("click", () => {
    domreyBars.classList.toggle("rotate-domrey-bars");
    domreyMenu.classList.toggle("show-domrey-menu");
    bodyChange.classList.toggle("hide-on-scroll-page");
})
linkArrival.addEventListener("click", () => {
    domreyBars.classList.toggle("rotate-domrey-bars");
    domreyMenu.classList.toggle("show-domrey-menu");
    bodyChange.classList.toggle("hide-on-scroll-page");
})
linkEdition.addEventListener("click", () => {
    domreyBars.classList.toggle("rotate-domrey-bars");
    domreyMenu.classList.toggle("show-domrey-menu");
    bodyChange.classList.toggle("hide-on-scroll-page");
})
linkSubscribe.addEventListener("click", () => {
    domreyBars.classList.toggle("rotate-domrey-bars");
    domreyMenu.classList.toggle("show-domrey-menu");
    bodyChange.classList.toggle("hide-on-scroll-page");
})
linkBlog.addEventListener("click", () => {
    domreyBars.classList.toggle("rotate-domrey-bars");
    domreyMenu.classList.toggle("show-domrey-menu");
    bodyChange.classList.toggle("hide-on-scroll-page");
})
linkContact.addEventListener("click", () => {
    domreyBars.classList.toggle("rotate-domrey-bars");
    domreyMenu.classList.toggle("show-domrey-menu");
    bodyChange.classList.toggle("hide-on-scroll-page");
})
//side bar to normal end

//active on scrolling start
var sections = document.querySelectorAll("section");

onscroll = function () {
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach((section) => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
            scrollPosition <
            section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
        ) {
            var currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
        }
    });
};

var removeAllActiveClasses = function () {
    document.querySelectorAll("nav ul li a").forEach((el) => {
        el.classList.remove("active");
    });
};

var addActiveClass = function (id) {
    // console.log(id);
    var selector = `nav ul li a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        var currentId = e.target.attributes.href.value;
        var section = document.querySelector(currentId);
        var sectionPos = section.offsetTop;
        // section.scrollIntoView({
        //   behavior: "smooth",
        // });

        window.scroll({
            top: sectionPos,
            behavior: "smooth",
        });
    });
});
//active on scrolling end

//change nav start
window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY > 500;
    header.classList.toggle('scrolling-active', windowPosition);
})
//change nav end


