$(document).ready(function (){
	//协议能否选中
	$('.dealSelect').on('click',function(){
		$(this).toggleClass('active');
		if (!$(this).hasClass('active')) {
			$('.login-in').css('background-color','#C2C3CA');
		}else {
			$('.login-in').css('background-color','#86ce2f');
		}
	});
	
	//input输入框获取\失去焦点时，边框变蓝色
	$('.mark').on(
		{focus:function (){
				    $(this).css('border-color','#3b97f5');
			},
		 'blur':function (){
				    $(this).css('border-color','#C2C3CA');
			}
	});
	
	//点击登陆
	$('.login-in').click(function (){
	    var loginName = $('.login-name').val(),
	    	loginParsword = $('.login-parsword').val();
	    //先判断是否同意协议
	//  console.log(JSON.parse(localStorage.getItem(loginName)).password)
	    if (!$('.dealSelect').hasClass('active')) {
	    	$('.alert-tip').html('需要同意微云服务协议才能登录').animate(
	    		{top:0},'slow',function (){
	    		    setTimeout(function (){
	    		        $('.alert-tip').animate({top:-50},'slow');
	    		    },1000);
	    		}
	    	);
	    	return;
	    }
	    if (!localStorage.getItem(loginName)||loginName ==='') {
	    	$('.alert-tip').html('用户不存在,请注册或重新输入').animate(
	    		{top:0},'slow',function (){
	    		    setTimeout(function (){
	    		        $('.alert-tip').animate({top:-50},'slow',function (){
	    		            $('.enroll').css('color','#05B600');
	    		        });
	    		    },1000);
	    		}
	    	);
	    	return;
	    }
	    if (JSON.parse(localStorage.getItem(loginName)).password !== loginParsword) {
	    	$('.alert-tip').html('密码错误,请重新输入').animate(
	    		{top:0},'slow',function (){
	    		    setTimeout(function (){
	    		        $('.alert-tip').animate({top:-50},'slow');
	    		    },1000);
	    		}
	    	);
	    	return;
	    }
	    if (localStorage.getItem(loginName)&&
	    	JSON.parse(localStorage.getItem(loginName)).password === loginParsword) {
	    		localStorage.setItem('currentLogin',loginName);
	    		$('.alert-tip').html('匹配成功，准备登陆').animate(
		    		{top:0},'slow',function (){
		    		    setTimeout(function (){
		    		        $('.alert-tip').animate({top:-50},'slow',function (){
		    		            window.location.href = 'main.html';
		    		        });
		    		    },1000);
		    		}
		    	);
	    }
	});
	
	//点击注册
	$('.enroll').on('click',function(){
//		$('#login').addClass('ry-90');
//		$('#register').addClass('ry-0');
		$('#section').addClass('ry-90');
		//获取焦点
		$('#nick').focus();
	});
		
	//点击登陆按钮，登陆框出现
	$('.user-login').click(function (){
	    $('#section').css('top','50%');
	    //清空内容
	    $('.login-name').val('');
	    $('.login-parsword').val('');
	});
	
	
	
	//登陆页的轮播图片
	//封装自动轮播
	
	function carousel(){
	    //获取视口宽度
	    var n = 0,
	    	old = 0;
	    var w = $(document).width(),
	    	len = $('.wy-content-item').length,
	    	wAll = len*w;
	    $('.wy-content-item').width(w);	
	    $('.wy-content-ul').width(wAll);
	    var list1 = document.getElementsByClassName('wy-content-ul')[0];
	    var liAll = document.getElementsByClassName('wy-content-item');
	    liAll[1].style.left = w + 'px';
		var timer  = setInterval(
			function (){
		        n++;
		        if (n > len-1) {
		        	n = 0 ;
		        }
			  	liAll[old].style.left = 0;
		        list1.style.left = 0;
		        liAll[n].style.left = w + 'px';
		        MTween(list1,{'left':-w},2000,'linear',function(){
		            liAll[old].style.left = 5000 + 'px';
		            old = n ;
		        });	
		    },3500);
	}
	carousel();
});
