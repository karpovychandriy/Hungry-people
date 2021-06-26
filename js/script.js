(function ($) {
    'use strict'

    $(document).ready(function () {
        svg4everybody({})

        const swiper = new Swiper('.dish__container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });

        $('.header__logo').on('click', function(){
            $(this).toggleClass('active');
            $('.header__menu').toggleClass('active');
            $('.header__over').toggleClass('active');
            $('body').toggleClass('lock');
        });

        



        
    })

    
})(jQuery)


function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.8, lng: 25 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}




;(function($) {



    var request;



    $('.send-ajax').on('submit', function(e) {



        e.preventDefault()



        e.stopPropagation()







        if (request) {



            request.abort();



        }







        var $form = $(this);



        var $inputs = $form.find("input, select, button, textarea");



        var serializedData = $form.serialize();







        $inputs.prop("disabled", true);







        request = $.ajax({



            url: "/smtp/send.php",



            type: "post",



            data: serializedData



        });







        request.done(function (response, textStatus, jqXHR){



            // alert(response.data);



            $(this).trigger('formSendSuccess', response);



        });







        request.fail(function (jqXHR, textStatus, errorThrown){



            $(this).trigger('formSendFailed', errorThrown);



            console.error(



                "The following error occurred: "+



                textStatus, errorThrown



            );



        });







        request.always(function () {



            // Reenable the inputs



            $inputs.prop("disabled", false);



        });



    });



})(jQuery);