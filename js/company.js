window.onload=function () {

    /*  banner */
    var num=0;
    var banner_btn=document.getElementsByClassName('banner_btn')[0];
    var banner_box=document.getElementsByClassName('banner_box')[0];
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
    timer=setInterval(hello,2000);


    var prev=document.getElementsByClassName('prev')[0];
    var next=document.getElementsByClassName('next')[0];
    prev.onclick=function () {
        var pic_list=document.getElementsByClassName('pic_list')[0];
        newleft=parseInt(pic_list.style.left);
        console.log(newleft);
        if(newleft<0) {
            pic_list.style.left=parseInt(newleft)+250+'px';
        }
    }
    next.onclick=function () {
        var pic_list=document.getElementsByClassName('pic_list')[0];
        newleft=parseInt(pic_list.style.left);
        if(newleft>-1250) {
            pic_list.style.left=parseInt(newleft)-250+'px';
        }
    }
}
