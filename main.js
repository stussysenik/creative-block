document.addEventListener('DOMContentLoaded', () => {
    const cardWrapper = document.querySelector('.card-wrapper');
    const card = document.querySelector('.card');
  
    if (cardWrapper && card) {
      cardWrapper.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    }
  });
