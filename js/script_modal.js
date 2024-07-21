var Modal = document.getElementById("modal");
var Button = document.getElementById("open_modal");
var Exit_modal = document.getElementById("exit_modal");

Button.onclick = function() {
    Modal.style.display = "block";      
}
Exit_modal.onclick = function() {
    Modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target==Modal){
        Modal.style.display = "none";
    }
}