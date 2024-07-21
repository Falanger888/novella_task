var up = document.querySelector(".only_up");
up.addEventListener("click", OnlyUp);
window.addEventListener("scroll", Scroll);


function Scroll() {
    var offset = window.pageYOffset;
    var coords = document.documentElement.clientHeight;
    if (offset > coords) {
        up.classList.add('only_up--show');

    }
    else {
        up.classList.remove('only_up--show');
    }
}

function OnlyUp() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(OnlyUp, 0);
    }
}




