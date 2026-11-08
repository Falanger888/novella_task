(function() {
    var Left = document.getElementById("left");
    var Right = document.getElementById("right");
    var Slides = document.querySelectorAll(".image_slider");
    var Bottom = document.getElementById("bottom");

    if (!Left || !Right || !Slides.length || !Bottom) return;

    let countSlideIndex = 0;
    var circles = [];

    function CreateCircle() {
        var div = document.createElement("div");
        div.className = 'circle-info';
        Bottom.appendChild(div);
        circles.push(div);
    }

    function AddCircle() {
        Slides.forEach(CreateCircle);
        if (circles.length > 0) circles[0].classList.add("active");
    }
    AddCircle();

    function updateSlider() {
        Slides.forEach((slide, i) => {
            if (i === countSlideIndex) {
                slide.classList.add('block-slide');
                circles[i].classList.add('active');
            } else {
                slide.classList.remove('block-slide');
                circles[i].classList.remove('active');
            }
        });
    }

    Right.addEventListener("click", function() {
        countSlideIndex++;
        if (countSlideIndex > Slides.length - 1) {
            countSlideIndex = 0;
        }
        updateSlider();
    });

    Left.addEventListener("click", function() {
        countSlideIndex--;
        if (countSlideIndex < 0) {
            countSlideIndex = Slides.length - 1;
        }
        updateSlider();
    });
})();