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
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
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


window.addEventListener('scroll', function() {
  let body = document.body,
    html = document.documentElement,
    height = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );
  console.log(height)

  if (pageYOffset > height - 1417 && pageYOffset <= height - 1117) {
    document.getElementById("asideSocialNetworks").classList.add('aside-position')
  }
  if ( pageYOffset <= height - 1417) document.getElementById("asideSocialNetworks").classList.remove('aside-position')
});

document.getElementById('menu-burger').onclick = function () {
  document.getElementById('nav-menu').classList.add('opened')
}

document.getElementById('close-burger-icon').onclick = function () {
  document.getElementById('nav-menu').classList.remove('opened')
}