(function ($){
	//声明构造函数
    function Drag(element,options){
        /*
         * 参数说明
        
        * limit:是否可以拖出可视区范围
        * 	true 不可以到
        * 	false 可以（默认）
        * 
        * */
       //默认的阐述
        this.defaults = {
        	limit:false
        }
        //把用户自定义的对象保存到默认对象上
        $.extend(true,this.defaults,options);
        
        //判断是否可以拖出可视区范围
        if ($.isPlainObject(this.defaults.x) || $.isPlainObject(this.defaults)) {
        	this.defaults.limit = false;
        }
        //把传进来的元素，挂载到实例上
        this.element = element;
        
        //拖拽的目标判断,用户传进来就是用户的，没传就是默认的
        this.target = this.defaults.moveObj && $(this.defaults.moveObj) || this.element;
        
        this.disX = this.disY = 0;
        
        //记录阶段的状态
        this.dragStatus = 0 ;
        //把要实现的功能函数执行一下
        this.init();
        
    }
    //要实现的功能都挂到公共的原型上
    Drag.prototype = {
    	constructor:Drag,
    	init : function (){
    		console.log(this);
    	    this.element.on('mousedown',$.proxy(this.downFn,this));
    	},
    	downFn:function (ev){
    	    this.disX = ev.pageX - this.target.offset().left;
    	    this.disY = ev.pageY - this.target.offset().top;
    	    
    	    //记录拖拽的状态
    	    this.dragStatus = 1;
    	    
    	    this.dragChangeStatusFn();
    	    
    	    $(document).on('mousemove',$.proxy(this.moveFn,this));
    	    $(document).on('mouseup',$.proxy(this.upFn,this));
    	    
    	    ev.preventDefault();
    	},
    	
    	moveFn : function (ev){
    	    //记录状态
    	    this.dragStatus = 2;
    	    this.x = ev.pageX - this.disX;
    	    this.y = ev.pageY - this.disY;
    	    console.log(this.target,this.y,this.x,ev.pageX - this.disX);
    	    
    	    
			//根据传进来的阐述情况进行判断设置  	   
    	    this.limitFn();
    	    
    	    //设置坐标
    	    
    	    this.target.css({
    	    	left:this.x,
    	    	top:this.y
    	    });
    	    this.dragChangeStatusFn();
    	},
    	upFn : function (){
    	    //绑定事件取消
    	    $(document).off('mousemove',this.moveFn);
    	    $(document).off('mouseup',this.upFn);
    	    //记录状态
    	    this.dragStatus = 3;
    	    this.dragChangeStatusFn();
    	    
    	},
    	dragChangeStatusFn:function (){
    	    switch(this.dragStatus){
    	    	case 1:
    	    		this.element.trigger('dragStart');
    	    		break;
    	    	case 2:
    	    		this.element.trigger('dragMove');
    	    		break;
	    		case 3:
	    			this.element.trigger('dragOver');
	    		break;	
    	    }
    	},
    	
    	limitFn : function (){
    	    var minX = 0,
    	    	minY = 0,
    	    	maxX = 0,
    	    	maxY = 0;
    	   	//判断 limit 是true/false
    	   	if (this.defaults.limit) {
    	   		//可视区与的宽高
    	   		maxX = $(window).width() - this.element.outerWidth();
    	   		maxY = $(window).height() - this.element.outerHeight();
    	   	}
    	    
    	    //如果传进来的有对象
    	    if ($.isPlainObject(this.defaults.x)) {
    	    	minX = this.defaults.x.min;
    	    	maxX = this.defaults.x.max;
    	    }
			if ($.isPlainObject(this.defaults.y)) {
    	    	minY = this.defaults.y.min;
    	    	maxY = this.defaults.y.max;
    	    }
    	    
    	    //判断取值范围
    	    if (this.x <minX) {
    	    	this.x = minX;
    	    	console.log(1);
    	    }
    	    if (this.y <minY) {
    	    	this.y = minY;
    	    	console.log(2);
    	    }
    	    if (this.x >maxX) {
    	    	this.x = maxX;
    	    	console.log(3);
    	    }
    	    if (this.y >maxY) {
    	    	this.y = maxY;
    	    	console.log(4);
    	    }
    	    console.log(this.x,this.y);
    	}
    }
    
    $.fn.drag = function (options){
        new Drag(this,options);
    }
    
})(jQuery)
