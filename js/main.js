/*document.addEventListener("DOMContentLoaded", function () {

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
*/




document.addEventListener('DOMContentLoaded', function() {
    const popupText = document.getElementById('popup-about');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aboutVisible');
        }
      });
    });
  
    observer.observe(popupText);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const introSection = document.querySelector('.intro');
  
    introSection.classList.add('introVisible');
  });


  document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('cardVisible');
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the card is visible

    projectCards.forEach(card => observer.observe(card));
});
