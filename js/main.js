document.addEventListener("DOMContentLoaded", function () {

    var modal = document.getElementById("about-modal");


    var aboutLink = document.getElementById("about-link");

    var closeBtn = document.querySelector(".modal .close");


    aboutLink.onclick = function (e) {
        e.preventDefault();
        modal.style.display = "block";
    }


    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});