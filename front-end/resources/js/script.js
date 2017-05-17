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
