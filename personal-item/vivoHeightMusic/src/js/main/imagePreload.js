define(function (require,exports,module){
	//预加载
    
    window.imageUrl = require('main/imagesData');
    
    var loadNum = 0;	
	function preload(){
		var len = 0 ;
		for (attr in imageUrl){
			len++;
		}
		for (attr in imageUrl) {
			var imag = new Image();
			imag.src = imageUrl[attr];
			imag.onload = function (){
			    loadNum++;
	    		if (loadNum === len) {
	    			//预加载结束，结构可以生成加载
	    			var htmlCon = require('main/htmlCon');
	    			
	    			//预加载结束，动画开始
					var indexMove = require('main/indexMove');
				}
			}
		}
	};
	preload();
});