
/*Navbar White Active*/

const btn = document.getElementById('inicio-home');

btn.addEventListener('click', function onClick() {
  btn.style.color = 'white';
});


const btn2 = document.getElementById('quienes-somos-home');

btn2.addEventListener('click', function onClick() {
  btn2.style.color = 'white';


});
const btn3 = document.getElementById('destacados-home');

btn3.addEventListener('click', function onClick() {
  btn3.style.color = 'white';
});


const btn4 = document.getElementById('contacto-home');

btn4.addEventListener('click', function onClick() {
  btn4.style.color = 'white';
});


/*Tooltip*/
var tooltipTriggerList = Array.prototype.slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})