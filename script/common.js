$(function () {
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')
 

// main 슬라이드
    $('.slide').slick({
        dots: true,
        arrows: false,
        dotsAlign : 'left',
        autoplay: true,
        autoplaySpeed: 4000
    }) 

// main 탭
$('.page h4').eq(0).addClass('on')
$('.tab-contents .content').hide().eq(0).show()

$('.page h4').click(function () {
    $('.page h4').removeClass('on')
    $(this).addClass('on')

    $('.tab-contents .content').hide()

    var idx = $(this).index()
    $('.tab-contents .content').eq(idx).show()
})


// ibz-sub 메뉴
    $('.high>li').eq(0).addClass('on')
    $('.high>li ul').hide().eq(0).show()

    $('.high>li').click(function () {
        $('.high>li').removeClass('on')
        $(this).addClass('on')

        $('.high>li ul').hide()

        var idx = $(this).index()
        $('.high>li ul').eq(idx).show()
    })

// ibz-sub 탭
$('.tab h4').eq(0).addClass('on')
$('.tab .content').hide().eq(0).show()

$('.tab h4').click(function () {
    $('.tab h4').removeClass('on')
    $(this).addClass('on')

    $('.tab .content').hide()

    var idx = $(this).index()
    $('.tab .content').eq(idx).show()
})



})