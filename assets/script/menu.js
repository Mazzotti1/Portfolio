//  Função animação typeWriter

function typeWriter(elemento){
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textArray.forEach((letra, i) =>{
      setTimeout(() =>  elemento.innerHTML += letra ,75 * i );
  });
}

const titulo = document.querySelector('.paragrafoMenu');
typeWriter(titulo)

let show = true;

/*Scroll*/

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
    smoothScrollTo(180, to -4);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 80;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});


function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;


  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
};

// botao back to top

const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", () => {

  if (window.scrollY == 0) {
    botao.classList.remove("visible");
  }else{
    botao.classList.add("visible");
  }
})

// dark mode / white mode

const toggleBtn = document.querySelector(".toggle-btn"),
moonIcon = document.querySelector(".toggle-icon i "),
header = document.querySelector('header')
home = document.querySelector('#firstBody')
sobre = document.querySelector('#about')
projetos = document.querySelector('#projetos')
conhecimentos = document.querySelector('#conhecimentos')
faleComigo = document.querySelector('#faleComigo')
footer = document.querySelector('footer')

toggleBtn.addEventListener("click", () =>{
  header.classList.toggle('white');
  home.classList.toggle('white');
  sobre.classList.toggle('white');
  projetos.classList.toggle('white');
  conhecimentos.classList.toggle('white');
  faleComigo.classList.toggle('white');
  footer.classList.toggle('white');
})

toggleBtn.addEventListener("click", () =>{
  toggleBtn.classList.toggle("active");

if(toggleBtn.classList.contains("active")){
 return  moonIcon.classList.replace('bx-sun', 'bx-moon')
}
moonIcon.classList.replace('bx-moon', 'bx-sun');

});

//hamburguer

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const paragrafoHome = document.querySelector(".paragrafoMenu")
disquete = document.querySelector(".disquete")
menuToggle.addEventListener("click", () =>{
    menuSection.classList.toggle("on", show)
    show = !show;


})

//animações entrada

const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}