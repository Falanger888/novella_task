(function() {
    var openBurger = document.getElementById("open_menu_burger");
    var Burger = document.getElementById("burger_menu");
    var Close = document.getElementById("close_menu");

    if(openBurger && Burger && Close) {
        openBurger.onclick = function () {
            Burger.style.display = "flex";
            Close.style.display = "block";
            openBurger.style.display = "none";
        };

        Close.onclick = function () {
            Burger.style.display = 'none';
            Close.style.display = 'none';
            openBurger.style.display = 'block'; 
        };
    }
})();