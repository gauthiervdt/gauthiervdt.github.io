/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//Blanc
if ($('.phone').hasClass('phone--landscape')) {
    $('.phone').toggleClass('phone--landscape phone--portrait');
    }
else {
      $('.phone').removeClass('phone--portrait').addClass('phone--landscape')
}


/* Croix et activation page de description*/

const X1 = document.querySelector('body>div:nth-of-type(2)>div');
const X2 = document.querySelector('body>div:nth-of-type(3)>div');
const X3 = document.querySelector('body>div:nth-of-type(4)>div');
const X4 = document.querySelector('body>div:nth-of-type(5)>div:nth-of-type(2)');
const Projet1 = document.querySelector('main>section>div:nth-of-type(2)>div:nth-of-type(1)');
const Projet2 = document.querySelector('main>section>div:nth-of-type(2)>div:nth-of-type(2)');
const Projet3 = document.querySelector('main>section>div:nth-of-type(2)>div:nth-of-type(3)');
const Projet4 = document.querySelector('main>section>div:nth-of-type(2)>div:nth-of-type(4)');
const GrandEcranProjet1 = document.querySelector('body>div:nth-of-type(2)');
const GrandEcranProjet2 = document.querySelector('body>div:nth-of-type(3)');
const GrandEcranProjet3 = document.querySelector('body>div:nth-of-type(4)');
const GrandEcranProjet4 = document.querySelector('body>div:nth-of-type(5)');
let i=0;

X1.addEventListener('click',
    ()=>{
        GrandEcranProjet1.setAttribute('class', 'navOff');
    });

X2.addEventListener('click',
    ()=>{
        GrandEcranProjet2.setAttribute('class', 'navOff');
    });

X3.addEventListener('click',
    ()=>{
        GrandEcranProjet3.setAttribute('class', 'navOff');
    });
X4.addEventListener('click',
    ()=>{
        GrandEcranProjet4.setAttribute('class', 'navOff');
    });


Projet1.addEventListener('click',
    ()=>{
        GrandEcranProjet1.setAttribute('class', 'navOn');
    });

Projet2.addEventListener('click',
    ()=>{
        GrandEcranProjet2.setAttribute('class', 'navOn');
    });

Projet3.addEventListener('click',
    ()=>{
        GrandEcranProjet3.setAttribute('class', 'navOn');
    });
Projet4.addEventListener('click',
    ()=>{
        GrandEcranProjet4.setAttribute('class', 'navOn');
    });

