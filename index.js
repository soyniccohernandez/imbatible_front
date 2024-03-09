$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 3000, // Cambiar cada 3 segundos
});
$(".slider_movile").slick({
  autoplay: true,
  autoplaySpeed: 3000, // Cambiar cada 3 segundos
});


function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// Adjuntar evento de desplazamiento
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Si el desplazamiento es mayor a 20px, muestra el botón
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goToTopBtn").style.display = "block";
  } else {
    // De lo contrario, oculta el botón
    document.getElementById("goToTopBtn").style.display = "none";
  }
}

// Contador

function countdownTimer(endDate) {
  // Calcular la diferencia entre la fecha actual y la fecha de finalización
  const diff = new Date(endDate) - new Date();

  // Si la diferencia es negativa, significa que la fecha ha pasado
  if (diff <= 0) {
    document.getElementById("contador").innerHTML = "La fecha ha pasado.";
    return;
  }

  // Calcular los componentes de tiempo (días, horas, minutos y segundos)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Mostrar la cuenta regresiva en el elemento con el id 'countdown'
  document.getElementById("contador").innerHTML = `
<div><span class="number_counter">${days}</span>  <span class="text_counter">días</span> </div>
<div><span class="number_counter">${hours}</span> <span class="text_counter">horas</span></div>
<div><span class="number_counter">${minutes}</span> <span class="text_counter">minutos</span></div>
<div><span class="number_counter">${seconds}</span> <span class="text_counter">segundos</span></div>
`;

  // Actualizar la cuenta regresiva cada segundo
  setTimeout(() => {
    countdownTimer(endDate);
  }, 1000);
}

const endDate = new Date("2024-12-31T23:59:59");
countdownTimer(endDate);
