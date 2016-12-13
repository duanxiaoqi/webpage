$(function() {
    var $banner = $('#banner')
    var $banBox = $('#banner_box');
    var $li =  $banner.find('.banner-page');
    var $btn = $('#banner_btn');
    var $focus = $btn.find('span');
    var iW = $li.width();
    var num = 1;
    var oldNum = 1;
    var buzy = false;
    var timer = null;
    var interval = 6000;

    $banBox.css('left', -iW);
    function setHeight() {
      var $li =  $banner.find('.banner-page');
      var iH = $(window).height();
      iW = $(window).width();
      $banner.css('height', iH);
      $li.css('height', iH);
      $banBox.css({ left : -num * iW});
    };
 
    $(window).on('resize', setHeight).trigger('resize');

    $focus.on('click', function(ev) {
      var index = $(this).index() + 1;   

      if (num == index) return;

      num = num > index ? index + 1 : index - 1;
      num > index ? prev() : next();
      addAnimation4(index);
    });

    // $banner.on('mouseenter', pause);
    // $banner.on('mouseleave', play);

    function prev() {
      if ($banBox.is(':animated')) return;
      num--;

      if (num < 1) {
        num = $li.length-2;
      }

      $focus.removeClass('ban_active').eq(num - 1).addClass('ban_active');
      $banBox.animate({ left : -num * iW});
      addAnimation4(num);
    };

    function next() {
      if ($banBox.is(':animated')) return;
      num++;

      if (num > $li.length-2) {
        $banBox.css('left', 0);
        num = 1;
      }

      $focus.removeClass('ban_active').eq(num - 1).addClass('ban_active');
      $banBox.animate({ left : -num * iW});
      addAnimation4(num);
    };

    function play() {
      clearTimeout(timer);
      timer = setInterval(function() {
        next();
      }, interval)
    };

    play();
    function pause() {
      timer && clearInterval(timer);
    };
    function addAnimation4 (index) {
        if(index == 4) {
            $('#page4').find('.animation').addClass('animation4');
        }
        else {
            $('#page4').find('.animation').removeClass('animation4');
        }
    };

    function setNum() {
        $.ajax({
            url: '/server_api.php',
            success: function(data) {
                $('#num').text( data );
            },
            error: function(error) {
                console.log(error);
            }
        });
    };

    setNum();
    setInterval(setNum, 1000);
});
// window.onload = function () {
//     function setHeight() {
//         var banner = document.getElementById('banner');
//         var li = banner.getElementsByTagName('li');
//         banner.style.height = window.innerHeight+'px';
//         for(var i=0;i<li.length;i++){
//             li[i].style.height = window.innerHeight+'px';
//         }
//     }
//     setHeight();
//     window.onresize = function () {
//         setHeight();
//     }

//     var num=0;
//     var banner_btn=document.getElementById('banner_btn');
//     var banner_box=document.getElementById('banner_box');
//     var span=banner_btn.getElementsByTagName('span');
//     for(var i=0;i<span.length;i++){
//         span[i].index=i;
//         span[i].onclick=function () {
//             banner_box.style.left=-100*parseInt(this.index)+'%';
//             for(var i=0;i<span.length;i++){
//                 span[i].className='';
//             }
//             this.className='ban_active';
//             num=this.index;
//         }
//     }
//     function hello () {
//         if(num<4){
//             banner_box.style.left=-100*num+'%';
//             for(var i=0;i<span.length;i++){
//                 span[i].className='';
//             }
//             span[num].className='ban_active';
//             num++;
//         } else {
//             num=0;
//         }
//     }
//     timer=setInterval(hello,3000);
// }


/* page2 star */
var content=document.getElementsByClassName('content')[0];
var box=document.getElementsByClassName('star')[0];
var on=true;
var num=0;

function hello() {
    if (on) {
        if (num < 3) {
            content.style.left = -141 * num + 'px';
            num++;
        } else {
            on = false;
        }
    } else {
        if (num > 0) {
            num--;
            content.style.left = -141 * num + 'px';
        } else {
            on = true;
        }
    }
}
timer = setInterval(hello, 200);


