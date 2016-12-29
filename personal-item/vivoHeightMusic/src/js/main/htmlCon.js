define(function (require,exports,module){
	//注意依赖模块必须要放在前面先加载，如果在后面的话，无法识别加载，这是一个坑
    var w = $(window).width(),
    	h = $(window).height(),
    	fov = Math.round(.5 / Math.tan(.5 * 75 / 180 * Math.PI) * h);
	window.mTouch = require('modul/m.touch.js');
    var inner = '',
    	inner1 = '',
    	inner2 = '',
    	inner3 = '';
    inner1 = 
    	'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(0.7, 0.7, 0.7); transform-style: preserve-3d; transform-origin: 50% 50% 0px; opacity: 1; display: block;">'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-72.77px, -177.1px, -412.69px) rotateX(0deg) rotateY(10deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 310px; height: 245px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/21.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(393.79px, -419.06px, -143.33px) rotateX(0deg) rotateY(-70deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 50px; height: 48px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/23.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(404.78px, -419.06px, 108.46px) rotateX(0deg) rotateY(-105deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 60px; height: 68px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/24.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(269.37px, -419.06px, -321.02px) rotateX(0deg) rotateY(-40deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 50px; height: 46px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/22.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(418.81px, -108.46px, 14.63px) rotateX(0deg) rotateY(-92deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 70px; height: 84px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/25.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(311.42px, -79.96px, 280.41px) rotateX(0deg) rotateY(-132deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 100px; height: 148px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/26.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(0px, -362.92px, 419.06px) rotateX(0deg) rotateY(-180deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 160px; height: 170px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/28.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-330.22px, -43.8px, 258px) rotateX(0deg) rotateY(-232deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 80px; height: 46px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/29.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(0px, 419.06px, 419.06px) rotateX(0deg) rotateY(-180deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 100px; height: 66px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/27.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-412.69px, -419.06px, -72.77px) rotateX(0deg) rotateY(-280deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 41px; height: 64px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/34.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-412.69px, -419.06px, 72.77px) rotateX(0deg) rotateY(-260deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 167px; height: 132px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/31.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-362.92px, 419.06px, 209.53px) rotateX(0deg) rotateY(-240deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 123px; height: 108px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/33.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-269.37px, -393.79px, -321.02px) rotateX(0deg) rotateY(-320deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 117px; height: 62px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/36.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-393.79px, -72.77px, 143.33px) rotateX(0deg) rotateY(-250deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 117px; height: 102px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/32.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-362.92px, -321.02px, -209.53px) rotateX(0deg) rotateY(-300deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 111px; height: 113px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/35.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(412.69px, -296.32px, -72.77px) rotateX(0deg) rotateY(-80deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 109px; height: 106px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/39.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-321.02px, 419.06px, -269.37px) rotateX(0deg) rotateY(-310deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 72px; height: 54px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/37.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-209.53px, 172.77px, -362.92px) rotateX(0deg) rotateY(-330deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 252px; height: 298px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/38.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-36.52px, 143.33px, -417.47px) rotateX(0deg) rotateY(5deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 136px; height: 157px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/40.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-209.53px, 72.77px, -362.92px) rotateX(0deg) rotateY(-330deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 134px; height: 149px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/empty.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-209.53px, 143.33px, 362.92px) rotateX(0deg) rotateY(-210deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 134px; height: 149px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/empty.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(296.32px, 296.32px, 296.32px) rotateX(0deg) rotateY(-135deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 134px; height: 149px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/empty.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(196.32px, 162.92px, 296.32px) rotateX(0deg) rotateY(-135deg) rotateZ(65deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 50px; height: 33px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/music.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(196.32px, 162.92px, 296.32px) rotateX(0deg) rotateY(-135deg) rotateZ(1deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 50px; height: 33px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/music.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(196.32px, 162.92px, 296.32px) rotateX(0deg) rotateY(-135deg) rotateZ(118deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 50px; height: 33px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/music.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(196.32px, 162.92px, 296.32px) rotateX(0deg) rotateY(-135deg) rotateZ(31deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 50px; height: 33px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/music.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(196.32px, 162.92px, 296.32px) rotateX(0deg) rotateY(-135deg) rotateZ(44deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 50px; height: 33px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/music.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-209.53px, 222.68px, 362.92px) rotateX(0deg) rotateY(-210deg) rotateZ(0deg) scale3d(0, 0, 0); transform-style: preserve-3d; width: 111px; height: 54px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/car_TS.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(296.32px, 380.52px, 296.32px) rotateX(0deg) rotateY(-135deg) rotateZ(0deg) scale3d(0, 0, 0); transform-style: preserve-3d; width: 118px; height: 56px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/music_TS.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(360.01px, 108.46px, -196.74px) rotateX(0deg) rotateY(-62deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 50px; height: 77px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/touch_phone.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(177.1px, 209.53px, 379.8px) rotateX(0deg) rotateY(-155deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 300px; height: 178px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/text2.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(370.01px, 17.04px, -196.74px) rotateX(0deg) rotateY(-62deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 156px; height: 56px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/touch_TS.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(343.27px, -36.52px, -240.36px) rotateX(0deg) rotateY(-55deg) rotateZ(0deg) scale3d(0, 0, 0); transform-style: preserve-3d; width: 300px; height: 177px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/text1.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-419.06px, 36.52px, 0px) rotateX(0deg) rotateY(-270deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 100px; height: 77px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/video.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-177.1px, 0px, 379.8px) rotateX(0deg) rotateY(-205deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 300px; height: 187px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/text3.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-419.06px, -92.38px, 0px) rotateX(0deg) rotateY(-270deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 135px; height: 54px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/video_TS.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-419.06px, 87.13px, 0px) rotateX(0deg) rotateY(-270deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 100px; height: 78px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/video_TAR.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-393.79px, -72.77px, -143.33px) rotateX(0deg) rotateY(-290deg) rotateZ(0deg) scale3d(0, 0, 0); transform-style: preserve-3d; width: 300px; height: 172px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/text4.png);"></div>'					
		+'</div>';
    '389.96px, 181.06px, -153.43px'
    inner2 = 
    	'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(0.75, 0.75, 0.75); transform-style: preserve-3d; transform-origin: 50% 50% 0px; opacity: 1; display: block;">'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-321.02px, -402.83px, 269.37px) rotateX(0deg) rotateY(-230deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 192px; height: 170px; transform-origin: 50% 50% 0px; opacity: 0; display: block; background-image: url(images/30.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(296.32px, 269.37px, 296.32px) rotateX(0deg) rotateY(-135deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 556px; height: 422px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/42.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-413.9px, -269.37px, 65.56px) rotateX(0deg) rotateY(-261deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 250px; height: 234px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/45.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(296.32px, 269.37px, 296.32px) rotateX(0deg) rotateY(-135deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 556px; height: 422px; transform-origin: 50% 50% 0px; opacity: 0; display: block; background-image: url(images/41.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-209.53px, 269.37px, 362.92px) rotateX(0deg) rotateY(-210deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 468px; height: 473px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/43.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-413.9px, -269.37px, 65.56px) rotateX(0deg) rotateY(-261deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 250px; height: 234px; transform-origin: 50% 50% 0px; opacity: 0; display: block; background-image: url(images/46.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-321.02px, -402.83px, 269.37px) rotateX(0deg) rotateY(-230deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 192px; height: 164px; transform-origin: 50% 50% 0px; opacity: 0; display: block; background-image: url(images/47.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(143.33px, 0px, -393.79px) rotateX(0deg) rotateY(-20deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 338px; height: 271px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/51.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(143.33px, 0px, -393.79px) rotateX(0deg) rotateY(-20deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 338px; height: 271px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/50.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-209.53px, 269.37px, 362.92px) rotateX(0deg) rotateY(-210deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 468px; height: 473px; transform-origin: 50% 50% 0px; opacity: 0; display: block; background-image: url(images/44.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(385.75px, 296.32px, -163.74px) rotateX(0deg) rotateY(-67deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 400px; height: 487px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/52.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(343.27px, -359.21px, 240.36px) rotateX(0deg) rotateY(-125deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 300px; height: 295px; transform-origin: 50% 50% 0px; opacity: 0; display: block; background-image: url(images/48.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(385.75px, 296.32px, -163.74px) rotateX(0deg) rotateY(-67deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 400px; height: 487px; transform-origin: 50% 50% 0px; opacity: 0; display: block; background-image: url(images/53.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(343.27px, -359.21px, 240.36px) rotateX(0deg) rotateY(-125deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 300px; height: 295px; transform-origin: 50% 50% 0px; opacity: 0; display: block; background-image: url(images/49.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-400.75px, 280.41px, -122.52px) rotateX(0deg) rotateY(-287deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 400px; height: 469px; transform-origin: 50% 50% 0px; opacity: 0; display: block; background-image: url(images/55.png);"></div>'
			+'<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(-400.75px, 280.41px, -122.52px) rotateX(0deg) rotateY(-287deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: 400px; height: 469px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/54.png);"></div>'					
		+'</div>';
    
    inner3 = circle(20,134,1165);
    function circle(n,w,h){
        var divDeg = 360/n,
			R = ((Math.tan((180-divDeg)/2*Math.PI/180))*(w-1.27)/2).toFixed(2),
			str = '';
		for (var i = 0; i < n; i++) {
			str+='<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d('+(R*Math.cos((90-i*divDeg)*Math.PI/180)).toFixed(2)+'px, 0px, '+-(R*Math.sin((90-i*divDeg)*Math.PI/180)).toFixed(2)+'px) rotateX(0deg) rotateY('+(-i*divDeg)+'deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d; width: '+w+'px; height: '+h+'px; transform-origin: 50% 50% 0px; opacity: 1; display: block; background-image: url(images/'+(i+1)+'.png);"></div>'
		}
		return str;
    };
    inner = 
    	'<div id="a" style="position: absolute; transform-style: flat; top: 0px; left: 0px; width: 640px; height: '+h+'px; perspective: '+fov+'px; overflow: hidden; transform-origin: 50% 50% 0px; opacity: 1; display: block;">'
				+'<div id="dv" style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(320px, '+h/2+'px, '+fov+'px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d;">'
					+'<div class="wrap1" style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(0px, 0px, -100px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); transform-style: preserve-3d;">'
						+'<div class="wrap2" style="position: absolute; transform: translate3d(-50%, -50%, 0px) translate3d(0px, -550px, -2000px) rotateX(0deg) rotateY(60deg) rotateZ(0deg) scale3d(0, 0, 0); transform-style: preserve-3d; transform-origin: 50% 50% 0px; opacity: 1; display: block;">'
							+inner1
							+inner2
							+inner3
						+'</div>'
					+'</div>'
				+'</div>'
			+'</div>';
    
    
    $('body').append(inner);
    window.wrap1 = $('.wrap1')[0];
    window.wrap2 = $('.wrap2')[0];
   	//写一个函数,能改变内部的transform内部的数值:
    mTouch.css($('.wrap1')[0],{
    	'translateX':0,
    	'translateY':0,
    	'translateZ':-100,
    	'rotateX':0,
    	'rotateY':0,
    	'rotateZ' :0,
    	scaleX:100,
    	scaleY:100,
    	scaleZ:100
    });
    mTouch.css($('.wrap2')[0],{
    	'translateX':0,
    	'translateY':-550,
    	'translateZ':-2000,
    	'rotateX':0,
    	'rotateY':-360,
    	'rotateZ':0,
    	'scaleX':0,
    	'scaleY':0,
    	'scaleZ':'0'
    });
    function setTransform1(selector,arguments){
//      var attr = 
    }
});