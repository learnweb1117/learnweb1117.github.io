$(document).ready(function () {
  var winWid = window.innerWidth;
  var htmlHeight = $('html').outerHeight();
  var input = $('input');
  var inputWidth = $('input').outerWidth();
  var links = $('.nav-link');  //все ссылки
  var brand = $('.navbar-brand');
  var cover = $('.nav-tabs #cover');
  var nav_item = $('.nav-tabs .item-nav');
  var nav_itemWidth = nav_item.outerWidth();
  var nav_itemHeight = nav_item.outerHeight();
  if(winWid <= 896) {
    $('#firsts-tab').html('1');
    $('#second-tab').html('2');
    $('#third-tab').html('3');
    $('#fourth-tab').html('4');
    $('#fifth-tab').html('5');
    $('#sixth-tab').html('6');
    $('#seventh-tab').html('7');
    $('#eighth-tab').html('8');
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    welcome.on('hover', function () {
        welcome.trigger('click');
    })
    alert(1);
  }
  if (window.location.href.indexOf('reload')==-1) {
    window.location.replace(window.location.href+'?reload');
  }
  cover.css('height', (nav_itemHeight - 2) + 'px');
  cover.css('width', nav_itemWidth + 'px'); 
//   $('.nav-tabs .nav-item').css('width', nav_itemWidth + 'px');
//   cover.css('transform', 'translate(-' + (nav_itemWidth * 3) + 'px)');
  setTimeout(() => {
       cover.css('transition', '.6s');
}, 10);

 
$('.nav-item.first').hover(
    function(){
        cover.css('transform', 'translate(-' + ((nav_itemWidth * 3) + (nav_itemWidth / 2)) + 'px)');
        cover.css('width', ($('.nav-item.first') + 'px'));
        href = $('.nav-item.first .nav-link').attr('href');
        cover.attr('href', href);
    });
$('.nav-item.second').hover(
    function(){
        cover.css('transform', 'translate(-' + ((nav_itemWidth * 2) + (nav_itemWidth / 2)) + 'px)');
        cover.css('width', ($('.nav-item.second') + 'px'));
        href = $('.nav-item.second .nav-link').attr('href');
        cover.attr('href', href);
    });

$('.nav-item.third').hover(
    function(){
        cover.css('transform', 'translate(-' + ((nav_itemWidth) + (nav_itemWidth / 2)) + 'px)');
        cover.css('width', ($('.nav-item.third') + 'px'));
        href = $('.nav-item.third .nav-link').attr('href');
        cover.attr('href', href);
    });
$('.nav-item.fourth').hover(
    function(){
        cover.css('transform', 'translate(-' + ((nav_itemWidth / 2)) + 'px)');
        cover.css('width', ($('.nav-item.fourth') + 'px'));
        href = $('.nav-item.fourth .nav-link').attr('href');
        cover.attr('href', href);
    });
$('.nav-item.fifth').hover(
    function(){
        cover.css('transform', 'translate(' + ((nav_itemWidth / 2)) + 'px)');
        cover.css('width', ($('.nav-item.fifth') + 'px'));
        href = $('.nav-item.fifth .nav-link').attr('href');
        cover.attr('href', href);
    });
$('.nav-item.sixth').hover(
    function(){
        cover.css('transform', 'translate(' + ((nav_itemWidth) + (nav_itemWidth / 2)) + 'px)');
        cover.css('width', ($('.nav-item.sixth') + 'px'));
        href = $('.nav-item.sixth .nav-link').attr('href');
        cover.attr('href', href);
    });
$('.nav-item.seventh').hover(
    function(){
        cover.css('transform', 'translate(' + ((nav_itemWidth * 2) + (nav_itemWidth / 2)) + 'px)');
        cover.css('width', ($('.nav-item.seventh') + 'px'));
        href = $('.nav-item.seventh .nav-link').attr('href');
        cover.attr('href', href);
    });
$('.nav-item.eighth').hover(
    function(){
        cover.css('transform', 'translate(' + ((nav_itemWidth * 3) + (nav_itemWidth / 2)) + 'px)');
        cover.css('width', ($('.nav-item.eighth') + 'px'));
        href = $('.nav-item.eighth .nav-link').attr('href');
        cover.attr('href', href);
    });


        $('.nav-item.first').innerWidth(nav_itemWidth + 'px');
        $('.nav-item.second').innerWidth(nav_itemWidth + 'px');
        $('.nav-item.third').innerWidth(nav_itemWidth + 'px');
        $('.nav-item.fourth').innerWidth(nav_itemWidth + 'px');
        $('.nav-item.fifth').innerWidth(nav_itemWidth + 'px');
        $('.nav-item.sixth').innerWidth(nav_itemWidth + 'px');
        $('.nav-item.seventh').innerWidth(nav_itemWidth + 'px');
        $('.nav-item.eighth').innerWidth(nav_itemWidth + 'px');
        
      /*   if ($('.nav-item.first .nav-link').hasClass('active')) {
            cover.css('transform', 'translate(-' + ((nav_itemWidth * 3) + (nav_itemWidth / 2) + 4) + 'px)');
            cover.css('width', ($('.nav-item.first') + 'px'));
        } */
    /* cover.click(function () { 
        if (cover.attr('href') == '#first') {
            $('.nav-item.first .nav-link').click();
        }
        else if (cover.attr('href') == '#second') {
            $('.nav-item.second .nav-link').click();
        }
        else if (cover.attr('href') == '#third') {
            $('.nav-item.third .nav-link').click();
        }
        else if (cover.attr('href') == '#fourth') {
            $('.nav-item.fourth .nav-link').click();
        }
        else if (cover.attr('href') == '#fifth') {
            $('.nav-item.fifth .nav-link').click();
        }
        else if (cover.attr('href') == '#sixth') {
            $('.nav-item.sixth .nav-link').click();
        }
        else if (cover.attr('href') == '#seventh') {
            $('.nav-item.seventh .nav-link').click();
        }
        else if (cover.attr('href') == '#eighth') {
            $('.nav-item.eighth .nav-link').click();
        }
        else {
            alert(1);
        }
     }) */
    
    
    
   $('.nav-tabs .nav-item').on('click', function () {
       setTimeout(() => {
        if($('.nav-item.first .nav-link').hasClass('show')) {
            $('#first .theFirst').html('  <video src="./lessons/Lesson1.1.mp4" controls="controls" width="100%" poster="./img/poster1-1.jpg"></video>');
            $('#first .theSecond').html('  <video src="./lessons/Lesson1.2.mp4" controls="controls" width="100%" poster="./img/poster1-2.jpg"></video>');
          }
          else if($('.nav-item.second .nav-link').hasClass('show')) {
            $('#second .theFirst').html('  <video src="./lessons/Lesson2.1.mp4" controls="controls" width="100%" poster="./img/poster2-1.jpg"></video>');
            $('#second .theSecond').html('  <video src="./lessons/Lesson2.2.mp4" controls="controls" width="100%" poster="./img/poster2-2.jpg"></video>');
          }
          else if($('.nav-item.third .nav-link').hasClass('show')) {
            $('#third .theFirst').html('  <video src="./lessons/Lesson3.1.mp4" controls="controls" width="100%" poster="./img/poster3-1.jpg"></video>');
            $('#third .theSecond').html('  <video src="./lessons/Lesson3.2.mp4" controls="controls" width="100%" poster="./img/poster3-2.jpg"></video>');
            $('#third .theThird').html('  <video src="./lessons/Lesson3.3.mp4" controls="controls" width="100%" poster="./img/poster3-3.jpg"></video>');
          }
          else if($('.nav-item.fourth .nav-link').hasClass('show')) {
            $('#fourth .theFirst').html('  <video src="./lessons/Lesson4.1.mp4" controls="controls" width="100%" poster="./img/poster4-1.jpg"></video>');
            $('#fourth .theSecond').html('  <video src="./lessons/Lesson4.2.mp4" controls="controls" width="100%" poster="./img/poster4-2.jpg"></video>');
            $('#fourth .theThird').html('  <video src="./lessons/Lesson4.3.mp4" controls="controls" width="100%" poster="./img/poster4-3.jpg"></video>');
          }
          else if($('.nav-item.fifth .nav-link').hasClass('show')) {
            $('#fifth .theFirst').html('  <video src="./lessons/Lesson5.1.mp4" controls="controls" width="100%" poster="./img/poster5-1.jpg"></video>');
            $('#fifth .theSecond').html('  <video src="./lessons/Lesson5.2.mp4" controls="controls" width="100%" poster="./img/poster5-2.jpg"></video>');
          }
          else if($('.nav-item.sixth .nav-link').hasClass('show')) {
            $('#sixth .theFirst').html('  <video src="./lessons/Lesson6.1.mp4" controls="controls" width="100%" poster="./img/poster6-1.jpg"></video>');
            $('#sixth .theSecond').html('  <video src="./lessons/Lesson6.2.mp4" controls="controls" width="100%" poster="./img/poster6-2.jpg"></video>');
            $('#sixth .theThird').html('  <video src="./lessons/Lesson6.3.mp4" controls="controls" width="100%" poster="./img/poster6-3.jpg"></video>');
          }
          else if($('.nav-item.seventh .nav-link').hasClass('show')) {
            $('#seventh .theFirst').html('  <video src="./lessons/Lesson7.1.mp4" controls="controls" width="100%" poster="./img/poster7-1.jpg"></video>');
          }
       }, 1);
    
}); 
   $('.nav-tabs .nav-item.second').on('hover', function () {
      alert(1);
}); 
  input.css('left', ((winWid / 2) - (inputWidth / 2)) + 'px')
  $('.btn').css('left', ((winWid / 2) - (inputWidth / 2)) + 'px')


  links.on('click', function (e) {
      e.preventDefault();
      var selector= $(this).attr('href');

      var target = $(selector);  
      $('html,body').animate({
          scrollTop: target.offset().top - 105
      },1000)
  });
  brand.on('click', function (e) {
      e.preventDefault();
      var selector= $(this).attr('href');

      var target = $(selector);  
      $('html,body').animate({
          scrollTop: target.offset().top - 105
      },1000)
  });
  
  var welcome = $('.welcome .btn');
  
  welcome.on('click', function (e) {
  welcome.fadeOut('slow')
  input.trigger('focus');
});
  









});