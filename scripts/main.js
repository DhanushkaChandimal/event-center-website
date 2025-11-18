function toggleMenu(){
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
