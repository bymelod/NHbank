$(function () {

 
    
    $('.global-menu').click(function(){
        $('.global-menu ul').addClass('active')
    })
    $('.close').click(function(){
        $('.global-menu ul').removeClass('active')
    })

})