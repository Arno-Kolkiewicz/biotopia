document.addEventListener('DOMContentLoaded', function () {
    // Fonction de calcul de l'empreinte carbone
    function calculerEmpreinte() {
      const essence = parseFloat(document.getElementById('essence').value) || 0;
      const diesel = parseFloat(document.getElementById('diesel').value) || 0;
      const kmVoiture = parseFloat(document.getElementById('kmVoiture').value) || 0;
      const vols = parseFloat(document.getElementById('vols').value) || 0;
      const fruitsLegumes = parseFloat(document.getElementById('fruitsLegumes').value) || 0;
      const viandeRouge = parseFloat(document.getElementById('viandeRouge').value) || 0;
      const viandeBlanche = parseFloat(document.getElementById('viandeBlanche').value) || 0;
      const lait = parseFloat(document.getElementById('lait').value) || 0;
      const electricite = parseFloat(document.getElementById('electricite').value) || 0;
      const eau = parseFloat(document.getElementById('eau').value) || 0;
  
      const coefEssence = 2.31;
      const coefDiesel = 2.68;
      const coefVoiture = 0.24;
      const coefAvion = 0.2;
      const coefFruitsLegumes = 0.3;
      const coefViandeRouge = 3.1;
      const coefViandeBlanche = 1.9;
      const coefLait = 1.1;
      const coefElectricite = 0.233;
      const coefEau = 0.00035;
  
      const empreinteEssence = essence * coefEssence;
      const empreinteDiesel = diesel * coefDiesel;
      const empreinteVoiture = kmVoiture * coefVoiture;
      const empreinteVols = vols * coefAvion;
      const empreinteFruitsLegumes = fruitsLegumes * coefFruitsLegumes;
      const empreinteViandeRouge = viandeRouge * coefViandeRouge;
      const empreinteViandeBlanche = viandeBlanche * coefViandeBlanche;
      const empreinteLait = lait * coefLait;
      const empreinteElectricite = electricite * coefElectricite;
      const empreinteEau = eau * coefEau;
  
      const empreinteTotale = empreinteEssence + empreinteDiesel + empreinteVoiture + empreinteVols +
                              empreinteFruitsLegumes + empreinteViandeRouge + empreinteViandeBlanche + empreinteLait +
                              empreinteElectricite + empreinteEau;
  
      const empreinteResult = document.getElementById('empreinteResult');
      empreinteResult.innerHTML = `Votre empreinte carbone totale est de ${empreinteTotale.toFixed(2)} kg CO2.`;
  
      const resultatContainer = document.getElementById('resultatContainer');
      resultatContainer.classList.add('active'); // Affiche le résultat
    }
  
    // Ajouter l'écouteur d'événement au bouton "Calculer"
    const calculerBtn = document.getElementById('calculerBtn');
    calculerBtn.addEventListener('click', calculerEmpreinte);
  
    // Cacher le résultat si l'utilisateur clique à l'extérieur
    function closeResult() {
      const resultatContainer = document.getElementById('resultatContainer');
      resultatContainer.classList.remove('active'); // Cache le résultat
    }
  
    // Écouter les clics sur l'extérieur du résultat pour le fermer
    const resultatContainer = document.getElementById('resultatContainer');
    resultatContainer.addEventListener('click', function (event) {
      // Vérifier si l'utilisateur a cliqué à l'extérieur de la fenêtre de résultat
      if (event.target === resultatContainer) {
        closeResult();
      }
    });
  });
  