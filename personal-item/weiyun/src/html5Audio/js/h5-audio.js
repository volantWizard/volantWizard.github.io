
$(document).ready(function (){
	var scal;
	var curTime =  $('.current-time');
	var planControl = $('.plan-control');
	
	//点击搜索歌曲
	$('#song-value').on('focus',function (){
	    $(this).val('');
	    //获得焦点时，把歌曲信息放下来
	    $('.song-info').slideDown().css('background','#fff');
	});
	$('.search-ico').on('click',searchSong)
	    $('.song-info').slideDown();
		//把一系列搜索动作封装为函数，以复用！
		function searchSong(){
		    var val = $('#song-value').val();
			var songID = [];
		    $.getJSON("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=?&from=webapp_music", 
		    	{
		    		'method':'baidu.ting.search.catalogSug',
		    		'query':val,
		    	}).then(
					//用jquery获取动态添加的元素时，一定要在ajax请求成功后，才能获取，但是，原生的获取好像不受限制。
					//delegate的作用
					function (data){
						//得到数据后，再次发送请求，获取每个歌曲数据的具体信息
						var song = data.song;
						console.log(data);
					    var len = song.length>5? 5 : song.length;
					    //渲染结构
					    creatFrame(song,len);
					    console.log(song);
					    //然后接着ajax获得各个歌曲数据，并渲染到结构
					    for (var i = 0; i < len; i++) {
					    	var songid = song[i].songid;
					    	getInfo(songid,i,song);
					    }
					    $('.tb tr').hover(
					    	function (){
					    	    $(this).addClass('bg-color');
					    	},
					    	function (){
					    	    $(this).removeClass('bg-color');
					    	}
					    );
					    $('.tb tr').dblclick(
					    	function (){
					    		//添加点击歌曲到列表
					    	    tooltip('error','由于版权原因，暂不提供在线播放');return;
					    		var html = $(this).find('.songname').html();
					    	    $('.slid-menu').append('<li>'+html+'</li>');
					    	    //收起歌曲信息标
					            $('.song-info').slideUp();
					    	}
					    );
					},
					function (){
					    //失败的函数
					}
				);
		}
		
		
		//获取具体歌曲信息{时长，大小，图片,专辑等},并渲染出来。
		function getInfo(songid,i,song){
			
			$.getJSON("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=?&from=webapp_music", 
				{
					'method':'baidu.ting.song.playAAC',
					'songid':songid
				},
				
				function(data){
					//歌总时间
					song[i].duration = Math.floor(data.bitrate.file_duration/60)+":"+Math.floor(data.bitrate.file_duration%60);
					$('.tb .detime').eq(i).html(song[i].duration);
					
					//MP3地址
					song[i].showLink = data.bitrate.show_link;
					
					//大小
					song[i].size = (data.bitrate.file_size/1000000).toFixed(2) +'MB';
					$('.tb .size').eq(i).html(song[i].size);
					
					//歌词
					song[i].lrclink = data.songinfo.lrclink;
					
					//图片
					song[i].pic = data.songinfo.pic_small;
					$('.album_title img').eq(i).attr('src',song[i].pic);
					
					//专辑
					 
				}
			);
		}
				    
		
		//获取具体的歌词的lrc
		$.getJSON("http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=?&from=webapp_music", 
			{
				'method':'baidu.ting.song.lry',
				'songid':64424214
			},
			
			function(data){
				console.log(data);
				console.log('3成功');
			}
		);
		
		
		function creatFrame(song,len){
		    //获取每一个song的具体信息
		    var str = '';
		    for (var i = 0; i < len; i++) {
		    	str += `
		    		<tr>
						<td class="songname">${song[i].songname}</td>
						<td class="artistname">${song[i].artistname}</td>
						<td class="album_title">
							<img src="" alt="" />
						</td>
						<td class="detime">时长</td>
						<td class="size">大小</td>
					</tr>
		    	`
		    }
		    $('.tb').html(str);
		}
	
	
	//enter键搜索歌曲
	$('#song-value').on('keydown',function (ev){
		$('.song-info').slideDown();
	    if (ev.which===13) {
	    	console.log(13);
	    	searchSong();
	    }
	})
	
	
	//侧边栏开关
	function onoff(){
	    if ($('.onoff').hasClass('active')) {
		    $('.slid-bar').animate({'left':-180},400);
		    $('.onoff').removeClass('active');
		}else {
		    $('.slid-bar').animate({'left':0},400);
		    $('.onoff').addClass('active');
		}
	}
	$('.onoff').click(onoff);
	
	
	
	//调节播放进度条
	$('.bar').on('mousedown',function (ev){
		ev.preventDefault();
	    var offsetLeft = $(this).offset().left;
	    var w = ev.clientX - offsetLeft;
	    $('.plan-control').width(w);
	    var barW = $(this).width();
	    console.log(barW);
	    
	    //鼠标移动时的绑定函数
	    var fn = function (ev){
	    	ev.preventDefault();
	        var w = ev.clientX - offsetLeft >= barW ? barW:ev.clientX - offsetLeft;
	        $('.plan-control').width(w);
	    }
	    $(document).on('mousemove',fn)
	    $(document).on('mouseup',function (){
	    	console.log('up');
	        $(document).off('mousemove',fn);
	    });
	});
	
	
	//调节声音大小
	//定义全局的声音操作
	var ac = new AudioContext(),
		source = ac.createBufferSource(),
		analyser = ac.createAnalyser(),
		gainNode = ac.createGain();
	var audio = $('#audio')[0];
	
	
	$('.sound').click(function (){
	    $('.sound-bar').fadeToggle();
	});
	
	$('.sound-bar').on('mousedown',function (ev){
		ev.preventDefault();
		//上偏移,偏移量不包括padding,手动添加
	    var offsetTop = $('.sound-warp').offset().top;
	    var barW = $('.sound-warp').height();
	    var h = (barW - (ev.clientY - offsetTop)) >= barW ? barW : (barW - (ev.clientY - offsetTop));
	    if ((barW - (ev.clientY - offsetTop))<=0) {
	    	h=0;
	    }
	    $('.sound-control').height(h);
	    audio.volume = h*0.01 ;
	    
	    //鼠标移动时的绑定函数
	    var fn = function (ev){
	        var h = (barW - (ev.clientY - offsetTop)) >= barW ? barW : (barW - (ev.clientY - offsetTop));
	        
	        if ((barW - (ev.clientY - offsetTop))<=0) {
	        	h=0;
	        }
	        $('.sound-control').height(h);
	        audio.volume = h*0.01 ;
	    }
	    $(document).on('mousemove',fn)
	    $(document).on('mouseup',function (){
	        $(document).off('mousemove',fn);
	    });
	});
	
	//拖动播放器
	$('#song-value').on('mousedown',function (ev){
		//阻止拖动input框冒泡
	    ev.stopPropagation();
	})
	$('#h5-Audio .wrap').on('mousedown', '#audio-header',function (ev){
	    ev.preventDefault();
	    var offsetLeft = $(this).offset().left;
	    var offsetTop = $(this).offset().top;
	    var disX = ev.clientX - offsetLeft,
	    	disY = ev.clientY - offsetTop;
//	    	console.log(ev,ev.clientY ,offsetLeft, offsetTop);
	    //鼠标移动时的绑定函数
	    var fn = function (ev){
	    	 
	        var w = ev.clientX - disX ,
	        	h = ev.clientY - disY;
	        	console.log($(document).width());
	        if (w<=0) {
	        	w=0
	        }else if(w>= $(document).width() - $('#h5-Audio .wrap').width()-2){
	        	w=$(document).width() - $('#h5-Audio .wrap').outerWidth();
	        }
	        if (h<=0) {
	        	h=0
	        }else if(h>= $(window).height() - $('#h5-Audio .wrap').height()-10){
	        	h=$(window).height() - $('#h5-Audio .wrap').outerHeight();
	        }
	        console.log($(window).height(),$(document).height(),ev.clientX , disX);
	        $('#h5-Audio .wrap').css({
	        	'left':w,
	        	'top':h,
	        	'margin':0
	        });
	    }
	    $(document).on('mousemove',fn)
	    $(document).on('mouseup',function (){
	        $(document).off('mousemove',fn);
	    });
	});
	
	//收索歌曲列表收起来
	$('#control').click(function (){
	    $('.song-info').slideUp();
	})
	
	//封装ajax,请求左侧列表对应的歌曲,
	var canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d'),
		w = $('.canvasMove').width(),
		h = $('.canvasMove').height();
	function ajaxPlay(songUrl,songName){
		//先加载h5音频
		audio.src = songUrl;
		
		ac = new AudioContext();
		source = ac.createBufferSource();
		analyser = ac.createAnalyser();
		gainNode = ac.createGain();
		
			
		canvas.width = w;
		canvas.height = h;
		
		var gradient1 = ctx.createLinearGradient(0, 0, 0, 250);
		gradient1.addColorStop(0, 'red');
		gradient1.addColorStop(0.5, 'blue');
		gradient1.addColorStop(1, 'green');
		 
		var gradient2 = ctx.createLinearGradient(0, 250, 0, 500);
		gradient2.addColorStop(0, 'rgba(120,255,120,1)');
		gradient2.addColorStop(0.5, 'rgba(120,120,255,0.4)');
		gradient2.addColorStop(1, 'rgba(255,120,120,0.1)');
		
		
	    var xhr = new XMLHttpRequest();
	    console.log(songUrl);
	    xhr.open('get',songUrl,true);
	    //设置请求类型,返回buffer类型的音源
	    xhr.responseType = 'arraybuffer';
	    
	    xhr.onload = function (){
	    	
	    	//音源,解码
	        ac.decodeAudioData(xhr.response,function(buffer){
		    	//解码成功
		    	
		    	//操作播放按钮---播放/暂停
				$('.play-btn .start').off().on('click',function (ev){
					ev.preventDefault();
					
					//收索列表收起
					$('.song-info').slideUp('hide');
			    	//侧边栏slid-bar 收起
			    	onoff();
				    
				    if(ac.state === 'running') {
					    ac.suspend();
					    $(this).removeClass('play');
				    	$('.image').removeClass('play');
				    	audio.pause(); 
					} else if(ac.state === 'suspended') {
					    ac.resume();
					    $(this).addClass('play');
				    	$('.image').addClass('play');
				    	audio.play();
				    	
				    	//重新播放
				    	analysers();
					}
				});
		    	
		    	
		    	//放置音源,连接播放器
		    	gainNode.gain.value = 0;
		    	source.connect(analyser);
		    	analyser.connect(gainNode);
		    	gainNode.connect(ac.destination);
		    	
	       		
	       		//获取audio歌曲总时间及进度条比例
	        	var durtime = audio.duration;
	        	scal = $('.bar').width()/durtime
	        	$('.durint-time').html(timeHandle(durtime));
	        	
		    	//开始播放
		    	source.buffer = buffer;
	       		source.start(0);
	        	
	        	//真实声音用H5标签audio播放
	        	audio.play();
	        	//歌词显示
	       		showLrc(lrc[songName]);
	       		
		    	//歌曲信息列表收起
		    	console.log($('.song-info'));
		    	$('.song-info').slideUp('hide').css('background-position-x',1000);
		    	
		    	//只要上面的音乐播放,播放按钮就被按下
		    	$('.play-btn .start').addClass('play');
	    		$('.image').addClass('play');
		    	
		        //设置数组长度为频谱长度
		        var arr = new Uint8Array(analyser.frequencyBinCount);
	        	
	        	//按浏览器帧数获取频谱值并且绘画。
	        	analysers();
	        	function  analysers(){
	        	    var arg = arguments;
	        	    requestAnimationFrame(function (){
	        	    	
	        	    	//设置频率数据
		        		analyser.getByteFrequencyData(arr);
	        	       	
	        	        //绘制canvas动画
	        	        ctx.clearRect(0,0,w,h);
	        	        for (var i = 0; i < arr.length; i++) {
	        	        	
	        	        	
	        	        	
	        	        	
	        	        	//canvas动画
	        	        	ctx.fillStyle = gradient1;
	        	        	ctx.fillRect(i*2,250-arr[i],1,arr[i]);
	        	        	
	        	        	ctx.fillStyle = gradient2;
	        	        	ctx.fillRect(i*3,250,1,arr[i]*0.5);																																								
	        	        }
	        	        //回掉此函数,判断是否继续(停止循环条件)
	        	        if (!audio.paused && !audio.ended) {
	        	        	arg.callee();
	        	        }
	        	        if (audio.ended) {
	        	        	$('.start').removeClass('play');
				    		$('.image').removeClass('play');
//				    		source.close();
	        	        }
	        	    });
	        	};
		    });
		};
	    xhr.send();
	}
	//封装时间处理函数
	function timeHandle(times){
	    var m = Math.floor(times/60),
			s = (times%60).toFixed(0);
		var minutes = m.length === 2 ? m : '0'+ m;
			seconds = s.length === 2 ? s : '0'+ s;
		return 	minutes+':'+seconds;
	}
	
	//点击播放,播放按钮播放,song-info面版收起
	$('.slid-menu').on('dblclick','li',function (ev){
	   	ev.preventDefault();
	   	//以下方式用原生的ajax请求,$.ajax不支持
	    var songUrl = 'src/html5Audio/mp3/' + $(this).attr('data-songname');
		//文件路径
		var songName = $(this).attr('data-songname').split('.')[0];
		
		//关闭上次音源,才能开始下次
		ac.soruce && ac.close();
		//面板操作的按钮停止播放
		if (audio.play) {
			$('.start').removeClass('play');
			$('.image').removeClass('play');
			current(0)
			audio.pause();
			//清空歌词
			$('.new-lrc').empty();
		}
		tooltip('ok','正在努力加载,稍等');
		
	    ajaxPlay(songUrl,songName);
		//侧边栏slid-bar 收起
		onoff();
		
	});
	
	//15.1双击文件item内的音频，则播放
	$('#tree_file_cont').on('dblclick','.tree_file_item',function (){
		var fileId = $('.tree_file_item').attr('data-file-id');
		function datas(){
			function getUserData(){
		        //获取到当前用户，存储到localstorage
		        var userName = window.localStorage.getItem('currentLogin')
		        var data = JSON.parse(localStorage[userName]);
		        return data;	
			}
			var dataAll = getUserData();
			return JSON.parse(dataAll.data);
		}
		$('.song-info').slideDown().removeAttr('style');
		var datas = dataAction.getDataById(datas(),fileId);
		var regAudio = /audio\/\w+/g;
		//判断audio类型
		if (regAudio.test(datas.type)) {
		    //播放器显示 
		    $('#audio-iframe').addClass('audio-show');
		    $('.canvasMove').css('display','block');
		    //遮罩出现
		    $('.audio-mask').fadeIn(500);
		    //获取歌曲名--lrc使用
		   	var songName = $(this).find('.file_title').text().split('.')[0];
		   	//调用歌曲文件路径--调用歌曲路径使用
		   	var songUrl = 'src/html5Audio/mp3/' + $(this).find('.file_title').text();
			//关闭上次音源,才能开始下次
			ac.soruce && ac.close();
			//面板操作的按钮停止播放
			if (audio.play) {
				$('.start').removeClass('play');
				$('.image').removeClass('play');
				current(0)
				audio.pause();
				//清空歌词
				$('.new-lrc').empty();
			}
			tooltip('ok','正在努力加载,稍等');
			
		    ajaxPlay(songUrl,songName);
			//侧边栏slid-bar 收起
			$('.slid-bar').animate({'left':-180},400);
		}
	});
	
    
    //此处定义播放时间/进度
	function current(times){
	    curTime.html(timeHandle(audio.currentTime));
    	
    	//进度条设置
    	planControl.width(scal*audio.currentTime);
	}
    
    //封装处理歌词函数,[[time,value],[time,value]]
    function parseLyric(text) {
	    //将文本分隔成一行一行，存入数组    
	    var lines = text.split('\n'),
	        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]    
	        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
	        //保存最终结果的数组    
	        result = [],
	        //保存头部信息
	        resultHead = [];
	    //去掉不含时间的行    
	    while (!pattern.test(lines[0])) {
	    	
	    	resultHead.push(lines[0]);
	        lines = lines.slice(1);
	    };
	    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉    
	    lines[lines.length - 1].length === 0 && lines.pop();
	    lines.forEach(function (v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
	        //提取出时间[xx:xx.xx]    
	        var time = v.match(pattern),
            //提取歌词    
            value = v.replace(pattern, '');
	        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔    
	        time.forEach(function (v1, i1, a1) {
	            //去掉时间里的中括号得到xx:xx.xx    
	            var t = v1.slice(1, -1).split(':');
	            //将结果压入最终数组    
	            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
	        }); 
	    });
	    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词    
	    result.sort(function (a, b) {
	        return a[0] - b[0];
	    });
	    return result;
	}
    
    //让歌词动起来
    function showLrc(data) {
	        var str = parseLyric(data);
	        var li = '';
	        for (var i = 0; i < str.length; i++) {
	            li += '<li>' + str[i][1] + '</li>';
	        }
	        $('#gc ul').html(li);
	        audio.ontimeupdate = function () { //视频 音频当前的播放位置发生改变时触发    
	            
	            //显示当前时间
	        	current(audio.currentTime);
	            
	            for (var i = 0, l = str.length; i < l; i++) {
	                if (this.currentTime  > str[i][0]) {
	                    //显示到页面    
	                    $('#gc ul').css('top', -i * 57 +100+ 'px'); //让歌词向上移动    
	                    $('#gc ul li').css('color', '#66ac5f');
	                    $('#gc ul li:nth-child(' + (i + 1) + ')').css('color', '#dbd60f'); //高亮显示当前播放的哪一句歌词    
	                }
	            }
	            
	            if (this.ended) { //判断当前播放的音乐是否播放完毕    
	            	$('.start').removeClass('play');
		    		$('.image').removeClass('play');
		    		current(0)
	            }
	        };
	}
	
    //操作歌词与canvas动画的显示切换
    $('#simp_btn').click(function (){
        if ($(this).hasClass('btn_big_only--on')) {
        	$(this).removeClass('btn_big_only--on');
        	$('#lrc-list').css('display','none');
        	$('.canvasMove').css('display','block');
        }else {
        	$(this).addClass('btn_big_only--on');
        	$('#lrc-list').css('display','block');
        	$('.canvasMove').css('display','none');
        }
    });
    
    //操作关闭按钮
    $('.closed span').click(
    	function (){
    		
    	    $('#audio-iframe').removeClass('audio-show');
    	    //遮罩隐藏
		    $('.audio-mask').delay(1200).fadeOut('slow');
    	    //关闭上次音源,才能开始下次
			ac.close();
			//清除canvas动画
			$('.canvasMove').css('display','none');
			//面板操作的按钮停止播放
			if (audio.play) {
				$('.start').removeClass('play');
				$('.image').removeClass('play');
				current(0)
				audio.pause();
				//清空歌词
				$('.new-lrc').empty();
			}
    	}
    );
    
    //提示信息
    function tooltip(classNames,message){
	    var fullTipBox = tools.$('.full-tip-box')[0];
		var fullText = tools.$('.text',fullTipBox)[0];
	    fullTipBox.style.transition = 'none';
	    fullTipBox.style.top = '-32px';
	    
	    //开延迟器
	    setTimeout(function (){
	    	if (classNames=='ok') {
	    		tools.removeClass(fullTipBox,'warning');
	    		tools.removeClass(fullTipBox,'error');
	    	}else if(classNames=='warning'){
	    		tools.removeClass(fullTipBox,'ok');
	    		tools.removeClass(fullTipBox,'error');
	    	}else {
	    		tools.removeClass(fullTipBox,'ok');
	    		tools.removeClass(fullTipBox,'warning');
	    	}
	        tools.addClass(fullTipBox,classNames);
	        fullTipBox.style.zIndex = 10000;
	        fullTipBox.style.transition = '0.4s';
	        fullTipBox.style.top = 0;
	    },0)
	    
	    fullText.innerHTML = message;
	    
	    fullTipBox.timer = setTimeout(function (){
	        fullTipBox.style.top = '-32px';
	    },2000);
	    
	}
});

