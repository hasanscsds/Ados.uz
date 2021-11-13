/** ==========================================================================================

  Project :   FAdos.uz - Tools Store Ecommerce Html Template
  Author :    Themetechmount
  Author URI: http://www.themetechmount.com

========================================================================================== */


/** ===============

01. Popup comment
02. Input-Range
03. Tooltip
04. Slick-slider

 =============== */



//Slick slider
$('.slider-main').slick({
    slidesToShow: 1,
    asNavFor: '.slider-nav',
    vertical: true,
    centerMode: true,
    centerPadding: '50px',
    arrows: false
  });
  
  $('.slider-nav').slick({
    slidesToShow: 5,
    asNavFor: '.slider-main',
    vertical: true,
    focusOnSelect: true,
    autoplay: false,
    centerMode: true,
    verticalSwiping: true,
    speed: 650,
    wrap: true,
  });
  
 
      
/*change Attribute way
$(".shopping_card_btn").click(function() {
    $("#collapse-menu").attr("aria-expanded", "false");
 });
 */

// hide show, classToggle, addClass, removeClass, toggle, collapse, modal, popup
  $(".shopping_btn").click(function(){
    $("#basket_menu").toggle(1);
  });

//like btn
  $('.disliked').click(function() {
    $('.disliked').toggleClass('fas');
  });


//like btn
  $('.btn-block').click(function() {
    $('.persistant-disabled').attr('aria-selected','true');
  });

//discount display
  $(function() {
    const discount = $(".discount_count").val();
    if(discount==0){
      $('.discount_count').css("display", "none");
    }
  });


  //tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//stars
 
