$(document).ready(function () {

    //Sticky menu
    $(".js--services-section").waypoint(function(direction){
        if (direction=="down") {
            $("nav").addClass("sticky");
        }
        else {
            $("nav").removeClass("sticky"); 
        }

    });
 
    
    
    
//     var $navbar = $('.navbar');
//     $navbar.waypoint(function () {
//         if (direction=='down') {
//             $navbar.addClass('sticky'); 
//         }
//         else {
//             $navbar.removeClass('sticky');
//         }
       
//     },
//  { offset: '20%' 
//     });




 

    //mixeup (portfolio section)//
    var mixer = mixitup('.container');
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}