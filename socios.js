
$(document).ready(function() {
var my_json;
var autores = [];
var avatares = [];
var titulos = [];
var contenidos = [];
var fechas = [];
var html_msgs;

  $("#tabs").tabs();
  $.getJSON( "timeline.json", function( data ) {
        data.socios.forEach(function(it){
          autores.push(it.autor);
          avatares.push(it.avatar);
          titulos.push(it.titulo);
          contenidos.push(it.contenido);
          fechas.push(it.fecha);
        });

        for (var i = 0; i < data.socios.length; i++){
          $("#socios-mensajes").append("<div class = 'cuerpo-mensaje'><div class='row'><div class='col-sm-6'>" +
          "<img class = 'avatar' src=" + avatares[i] + "></div><div class='col-sm-6'><div class='autores'><h3><strong>" + autores[i] +
          "</strong></h3></div></div></div>"+
          "<div class='row'><div class='col-sm-6'><div class='titulos'><strong>"+ titulos[i] + "</strong></div></div><div class='col-sm-6'>" +
          "<div class='fechas'>" + fechas[i] + "</div></div></div>" +
          "<div class='row'><div class='col-sm-6'><div id='" + i + "' class='contenidos' title='mensaje'><strong>Mensaje de " + autores[i] +
          ": </strong>" + contenidos[i] +
          "</div></div><div class='col-sm-6'><button class='button-show' value='" + i + "'>Mostrar mensaje</button>"+
          "</div></div></div>")
        }


        $(function(){
        for (var i = 0; i < data.socios.length; i++){
          $("#"+i ).dialog({
            autoOpen: false,
            show: {
              effect: "blind",
              duration: 300
            },
            hide: {
              effect: "explode",
              duration: 300
            }
          });
        }


          $( ".button-show" ).click(function() {
            var valor = $(this).val()
            $( "#"+valor ).dialog( "open" );
          });
        });




    });

var mi_nombre= [];
var mi_avatar = [];
var mis_titulos = [];
var mis_contenidos = [];
var mis_fechas = [];

      my_json = $.getJSON("myline.json");
      my_json.done(function(data){
        data.mis_mensajes.forEach(function(it){
        mi_nombre.push(it.autor);
        mi_avatar.push(it.avatar);
        mis_titulos.push(it.titulo);
        mis_contenidos.push(it.contenido);
        mis_fechas.push(it.fecha);
      })

      for (var i = 0; i < data.mis_mensajes.length; i++){
        $("#m-mensajes").append("<div class = 'cuerpo-mi-mensaje'><div class='row'><div class='col-sm-6'>" +
        "<img class = 'mi-avatar' src=" + mi_avatar[i] + "></div><div class='col-sm-6'><div class='mi-autores'><h3><strong>" + mi_nombre[i] +
        "</strong></h3></div></div></div>"+
        "<div class='row'><div class='col-sm-6'><div class='mis-titulos'><strong>"+ mis_titulos[i] + "</strong></div></div><div class='col-sm-6'>" +
        "<div class='mis-fechas'>" + mis_fechas[i] + "</div></div></div>" +
        "<div class='row'><div class='col-sm-6'><div id='" + "mi"+i + "' class='mis-contenidos' title='mensaje'><strong>Mensaje de " + mi_nombre[i] +
        ": </strong>" + mis_contenidos[i] +
        "</div></div><div class='col-sm-6'><button class='my-button-show' value='" + "mi"+i + "'>Mostrar mensaje</button>"+
        "</div></div></div>")
      }

      $(function(){
      for (var i = 0; i < data.mis_mensajes.length; i++){
        $("#"+"mi"+i ).dialog({
          autoOpen: false,
          show: {
            effect: "blind",
            duration: 300,

          },
          hide: {
            effect: "explode",
            duration: 300
          }
        });
        $("#"+"mi"+i ).css("float:right")
      }


        $( ".my-button-show" ).click(function() {
          var valor = $(this).val()
          $( "#"+valor ).dialog( "open" );
        });
      });


    });

    var autores2 = [];
    var avatares2 = [];
    var titulos2 = [];
    var contenidos2 = [];
    var fechas2 = [];

    $(".button-update").click(function(){
      $.getJSON( "update.json", function( data ) {
        data.socios.forEach(function(it){
          autores2.push(it.autor);
          avatares2.push(it.avatar);
          titulos2.push(it.titulo);
          contenidos2.push(it.contenido);
          fechas2.push(it.fecha);
        });

        for (var i = 0; i < data.socios.length; i++){
          $("#msgs-update").append("<div class = 'cuerpo-mensaje'><div class='row'><div class='col-sm-6'>" +
          "<img class = 'avatar' src=" + avatares2[i] + "></div><div class='col-sm-6'><div class='autores'><h3><strong>" + autores2[i] +
          "</strong></h3></div></div></div>"+
          "<div class='row'><div class='col-sm-6'><div class='titulos'><strong>"+ titulos2[i] + "</strong></div></div><div class='col-sm-6'>" +
          "<div class='fechas'>" + fechas2[i] + "</div></div></div>" +
          "<div class='row'><div class='col-sm-6'><div id='" +  "up"+i + "' class='contenidos' title='mensaje' float:'right'><strong>Mensaje de " + autores2[i] +
          ": </strong>" + contenidos2[i] +
          "</div></div><div class='col-sm-6'><button class='button-show' value='" + "up"+i + "'>Mostrar mensaje</button>"+
          "</div></div></div>")
        }


        $(function(){
        for (var i = 0; i < data.socios.length; i++){
          $("#"+"up"+i ).dialog({
            autoOpen: false,
            show: {
              effect: "blind",
              duration: 300
            },
            hide: {
              effect: "explode",
              duration: 300
            }
          });
        }


          $( ".button-show" ).click(function() {
            var valor = $(this).val()
            $( "#"+valor ).dialog( "open" );
          });
        });

      });



    });


});
