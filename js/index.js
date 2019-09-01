$(function() {
  // 音乐
  $('.music').click(function(event) {
    $(this).toggleClass('play');
    $(this).toggleClass('pause');
    if ($(this).hasClass('play') && $(this).hasClass('pause')) {
     $('audio')[0].pause();
    }
    else{
      $('audio')[0].play();
    }
  });

  //文字
  $('.screen1').children('.title').removeClass('t-rotate');
  //换屏

  var timer;
  var n = 0;
  $(document).mousewheel(function(e, d) {
    function tim() {
      clearTimeout(timer);
      //一次性定时器
      timer = setTimeout(function() {
        n = n - d; //n++
        if (n > 6) {
          n = 6;
        }
        if (n < 0) {
          n = 0;
        }
        $('.section').animate({
          'top': -100 * n + '%'
        }, 500);
        $('.section>div').eq(n).children('.title').removeClass('t-rotate').parent('div').siblings('').children('.title').addClass('t-rotate');
        $('.aside ul li').eq(n).addClass('current').siblings('li').removeClass('current');
      }, 500)
    }
    tim();
  })

  //侧导航
  $('.aside ul li').click(function(event) {
    $(this).addClass('current').siblings('li').removeClass('current');
    n = $(this).index();
    $('.section').animate({
      'top': -100 * n + '%'
    }, 500);
    $('.section>div').eq(n).children('.title').removeClass('t-rotate').parent('div').siblings('').children('.title').addClass('t-rotate');
  });

  //轮播图
  var timer;
  var num = 0;
  function lunbo() {
    clearInterval(timer);
    timer = setInterval(function() {
      num++;
      if (num > 4) {
        $(".b-img ul").css('left', '0px');
        num = 1;
      }
      $(".b-img ul").animate({
        'left': -num * 762 + 'px'
      }, 500);
    }, 1000)
  }
  lunbo();

  // 鼠标移入事件
  $('.b-img').hover(function() {
    clearInterval(timer);
  }, function() {
    lunbo();
  });

  // 点击左右按钮
  $('.b-img .left').click(function(event) {
    num--;
    if (num < 0) {
      $('.b-img ul').css('left', '-2286px');
      num = 3;
    }
    $(".b-img ul").animate({
      'left': -num * 762 + 'px'
    }, 500);
  });

  $('.b-img .right').click(function(event) {
    num++;
    if (num > 4) {
      $('.b-img ul').css('left', '0px');
      num = 1;
    }
    $(".b-img ul").animate({
      'left': -num * 762 + 'px'
    }, 500);
  });
})
