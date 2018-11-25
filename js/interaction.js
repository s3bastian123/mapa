$(document).ready(function(){

  var rutaBogota = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297589.3763321819!2d-74.24789213984917!3d4.648283717671448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e";
  var rutaSimon = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.7976991627947!2d-74.09704818566479!3d4.658876596615788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzknMzIuMCJOIDc0wrAwNSc0MS41Ilc!5e";
  var conMarcador = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4795205203845!2d-74.05531488545647!3d4.686412543086726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDEnMTEuMSJOIDc0wrAwMycxMS4zIlc!5e";
  var sinMarcador = "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3976.4794968701653!2d-74.0553276!3d4.6864167!3m2!1i1024!2i768!4f13.1!3m2!1m1!1s0x0%3A0x0!5e";

  var rutas = [rutaSimon, rutaBogota, conMarcador, sinMarcador];

  $("a").click(function(e){
    e.preventDefault();
  });

  if($(window).width()<=1024){
    $(".menu").addClass("hide");
  }

  $(window).resize(function(){
    if($(window).width()<=1024){
      $(".menu").addClass("hide");
    }
    else{
      $(".menu").removeClass("hide");
    }
  });

  $(".actMenu").click(function(){
    $(".menu").toggleClass("hide");
    $(".layer").toggleClass("hide");
  });

  $(".eventos").click(function(){
    if($(window).width()>=1024){
      $(".layer").toggleClass("hide");
    }
    $(".submenu").toggleClass("hide");
    $(".eventos span").toggleClass("rotate");
  });

  $(".submenu a").click(function(){
    $(".submenu, .layer").toggleClass("hide");
    $(".eventos span").toggleClass("rotate");
    if($(window).width()<=1024){
      $(".menu").toggleClass("hide");

    }
  });


  //cambiar mapa a capa satelital o ruta
  $(".menuCapas a").click(function(){
    var ruta= $("#mapa").attr("src");

    if($(this).attr("class")=="satelite" && ruta.charAt(ruta.length-1)!=1){
      $("#mapa").attr("src", ruta+"1");
      $("#mapa").attr("data-tipo", "satelite");
      $(this).html("<img src='images/satelital.png'>Cambiar a Road");
    }
    else{
      $("#mapa").attr("src", ruta.slice(0,-1));
      $("#mapa").attr("data-tipo", "road");
      $(this).html("<img src='images/road.png'>Cambiar a Satelite");
    }
  });

  //cambiar coordenadas de Bogotá o 4.6588766,-74.0948595 con zoom de 16
  $(".menuCoordenadas a").click(function(){
    console.log(rutas[$(this).index()]);

    if($("#mapa").attr("data-tipo")=="satelite"){
      $("#mapa").attr("src",rutas[$(this).index()]+"1");
    }
    else{
      $("#mapa").attr("src",rutas[$(this).index()]);
    }
  });

  //cambiar coordenadas de 4.6864072,-74.0531262
  $(".marcador").click(function(){
    if($("#mapa").attr("data-mar")=="no"){

      if($("#mapa").attr("data-tipo")=="satelite"){
        $("#mapa").attr("data-mar", "si");
        $("#mapa").attr("src",rutas[2]+"1");
      }
      else{
        $("#mapa").attr("data-mar", "si");
        $("#mapa").attr("src",rutas[2]);
      }
      $(".marcador").html("<img src='images/pointMap.png'>Quitar marcador");
    }
    else{

      if($("#mapa").attr("data-tipo")=="satelite"){
        $("#mapa").attr("data-mar", "no");
        $("#mapa").attr("src",rutas[3]+"1");
      }
      else{
        $("#mapa").attr("data-mar", "no");
        $("#mapa").attr("src",rutas[3]);
      }
      $(".marcador").html("<img src='images/pointMap.png'>Poner marcador");
    }
  });
});
