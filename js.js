window.onload = function () {
    function setHeight() {
        var banner = document.getElementById('banner');
        var li = banner.getElementsByTagName('li');
        banner.style.height = window.innerHeight+'px';
        for(var i=0;i<li.length;i++){
            li[i].style.height = window.innerHeight+'px';
        }
    }
    setHeight();
    window.onresize = function () {
        setHeight();
    }

    var num=0;
    var banner_btn=document.getElementById('banner_btn');
    var banner_box=document.getElementById('banner_box');
    var span=banner_btn.getElementsByTagName('span');
    for(var i=0;i<span.length;i++){
        span[i].index=i;
        span[i].onclick=function () {
            banner_box.style.left=-100*parseInt(this.index)+'%';
            for(var i=0;i<span.length;i++){
                span[i].className='';
            }
            this.className='ban_active';
            num=this.index;
        }
    }
    function hello () {
        if(num<4){
            banner_box.style.left=-100*num+'%';
            for(var i=0;i<span.length;i++){
                span[i].className='';
            }
            span[num].className='ban_active';
            num++;
        } else {
            num=0;
        }
    }
    timer=setInterval(hello,3000);
}




