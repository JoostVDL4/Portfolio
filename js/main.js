document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    var modal = document.getElementById("about-modal");

    // Get the link that opens the modal
    var aboutLink = document.getElementById("about-link");

    // Get the <span> element that closes the modal
    var closeBtn = document.querySelector(".modal .close");

    // When the user clicks the link, open the modal 
    aboutLink.onclick = function (e) {
        e.preventDefault();
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});