// coding with nick

// PreLoader
window.addEventListener('DOMContentLoaded', () =>{

    const preloader = document.querySelector(".preloader"),
    navbarCollapseA = document.querySelector(".navbar-collapse a"),
    navbarCollapseMain = document.querySelector(".navbar-collapse"),
    navbar = document.querySelector(".navbar"),
    typedJs = document.querySelector(".typedJsAnime");
    

    // for my loader
setTimeout(() => {
    preloader.style.opposite = "0"
    preloader.style.display = "none"
}, 1000);


// animating type
setTimeout(() => {
    const options = {
        strings: ["<h1>hello, I am <strong>Akhmad</strong> from Uzbekistan.</h1>", "<h1>hello, I am <strong>Akhmad</strong> from Uzbekistan.</h1>"],
        typeSpeed: 60,
        showCursor: false,
        cursorChar: '|',
        autoInsertCss: true,
    }
    let typed = new Typed(typedJs, options)
    
}, 2000);

});