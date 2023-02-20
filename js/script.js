let form = document.querySelector('.calc');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

let result = document.querySelector('.input');

const wipe = () => {
  result.value = '';
};

const show = (n) => {
  result.value += n; 
};

const calc = () => {
  result.value = eval(result.value);
};

// let form = document.querySelector('.calc');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

// let result = document.querySelector('.input');
// let btn = document.querySelectorAll('.js__button');
// let ac = document.querySelector('.button_ac');
// let res = document.querySelector('.js__res');


// // for (i=0; i<btn.length; i++) {
// //   btn[i].addEventListener('click', () => {
// //   result.value += this.innerHTML;
// // })
// // };

// ac.addEventListener('click', () => {
//   result.value = '';
// });

// res.addEventListener('click', () => {
//   result.value = eval(result.value);
// });



