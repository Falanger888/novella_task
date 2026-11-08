(function() {
    var downBtn = document.getElementById('down');
    if (downBtn) {
        downBtn.addEventListener('click', function(){
            var target = document.getElementById('element');
            if (target) {
                target.scrollIntoView({behavior:'smooth'});
            }
        });
    }
})();