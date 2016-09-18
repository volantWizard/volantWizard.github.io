(function ($){
	/*
	 *1、 调用函数，首先 生成 一个scroll结构，然后塞到调用的对象内部
	 *2、 
	 * 
	 * 
	 * 
	 * 
	 * */
    function ScrollBar(element){
    	//有东西挂在实例上就写this;
      	this.element = element;
      	//生成结构
      	var html = '';
      	this.
      
      
      
      
    	//初始化调用,功能全部在这里实现
    	this.init();
    }
	ScrollBar.prototype = {
		constructor : ScrollBar,
		init : function (){
		    
		}
		
		
		
		
		
	}
			/*
				拖动scrollBar
			*/
			function mouseWheel(element,upFn,downFn){
				element.onmousewheel = wheelFn
				if( element.addEventListener ){
					element.addEventListener("DOMMouseScroll",wheelFn,false);
				}

				function wheelFn(ev){
					var direction = true;
					if(ev.wheelDelta){  //ie和chrome
						direction = ev.wheelDelta > 0 ? true : false;
					}else if(ev.detail){ //FF
						direction = ev.detail < 0 ? true : false;
					}

					if( direction ){  //向上
						typeof upFn === "function" && upFn();
					}else{  //向下
						typeof downFn === "function" && downFn();
					}

					ev.preventDefault();
				}

			}
			window.onload = function(){
				
				var scrollBar = document.getElementById("scrollBar");
				var scrollBox = document.getElementById("scrollBox");

				var main = document.getElementById("main");
				var content = document.getElementById("content");

				/*

					滚动条的高度 = 内容的可视区域的高度/内容的高度 * 滚条所在框的高度
				*/

				scrollBar.style.height = (main.clientHeight/main.scrollHeight) * scrollBox.clientHeight + "px";

				/*

					content要走的top值 = scrollBar走的top/maxJL * (main的内容高度-main的可视区的高度)
				*/

				//滚动条能滚动的最大距离
				var maxJL = scrollBox.clientHeight - scrollBar.offsetHeight;
				//content能走的最大的距离
				var mainMaxJL = main.scrollHeight - main.clientHeight;

				console.log( main.clientHeight , main.scrollHeight );

				if( main.clientHeight >= main.scrollHeight ){
					scrollBox.style.display = "none";
				}

				scrollBar.onmousedown = function (ev){
					var disY = ev.clientY - scrollBar.offsetTop;

					document.onmousemove = function (ev){

						//限制范围
						var t = ev.clientY - disY;

						if( t < 0  ) t = 0;

						if( t > maxJL ) t = maxJL;

						// t就是滚动条滚动的top值
						//走的距离会得到一个比例
						var scale = t / maxJL;

						scrollBar.style.top = t + "px";	

						content.style.top = -scale * mainMaxJL + 'px';
					};

					document.onmouseup = function (ev){
						document.onmouseup  =document.onmousemove = null;	
					};	
				};

				mouseWheel(main,function (){

					var t = scrollBar.offsetTop - 10;
					if( t < 0 ) t = 0;
					var scale = t / maxJL;

					scrollBar.style.top = t  + "px";
					content.style.top = -scale * mainMaxJL + 'px';
						
				},function (){
					var t = scrollBar.offsetTop + 10;
					if( t > maxJL ) t = maxJL;
					var scale = t / maxJL;

					scrollBar.style.top = t  + "px";
					content.style.top = -scale * mainMaxJL + 'px';	


				});

			};
	$.fn.scrollBar = function (options){
		console.log(this);
		//this指向外部调用scrollBar，的$对象
	    new ScrollBar(this,options);
	}
	
})(jQuery);
