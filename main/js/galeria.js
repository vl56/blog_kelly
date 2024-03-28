var currentIndex = 0;
var images = document.querySelectorAll('.image-container img');

function showImage(index) {
    if (index >= 0 && index < images.length) {
        images[currentIndex].style.display = 'none';
        currentIndex = index;
        images[currentIndex].style.display = 'block';
    }
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Exibindo a primeira imagem ao carregar a página
showImage(currentIndex);
