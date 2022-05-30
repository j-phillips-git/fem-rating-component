const submit = document.getElementById('submit');
const cardContent = document.querySelector('.card-content');

const rate1 = document.getElementById('rate1');
const rate2 = document.getElementById('rate2');
const rate3 = document.getElementById('rate3');
const rate4 = document.getElementById('rate4');
const rate5 = document.getElementById('rate5');

const displayRating = document.getElementById('displayRating');
const btn = document.querySelectorAll('.btn-round');

for (let rate of btn) {
  rate.addEventListener('click', () => {
    if (rate === rate1) {
      displayRating.innerHTML = 'You selected 1 out of 5';
    } else if (rate === rate2) {
      displayRating.innerHTML = 'You selected 2 out of 5';
    } else if (rate === rate3) {
      displayRating.innerHTML = 'You selected 3 out of 5';
    } else if (rate === rate4) {
      displayRating.innerHTML = 'You selected 4 out of 5';
    } else if (rate === rate5) {
      displayRating.innerHTML = 'You selected 5 out of 5';
    }

    submit.addEventListener('click', (e) => {
      if (rate) {
        cardContent.classList.add('card-turn');
      } else {
        e.preventDefault();
      }
    });
  });
};



