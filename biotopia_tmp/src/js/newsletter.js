document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("newsletter-email");
  const submitButton = document.getElementById("newsletter-submit");

  // Fonction pour vérifier l'email
  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
  }

  // Fonction pour gérer la soumission du formulaire
  submitButton.addEventListener("click", function(e) {
      e.preventDefault(); // Empêche la soumission du formulaire

      const email = emailInput.value.trim();

      // Vérifie si l'email est valide
      if (email === "") {
          alert("Veuillez entrer un email.");
      } else if (!validateEmail(email)) {
          alert("L'email que vous avez entré n'est pas valide.");
      } else {
          alert("Merci pour votre inscription ! Vous recevrez bientôt nos dernières nouvelles.");
          
          // Optionnel : vous pouvez ici déclencher une action pour envoyer l'email (ex: via AJAX) si nécessaire.
      }
  });
});
