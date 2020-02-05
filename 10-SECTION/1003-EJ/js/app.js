$(function(){
    var i = 1;
    $('.nav-control').on('click', function(){

        if ($(this).hasClass('prev') > 0){
            i--;
            if (i <= 0) {
                i = 4;
            }
        }
        if($(this).hasClass('next')){
            i++;
            if (i > 4) {
                i = 1;
            }
        }

        $('.picture-container, .description-container').removeClass('displayed');
        $('.picture-' + i ).addClass('displayed');
        $('.description-' + i ).addClass('displayed');
        console.log(i);
    })
    
})