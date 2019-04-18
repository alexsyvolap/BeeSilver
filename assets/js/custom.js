$( document ).ready(function() {

    $('.go-to-href').on('click', function() {
        url = $(this).data('location');
        window.location = url;
    });

    $('.icon-event').on('click', function() {
        url = $(this).data('location');
        if($(this).data('delete')) {
            $('#modal-delete').find('form').attr('action', url);
        } else {
            $('#modal-success').find('form').attr('action', url);
        }
    });

});