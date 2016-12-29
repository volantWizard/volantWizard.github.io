define(function (require,exports,module){
	var $ = require('zepto');
	var setViewPort = function (){
		var phoneWidth = parseInt(window.screen.width),
			phoneHeight = parseInt(window.screen.height);
		var phoneScale = phoneWidth / 640 ;
	    var html = document.querySelector('html');
	    html.style.fontSize = phoneWidth/16 + 'px';
	    var ua = navigator.userAgent;
	    //安卓：dip/dp设备独立像素，是一种基于屏幕密度的抽象单位
	    //屏幕像素密度：dpi---屏幕像素密度指单位长度屏幕显示的像素，即常说的dpi (dots per inch)，每英寸点数。密度越高显示画面就越清晰。
	    /*Android把像素密度按区间分成几种：
			ldpi - low dpi, 低密度
			mdpi - medium dpi 中密度
			hdpi - high dpi 高密度
			xhdpi - extra high dpi 超高密度
			xxhdpi - extra extra high dpi 超超高密度
			xxxhdpi - - extra extra extrahigh dpi 超超超高密度
			不管设备像素密度是多少，都可以找到对应的分类。
	*/
		/*
		 不同像素密度，系统给定了其对应比例和倍数如下：安卓
		分类目录	ldpi	mdpi	hdpi	xhdpi	xxhdpi	xxxhdpi
		密度（dpi）~120	~160	~240	~320 	~480	~640
		图片比例	 1.5	  2		  3		 4		  6		  8
		(dp)倍数	0.75x	 1x		1.5x	 2x		 3x		 4x
		像素		1px		 1px	1px		1px		1px		 1px
		换算公式：1px = 1dp * (dpi /160)
		 * */
		
	    		
	    if (/Android (\d+\.\d+)/.test(ua)) {
	    	var version = parseFloat(RegExp.$1);
	    	//andriod 2.3
	    	if (version > 2.3) {
	    		
	    		$('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">')
	    		.appendTo($('head'));
	    	} else{
	    		$('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">').appendTo($('head'));
	    	}
	    } else{
	    	var scale = 1;
		    if (window.devicePixelRatio) {
		    	scale = scale/window.devicePixelRatio;
		    }
	    	$('<meta name="viewport" content="width=640,user-scalable=no target-densitydpi=device-dpi" />').appendTo($('head'));
	    }
	    console.log(phoneHeight,phoneHeight*phoneScale,$(window).height());
	}
	setViewPort();
//	exports.set = {};
})
