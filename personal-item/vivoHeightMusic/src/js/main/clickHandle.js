define(function (require,exports,module){
    var defaultData = {
    	38:[{
    		'translateX':-209.53,
	    	'translateY':172.77,
	    	'translateZ':-362.92,
	    	'rotateX':0,
	    	'rotateY':-330,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	},{
    		'translateX':-209.53,
	    	'translateY':72,
	    	'translateZ':-362.92,
	    	'rotateX':0,
	    	'rotateY':-330,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	}],
    	car_TS:[{
    		'translateX':-209.53,
	    	'translateY':240,
	    	'translateZ':362.92,
	    	'rotateX':0,
	    	'rotateY':-210,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	},{
    		'translateX':-209.53,
	    	'translateY':220,
	    	'translateZ':362.92,
	    	'rotateX':0,
	    	'rotateY':-210,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	}],
    	music_TS:[{
    		'translateX':296.32,
	    	'translateY':395.52,
	    	'translateZ':296.32,
	    	'rotateX':0,
	    	'rotateY':-135,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	},{
    		'translateX':296.32,
	    	'translateY':370,
	    	'translateZ':296.32,
	    	'rotateX':0,
	    	'rotateY':-135,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	}],
    	touch_TS:[{
    		'translateX':300.01,
	    	'translateY':2,
	    	'translateZ':-196.74,
	    	'rotateX':0,
	    	'rotateY':-62,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	},{
    		'translateX':300.01,
	    	'translateY':20,
	    	'translateZ':-196.74,
	    	'rotateX':0,
	    	'rotateY':-62,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	}],
    	video_TS:[{
    		'translateX':-419.06,
	    	'translateY':-92.38,
	    	'translateZ':0,
	    	'rotateX':0,
	    	'rotateY':-270,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	},{
    		'translateX':-419.06,
	    	'translateY':-75,
	    	'translateZ':0,
	    	'rotateX':0,
	    	'rotateY':-270,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
    	}]
    }
    
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
        defaultMove(defaultData);
    }
    
    console.log(this);
    
    //三个事件，-拖动1个--点击2个--陀螺仪1个
    //再细分下面的动画类型：
    /* 1.提示文字消失动画，添加class类名，opacity从1-0
     * 2.手部晃动动画，2张相同图片opacity交替0-1，产生视觉差，
     * 3.气泡文字出现动画，scale3d(0,0,0)--1.5-0.5-1
     * 4.其它动画同组动画，同效果2
     * 5.打碟组里面的音符跳动动画，利用tween，同时改变scale 0-1,延迟添加class类名
    */
   	//目的是，只要传入数据后，直接全部事件绑定好，等待执行。
    /*var ClickHandle = function (config){
        this.config = config||{};
        this.init();
        console.log(this);
    };
    
    ClickHandle.prototype = 
    {
    	init:function (){
    	    console.log(this);
    	    this.textHide(text);
    	    this.opacityToggle(opacity1,opacity2);
    	    this.textShake(text);
    	    this.noteJump(note);
    	},
    	el:this.config.el,
    	text1: this.config.el,
    	text2: this.config.el,
    	opacity1: this.config.el,
    	opacity2: this.config.el,
    	opacity3: this.config.el,
    	opacity4: this.config.el,
    	note: this.config.el,
    	textHide:function (text1){
    	    
    	},
    	opacityToggle:function (opacity1,opacity2){
    	    
    	},
    	textShake:function (text2){
    	    
    	},
    	noteJump:function (note){
    	    
    	},
    	addEvent:function (el){
    	    el.on('click',this.init);
    	},
    	touchEvent:function (el){
    	    el.on('swiper',this.init1);
    	},
    	orientEvent:function (el){
    	    el.on('swiper',this.init1);
    	}
    }
    
    new ClickHandle();*/
    module.exports = {
    	defaultMove:defM
    }
    
    
    
    //点击音乐播放，其他音乐停止，提示气泡出现，提示文字消失
//  function (){
//      
//  }
});