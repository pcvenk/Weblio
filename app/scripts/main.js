 //hero scroll
  function smoothScrollTo(services) {
    $('html, body').animate({
      scrollTop: ($(services).offset().top)
    }, 1000);
    return false;
  }

  $('#pointer-wrapper').click(function() {
    smoothScrollTo($('#services'));
  });


  //back to bottom scroll
  var scrollDuration = 1250;

  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0}, scrollDuration);
  })

  //particles

  particlesJS();

 //google api

  function initMap() {

    var home = {lat: 46.3762792, lng: 14.0871763};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: home,
      scrollwheel: false

    });

    var contentString =

      '<div id="bodyContent">'+
      '<p>Weblio, računalniško programiranje, grafične storitve in prevajanje, Primož Cvenkelj, s.p.</p>'+
      '</div>';


    var infowindow = new google.maps.InfoWindow ({

      content: contentString,
      maxWidth: 350

    });

    var image = '../images/flag.png';

    var marker = new google.maps.Marker ({

      position: home,
      map: map,
      icon: image,
      title: 'Weblio'

    });

    marker.addListener('click', function() {

      infowindow.open(map, marker);

    });
  }

//submitting the form

  $(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
        })
        .done(function(response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
        })
        .fail(function(data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text('Bummer! An error occured and your message could not be sent.');
          }
        });

    });

  });

//carousel


  $(function(){
    $('#mkCarousel').mkCarousel({
      offset: 130,
      mobileOffset: 60

    });
  });

 $('#buttonID').click( function(event) {
   event.preventDefault();
   window.location = "theNewPage.html";
 });

 function initItemsEvents($items) {
   $items.on( 'click', 'span.og-close', function(event) {
     event.preventDefault();
     window.location = 'projectssubpage.html'
   } ).children( 'a' ).on( 'click', function(event) {
     var $item = $( this ).parent();
     //$(this).addClass('unhoverdir');
     //remove animate class
     $item.removeClass('animate');

     // check if item already opened
     current === $item.index() ? hidePreview($(this)) : showPreview( $item );
     return false;

   } );
 }







