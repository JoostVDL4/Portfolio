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


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const xAxis = (e.clientX - cardRect.left) / cardRect.width - 0.5;
        const yAxis = (e.clientY - cardRect.top) / cardRect.height - 0.5;

 
        card.style.transform = `rotateY(${xAxis * 20}deg) rotateX(${yAxis * -20}deg)`;
    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        card.style.transition = 'transform 0.5s ease'; 
    });

    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';  
    });
});

