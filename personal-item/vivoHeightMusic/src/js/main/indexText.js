define(function (require,exports,module){
    //轮换显示字体，直到图片预加载结束
    var num = 1;
    var old = 1;
    $('.line_text1').css({'opacity':1});
    var timer = setInterval(function (){
        num++;
        if (num>3) {
        	clearInterval(timer);
        }
        $('.line_text'+old).css({'opacity':0});
        setTimeout(function (){
	        $('.line_text'+num).css({'opacity':1});
        },400);
	        old=num;
    },1500);
    
});