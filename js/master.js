//add active class to navbar
$( '.navbar' ).find( 'li.active' ) 
.removeClass( 'active' ); 
var url = window.location;
   $('.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
   $('.navbar-nav a').filter(function() {
        return this.href == url;
   }).parent().addClass('active').siblings().removeClass('active');
//end
//click on scroll to top to move to top 
$('.scroll-to-top').click(function(event){

    event.preventDefault();
    $('html,body').animate({
      scrollTop:0

    },400);
  })
$(window).scroll( function() {
    if($(window).scrollTop() >= 200)
    {
      $('.scroll-to-top').fadeIn(600);
    }
    else
    {
      $('.scroll-to-top').fadeOut(600);
    }
    /* 
    if ($(window).scrollTop() > nav_scroll) {
       
        document.querySelector('.navbar-light').classList.add('fixed-top');
       $('.navbar').css('padding','0');
       
    }
    else{
        document.querySelector('.navbar-light').classList.remove('fixed-top');
        $('.navbar').css('padding','.5rem 1rem');
        
    }
    */
    if($(window).scrollTop() > 100){
        $('.box').css('animation','slideUp 2s')
    }
    
  
    
    
    
   

});
