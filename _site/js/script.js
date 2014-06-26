var scrollFlag = true;

$(document).ready(function() {
  setTimeout(function() {
    var easing = {
      duration: 700,
      easing: 'swing'
    };

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

    $('#name, #name2, #go, #subline p, #name_about, #name_imprint, #logo_map, .contact').delay(200).animate({
      'opacity' : '1',
      'top' : '+=20px'
    }, easing);

    $('#subline p, .wrapper').delay(300).animate({
       'opacity' : '1',
       'top' : '+=20px',
    }, easing);

    $('#foot_iphone').delay(300).animate({
       'opacity' : '1',
       'top' : '+=30px'
    }, easing);

    $('#copyright_wrapper').delay(1000).animate({
      'opacity' : '1'
    }, easing);

    $('.marker1, .marker-label').delay(300).animate({
       'opacity' : '1',
       'top' : '+=30px'
    }, easing);

    $('.marker2, .marker-label2').delay(500).animate({
       'opacity' : '1',
       'top' : '+=30px'
    }, easing);

    $('.marker3, .marker-label3').delay(700).animate({
      'opacity' : '1',
      'top' : '+=30px'
    }, easing);

    $('.marker').delay(400).animate({
       'opacity' : '1',
       'top' : '+=30px'
    }, easing);

    $('.navscroll a, nav a, .about a').hover(function () {
    // $('.navscroll a, nav a, figcaption a, .about a').hover(function () {
        $('#top, #bottom, #left, #right').css('background', '#000');
    }, function () {
        $('#top, #bottom, #left, #right').css('background', '#fdfdfd');
    });

    $('.next_text a').hover(function () {
        $('#right').css('background', '#000');
    }, function () {
        $('#right').css('background', '#fdfdfd');
    });

    $('.prev_text a').hover(function () {
        $('#left').css('background', '#000');
    }, function () {
        $('#left').css('background', '#fdfdfd');
    });
  }, 660);
});

$(window).scroll(function() {
  if (scrollFlag) {
    scrollFlag = false;

    if ($(this).scrollTop() > 65) {
      $('#fademenu').fadeIn();
    } else {
      $('#fademenu').fadeOut();
    }

    setTimeout(function () {
      scrollFlag = true;
    }, 32);
  }
});
