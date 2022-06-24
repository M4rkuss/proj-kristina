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

  $('.portfolio-slider-2').slick({
    arrows: false,
    dots: false,
    accessibility: false,
    asNavFor: '.portfolio-slider'
  })

  $('.portfolio-slider').slick({
    arrows: true,
    dots: false,
    accessibility: false,
    prevArrow: '#portfolioArrowLeft',
    nextArrow: '#portfolioArrowRight',
    asNavFor: '.portfolio-slider-2',
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

  $('.produkciya-wrap-rightside-slider').slick({
    arrows: true,
    dots: true,
    accessibility: false,
    prevArrow: '#produkciyaArrowLeft',
    nextArrow: '#produkciyaArrowRight',
  })
})

// current year in footer
document.getElementById('currentYear').innerText = new Date().getFullYear()


window.addEventListener('scroll', function() {
  let body = document.body,
    html = document.documentElement,
    height = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );

  if (pageYOffset > 20 ) {
    document.getElementById("asideSocialNetworks").style.bottom = "40px"
  } else document.getElementById("asideSocialNetworks").style.bottom = "-30px"

  if (pageYOffset > height - 1417 && pageYOffset <= height - 1117) {
    document.getElementById("asideSocialNetworks").classList.add('aside-position')
  }
  if ( pageYOffset <= height - 1417) document.getElementById("asideSocialNetworks").classList.remove('aside-position')
});

document.getElementById('menu-burger').onclick = function () {
  document.getElementById('nav-menu').classList.add('opened')
  document.body.style.overflow = 'hidden';
  document.body.style.padding = '0';
  document.document.getElementById('nav-menu').style.overflow = 'visible';
}

document.getElementById('close-burger-icon').onclick = function () {
  document.getElementById('nav-menu').classList.remove('opened')
  document.body.style.overflow = 'visible';
  document.body.style.padding = '8px';
}

// input mask
$(function(){
  $("#phone").mask("+38(999) 999-99-99");
});

// google maps
function initMap() {
  var pos = {lat: 50.45087802610471, lng: 30.43084677683045}
  var markerImage = '/img/location-pin.png'
  var opt = {
    center: pos,
    zoom: 10,
    mapTypeControl: false,
    disableDefaultUI: true,
  }

  var map = new google.maps.Map(document.getElementById('map'), opt)

  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: markerImage
  })
  const styledMapType = new google.maps.StyledMapType(
    [
      { elementType: "geometry", stylers: [{ color: "#ebebeb" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#323232" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#fff" }] },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#ebebeb" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#ebebeb" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ebebeb" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#ebebeb" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#ebebeb" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#ebebeb" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#323232" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#5ba1f6" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#5ba1f6" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#3f8de2" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#fff" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#5ba1f6" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#5ba1f6" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#5ba1f6" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#5ba1f6" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#5ba1f6" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }],
      },
      {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{ color: "#323232" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
      },
    ],
    { name: "Styled Map" }
  );
  map.mapTypes.set("styled_map", styledMapType);
  map.setMapTypeId("styled_map");
}

window.initMap = initMap;


const media1060 = window.matchMedia('(max-width: 1060px)')
if (media1060.matches) {
  document.getElementById('collapseTwo').classList.remove('show')
  document.getElementById('accordBtn2').classList.add('collapsed')
}