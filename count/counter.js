
  <!-- JavaScript -->

    // Date de fin
var countDownDate = new Date('Jun 22, 2020 00:00:00').getTime();

// Update toutes les 1 secondes
var x = setInterval(function() {

  // Récupération de la date du jour
  var now = new Date().getTime();

  // Calcul de la distance entre aujourd'hui et la fin
  var distance = countDownDate - now;

  //Calcul des temps
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor ((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Affichage du résultat dans l'id=demo
  document.getElementById("jours").innerHTML = days;
  document.getElementById("heures").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("secondes").innerHTML = seconds;

  // On stylise les éléments
  document.getElementById("jours").style.backgroundColor = 'rgba(126,85,39,0.2)';
  document.getElementById("heures").style.backgroundColor = 'rgba(126,85,39,0.2)';
  document.getElementById("minutes").style.backgroundColor = 'rgba(126,85,39,0.2)';
  document.getElementById("secondes").style.backgroundColor = 'rgba(126,85,39,0.2)';

  document.getElementById("jours").style.color = 'rgb(126,85,39)';
  document.getElementById("heures").style.color = 'rgb(126,85,39)';
  document.getElementById("minutes").style.color = 'rgb(126,85,39)';
  document.getElementById("secondes").style.color = 'rgb(126,85,39)';

  document.getElementById("jours").font.weight = 'bold';
  document.getElementById("heures").font.weight = 'bold';
  document.getElementById("minutes").font.weight = 'bold';
  document.getElementById("secondes").font.weight = 'bold';

  // Si le compteur arrive à la fin
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
