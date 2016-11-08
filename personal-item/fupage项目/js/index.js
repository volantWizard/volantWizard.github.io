;jQuery.noConflict();
(function ($){
	$(document).ready(function (){
	    $('#content').fullpage(
	    	{
	    		//Navigation
	        menu: '#mymenu',
	        lockAnchors: false,
	        anchors:['firstPage', 'secondPage','3rdPage'],
	        navigation: true,
	        navigationPosition: 'right',
	        navigationTooltips: ['Svg', 'Baidu','Galaxia','bound'],
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
	        sectionsColor : ['#464853', '#464853','#000','green'],  //改变section的背景色,顺序依次向下
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
	        			$('.card').removeClass('cardmove')
	        		case 2:
	        			$('.bd').toggleClass('leave');
	        			break;
	        		case 3:
	        			//清画布，停止定时器，停动画
	        			ctx.clearRect(0,0,width,height);
	        			clearInterval(timerSphereRotate);
	        			clearInterval(timerStarShow);
	        			timerSphereRotate = null;
	        			timerStarShow = null;
						//当离开此页的时候，把star的初始位置再改回来，不然下次从新来过的时候，就直接再终点了！
						arrStar.forEach(function (item){
						    item.x =  width/5;
		    				item.y = height/3;
						})
						//去掉所有star的is-visible 类
						$('.world-label').removeClass('is-visible');
						//所有star的隐藏 类
						$('.world-label').css('display','none');
	        			break;
	        		case 3:
	        			break;
	        		case 4:
	        			break;
	        	}
	        },
	        afterLoad: function(anchorLink, index){
	        	//section 1
	        	if (index == 1) {
	        		$('.card').addClass('cardmove')
	        	}
				if(index == 2){
					$('.bd').removeClass('leave');
				}
				if (index == 3 ) {
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
				       	 	initY -= 20;
				    	    num = Math.abs(initY - targetY) ;
				    	    //停止定时器
				    	    if (num < 10) { //当距离在5范围内时，就直接设置到终点
				    			initY = targetY;
				    			clearInterval(timerFace);
				    			timerFace = null;
				    		}
				    	    ctx.drawImage(face,236,198,600,740,initX,initY,drawImagW,drawImagH);
					    	//判断当face到达目的地后，timerFace = null ,当运动完后，再获取信息
					    	if (!timerFace) {
						    	//获取图像每个像素点信息
						        imgeData = ctx.getImageData(initX,initY,drawImagW,drawImagH).data;
						        
						        //随机把像素点提取出来，length属性就有了，并获取3d球的目标点位置信息
						        imageInfo();
						        
//						        //人像出来后，动画点击按钮可以出来了
//						        $('span').css('display','block').animate({
//						        	'opacity':1
//						        })
						        //如果face运动完后，就可以自动爆炸为3d球
						        setTimeout(autoToRotateSphere,0);
					    	}
				    	},16);
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
	    var face = $('#face')[0],
	    	world = $('.world')[0];
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
	        	juli = 4*(Math.floor(Math.random()*30)+1);
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
	    
	    //画9个星球中的一个
	    function drawOneStar(i){
	    	ctx.globalCompositeOperation="lighter";
	        
	        ctx.drawImage(world,arrStar[i].x,arrStar[i].y,50,50);
	//      var imgData = ctx.getImageData(500,400,100,100);
	//      
	//      for (var i=0;i<imgData.data.length;i+=4){
	//      	if (imgData.data[i]==0 &&
	//      		imgData.data[i+1]==0&&
	//      		imgData.data[i+2]==0)
	//      	{
	//      		imgData.data[i+3] = 0;
	//      	}
	//	  	}
	//		ctx.putImageData(imgData,500,400);
	//      ctx.globalCompositeOperation="lighter";
	//		var grd=ctx.createRadialGradient(550,450,10,550,450,20,550,450,50);
	//		grd.addColorStop(0,"white");
	//		grd.addColorStop(0.3,"yellow");
	//		grd.addColorStop(0.6,"black");
	//		ctx.fillStyle=grd;
	//		ctx.arc(550,450,40,0,2*Math.PI , true);
	//		ctx.fill();
	    }
	    //指定star初始位置及目标位置
	    var arrStar = [
	    	{
	    		x : width/5,
		    	y : height/3,
		    	z : -Radius,
		    	goX : width/2 - Radius*0.7,
				goY : height/2 - Radius*0.4,
				goZ : Radius*0.2
	    	},
	    	{
	    		x : width/5,
		    	y : height/3,
		    	z : -Radius,
		    	goX : width/2 - Radius*0.3,
				goY : height/2 - Radius*0.8,
				goZ : Radius*0.5
	    	},
	    	{
	    		x : width/5,
		    	y : height/3,
		    	z : -Radius,
		    	goX : width/2 - Radius*0.2,
				goY : height/2 - Radius*0.2,
				goZ : Radius*0.3
	    	},
	    	{
	    		x : width/5,
		    	y : height/3,
		    	z : -Radius,
		    	goX : width/2 + Radius*0.1,
				goY : height/2 + Radius*0.2,
				goZ : Radius*0.7
	    	},
	    	{
	    		x : width/5,
		    	y : height/3,
		    	z : -Radius,
		    	goX : width/2 + Radius*0.3,
				goY : height/2 - Radius*0.7,
				goZ : Radius*0.6
	    	},
	    	{
	    		x : width/5,
		    	y : height/3,
		    	z : -Radius,
		    	goX : width/2 + Radius*0.6,
				goY : height/2 - Radius*0.2,
				goZ : Radius*0.5
	    	},
	    	{
	    		x : width/5,
		    	y : height/3,
		    	z : -Radius,
		    	goX : width/2 + Radius*0.47,
				goY : height/2 + Radius*0.3,
				goZ : Radius*0.3
	    	},
	    	{
	    		x : width/5,
		    	y : height/3,
		    	z : -Radius,
		    	goX : width/2 - Radius*0.57,
				goY : height/2 + Radius*0.55,
				goZ : Radius*0.5
	    	}
	    ];
	    
	    //js实现8个行星的div定位
	    $('.world-label').each(function (index){
			$(this).css({
				'left': arrStar[index].goX - 25,
				'top' : arrStar[index].goY -25
			});
	    })
	    //向坐标内坐标添加速度
	    starTargetPosition(13);
	    function starTargetPosition(t){
	        for (var i = 0; i < arrStar.length; i++) {
				arrStar[i].Vx = (arrStar[i].goX - arrStar[i].x)/t;
				arrStar[i].Vy = (arrStar[i].goY - arrStar[i].y)/t;
				arrStar[i].Vz = (arrStar[i].goZ - arrStar[i].z)/t;
	        }
	    }
	    //画9个星球飞到指定目标点的过程
	    function toStar(){
	        for (var i = 0; i < arrStar.length; i++) {
	        	
	        	//画出一个点
	        	drawOneStar(i);
		    	
		    	//改变x,y,z坐标点
		    	changedStarCoord(i)
	        }
	        
	    }
	    function changedStarCoord(i){
	//      var step = step? step : 5
	        //x坐标判断,赋值
	        if (Math.abs(arrStar[i].x - arrStar[i].goX)>5) {
	        	arrStar[i].x += arrStar[i].Vx ; 
	        }else{
	        	arrStar[i].x = arrStar[i].goX ;
	        }
	        //y坐标判断，赋值
	        if (Math.abs(arrStar[i].y - arrStar[i].goY)>5) {
	        	arrStar[i].y += arrStar[i].Vy ; 
	        }else{
	        	arrStar[i].y = arrStar[i].goY ;
	        }
	        //z坐标判断
	        if (Math.abs(arrStar[i].z - arrStar[i].goZ)>5) {
	        	arrStar[i].z += arrStar[i].Vz ; 
	        }else{
	        	arrStar[i].z = arrStar[i].goZ ;
	        }
	    }
	    
	    
	    //把全部的点画出来
		var n = 0;
	    function toSphere(){
	//  	//清除画布
	//		ctx.clearRect(0, 0, width, height); 
			//face延迟消失
	    	if (n<3) {
	    		ctx.drawImage(face,236,198,600,740,targetX,targetY,drawImagW,drawImagH);
	    	}
	    	if (n<=2) {
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
	    //添加类.is-visible的定时器
	    var timerStarShow = null ;
	    
	    $('span').click(function (){
	    	//点过后就消失
	    	$(this).css({
	    		'display':'none',
	    		'opacity':0
	    	})
	    	//如果球还在转，就不允许点
	    	if (timerToSphere || timerStarShow) {
	    		return;
	    	}
	    	//如果face出来后，点击就有效，可以执行下一步动画了
	    	if (!timerFace) {
	    		timerToSphere = setInterval(function (){
	    			//清除画布
					ctx.clearRect(0, 0, width, height); 
	    		    toSphere();
	    		    //画8个星球球
	    		    toStar();
	    		    //判断形成3d星球，停止timerToSphere定时器
	    		    if (Math.abs(colorPointAll[1].x - colorPointAll[1].goX)===0 && Math.abs(colorPointAll[1].y - colorPointAll[1].goY)==0) {
	    		    	if (Math.abs(colorPointAll[allPointLen-1].x - colorPointAll[allPointLen-1].goX)===0 && Math.abs(colorPointAll[allPointLen-1].y - colorPointAll[allPointLen-1].goY)==0) {
		    		    	clearInterval(timerToSphere);
		    		    	timerToSphere = null;
		    		    	
		    		    	//当到达3d星球目标后，上一个定时器停止时，执行下面两个定时器
					    	if (!timerToSphere ) {
					    		timerSphereRotate = setInterval(function (){
									ctx.clearRect(0, 0, width, height); 
					    		    render();
					    		},200);
					    		
					    		//把star变为display:block;
					    		$('.world-label').css('display','block');
					    		//开一个新的定时器，用来每隔2s给8个行星显示背景
					    		timerStarShow = setInterval(function (){
					    		    //全部清空class = is-visible
					    		    $('.world-label').removeClass('is-visible');
					    			setTimeout(function (){
						    		    //随机给8个world-label中的一个添加 .is-visible
						    		    var index1 = Math.floor(Math.random()*8);
						    		    $('.world-label').eq(index1).addClass('is-visible');
					    			},500);
					    		},2500);
					    	}
	    		    	}
	    		    }
	    		},20)
	    	}
	    });
	    
	    function autoToRotateSphere(){
	        
//	    	//点过后就消失
//	    	$(this).css({
//	    		'display':'none',
//	    		'opacity':0
//	    	})
//	    	//如果球还在转，就不允许点
//	    	if (timerToSphere || timerStarShow) {
//	    		return;
//	    	}
	    	//如果face出来后，点击就有效，可以执行下一步动画了
	    	if (!timerFace) {
	    		timerToSphere = setInterval(function (){
	    			//清除画布
					ctx.clearRect(0, 0, width, height); 
	    		    toSphere();
	    		    //画8个星球球
	    		    toStar();
	    		    //判断形成3d星球，停止timerToSphere定时器
	    		    if (Math.abs(colorPointAll[1].x - colorPointAll[1].goX)===0 && Math.abs(colorPointAll[1].y - colorPointAll[1].goY)==0) {
	    		    	if (Math.abs(colorPointAll[allPointLen-1].x - colorPointAll[allPointLen-1].goX)===0 && Math.abs(colorPointAll[allPointLen-1].y - colorPointAll[allPointLen-1].goY)==0) {
		    		    	clearInterval(timerToSphere);
		    		    	timerToSphere = null;
		    		    	
		    		    	//当到达3d星球目标后，上一个定时器停止时，执行下面两个定时器
					    	if (!timerToSphere ) {
					    		timerSphereRotate = setInterval(function (){
									ctx.clearRect(0, 0, width, height); 
					    		    render();
					    		},200);
					    		
					    		//把star变为display:block;
					    		$('.world-label').css('display','block');
					    		//开一个新的定时器，用来每隔2s给8个行星显示背景
					    		timerStarShow = setInterval(function (){
					    		    //全部清空class = is-visible
					    		    $('.world-label').removeClass('is-visible');
					    			setTimeout(function (){
						    		    //随机给8个world-label中的一个添加 .is-visible
						    		    var index1 = Math.floor(Math.random()*8);
						    		    $('.world-label').eq(index1).addClass('is-visible');
					    			},300);
					    		},1500);
					    	}
	    		    	}
	    		    }
	    		},20)
	    	}
	    }
	    
	    
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
	        for (var i = 0; i < arrStar.length; i++) {
	        	drawOneStar(i);
	        }
	    }
	    function drawOnePoint1(i){
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
	});
})(jQuery);
