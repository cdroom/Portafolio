$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $("a").click(function(event){
        if (this.hash !== "") {
           event.preventDefault();
           var gato = this.hash;
             $("html, body").animate({
               scrollTop: $(gato).offset().top
               }, 800, function(){
                window.location.hash = gato;
               });
         }
       });

  
       
       $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').fadeIn('slow');    
            } else {
            $('.scroll-top').fadeOut('slow');
        }
        });
        $('.scroll-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 600);
        });

        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });
})