$( document ).ready(function() {

    $('.go-to-href').on('click', function() {
        url = $(this).data('location');
        window.location = url;
    });

});