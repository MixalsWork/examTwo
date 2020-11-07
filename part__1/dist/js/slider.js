$(document).ready(function(){
  $('.header__slider').slick({
      arrows:false,
      autoplay: true,
      dots:true
  });
});
$(document).ready(function(){
  $('.news__slider ').slick({
      arrows:true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed: 4000,
      dots:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
          }
        }
      ]
  });
});      
          