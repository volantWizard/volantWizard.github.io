function dialog(options){
    options = options || {};
    
    var defaults = {
    	titile:options.title || '这是一个自定义的弹框',
    	content:options.content || '这里您可以定制内容，包括结构',
    	//定制内容的函数功能
    	okFn: options.okFn || function (){},
    	element:options.element
    }
    
    //模仿面向对象写法
    var dialogObj = {
    	
    	//声明一个结构，
    	html : function (){
    	    var newDiv = document.createElement('div');
    	    var html = '<h3>\
				    		<p class="title">'+defaults.titile+'</p>\
				    		<a href="javascript:;" class="close">\
				    			<span>X</span>\
				    		</a>\
				    	</h3>\
				    	<div class="content">\
				    		asd\
				    	</div>\
				    	<div class="pop-btns">\
				    		<span class="error"></span>\
				    		<a href="javascript:;" class="confirm">\
				    			确定\
				    		</a>\
				    		<a href="javascript:;" class="cancel">\
				    			取消\
				    		</a>\
				    	</div>';
			newDiv.innerHTML = html;
			newDiv.className = 'full-pop';
			
			return newDiv;
    	},
    	
    	
    	fullDiv:null,
    	//设置初始化函数内部要执行的代码
    	init : function (){
    	    //把生成的弹框放到body里
    	    var fullDiv = dialogObj.html();
    	    document.body.appendChild(fullDiv);
    	    dialogObj.fullDiv = fullDiv;
    	    
    	    //把自定义的内容放到content
    	    var content = fullDiv.getElementsByClassName('content')[0];
    	    content.innerHTML = defaults.content;
    	    
    	    //生成的fulldiv 定位
    	    dialogObj.setPosition();
    	    
    	    //添加事件处理
    	    dialogObj.addEvent();
    	    
    	    //拖拽fullDiv
    	    var h3 = fullDiv.getElementsByTagName('h3')[0];
    	    dialogObj.drag({
    	    	dragObj:h3,
    	    	moveObj:fullDiv
    	    });
    	},
    	
    	
    	//设置位置
    	view : function (){
    	    return {
    	    	w:document.documentElement.clientWidth,
    	    	h:document.documentElement.clientHeight
    	    }
    	},
    	setPosition : function (){
    	    dialogObj.fullDiv.style.left = (dialogObj.view().w/2 - dialogObj.fullDiv.offsetWidth/2) + 'px';
    	    dialogObj.fullDiv.style.top	= (dialogObj.view().h/2 - dialogObj.fullDiv.offsetHeight/2) + 'px';
    	},
    	
    	//添加按钮事件处理程序
    	addEvent : function (){
    	    //当调整浏览器时，fullDiv 要重新调整位置
    	    window.addEventListener('resize',dialogObj.setPosition,false);
    	    
    	    //close按钮
    	    var closeBtn = dialogObj.fullDiv.getElementsByClassName('close')[0];
    	    console.log(closeBtn,dialogObj.fullDiv);
    	    closeBtn.onclick = function (){
    	        document.body.removeChild(dialogObj.fullDiv);
    	        defaults.element.delect = false;
    	        defaults.element.isMove = false;
    	    }
    	    
    	    //确定按钮(执行定制功能或默认功能)
    	    var confirm = dialogObj.fullDiv.getElementsByClassName('confirm')[0];
    	    confirm.onclick = function (){
    	        //执行定制功能或默认功能
    	        defaults.okFn();
    	        
    	        defaults.element.delect = false;
    	        defaults.element.isMove = false;
    	        console.log(defaults.element.delect);
    	        //删除弹出框
    	        document.body.removeChild(dialogObj.fullDiv);
    	    }
    	    
    	    //cancel按钮
    	    var cancel = dialogObj.fullDiv.getElementsByClassName('cancel')[0];
    	    cancel.onclick = function (){
    	        document.body.removeChild(dialogObj.fullDiv);
    	        defaults.element.delect = false;
    	        defaults.element.isMove = false;
    	    }
    	},
    	
    	//拖拽处理
    	drag:function (options){
    		//默认拖拽的元素，及移动的元素
    	    options = options || {};
    	    var defaults = {
    	    	dragObj : options.dragObj,
    	    	moveObj : options.moveObj
    	    }
    	    defaults.dragObj.onmousedown = function (ev){
    	        var disX = ev.clientX - defaults.moveObj.offsetLeft;
    	        var disY = ev.clientY - defaults.moveObj.offsetTop;
    	    	var t = 0,
    	    		l = 0;
    	    	document.onmousemove = function (ev){
					l = ev.clientX - disX ;
					t = ev.clientY - disY ;
					if (l<0) {
						l =0 
					} else if(l>document.documentElement.clientWidth - defaults.moveObj.offsetWidth){
						l = document.documentElement.clientWidth - defaults.moveObj.offsetWidth;
					}
					if (t<0) {
						t =0 
					} else if(t>document.documentElement.clientHeight - defaults.moveObj.offsetHeight){
						t = document.documentElement.clientHeight - defaults.moveObj.offsetHeight;
					}
    	    	    defaults.moveObj.style.left = l+'px';
    	    	    defaults.moveObj.style.top = t+ 'px';
    	    		
    	    	}
    	    	
    	    	document.onmouseup = function (){
    	    	    document.onmousemove = document.onmouseup = null;
    	    	}
    	    }
    	    
    	}
    	
    	
    	
    }
    //初始化让全部函数运行
    dialogObj.init();
}