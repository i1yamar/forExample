$(document).ready(function(){
    $('.bigSlider').slick({
        dots: true,
        arrows: false
    });
    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
  });