$(document).ready(function (){
//  
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
//      console.log(width,height);
        //调整后大画的头像重新定位到目标点
        targetX = width/2;
        targetY = height/5;
        ctx.drawImage(face,236,198,600,740,targetX,targetY,drawImagW,drawImagH);
    })
    
   	//定义face动画的定时器
	var timerFace = null;
    //脸图片加载完后，才能获取图像的像素信息，
    face.addEventListener('load',function (){
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
//  	    console.log(initY ==height/5,targetX ==width/4 );
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
    
    //把像素点提取出来,放到数组colorPointAll内，并设定目标goX,goY;
    function imageInfo(){
    	//把点信息的容器初始化
        colorPointAll = [];
        for (var i = 0, len = imgeData.length;  i < len; i+= juli) {
        	//生成一个坐标点的color信息
        	var pointAndColor = {};
        	//随机距离，随机取点
        	juli = 4*(Math.floor(Math.random()*10)+1);
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
        
        //把colorPointAll中加入3d球的2d坐标(目标点)
        sphere = new Sphere3D(); //生成3d坐标点
        for (var i = 0; i < allPointLen; i++) {
	        var p = new Point3D();
        	//获取到坐标
        	p.x = sphere.point[i].x;
			p.y = sphere.point[i].y;
			p.z = sphere.point[i].z;
//			console.log(p.x,p.y,p.z);
			//转化3D坐标并给目标点colorPointAll[i]
			colorPointAll[i].goX = Math.floor(projection(p.x, p.z,width/2,100, distance)) ;
			colorPointAll[i].goY = Math.floor(projection(p.y, p.z,height/2,100, distance)) ;
			
//			console.log(colorPointAll[i].goX,colorPointAll[i].goY);
        }
    }
   
 //从起始点到3d圆球的位置，这期间不停的画各个小点；形成动画，过程中用一个状态监控这个动画是否完成，状态选择为：timerFace
   	
   	
   	//画出一个点
    function drawOnePoint(i){
        if((colorPointAll[i].x >= 0) && (colorPointAll[i].x < width)) {
			if((colorPointAll[i].y >= 0) && (colorPointAll[i].y < height)) {
				//如果是背面就画灰色的球
				if(colorPointAll[i].z < 0) {
		        	ctx.beginPath();
					ctx.fillStyle = "rgba("+colorPointAll[i].r+","+colorPointAll[i].g+","+colorPointAll[i].b+","+255+")";
    				ctx.arc(colorPointAll[i].x,colorPointAll[i].y,Math.random()*0.5,0,Math.PI*2);
    				ctx.closePath();
    				ctx.fill();
				} else { 
					ctx.beginPath();
					ctx.fillStyle = "rgba("+colorPointAll[i].r+","+colorPointAll[i].g+","+colorPointAll[i].b+",0.4)";
    				ctx.arc(colorPointAll[i].x,colorPointAll[i].y,Math.random()*1,0,Math.PI*2);
    				ctx.closePath();
    				ctx.fill();
				}
			}
		} 
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
				    			console.log(23);
				    		    render();
				    		},200);
				    	}
    		    	}
    		    }
    		},20)
    	}
    });
    
    
    
	//定义一个各点的间距
	var distance = 1200;
	
	
    //创建3D球，得到3D球面坐标的集合
    function Sphere3D(radius) {
	 	//创建一个数组point
		this.point = new Array();
		//默认半径radius为20，如果传进来就是传进来的值
		this.radius = (typeof(radius) == "undefined") ? 30.0 : radius;
		//传进来的值不是number类型的也是20
		this.radius = (typeof(radius) != "number") ? 30.0 : radius;
		
		
		//球面点数
		this.numberOfVertexes = 0;
		//随机获取球面上的坐标
		for (var i = 0; i < allPointLen; i++) {
			
			//创建 一个点对象
			var p = new Point3D();
			
			var a = Math.random()*Math.PI*2; //球半径与z轴的夹角弧度
			var b = Math.random()*Math.PI ;//球径投影与x的夹角弧度
			p.x = Math.floor(Math.sin(a)*Math.cos(b)* this.radius);
			p.y = Math.floor(Math.sin(a)*Math.sin(b) * this.radius);
			p.z = Math.floor(Math.cos(a) * this.radius);
			this.point.push(p);
		}
	}
    
	function Point3D() {
		this.x = 0;
		this.y = 0;
		this.z = 0;
	}
	//把三D点投射到二维xoz平面
	function projection(xy, z, xyOffset, zOffset, distance) {
		return ((distance * xy) / (z - zOffset)) + xyOffset;
	}
	function projection1(x, y, z, distance) {
		return (distance * z) / (distance - x) ;
	}
	function projection2(x, y, z, distance) {
		return (distance * y) / (distance - x) ;
	}
	
	// Utility method to rotate point by X in a 3D space
	function rotateX(point, radians) {
		var y = point.y;
		point.y = (y * Math.cos(radians)) + (point.z * Math.sin(radians) * -1.0);
		point.z = (y * Math.sin(radians)) + (point.z * Math.cos(radians));
	}
	 // Utility method to rotate point by Y in a 3D space
	function rotateY(point, radians) {
		var x = point.x;
		point.x = (x * Math.cos(radians)) + (point.z * Math.sin(radians) * -1.0);
		point.z = (x * Math.sin(radians)) + (point.z * Math.cos(radians));
	}
	 // Utility method to rotate point by Z in a 3D space
	function rotateZ(point, radians) {
		var x = point.x;
		point.x = (x * Math.cos(radians)) + (point.y * Math.sin(radians) * -1.0);
		point.y = (x * Math.sin(radians)) + (point.y * Math.cos(radians));
	}
	
	
	
    //通过2d转换渲染3D球
    function render(ev){
    	
//  	var body1 = document.body;
//		var w = parseInt(getComputedStyle(body1).width)/2;
//		var h = parseInt(getComputedStyle(body1).height)/2;
//	    var num = ev.clientX-prevX;
//	    
//	    var direction ;
//	    if (num < 0) {
//	    	direction = -1;
//	    }else {
//	    	direction = 1;
//	    }
    	
        var x, y;
//      var sphere = new Sphere3D();
        //清空画布
        ctx.clearRect(0,0,width,height);
        
        //设置或返回如何将一个新的图像绘制到目标已有的图像上,lighter代表：显示源图像 + 目标图像。
		ctx.globalCompositeOperation = "lighter";
        //循环处理每个坐标点3d坐标转2d坐标
        for (var i = 0; i < allPointLen; i++) {
	        var p = new Point3D();
        	//获取到坐标
        	p.x = sphere.point[i].x;
			p.y = sphere.point[i].y;
			p.z = sphere.point[i].z;
			
			//xyz轴旋转()
			rotateX(p, rotation);
			rotateY(p, rotation);
			rotateZ(p, rotation);
			
			
			//把坐标在重新定位，如果是背面的就投影，正面的就不投影
			x = Math.floor(projection(p.x, p.z,width/2,100, distance)) ;
			y = Math.floor(projection(p.y, p.z,height/2,100, distance)) ;
			
        	var obj2d = {
        		x1:x,
        		y1:y
        	}
//      	arr2d.push(obj2d);
        	if((x >= 0) && (x < width)) {
				if((y >= 0) && (y < height)) {
					//如果是背面就画灰色的球
					if(p.z < 0) {
			        	ctx.beginPath();
						ctx.fillStyle = "rgba("+colorPointAll[i].r+","+colorPointAll[i].g+","+colorPointAll[i].b+","+255+")";
        				ctx.arc(x,y,Math.random()*0.5,0,Math.PI*2);
        				ctx.closePath();
        				ctx.fill();
					} else { 
//						//正面的就画带过度环的球
						ctx.beginPath();
						ctx.fillStyle = "rgba("+colorPointAll[i].r+","+colorPointAll[i].g+","+colorPointAll[i].b+",0.4)";
        				ctx.arc(x,y,Math.random(),0,Math.PI*2);
        				ctx.closePath();
        				ctx.fill();
					}
				}
			} 
//			rotation += Math.PI/direction*(Math.abs(ev.clientX-w));
//			prevX = ev.clientX;
//			prevY = ev.clientY;
			rotation += Math.PI/90.0; //决定运动旋转的弧度
        }
    }
    
//  $('i').click(function (){
//      setInterval(render,1000/1);
//  });
    
    var prevX,prevY;
			document.addEventListener('mousemove',function (){
			   	console.log(111);
			})
});


