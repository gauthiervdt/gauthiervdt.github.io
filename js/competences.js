//Blanc
if ($('.phone').hasClass('phone--landscape')) {
    $('.phone').toggleClass('phone--landscape phone--portrait');
    }
else {
      $('.phone').removeClass('phone--portrait').addClass('phone--landscape')
}
