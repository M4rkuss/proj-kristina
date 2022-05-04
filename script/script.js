function changeLang () {
  document.getElementById('lang-ua').onclick = function () {
    document.getElementById('lang-ru').classList.remove('active-lang')
    document.getElementById('lang-ua').classList.add('active-lang')
  }
  document.getElementById('lang-ru').onclick = function () {
    document.getElementById('lang-ua').classList.remove('active-lang')
    document.getElementById('lang-ru').classList.add('active-lang')
  }
}

changeLang()

$(document).ready (() => {
  $('.top-sales-body-slider').slick({
    arrows: true,
    dots: false,
    accessibility: false,
    prevArrow: '#topSalesArrowLeft',
    nextArrow: '#topSalesArrowRight',
    slidesToShow: 4,
    slidesToScroll: 4
  })

  $('.our-clients-slider').slick({
    arrows: false,
    dots: true,
    accessibility: false,
  })

  $('.hero-slider').slick({
    arrows: true,
    dots: false,
    accessibility: false,
    prevArrow: '#heroArrowLeft',
    nextArrow: '#heroArrowRight',
  })

  $('.portfolio-slider').slick({
    arrows: true,
    dots: false,
    accessibility: false,
    prevArrow: '#portfolioArrowLeft',
    nextArrow: '#portfolioArrowRight',
    customPaging: function (slider, i) {
      console.log(slider);
      return  (i + 1) + '/' + slider.slideCount;
    }
  })
  var $status = $('#sliderCounter');
  var $slickElement = $('.portfolio-slider');

  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text('0' + i + ' / 0' + slick.slideCount);
  });
})

// current year in footer
document.getElementById('currentYear').innerText = new Date().getFullYear()