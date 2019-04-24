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

    $('.add-apiary-event').click(function (e) {
        e.preventDefault();
        $('.checkbox').toggleClass('hidden');
        $this = $(this);
        send = $this.data('send');
        if(send === false) {
            $('.div-plus').find('a').removeClass('button-plus').addClass('button-send').attr('href', $this.data('location'))
                .find('i').removeClass('fa-plus').addClass('fa-paper-plane');
            $this.data('send', true);
        } else {
            $div = $('.div-plus');
            $div.find('a').removeClass('button-send').addClass('button-plus').attr('href', $div.find('a').data('location'))
                .find('i').removeClass('fa-paper-plane').addClass('fa-plus');
            $this.data('send', false);
        }
    });

});
