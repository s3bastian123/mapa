// this is a main javascript file, it containst the scripts of change coordinates of map, play the menu and active layer with opacity
// version 1.0.1
// see https://code.jquery.com/jquery-1.9.1.min.js
// autor

$(document).ready(function () {
// variables with diferents coordenates zones
  var routeBogota = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297589.3763321819!2d-74.24789213984917!3d4.648283717671448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e'
  var routeSimon = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.7976991627947!2d-74.09704818566479!3d4.658876596615788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzknMzIuMCJOIDc0wrAwNSc0MS41Ilc!5e'
  var withMarker = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4795205203845!2d-74.05531488545647!3d4.686412543086726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDEnMTEuMSJOIDc0wrAwMycxMS4zIlc!5e'
  var withoutMarker = 'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3976.4794968701653!2d-74.0553276!3d4.6864167!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0x0%3A0x0!5e'

  // array whit coordenates
  var routes = [routeSimon, routeBogota, withMarker, withoutMarker]

  // function prevent default
  $('a').click(function (e) {
    e.preventDefault()
  })

  // hidden menu buttons in mobile version
  if ($(window).width() <= 1024) {
    $('.menu').addClass('hide')
  }

  // hidden or show menu buttons when resize window
  $(window).resize(function () {
    if ($(window).width() <= 1024) {
      $('.menu').addClass('hide')
    } else {
      $('.menu').removeClass('hide')
    }
  })

  // show or hidden buttons menu in mobile version
  $('.actMenu').click(function () {
    $('.menu').toggleClass('hide')
    $('.layer').toggleClass('hide')
  })

  // show a hidden layer with opacity if have interaction with the submenu  in both versions or interactions
  $('.events').click(function () {
    if ($(window).width() >= 1024) {
      $('.layer').toggleClass('hide')
    }
    $('.submenu').toggleClass('hide')
    $('.events span').toggleClass('rotate')
  })

  // interaction of the submenu:
  // hidden layer and submenu
  // rotate arrow of parent node
  $('.submenu a').click(function () {
    $('.submenu, .layer').toggleClass('hide')
    $('.events span').toggleClass('rotate')

    // hiden menu in mobile version
    if ($(window).width() <= 1024) {
      $('.menu').toggleClass('hide')
    }
  })

  // change the layer of saltetital to road
  $('.layersMenu a').click(function () {
    var route = $('#map').attr('src')

    // condition that inspect if the last characters of the url is diferent to 1
    // it's true add a 1 at the end of url ang change the parameter "data-type" to "satelital"
    if ($(this).attr('class') == 'satelital' && route.charAt(route.length - 1) != 1) {
      $('#map').attr('src', route + '1')
      $('#map').attr('data-type', 'satelital')
      // change the text in the button layersMenu
      $(this).html("<img src='images/satelital.png'>Cambiar a Road")
    }
    // it's false, remove the last character of the url and change the parameter "data-type" to "road"
    else {
      $('#map').attr('src', route.slice(0, -1))
      $('#map').attr('data-type', 'road')
      $(this).html("<img src='images/road.png'>Cambiar a satelital")
    }
  })

  // change coordenates of Bogotá to 4.6588766,-74.0948595 with zoom of 16
  $('.coordinatesMenu a').click(function () {
    console.log(routes[$(this).index()])

    // check the parameter "data-type" for choose the type of layer to render
    if ($('#map').attr('data-type') == 'satelital') {
      $('#map').attr('src', routes[$(this).index()] + '1')
    } else {
      $('#map').attr('src', routes[$(this).index()])
    }
  })

  // change coordantea of point 4.6864072,-74.0531262
  $('.marker').click(function () {
    // check the parameter "data-mar" for add or remove pointmarker
    if ($('#map').attr('data-mar') == 'no') {
      // check the parameter "data-type" for choose the type of layer to render
      if ($('#map').attr('data-type') == 'satelital') {
        $('#map').attr('data-mar', 'si')
        $('#map').attr('src', routes[2] + '1')
      } else {
        $('#map').attr('data-mar', 'si')
        $('#map').attr('src', routes[2])
      }
      // change the text in the button marker
      $('.marker').html("<img src='images/pointMap.png'>Quitar marcador")
    } else {
      // check the parameter "data-type" for choose the type of layer to render
      if ($('#map').attr('data-type') == 'satelital') {
        $('#map').attr('data-mar', 'no')
        $('#map').attr('src', routes[3] + '1')
      } else {
        $('#map').attr('data-mar', 'no')
        $('#map').attr('src', routes[3])
      }
      // change the text in the button marker
      $('.marker').html("<img src='images/pointMap.png'>Poner marcador")
    }
  })
})
