/**
 * Created by duanqi on 16/9/19.
 */
window.onload = function () {
    var top_ad=document.getElementsByClassName('top_ad')[0];
    var btn=document.getElementsByClassName('btn')[0];
    var span=btn.getElementsByTagName('span');
    var top_ad_box=top_ad.getElementsByClassName('top_ad_box')[0];
    var num=0;
    for(var i=0;i<span.length;i++){
        span[i].index=i;
        span[i].onclick=function () {
            top_ad_box.style.left=-1002*parseInt(this.index)+'px';
            for(var i=0;i<span.length;i++){
                span[i].style.backgroundColor='rgba(255, 255, 255, .5)';
            }
            this.style.backgroundColor='rgba(255, 255, 255, 1)';
        }
    }
    

    function hello () {
        if(num<3){
            top_ad_box.style.left=-1002*num+'px';
            for(var i=0;i<span.length;i++){
                span[i].style.backgroundColor='rgba(255, 255, 255, .5)';
            }
            span[num].style.backgroundColor='rgba(255, 255, 255, 1)';
            num++;
        } else {
            num=0;
        }
    }
    timer=setInterval(hello,3000);


    // star
    var star_name=document.getElementsByClassName('star_name')[0];
    var star_content=document.getElementsByClassName('star_content')[0];
    var li=star_name.getElementsByTagName('a');
    for(var i=0;i<li.length;i++){
        li[i].index=i;
        li[i].onmouseover=function () {
            for(var i=0;i<li.length;i++){
                li[i].style.borderBottom='none';
            }
            this.style.borderBottom='2px solid #424147';
            star_content.style.left=-950*parseInt(this.index)+'px';
        }
    }
}