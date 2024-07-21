// Достаем интересующие переменные
var Left = document.getElementById("left");
var Right = document.getElementById("right");
var Slides = document.querySelectorAll(".image_slider");
var Bottom = document.getElementById("bottom");
// Количество слайдов
let countSlideIndex = 0;

// Массив пагинации
var circkles = [];


// Создаем круги
function CreateCircle() {
    var div = document.createElement("div");
    div.className = 'circle-info';
    Bottom.appendChild(div);
    circkles.push(div);
}


function AddCircle() {
    Slides.forEach(CreateCircle);
    circkles[0].classList.add("active");
}
AddCircle();


function addActive() {
    circkles[countSlideIndex].classList.add('active')
}
function removeActive() {
    circkles[countSlideIndex].classList.remove('active')
}

// Листаем слайды
function SlideActive() {
    Slides[countSlideIndex].classList.add('block-slide');
}

function SlideDeactivaed() {
    Slides[countSlideIndex].classList.remove("block-slide");
}


function SlideRight() {
    SlideDeactivaed();
    removeActive();
    countSlideIndex++;
    if (countSlideIndex > Slides.length - 1) {
        countSlideIndex = 0;
    }
    addActive();
    SlideActive();
}

function SlideLeft() {
    SlideDeactivaed();
    removeActive();
    countSlideIndex--;
    if (countSlideIndex < 0) {
        countSlideIndex = Slides.length - 1;
    }
    addActive();
    SlideActive();
}

Right.addEventListener("click", SlideRight);
Left.addEventListener("click", SlideLeft);