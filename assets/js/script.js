jQuery(document).ready(function($){

     /* faq page */
     $('.faq-container h3').click(function () {
         $('.faq-container h3').not(this).next('.content').slideUp();
         $('.faq-container h3').not(this).find('span').html('+');
         $('.faq-container h3').not(this).removeClass('active');

         if ($(this).hasClass('active')) {
             $(this).removeClass('active');
             $(this).next('.content').slideUp();
             $(this).find('span').html('+');
         } else {
             $(this).addClass('active');
             $(this).next('.content').slideDown();
             $(this).find('span').html('-');
         }

     });
     /* faq page */



});