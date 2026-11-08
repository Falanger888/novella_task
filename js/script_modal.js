(function() {
    var Modal = document.getElementById("modal");
    var Buttons = document.querySelectorAll(".open_modal_btn");
    var Exit_modal = document.getElementById("exit_modal");

    if (!Modal) return;

    // Открытие модалки
    Buttons.forEach(function(btn) {
        btn.onclick = function() {
            Modal.classList.add("active"); 
        };
    });

    // Закрытие на крестик
    if (Exit_modal) {
        Exit_modal.onclick = function() {
            Modal.classList.remove("active"); 
        };
    }

    // Закрытие при клике на темный фон
    Modal.onclick = function(event) {
        if (event.target === Modal) {
            Modal.classList.remove("active");
        }
    };

    // Обработка отправки формы (чтобы страница не перезагружалась)
    var form = document.getElementById("contactForm");
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault(); // Отменяем перезагрузку
            alert("Форма успешно отправлена!");
            Modal.classList.remove("active");
            form.reset(); // Очищаем поля
        };
    }
})();