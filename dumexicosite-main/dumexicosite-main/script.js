document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const imageSources = [
        './img/galeria1.png',
        './img/galeria3.png',
        './img/galeria4.png',
        './img/galeria5.png'
    ];

    function openGallery(imageSrc) {
        currentImageIndex = imageSources.indexOf(imageSrc);
        document.getElementById('fullscreenImage').src = imageSrc;
        document.getElementById('fullscreenGallery').classList.add('active');
    }

    function closeGallery() {
        document.getElementById('fullscreenGallery').classList.remove('active');
    }

    function showImage(index) {
        if (index >= 0 && index < imageSources.length) {
            document.getElementById('fullscreenImage').src = imageSources[index];
            currentImageIndex = index;
        }
    }

    function showNextImage() {
        if (currentImageIndex < imageSources.length - 1) {
            showImage(currentImageIndex + 1);
        }
    }

    function showPrevImage() {
        if (currentImageIndex > 0) {
            showImage(currentImageIndex - 1);
        }
    }

    document.getElementById('closeGallery').addEventListener('click', function() {
        closeGallery();
    });

    document.getElementById('fullscreenGallery').addEventListener('click', function(event) {
        if (event.target === this) {
            closeGallery();
        }
    });

    document.getElementById('prevImage').addEventListener('click', function(event) {
        event.stopPropagation();
        showPrevImage();
    });

    document.getElementById('nextImage').addEventListener('click', function(event) {
        event.stopPropagation();
        showNextImage();
    });

    window.openGallery = openGallery;
});
