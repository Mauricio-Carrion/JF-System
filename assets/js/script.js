window.onscroll = function () { headerFixed(), showBackToTop() };

function headerFixed() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById('header').className = 'fixed-top'
    document.querySelector('body').style.paddingTop = '20px'
    document.getElementById('header').style.backgroundColor = 'rgba(25,71,163,0.8)'
  }
  else {
    document.getElementById('header').style.backgroundColor = 'rgba(25,71,163,1)'
    document.getElementById('header').className = ''
    document.querySelector('body').style.paddingTop = ''
  }
};

//ScrollReveal
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.captionReveal', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.card-style', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.div-img-equipe', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.img-equipe', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.div-texto-sobre', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.rect-blue', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.card-text-reveal', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.rect-solucoes', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.div-card-solucoes1', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.div-card-solucoes2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.text-func', { delay: 500, origin: 'right' });
ScrollReveal().reveal('#card-func1', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('#card-func2', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('#card-func3', { delay: 700, origin: 'bottom' });


//Manter botão Dropdown Branco
document.getElementById('ulDownloads').onmouseover = function () { mouseoverUlDownloads() }
document.getElementById('ulDownloads').onmouseout = function () { mouseoutUlDownloads() }
document.getElementById('ulRestrita').onmouseover = function () { mouseoverUlRestrita() }
document.getElementById('ulRestrita').onmouseout = function () { mouseoutUlRestrita() }

function mouseoverUlDownloads() {
  document.getElementById('downloads').style.color = '#1947a3'
  document.getElementById('downloads').style.backgroundSize = '100% 100%'
}

function mouseoutUlDownloads() {
  document.getElementById('downloads').style.color = ''
  document.getElementById('downloads').style.backgroundSize = ''
}

function mouseoverUlRestrita() {
  document.getElementById('restrita').style.color = '#1947a3'
  document.getElementById('restrita').style.backgroundSize = '100% 100%'
}

function mouseoutUlRestrita() {
  document.getElementById('restrita').style.color = ''
  document.getElementById('restrita').style.backgroundSize = ''
};

// Funcionabilidades Troca Cor Borda
const cor = ["#1947a3", "rgba(0, 0, 0, 0.175)", "rgba(0, 0, 0, 0.175)"];
let i = 0;

const timer1 = setInterval(mudaCorCard1, 2000);

function mudaCorCard1() {
  document.getElementById('card-func1').style.borderColor = cor[i];
  i++;
  if (i >= cor.length) {
    i = 0;
  }
}

const timer2 = setInterval(mudaCorCard2, 2000);

function mudaCorCard2() {
  document.getElementById('card-func2').style.borderColor = cor[i];
  i++;
  if (i >= cor.length) {
    i = 0;
  }
}

const timer3 = setInterval(mudaCorCard3, 4000);

function mudaCorCard3() {
  document.getElementById('card-func3').style.borderColor = cor[i];
  i++;
  if (i >= cor.length) {
    i = 0;
  }
}
