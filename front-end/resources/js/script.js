$('.circle').on('click', function(){
    if($(this).attr('id') == "first"){
        if($(this).attr('src') == "/front-end/resources/img/svg/circleEmpty.svg"){
            showSecondCollection(this);
            
        }
    }
    else{
        if($(this).attr('src') == "/front-end/resources/img/svg/circleEmpty.svg"){
            showFirstSection(this);
        }
    }
});
function showSecondCollection(obj){
    $(obj).attr('src','/front-end/resources/img/svg/circleFull.svg');
    $(obj).next().attr('src','/front-end/resources/img/svg/circleEmpty.svg');
    var width = $(".collection").width();
    $(".sectionsWrapper").css({'margin-left': '-'+width});
}

function showFirstSection(obj){
    $(obj).attr('src','/front-end/resources/img/svg/circleFull.svg');
    $(obj).prev().attr('src','/front-end/resources/img/svg/circleEmpty.svg');
    $(".sectionsWrapper").css({'margin-left': 0});
}
$(".section-control[data-slide='next']").on('click', function(e){
    e.preventDefault();
    $('#first').click();
});
$(".section-control[data-slide='prev']").on('click', function(e){
    e.preventDefault();
    $('#second').click();
});

function showContact(e){
    $('.boutUsWrapper').css({'margin-left':e});
    return false;
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();  

    $("#carousel-example-generic").swiperight(function() {  
        $("#carousel-example-generic").carousel('prev');  
    });  
    $("#carousel-example-generic").swipeleft(function() {  
        $("#carousel-example-generic").carousel('next');  
    });  

    $("#carousel-example-generic-gallery").swiperight(function() {  
        $("#carousel-example-generic-gallery").carousel('prev');  
    });  
    $("#carousel-example-generic-gallery").swipeleft(function() {  
        $("#carousel-example-generic-gallery").carousel('next');  
    }); 


    $("#carousel-example-generic-mobile").swiperight(function() {  
        $("#carousel-example-generic-mobile").carousel('prev');  
    });  
    $("#carousel-example-generic-mobile").swipeleft(function() {  
        $("#carousel-example-generic-mobile").carousel('next');  
    });

    $("#carousel-example-generic-gallery-mobile").swiperight(function() {  
        $("#carousel-example-generic-gallery-mobile").carousel('prev');  
    });  
    $("#carousel-example-generic-gallery-mobile").swipeleft(function() {  
        $("#carousel-example-generic-gallery-mobile").carousel('next');  
    });  
});

$('.hamburger-menu').on('click',function(){
    $('.menu').slideToggle();
});