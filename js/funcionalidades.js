document.querySelector('button').onclick = function() {
    alert('¡Muchas Gracias! ¡Pronto nos contactamos!');
}

//navegacion
function moverseA(idDelElemento) {
    location.hash = "#" + idDelElemento;
  }




// info html
var e = document.getElementById('html');
e.onmouseover = function() {
  document.getElementById('infoHtml').style.display = 'block';
  document.getElementById('infoHtml').style.backgroundColor = 'orange';
  document.getElementById('infoHtml').style.fontSize = '14px';
}
e.onmouseout = function() {
  document.getElementById('infoHtml').style.display = 'none';
}

// info css
var e = document.getElementById('css');
e.onmouseover = function() {
  document.getElementById('infoCss').style.display = 'block';
  document.getElementById('infoCss').style.backgroundColor = 'cyan';
  document.getElementById('infoCss').style.fontSize = '14px';
  
}
e.onmouseout = function() {
  document.getElementById('infoCss').style.display = 'none';
}

// info js
var e = document.getElementById('js');
e.onmouseover = function() {
  document.getElementById('infoJs').style.display = 'block';
  document.getElementById('infoJs').style.backgroundColor = 'yellow';
  document.getElementById('infoJs').style.fontSize = '14px';
}
e.onmouseout = function() {
  document.getElementById('infoJs').style.display = 'none';
}


// carousel
let caruItems = document.querySelectorAll('.carousel-item');
let left = document.querySelector('.fa-arrow-left');
let right = document.querySelector('.fa-arrow-right');
let currentCaru = 1;

left.addEventListener('click', ()=>{
    caruItems.forEach(item =>{
        item.classList.remove('caru-acvt');
    });

    currentCaru--;

    if (currentCaru < 0) {
        currentCaru = caruItems.length - 1;
    }

    caruItems[currentCaru].classList.add('caru-acvt');
});

let slideRight = ()=>{
  caruItems.forEach(item =>{
      item.classList.remove('caru-acvt');
  });

  currentCaru++;

  if (currentCaru >= caruItems.length) {
      currentCaru = 0;
  }

  caruItems[currentCaru].classList.add('caru-acvt');
}

right.addEventListener('click', slideRight);

setInterval(slideRight, 3000);
