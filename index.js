document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.submit-button');
  const popup = document.getElementById('popup');
  const closePopupButton = document.getElementById('close-popup');
  const nameInput = document.getElementById('name');
  const recommendationInput = document.getElementById('recommendation');

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    popup.style.display = 'block';
  });

  closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    nameInput.value = '';
    recommendationInput.value = '';
  });

  window.addEventListener('click', (event) => {
    if (event.target == popup) {
      popup.style.display = 'none';
      nameInput.value = '';
      recommendationInput.value = '';
    }
  });
});
