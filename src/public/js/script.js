//Dado que los compañeros no agregaron scripts de js, el documento solo contempla funciones para la homepage

// Carrusel
document.addEventListener('DOMContentLoaded', function () {

    //Para evitar el mal uso de la memoria optamos por usar let en vez de var, para que no se acumule información y evitamos errores
    const images = document.querySelectorAll('.carrusel-images img');
    const totalImages = images.length;
    let currentIndex = 0;
    const intervalTime = 3000; // Tiempo entre transiciones en milisegundos (3 segundos)
    let autoSlide;

    const nextButton = document.querySelector('.carrusel-control.next');
    const prevButton = document.querySelector('.carrusel-control.prev');

    function updateCarousel() {
        const newTranslateValue = -currentIndex * 100;
        document.querySelector('.carrusel-images').style.transform = `translateX(${newTranslateValue}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    nextButton.addEventListener('click', function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener('click', function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });

    // Inicia la transición automática con un autollamado dentro de la misma función
    startAutoSlide();
});
