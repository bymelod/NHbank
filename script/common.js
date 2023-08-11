$(function () {
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')
 
    
    $('.slide').slick({
        dots: true,
        nextArrow : $('.next'),
        prevArrow : $('.prev'),
        // autoplay: true,
        autoplaySpeed: 5000
    }) 


})