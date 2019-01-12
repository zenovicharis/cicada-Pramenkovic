$(document).ready(function(){
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