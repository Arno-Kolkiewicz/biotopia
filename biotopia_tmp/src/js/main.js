import './app.js';  // Importation du fichier particles.js JS
import './calculateur.js'; // Importation du fichier calculateur.js JS
import './newsletter.js'; // Importation du fichier newsletter.js JS


document.addEventListener('DOMContentLoaded', function() {

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // Cacher tous les contenus au début
  const contents = document.querySelectorAll('.content-card-feature');
  contents.forEach(content => content.style.display = 'none');

  // Récupérer tous les boutons
  const buttons = document.querySelectorAll('.button.feature');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          // Cacher tous les contenus
          contents.forEach(content => content.style.display = 'none');

          // Afficher le contenu cible
          const targetId = button.getAttribute('data-target');
          const targetContent = document.getElementById(targetId);
          if (targetContent) {
              targetContent.style.display = 'block';
          }
      });
  });
  


});

