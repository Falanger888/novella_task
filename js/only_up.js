(function() {
    var up = document.querySelector(".only_up");
    if (!up) return;

    window.addEventListener("scroll", function() {
        var offset = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
        if (offset > coords) {
            up.classList.add('only_up--show');
        } else {
            up.classList.remove('only_up--show');
        }
    });

    up.addEventListener("click", function() {
        // Нативный плавный скролл вверх
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();