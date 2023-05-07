$(function() {

    if ($('.owl-2').length > 0) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 20,
            smartSpeed: 1000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: false,
            responsive: {
                600: {
                    margin: 20,
                    nav: true,
                    items: 2
                },
                1000: {
                    margin: 20,
                    stagePadding: 0,
                    nav: true,
                    items: 3
                }
            }
        });
    }

})

$(".product__details__pic__slider").owlCarousel({
    loop: false,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: false,
    mouseDrag: false,
    startPosition: 'URLHash'
}).on('changed.owl.carousel', function(event) {
    var indexNum = event.item.index + 1;
    product_thumbs(indexNum);
});

function product_thumbs(num) {
    var thumbs = document.querySelectorAll('.product__thumb a');
    thumbs.forEach(function(e) {
        e.classList.remove("active");
        if (e.hash.split("-")[1] == num) {
            e.classList.add("active");
        }
    })
}


/*------------------
  Magnific
  --------------------*/
$('.image-popup').magnificPopup({
    type: 'image'
});


$(".nice-scroll").niceScroll({
    cursorborder: "",
    cursorcolor: "#dddddd",
    boxzoom: false,
    cursorwidth: 5,
    background: 'rgba(0, 0, 0, 0.2)',
    cursorborderradius: 50,
    horizrailenabled: false
});