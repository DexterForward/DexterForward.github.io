$(document).ready(function(){
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__detailed').eq(i).toggleClass('catalog-item__detailed_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        waitForAnimate: false,
        variableWidth: true,
        infinite: false,
        speed: 700
    });

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut('slow');
    });

    // $('form').submit(function(e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function() {
    //         $(this).find("input").val("");
    //         $('#consultation, #order').fadeOut();
    //         $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });
});