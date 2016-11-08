$(document).ready(function (){
    $('#content').fullpage(
    	{
    		//Navigation
//      menu: '#mymenu',
        lockAnchors: false,
        anchors:['firstPage', 'secondPage','3rdPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide','wo','shi'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design  设计
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#464853', '#000','red','green'],  //改变section的背景色,顺序依次向下
        paddingTop: '0',   //改变padding-top
        paddingBottom: '0', //改变padding-bottom
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
        	console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
        	switch(index){
        		case 1:
        			$('.bd').toggleClass('leave');
        			break;
        		case 2:
        			//清画布，停止定时器，停动画
        			ctx.clearRect(0,0,width,height);
        			clearInterval(timerSphereRotate);
        			break;
        		case 3:
        			break;
        		case 4:
        			break;
        	}
        
        
        },
        afterLoad: function(anchorLink, index){
        	//section 1
			if(index == 1){
				$('.bd').removeClass('leave');
			}
			if (index == 2 ) {
				//用延迟定时器做加载
				//当脸图片加载完后，才能获取图像的像素信息，
				setTimeout(function (){
			    	//定义图片出来的初始位置
				  	var initX = targetX;
			    	var initY = height;
			    	//定义当时点和目标点的差值
			    	var num  = 0;
			    	timerFace = setInterval(function (){
			    		//清空画布
			    		
			       	 	ctx.clearRect(0,0,width,height);
			       	 	initY -= 7;
			    	    num = Math.abs(initY - targetY) ;
			    	    //停止定时器
			    	    if (num < 5) {
			    			initY = targetY;
			    			clearInterval(timerFace);
			    			timerFace = null;
			    		}
			    	    ctx.drawImage(face,236,198,600,740,initX,initY,drawImagW,drawImagH);
				    	//当运动完后，再获取信息
				    	if (!timerFace) {
					    	//获取图像每个像素点信息
					        imgeData = ctx.getImageData(initX,initY,drawImagW,drawImagH).data;
					        
					        //随机把像素点提取出来，length属性就有了，并获取3d球的目标点位置信息
					        imageInfo();
				    	}
			    	},20);
				});
				
				
				
				
				
				
				
				
				
				
				
				
				
			}
			
        },
        afterRender: function(){
        	setTimeout(function (){
        	    $('.bd').addClass('delay');
        	},1800)
        },
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
    	}
    );
    
    //第一屏鼠标移到那个nav导航内容上，nav-underline就到那一个父级下面。
    var navUnderline = $('.nav-underline');
    $('.head-nav li').hover(
    	function (){
    		var _this = $(this);
		    $(this).children().css('color','#FFFFFF');
    		setTimeout(
				$.proxy(
					function (){
				        navUnderline.width($(this).width()).animate({
				        	'left':$(this).children('a').offset().left
			        	},200)
				    },
				    _this
				),
    			0
    		)
    	},
    	function (ev){
    		$(this).children().css('color','#b3b3b3');
    		if ((ev.pageX >= $('.head-nav').outerWidth(true))
    			|| (ev.pageY >= $('.head-nav').outerHeight(true))
    			|| ev.pageX <=$('.head-nav').offset().left
    			|| ev.pageY <=$('.head-nav').offset().top
    		) {
    			console.log(12)
    		    navUnderline.animate({
		        	'left':30
		        },200).width($('.nav-index').width());
    		}
    	}
    );
    
    //第二屏
    //初始化画布
    var canvas = $('#canvas').get(0);
    var ctx = canvas.getContext('2d');
    var container3d = $('.container-3d');
    var width = $(document).width();
	var height = $(document).height();
    var face = $('#face')[0];
    var rotation = 0;
    //图片的随机坐标点的颜色信息集合
    var imgeData;
    
    //数组用于保存从face头像部位生成的  像素的坐标及RGBA值
    var colorPointAll = [];
    //定义像素坐标点的间隔距离（是*4的结果）
    var juli ; 
    //定义face图片要达到的目标位置
    var targetX = width/2;
    var targetY = height/5;
    
    //定义画图像的大小
    var drawImagW = 200;
    var drawImagH = 247;
    
    //定义生成点的个数
    var allPointLen ;
    
    //定义 3D球实例
    var sphere = null;
    
    //定义球半径
    var Radius = 350;
    //定义画布大小 
    canvasWH();
    function canvasWH(){
        canvas.width = width;
        canvas.height = height;
    }
    
    //调整浏览器的时候动态的获取窗口大小；
    $(window).on('resize',function (){
        width = $(document).width();
        height = $(document).height();
        //动态调整画布大小
        canvasWH();
        //调整后大画的头像重新定位到目标点
        targetX = width/2;
        targetY = height/5;
        ctx.drawImage(face,236,198,600,740,targetX,targetY,drawImagW,drawImagH);
    })
    
   	//定义face动画的定时器
	var timerFace = null;
    
    
    //把像素点提取出来,放到数组colorPointAll内，并设定目标goX,goY;
    function imageInfo(){
    	//把点信息的容器初始化
        colorPointAll = [];
        for (var i = 0, len = imgeData.length;  i < len; i+= juli) {
        	//生成一个坐标点的color信息
        	var pointAndColor = {};
        	//随机距离，随机取点
//      	juli = 4*(Math.floor(Math.random()*20)+1);
			juli = 60;
//      	console.log(juli);
        	pointAndColor.r = imgeData[i];
        	pointAndColor.g = imgeData[i+1];
        	pointAndColor.b = imgeData[i+2];
        	pointAndColor.a = imgeData[i+3];
        	
        	pointAndColor.x = (i%(drawImagW*4))/4+targetX;
        	pointAndColor.y = i/(drawImagW*4)<=1? targetY:Math.floor(i/(drawImagW*4))+targetY;
        	
        	colorPointAll.push(pointAndColor);
        }
        allPointLen = colorPointAll.length;
        
        //把colorPointAll中加入3d球的2d坐标(目标点)，只调用这一次，目标的固定。
        
        //生成3d球的各个坐标点
        sphere = new Sphere3D(); 
        for (var i = 0; i < allPointLen; i++) {
	        var p = new Point3D();
        	//获取到坐标
        	p.x = sphere.point[i].x;
			p.y = sphere.point[i].y;
			p.z = sphere.point[i].z;
			
			//3D坐标并给目标点colorPointAll[i]
			colorPointAll[i].goX = p.x + width/2 ;
			colorPointAll[i].goY = p.y + height/2 ;
			colorPointAll[i].z = p.z ;
        }
    }
   	
 	//从起始点到3d圆球的位置，这期间不停的画各个小点；形成动画，过程中用一个状态监控这个动画是否完成，状态选择为：timerFace
   	
   	//画出一个点
    function drawOnePoint(i){
    	var fl = 1050 //模拟观察点，到屏幕的距离
        ctx.save();
        ctx.beginPath();
        
        //z值代表物体与屏幕之间有一段距离
        
        //获取缩放比例，
        var scale = fl / (fl - colorPointAll[i].z);  
        
        //离的进的，透明度越大；离的越远，想当于this.z接近于-r,透明度越小
        var alpha = (colorPointAll[i].z+Radius)/(2*Radius);
        
        //直接把球整个位移到canvas中心点--直接应用原始的3D坐标即可，z轴垂直屏幕，z只是决定，大小及透明度
        ctx.arc(colorPointAll[i].x  , colorPointAll[i].y  , 0.8*scale , 0 , 2*Math.PI , true);
        ctx.fillStyle = "rgba("+colorPointAll[i].r+","+colorPointAll[i].g+","+colorPointAll[i].b+","+(alpha+0.3)+")"
        ctx.fill();
        ctx.restore();
    }
    
    //把全部的点画出来
	var n = 0;
    function toSphere(){
    	//清除画布
		ctx.clearRect(0, 0, width, height); 
		//face延迟消失
    	if (n<2) {
    		ctx.drawImage(face,236,198,600,740,targetX,targetY,drawImagW,drawImagH);
    	}
		
    	if (n<=1) {
    		n++;
    	}
    	
    	ctx.globalCompositeOperation = "lighter";
        for (var i = 0; i < allPointLen; i++) {
        	
        	//画出一个点
        	drawOnePoint(i);
	    	
	    	//改变x,y坐标点
	    	changeCoord(i)
        }
    }
    
    //改变x,y 坐标点
    function changeCoord(i){
        var step = step? step : 5
        //x坐标判断,赋值
        if (Math.abs(colorPointAll[i].x - colorPointAll[i].goX)>5) {
        	colorPointAll[i].x += (-colorPointAll[i].x + colorPointAll[i].goX)/step ; 
        }else{
        	colorPointAll[i].x = colorPointAll[i].goX ;
        }
        //y坐标判断，赋值
        if (Math.abs(colorPointAll[i].y - colorPointAll[i].goY)>5) {
        	colorPointAll[i].y += (-colorPointAll[i].y + colorPointAll[i].goY)/step ; 
        }else{
        	colorPointAll[i].y = colorPointAll[i].goY ;
        }
    }
    
    //点击‘切换’按钮，动画（画点）开始
    var timerToSphere = null;
    var timerSphereRotate = null;
    $('span').click(function (){
    	//如果face出来后，点击就有效，可以执行下一步动画了
    	if (!timerFace) {
//			toSphere();   		
    		timerToSphere = setInterval(function (){
    			
    		    toSphere();
    		    //判断停止定时器
    		    if (Math.abs(colorPointAll[1].x - colorPointAll[1].goX)===0 && Math.abs(colorPointAll[1].y - colorPointAll[1].goY)==0) {
    		    	if (Math.abs(colorPointAll[3000].x - colorPointAll[3000].goX)===0 && Math.abs(colorPointAll[3000].y - colorPointAll[3000].goY)==0) {
	    		    	clearInterval(timerToSphere);
	    		    	timerToSphere = null;
	    		    	console.log('stop');
	    		    	
				    	if (!timerToSphere ) {
				    		timerSphereRotate = setInterval(function (){
//				    			console.log(23);
				    		    render();
				    		},200);
				    	}
    		    	}
    		    }
    		},20)
    	}
    });
    
    
    
    //创建3D球，得到3D球面坐标的集合
    function Sphere3D(radius) {
	 	//创建一个数组point
		this.point = new Array();
		
		//随机获取球面上的坐标
		for (var i = 0; i < allPointLen; i++) {
			
			//创建 一个点对象
			var p = new Point3D();
			
			var a = Math.random()*Math.PI; //球半径与z轴的夹角弧度
			var b = Math.random()*Math.PI*2;//球径投影与x的夹角弧度
			
			
		  	var x = Radius*Math.sin(a)*Math.cos(b);
		   	var y = Radius*Math.sin(a)*Math.sin(b);
		   	var z = Radius*Math.cos(a);
		   	
			p.x = x ;
			p.y = y ;
			p.z = z;
			this.point.push(p);
		}
	}
    
	function Point3D() {
		this.x = 0;
		this.y = 0;
		this.z = 0;
	}
	
	var angleX = Math.PI/500,
	   	angleY = Math.PI/500;
	// Utility method to rotate point by X in a 3D space
	function rotateX() {
		
		var cos = Math.cos(angleX);
       	var sin = Math.sin(angleX);
       	for(var i=0;i< allPointLen;i++){
           	var y1 = sphere.point[i].y * cos - sphere.point[i].z * sin;
           	var z1 = sphere.point[i].z * cos + sphere.point[i].y * sin;
           	sphere.point[i].y = y1;
           	sphere.point[i].z = z1;
        }
	}
	// Utility method to rotate point by Y in a 3D space
	function rotateY() {
		
		var cos = Math.cos(angleY);
		var sin = Math.sin(angleY);
		for(var i=0;i< allPointLen;i++){
		    var x1 = sphere.point[i].x * cos - sphere.point[i].z * sin;
		    var z1 = sphere.point[i].z * cos + sphere.point[i].x * sin;
		    sphere.point[i].x = x1;
		    sphere.point[i].z = z1;
   		}
	}
	
    //渲染3D球随鼠标旋转
    function render(ev){
    	
        //清空画布
        ctx.clearRect(0,0,width,height);
        
        //设置或返回如何将一个新的图像绘制到目标已有的图像上,lighter代表：显示源图像 + 目标图像。
		ctx.globalCompositeOperation = "lighter";
		
		//xyz轴旋转()
		rotateX();
		rotateY();
        //循环处理每个3d坐标点上的小圆点
        for (var i = 0; i < allPointLen; i++) {
        	drawOnePoint1(i);
        }
    }
    function drawOnePoint1(i){
//      		console.log(1);
    	var fl = 1050 //模拟观察点，到屏幕的距离
        ctx.save();
        ctx.beginPath();
        
        //z值代表物体与屏幕之间有一段距离
        
        //获取缩放比例，
        var scale = fl / (fl - sphere.point[i].z);  
        
        //离的进的，透明度越大；离的越远，想当于this.z接近于-r,透明度越小
        var alpha = (sphere.point[i].z+Radius)/(2*Radius);
        
        //直接把球整个位移到canvas中心点--直接应用原始的3D坐标即可，z轴垂直屏幕，z只是决定，大小及透明度
        ctx.arc(sphere.point[i].x + width/2 , sphere.point[i].y + height/2, 0.8*scale , 0 , 2*Math.PI , true);
        ctx.fillStyle = "rgba("+colorPointAll[i].r+","+colorPointAll[i].g+","+colorPointAll[i].b+","+(alpha+0.6)+")"
        ctx.fill();
        ctx.restore();
    }
    var prevX,prevY;
			document.addEventListener('mousemove',function (){
//			   	console.log(111);
			})
    
})