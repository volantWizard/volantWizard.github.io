define(function (require,exports,module){
	//监控手机方向改变；
	var Orienter = require('module/orienter');
	//准备数据
	var data = require('main/dataClick');
	
	var defaultData = data.defaultData;
    //气球运动，提示文字标运动
    function animationMove(selector,arr){
    	var el = $('div[style*="'+selector+'"]')[0],
    		obj1 = arr[0],
    		obj2 = arr[1];
    	//记录当前el是否再运动
    	el.isAnimate = true;
    	//记录el上的transforma
    	mTouch.css(el,obj1);	
    	
    	function shake(){
	    	mTouch.MTween(el,obj2,1000,'easeIn',function (){
	    		mTouch.MTween(el,obj1,1000,'easeOut',function (){
	    	    	if (el.isAnimate) {
	    	    		shake();
	    	    	}
	    		});    
	    	});	    
    	}
    	shake();
    }
    
    function defaultMove(defaultData){
        for (attr in defaultData) {
        	var selector = attr +'.png',
        		arr = defaultData[attr];
        	animationMove(selector,arr);
        }
    }
    function defM(){
    	window.addEventListener('touchstart',function (ev){
    	    console.log(ev.target);
    	})
        defaultMove(defaultData);
    }
    
//  console.log(this);
    
    //三个事件，-拖动1个--点击2个--陀螺仪1个
    //再细分下面的动画类型：
    /* 1.提示文字消失动画，添加class类名，opacity从1-0
     * 2.手部晃动动画，2张相同图片opacity交替0-1，产生视觉差，
     * 3.气泡文字出现动画，scale3d(0,0,0)--1.5-0.5-1
     * 4.其它动画同组动画，同效果2
     * 5.打碟组里面的音符跳动动画，利用tween，同时改变scale 0-1,延迟添加class类名
    */
   	//目的是，只要传入数据后，直接全部事件绑定好，等待执行。
    var ClickHandle = function (config){
//      window._this = this;
        this.config = config||{};
        console.log(this.config);
        this.init();
    };
    
    ClickHandle.prototype = 
    {		
    	init:function (){
    	    console.log(this,this.selector(this.config['el']));
    	    this.addEvent(this.el());
    	},
    	eventHandle:function (){
    	    console.log(this);
    	    this.textHide(this.text1());
    	    this.opacityToggle(this.opacity1(),this.opacity2());
    	    this.opacityToggle(this.opacity3(),this.opacity4());
    	    this.textShake.call(this,this.text2());
    	    console.log(!!this.config['note']&& this.noteJump(this.note()) );
    	    !!this.config['note'] && this.noteJump(this.note());
    	    this.musicPlay(this.audioPlay());
    	},
    	selector:function (selector){
    	    return $('div[style*="'+selector+'"]');
    	    console.log(this);
    	},
    	el:function(){
    		return this.selector(this.config['el'])
    	},
    	text1: function(){
    		return this.selector(this.config['text1'])
    	},
    	text2: function(){
    		return this.selector(this.config['text2'])
    	},
    	opacity1: function(){
    		return this.selector(this.config['opacity1'])
    	},
    	opacity2: function(){
    		return this.selector(this.config['opacity2'])
    	},
    	opacity3: function(){
    		return this.selector(this.config['opacity3'])
    	},
    	opacity4: function(){
    		return this.selector(this.config['opacity4'])
    	},
    	note: function(){
    		return this.selector(this.config['note'])
    	},
    	audioPlay: function(){
    		return $(this.config['audioPlay'])[0]
    	},
    	textHide:function (text1){
    	    text1.addClass('obj_fadeOut');
    	},
    	opacityToggle:function (opacity1,opacity2){
    	    setInterval(function (){
				if (opacity1.css('opacity') === '1' ) {
					opacity1.css('opacity','0');
					opacity2.css('opacity','1');
				}else {
					opacity1.css('opacity','1');
					opacity2.css('opacity','0');
				}
			},500)
    	},
    	textShake:function (text2){
    		//真实的不是晃动，时连续的变换，只不过时快速，如果时晃动，则动画不细腻，使用tween动画bounceIn
//  		console.log(text2[0],_this.config.scale1,_this.config.scale2);
    		mTouch.css(text2[0],this.config.scale1);
    		mTouch.MTween(text2[0],this.config.scale2,800,'bounceOut');
    	},
    	noteJump:function (note){
    	  	//音符跳动
    	  	note.each(function (index,item){
    	  		console.log(item);
	    	  	mTouch.css(item,{
			    	'translateX':271,
			    	'translateY':346,
			    	'translateZ':296,
			    	'rotateX':0,
			    	'rotateY':-135,
			    	'rotateZ':0,
			    	'scaleX':0,
			    	'scaleY':0,
			    	'scaleZ':0
			    });
    	  	});
    	  	var n = 0;
    	  	setInterval(function (){
    	  		if (n===5) return;
			    var scaleObj = {
			    	'translateX':170,
			    	'translateY':146,
			    	'translateZ':296,
			    	'rotateX':0,
			    	'rotateY':-135,
			    	'rotateZ':18*(n+1)+90,
			    	'scaleX':100,
			    	'scaleY':100,
			    	'scaleZ':100
			    }
			    mTouch.MTween(note[n],scaleObj,1000,'linear');
    	  	    n++;
    	  	},600)
    	},
    	musicPlay:function(audioPlay){
//  		console.log($('audio'));
    		$('audio').each(function (item,index){
    		    !this.paused && this.pause();
    		});
    		audioPlay.play();
    	},
    	touchHandle:function (event){
    	    //获取translate(),根据触摸点的坐标，让translate改变，判断当x&&y和之前差值在规定范围以上时，触发如下函数
//  	  	console.log(event,_this);  
    	  	event.stopPropagation();
    	  	this.pageX = event.changedTouches[0].pageX;
    	  	this.pageY = event.changedTouches[0].pageY;
//  	  	console.log(_this.pageX,_this.pageY,this);
    	  	
    	  	this.el().on('touchmove',$.proxy(this.touchMoveHandle,this));
    	},
    	touchMoveHandle:function(event){
    		event.stopPropagation();
    		this.disX = event.changedTouches[0].pageX - this.pageX;
    		this.disY = event.changedTouches[0].pageY - this.pageY;
    		var x = 360.01+this.disX,
    			y = 108.46+this.disY,
    			z = -196.74+this.disX;
//  		console.log(this,_this.disX,_this.disY);
    		this.el().css('transform','translate3d(-50%, -50%, 0px) translate3d('+x+'px, '+y+'px, '+z+'px) rotateX(0deg) rotateY(-62deg) rotateZ(0deg) scale3d(1, 1, 1)')
    		if (this.disX>30&&this.disY>75) {
    			this.el().addClass('obj_fadeOut');
    			this.eventHandle();
    		}
//  		console.log($(this).css('transform'));
    	},
    	tapHandle:function(){
    		console.log(this);
    		this.eventHandle();	
    	},
    	orienHandle:function(){
    		var o = new Orienter();
    		console.log(o);
    		o.onOrient = function (a) {
	    	
		        var b, c, d, f;
		        
			    switch (a.dir) {
			    case 0:
			        dirSpeed = a.g,
			        dir = a.g < 0 ? 1 : 2;
			        break;
			    case 90:
			        dirSpeed = a.b,
			        dir = a.b < 0 ? 1 : 2;
			        break;
			    case -90:
			        dirSpeed = a.b,
			        dir = a.b < 0 ? 2 : 1
			    }
			   	
				(在这个范围内) && (X += (a.b - X) * 0.2,Y += (a.a - Y) * 0.2);
				
			    
			    
		    };
		    o.init();
    	},
    	addEvent:function (el){
    	    switch(this.config['el']){
    	    	case 'touch_phone.png':
    	    		el[0].addEventListener('touchstart',$.proxy(this.touchHandle,this));
    	    		break;
    	    	case 'video.png':
    	    	//是这个时，添加事件监听，触发，手机晃动时触发，
    	    		
    	    		this.orienHandle();
    	    		break;
    	    	default:
    	    		el.on('tap',$.proxy(this.tapHandle,this));
    	    }
    	    
    	}
    }
    
    module.exports = {
    	defaultMove:defM,
    	upDate:function (){
	    	var dataClick = data.dataClick;
	        for (attr in dataClick) {
	        	new ClickHandle(dataClick[attr]);
	        }
	    }
    }
    
    
    
});