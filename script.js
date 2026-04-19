const fullscreenContainer = document.querySelector('.fullscreen-container');
const imageWrapper = document.querySelector('.image-wrapper');
const closeButton = document.querySelector('.close-button');

imageWrapper.addEventListener('click', function() {
  fullscreenContainer.style.display = 'flex';
});

closeButton.addEventListener('click', function() {
  fullscreenContainer.style.display = 'none';
});
