$(document).ready(function(){
    
    var text = 1;
    
    $('.text').on('click', function(){
        
        if(text == 1){
            $('.content-menu').addClass("content-menu2");
            text = 0;
        }else{
            $('.content-menu').removeClass("content-menu2");
            text = 1;
        }
        
        
    })
    
})