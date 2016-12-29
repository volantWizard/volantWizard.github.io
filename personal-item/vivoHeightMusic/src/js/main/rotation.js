define(function (require,exports,module){
    var Orienter = require('module/orienter');
    
    var dirLastAlphaValue = 0 ,
	    dirLastBetaValue = 0,
	    dirFirstAlphaValue = !1,
	    dirFirstBetaValue = !1,
	    dirLastBetaValueBak = !1,
	    alpha = 60,
		beta = 0,
	    alphaSpeed = .2,
	    betaSpeed = .05,
	    dirSpeedRate = .01,
	    rotationX = 0 ,
	    rotationY = 60,
	    z = 100 ,
	    isTouch = !1,
	   	touches = !1,
    	touchLast = !1;
	$('body').append('<p></p>');
	        	    	$('p').css({
	        	    		'position':'absolute',
	        	    		'z-index':10000,
	        	    		'color':'red',
	        	    		'background':'#000',
	        	    		'transform':'translate3d(0,0,-500px)'
	        	    	});
        	
		        	       
	
	var o = new Orienter();
	function touchMove(){
	    //决定wrap1方向z，位移距离，选择角速度，并且规定大于多少才能出现位移，不能和拖动起冲突
	    window.addEventListener('touchstart',function (e){
	        isTouch = !0;
	    },false)
	    window.addEventListener('touchmove',function (e){
//	        console.dir(e);
	        false || (0 == touchLast ? touchLast = getTouchPosition(e) : (touches = getTouchPosition(e),
		    alpha -= alphaSpeed * (touches.x - touchLast.x),
		    beta += betaSpeed * (touches.y - touchLast.y),
		    touchLast = touches))
	    },false)
	    window.addEventListener('touchend',function (e){
//	        console.dir(e);
	        touches = touchLast = isTouch = !1;
	    },false)
	    function getTouchPosition (e){
	    	return {
	    		x:e.changedTouches[0].pageX,
	    		y:e.changedTouches[0].pageY
	    	}
	    }
	    touchOrient()
	}
	
	function touchOrient(){
		rotationX += (beta - rotationX) * betaSpeed;
		rotationY += (alpha - rotationY) * alphaSpeed;
		
	    //对wrap1的z轴的位移进行设置
		z += .3 * Math.abs(alpha - rotationY) - 3;
		z = z <= 100 ? 100 : z;
		z = z >= 200 ? 200 : z;
		
	    dirLastBetaValueBak = a.lat ; 
	    $('p').text(rotationX+';'+z); 
	    
	    mTouch.css(wrap1,{
	    	'translateX':0,
	    	'translateY':0,
	    	'translateZ':-z,
	    	'rotateX':0,
	    	'rotateY':0,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
	    });
	    
	    mTouch.css(wrap2,{
	    	'translateX':0,
	    	'translateY':0,
	    	'translateZ':0,
	    	'rotateX':rotationX,
	    	'rotateY':rotationY%360,
	    	'rotateZ':0,
	    	'scaleX':100,
	    	'scaleY':100,
	    	'scaleZ':100
	    });	
	    
	}    
    function rotateGrevity(){
	    
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
		   
			isTouch || (0 == dirFirstAlphaValue && 
	    		(
	    			dirFirstAlphaValue = 0 - a.lon,
	    			dirFirstBetaValue = 0 - a.lat,
	    			dirLastBetaValueBak = a.lat
	    		),
			    b = a.lon + dirFirstAlphaValue,
			    c = a.lat + dirFirstBetaValue,
			    d = b - dirLastAlphaValue,
			    
			    Math.abs(d) > 300 && (dirLastAlphaValue = b),
			    alpha -= b - dirLastAlphaValue,
			    beta += c - dirLastBetaValue,
			    dirLastAlphaValue = b,
			    dirLastBetaValue = c
			);
			
			
			
	//		ALPHA = alpha
	//		BETA = beta
	//      ALPHA += dirSpeed * dirSpeedRate
	//     	BETA += (a.lat - dirLastBetaValueBak) / 8
	       	
	       	beta = beta <= -20 ? -20 : beta,
    		beta = beta >= 20 ? 20 : beta,
	       	
	       	touchOrient()
	    };
	    o.init(); 
    }
    module.exports = {
    	rotateGrevity : rotateGrevity,
    	touchMove:touchMove
    } 
})