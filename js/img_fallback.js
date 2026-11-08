(function() {
    // Создаем SVG-картинку: серый фон, рамка и две перечеркивающие линии
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
            <rect width="100%" height="100%" fill="#e0e0e0" stroke="#999" stroke-width="2" vector-effect="non-scaling-stroke"/>
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#999" stroke-width="2" vector-effect="non-scaling-stroke"/>
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="#999" stroke-width="2" vector-effect="non-scaling-stroke"/>
        </svg>
    `.trim();
    
    // Кодируем SVG в формат Data URI, чтобы браузер мог его отобразить
    const placeholderUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

    // Находим все картинки на странице
    document.querySelectorAll('img').forEach(img => {
        
        // Если картинка не загрузилась (ошибка 404)
        img.onerror = function() {
            this.onerror = null; // Убираем обработчик, чтобы не было зацикливания
            this.src = placeholderUrl; // Ставим перечеркнутый прямоугольник
            this.classList.add('img-placeholder'); // Добавляем класс на всякий случай
        };

        // Если картинка уже сломана (например, закешировалась в браузере)
        if (img.complete && img.naturalWidth === 0) {
            img.onerror();
        }
    });
})();