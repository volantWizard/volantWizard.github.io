define(function (require,exports,module){
	//加载，mTouch模块,在htmlcon模块内，已经加载了，并且把mTouch模块挂在了window下面成为了全局变量了，故不用再家宅
	var rotation = require('main/rotation');
	//加载点击处理模块
	var clickHandle = require('main/clickHandle');
	//字体隐藏
    $('.line_text1').css({'display':'none'});
    $('.line_text2').css({'display':'none'});
    $('.line_text3').css({'display':'none'});
    
    //图片动画开始
    $('.line_text_bg').addClass('music_f7_animation');
    $('.index_1').addClass('move_to_up');
    
    $('.index_3').addClass('move_to_down');
    $('.index_4').addClass('move_to_down');
    $('.index_5').addClass('move_to_left');
    $('.index_6').addClass('move_to_right');
    $('.index_7').addClass('boom_4');
    $('.index_8').addClass('boom_6');
    $('.index_9').addClass('boom_5');
    $('.index_10').addClass('boom_2');
    $('.index_11').addClass('boom_7');
    $('.index_12').addClass('boom_1');
    $('.index_13').addClass('boom_3');
    $('.index_14').addClass('boom_8');
    
    //确定要变的量
    var scaleObj = {
    		'translateX':0,
	    	'translateY':-550,
	    	'translateZ':-2000,
	    	'rotateX':0,
	    	'rotateY':-360,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	},
    	rotateObj = {
    		'translateX':0,
	    	'translateY':0,
	    	'translateZ':0,
	    	'rotateX':0,
	    	'rotateY':60,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	};
    //850ms后开始执行动画	
    setTimeout(function (){
    	//手机变小动画开始,用1s
        $('.index_2').addClass('index_min');
        //700ms后，转轴主动画，scale从0-1，用时100ms延迟700ms执行,回掉内部动画开始旋转用时1.8s，执行完毕，出现遮罩提示！
        setTimeout(function (){
			mTouch.MTween(wrap2,scaleObj,300,'linear',function (){
				
			    mTouch.MTween(wrap2,rotateObj,1200,'linear',function (){
			    	$('#ts').removeClass('obj_fadeOut').addClass('obj_fadeIn_speed').css({display:'block','z-index':999});
					
					//360°旋转手机，进行相应操作，wrap2旋转，wrap1方向z位移-200；
					rotation.rotateGrevity();
					//手滑屏操作
					rotation.touchMove();
					//气球运动，操作提示文字运动
					clickHandle.defaultMove();
					console.log($('div[style*="text1.png"]'))
			    });
			});
        },250);
    },850);
    //tap遮罩，消失
    $('#ts').tap(function (){
        $(this).hide();
    });
});