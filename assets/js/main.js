$(document).ready(function(){

    $('input[type="email"]').blur(function(){
        if(!$(this).val()){
            $(this).addClass("error");
            $('.warning').css('display','inline-block');
        } else{
            $('.warning').hide();
            $(this).removeClass("error");
            $('#submit').removeClass('error');
        }
    });
    $('#submit').click(function(e){
        if($('input[type="email"]').hasClass('error')){
            e.preventDefault();
            $(this).addClass('error');
        }else{
            $('.container').hide();
            $('.success').css('display','flex');
        }
    });
    $('.success .btn').click(function(){
        $(this).parent('.success').hide();
        location.reload();
    });

});