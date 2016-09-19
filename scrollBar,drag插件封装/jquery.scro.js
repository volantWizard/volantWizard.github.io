(function ($){
	/*
	 *1、 调用函数，首先 生成 一个scroll结构，然后塞到调用的对象内部
	 *2、 
	 * 
	 * 
	 * 
	 * 
	 * */
    function ScrollBar(element,options){
    	//有东西挂在实例上就写this;
      	this.element = element;
      	options = options || {};
      	//默认css样式对象
      	this.defaultScrollBarCss = {
      		'width': '100%' ,
			'height': '50px',
			'background': 'red',
			'position': 'absolute',
			'left': 0,
			'top':0,
			'border-radius': '7px',
			'cursor':'pointer'
      	};
      	this.defaultScrollBoxCss = {
      		'height': '100%',
			'width': '30px',
			'position': 'absolute',
			'background': '',
			'right':0,
			'top':0,
			'opacity': 1,
			'z-index': 10
      	}
      	
      	//用户自定的东西合并到默认的obj内
      	$.extend(true,this.defaultScrollBarCss,options.scrollBarCss);
      	$.extend(true,this.defaultScrollBoxCss,options.scrollBoxCss);
      
      	//获取内页内容元素
      	this.scrollBar = $('<div id="scrollBar"></div>').css(
				this.defaultScrollBarCss
			);
		this.scrollBox = $('<div id=\"scrollBox\"></div>').css(
		    	this.defaultScrollBoxCss
		    );	
		//把页面的元素挂到实例上	
      	this.content = $(options.content);
      	console.log(this.content);
    	//初始化调用,功能全部在这里实现
    	console.log(this);
    	this.init();
    }
	ScrollBar.prototype = {
		constructor : ScrollBar,
		//
		init : function (){
			//生成一个scroll，
		    this.creatNewDiv();
		    //并放到对象里
		    this.appendToDiv();
		    console.log(this,this.content);
		    //设置scrollbar的高度
		    this.scrollBarH = this.scrollBox.height()*this.element.height()/this.content.height();
		    this.scrollBar.css('height',this.scrollBarH);
		    
		    //滚动条是否出现
		    if (this.element.height() >= this.content.height()) {
		    	this.scrollBar.css('display','none');
		    }
		    //限定滚动的y范围
		    this.maxY = this.scrollBox.height() - this.scrollBarH;
		    //设置托拽插件的参数
		    var obj = {
		    	limit:true,
		    	x:{
		    		min:0,
		    		max:0
		    	},
		    	y:{
		    		min:0,
		    		max:this.maxY
		    	}
		    }
		    //调用拖拽插件，拖动滚动条，根据比例计算
		    this.scrollBar.drag(obj);
		    
		    //求出页面能滚动的最大距离
		    this.maxContJl = this.content.height()-this.element.height();
		   
		   	//求出比例--计算滚动页面的
		   	this.scale = this.maxContJl/this.maxY;
		   	
		   	//当鼠标move时，内部的trgger(),直接调用下面的函数
		    this.scrollBar.on("dragMove",$.proxy(this.contentTop,this));
		    
		    
		},
		creatNewDiv : function (){
			this.scrollBar = $('<div id="scrollBar"></div>').css(
				this.defaultScrollBarCss
			);
		    this.scrollBox = $('<div id=\"scrollBox\"></div>').css(
		    	this.defaultScrollBoxCss
		    );
		    console.log(this.scrollBar);
		},
		appendToDiv : function (){
		    this.scrollBar.appendTo(this.scrollBox);
		    this.scrollBox.appendTo(this.element);
		},
		maxY : function (){
		    
		},
		contentTop : function (){
		    this.contentTop = -this.scale*this.scrollBar.position().top;
		   	this.content.css('top',this.contentTop);
		}
		
		
		
		
	}
			/*
				拖动scrollBar
			*/
//			function mouseWheel(element,upFn,downFn){
//				element.onmousewheel = wheelFn
//				if( element.addEventListener ){
//					element.addEventListener("DOMMouseScroll",wheelFn,false);
//				}
//
//				function wheelFn(ev){
//					var direction = true;
//					if(ev.wheelDelta){  //ie和chrome
//						direction = ev.wheelDelta > 0 ? true : false;
//					}else if(ev.detail){ //FF
//						direction = ev.detail < 0 ? true : false;
//					}
//
//					if( direction ){  //向上
//						typeof upFn === "function" && upFn();
//					}else{  //向下
//						typeof downFn === "function" && downFn();
//					}
//
//					ev.preventDefault();
//				}
//						
//			}
//			window.onload = function(){
//				
//				var scrollBar = document.getElementById("scrollBar");
//				var scrollBox = document.getElementById("scrollBox");
//
//				var main = document.getElementById("main");
//				var content = document.getElementById("content");
//
//				/*
//
//					滚动条的高度 = 内容的可视区域的高度/内容的高度 * 滚条所在框的高度
//				*/
//
//				scrollBar.style.height = (main.clientHeight/main.scrollHeight) * scrollBox.clientHeight + "px";
//
//				/*
//
//					content要走的top值 = scrollBar走的top/maxJL * (main的内容高度-main的可视区的高度)
//				*/
//
//				//滚动条能滚动的最大距离
//				var maxJL = scrollBox.clientHeight - scrollBar.offsetHeight;
//				//content能走的最大的距离
//				var mainMaxJL = main.scrollHeight - main.clientHeight;
//				
//				console.log( main.clientHeight , main.scrollHeight );
//				//隐藏的条件
//				if( main.clientHeight >= main.scrollHeight ){
//					scrollBox.style.display = "none";
//				}
//
//				scrollBar.onmousedown = function (ev){
//					var disY = ev.clientY - scrollBar.offsetTop;
//
//					document.onmousemove = function (ev){
//
//						//限制范围
//						var t = ev.clientY - disY;
//
//						if( t < 0  ) t = 0;
//
//						if( t > maxJL ) t = maxJL;
//
//						// t就是滚动条滚动的top值
//						//走的距离会得到一个比例
//						var scale = t / maxJL;
//
//						scrollBar.style.top = t + "px";	
//
//						content.style.top = -scale * mainMaxJL + 'px';
//					};
//
//					document.onmouseup = function (ev){
//						document.onmouseup  =document.onmousemove = null;	
//					};	
//				};
//
//				mouseWheel(main,function (){
//
//					var t = scrollBar.offsetTop - 10;
//					if( t < 0 ) t = 0;
//					var scale = t / maxJL;
//
//					scrollBar.style.top = t  + "px";
//					content.style.top = -scale * mainMaxJL + 'px';
//						
//				},function (){
//					var t = scrollBar.offsetTop + 10;
//					if( t > maxJL ) t = maxJL;
//					var scale = t / maxJL;
//
//					scrollBar.style.top = t  + "px";
//					content.style.top = -scale * mainMaxJL + 'px';	
//
//
//				});
//
//			};
	$.fn.scrollBar = function (options){
		console.log(this);
		//this指向外部调用scrollBar，的$对象
	    new ScrollBar(this,options);
	}
	
})(jQuery);
