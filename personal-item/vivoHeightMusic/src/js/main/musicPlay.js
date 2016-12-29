define(function (require,exports,module){
    function audioAutoPlay(id){
	    var audio = document.getElementById(id),  
	        play = function(){  
		        audio.play();  
		        document.removeEventListener("touchstart",play, false);  
		    };  
	    audio.play();  
	    if (audio.paused) {
		    document.addEventListener("WeixinJSBridgeReady", function () {//微信  
		       play();  
		    }, false);  
		    document.addEventListener('YixinJSBridgeReady', function() {//易信  
		        play();  
		    }, false);  
		    document.addEventListener("touchstart",function (){
		        play();
		    }, false);  
	    } 
	}  
	audioAutoPlay('music1');  
})