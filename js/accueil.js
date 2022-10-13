const aProposMoi = document.querySelector('.home');
const competences = document.querySelector('.about');
const projets = document.querySelector('.work');
const contact = document.querySelector('.contact');

//a propos de moi
aProposMoi.addEventListener('click',
    ()=>{
        document.location.href = "./template/a_propos_de_moi.html";
    });

//competences
competences.addEventListener('click',
    ()=>{
        document.location.href = "./template/competences.html";
    });

//projets
projets.addEventListener('click',
    ()=>{
        document.location.href = "./template/projets.html";
    });

//contact 
    contact.addEventListener('click',
    ()=>{
        document.location.href = "./template/contact.html";
    });


//Blanc
    if ($('.phone').hasClass('phone--landscape')) {
        $('.phone').toggleClass('phone--landscape phone--portrait');
        }
    else {
          $('.phone').removeClass('phone--portrait').addClass('phone--landscape')
    }
  