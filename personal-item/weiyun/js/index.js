//1、布局时，是动态改变的机构高度，故要封装函数，添加事件处理


//2、根据数据，先把结构构渲染出来,可视部分是根据数据渲染的
	//2.1渲染文件区域
	//2.2渲染左侧惨淡区域
	//2.3渲染顶部路径区域

//3、交互操作
	//每次都是互相操作数据<--->结构
	//
;(function (){
    
//~~~~~~~~~~~~~~~~~~~~~定义变量~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//1、获取渲染的容器
	var treeMainPath = tools.$('#tree_main_path'),
		treeFileCont = tools.$('#tree_file_cont'),
		treeMenu = tools.$('#tree_menu'),
		treeContent = tools.$('#tree_content');
	//2、获得储存数据的数组集合
	function getUserData(){
        //获取到当前用户，存储到localstorage
        $('.login-used').text(((JSON.stringify(localStorage).length)/1000000).toFixed(2)+'MB')
        var userName = window.localStorage.getItem('currentLogin');
        var data = JSON.parse(localStorage[userName]);
        return data;	
	}
	var dataAll = getUserData();
	var datas = JSON.parse(dataAll.data);
	//获取被删除数据的集合
	var recycleDatas = JSON.parse(dataAll.recycleData);
	function setUserData(datas,recycleDatas){
	    //获取到当前用户，存储到localstorage
	    dataAll.data = JSON.stringify(datas);
	    dataAll.recycleData = JSON.stringify(recycleDatas);
        var userName = window.localStorage.getItem('currentLogin');
        var allData = JSON.stringify(dataAll);
       	localStorage[userName] = allData ;
       	$('.login-used').text(((JSON.stringify(localStorage).length)/1000000).toFixed(2)+'MB')
	}
	
	//3、指定文件区域渲染开始的pid
	var defaultPid = 0 ,
		defaultId = -1,
		//树形菜单的默认选中id
		prevId = 0;
	
	//4、单、全选按钮
	var checks = tools.$('label',treeFileCont), //注意要限定范围
		checkAll = tools.$('.check_all')[0],
		treeFileItems = tools.$('.tree_file_item',treeFileCont);
	
	//5、框选
	
	
	//10、新建
	var newConstruct = tools.$('.new_construct')[0];
	
	//11、删除
	var delect = tools.$('.delect')[0];
	
	//12、重命名
	var rename = tools.$('.rename')[0];
	
	////13、移动到
	var move = tools.$('.move')[0];
	
	//14、是否关闭树形菜单
	var viewBtn = tools.$('.view_btn')[0];
	var indexBtn = tools.$('.index')[0];
//	console.log(viewBtn);

	//18、最近功能	
	var nearrest = tools.$('.nearrest')[0];
	
	//19、文档功能
	var docBtn = tools.$('.doc')[0];
	
	//20、图片功能
	var imagesBtn = tools.$('.image')[0];

	//21、音乐功能
	var musicBtn = tools.$('.music')[0];
	
	//22、视频功能
	var videoBtn = tools.$('.video')[0];

	//23、视频功能	
	var recycleBtn = tools.$('.recycle-bin')[0];







//~~~~~~~~~~~~~~~~~~~~~（函数初始化）逻辑处理~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//1.渲染结构------------------
		
		//1.1 渲染文件区域(指定从那一层开始渲染)
	treeFileCont.innerHTML = view.creatTreeFileCont(datas,defaultPid);
		
		//1.2渲染树形菜单区域
	treeMenu.innerHTML = view.creatTreeMenuHtml(datas,defaultId);
   		//找到默认选中的tree，添加上class
    tools.addClass(tools.getTreeById("tree_item",prevId),"checked");
	//对一个添加选中的class,
	
		//1.3渲染路径区域
	treeMainPath.innerHTML = view.creatTreeMainPath(datas,0)
	
	
	//2、动态指定页面下部分的高度------------------
	
	htmlHeight();
	
	//3、点击--文件区域--树形菜单区域--文件路径导航区域//中的任何一个，三部分都互相对应显示，通过fileId来找相应得关联
		//------相同点都是执行了同样的功能---------
		//3.1点击文件区域
		//给每一个文件夹添加点击处理，故用事件委托做
	tools.addEvent(treeFileCont,'click',function (ev){
	    var target = ev.target;
	    //找到目标源要指定操作的父级
	    if (target = tools.parents(target,".tree_file_item")) {
	    	var  fileId = target.dataset.fileId;
	    	//调用函数，渲染操作
	    	renderFileMenuPath(fileId);
	    	//只要进去文件夹内部，全选不被勾选
			tools.removeClass(checkAll,'check_alled');  	
	    }
	    
	});
	
		//3.2点击路径导航区域
	tools.addEvent(treeMainPath,'click',function (ev){
	    var target = ev.target;
	    var fileId = target.dataset.fileId;
	    renderFileMenuPath(fileId);
	    //只要进去导航重渲染，全选不被勾选
		tools.removeClass(checkAll,'check_alled');  
	});	
		
		//3.3点击树形菜单区域
	tools.addEvent(treeMenu,'click',function (ev){
	    var target = ev.target;
	    //找到目标源要指定操作的父级
	    if (target = tools.parents(target,".tree_item")) {
	    	var  fileId = target.dataset.fileId;
	    	//调用函数，渲染二部分内容,传入false，不渲染树形菜单
	    	renderFileMenuPath(fileId,false);
	    	//只要进去文件夹内部，全选不被勾选
			tools.removeClass(checkAll,'check_alled');  
			
			
			
	    }
	});
	
	//切换箭头打开/关闭状态
	$('#tree_menu').on('click','.tree_item i',function (ev){
	    var closest = $(ev.target).closest('.tree_item');
	    //在有子数据的文件上才能有操作
	    if (closest.hasClass('icon_open')) {
	    	console.log(111);
	    	closest.toggleClass('icon_close');
	    	closest.next().toggle();
	    }
	});
	
	
	
	//4、每一个文件夹单选功能，同时检测全选是否勾选-----------------------
	checksAddEventClick();
	
	// 4.1根据
	
	
	//5、每一个文件夹hover功能,css中已经模拟了，这里主要是回收站，内容item的hover，功能---出现按钮！
	function itemFileMover(ev){
	    $(this).find('.recycle-btn').slideDown('fast');
	}
	function itemFileMout(){
	    $(this).find('.recycle-btn').slideUp('fast');
	}
	$('.tree_file_item').hover(itemFileMover,itemFileMout);
	
	//6全选按钮功能
	tools.addEvent(checkAll,'click',function (){
	    var isAddClass = tools.toggleClass(this,'check_alled');
	    //根据isAddClass
	    if (isAddClass) {
	    	for (var i = 0; i < treeFileItems.length; i++) {
	    		tools.addClass(treeFileItems[i],'checked');
	    		tools.addClass(checks[i],'checked');
	    	}
	    } else{
	    	for (var i = 0; i < treeFileItems.length; i++) {
	    		tools.removeClass(treeFileItems[i],'checked');
	    		tools.removeClass(checks[i],'checked');
	    	}
	    }
	})
	//阻止冒泡
	tools.addEvent(checkAll,"mousedown",function (ev){
          ev.stopPropagation();  
    })
	
	
	//7、document框选文件夹tree_file_item,注意剪影的冒炮
	var newDiv = null,
		disX = 0,
		disY = 0;
	
	tools.addEvent(document,'mousedown',function (ev){
	    var target = ev.target;
	    ev.preventDefault();
	    //如果target是空白区域，都可以出选框，否则函数结束运行
//	    console.log($('#upload-file')[0],$('#upload-file').isUpload);
	    if (tools.parents(target,'.tree_file_item') ||
	    	tools.parents(target,'#tree_main_path') ||
	    	tools.parents(target,'.main_toobar_left')||
	    	tools.parents(target,'.tree_item')||
	    	tools.parents(target,'#main_menu_wrap')||
	    	tools.parents(target,'#upload_btn')||
	    	//删除出现弹框时不能出现选框
	    	delect.delect == true||
	    	//重命名时也不能
	    	rename.isRename == true ||
	    	//移动到不能出现选框 
	    	move.isMove == true ||
	    	//上传时，拖动弹框，不能出现框选
	    	$('#upload-file')[0].isUpload == true
	    	) {
	    		
	    	return ;
	    }
	    console.log(6789)
	    newDiv = null ;
	    disX = ev.clientX;
	    disY = ev.clientY;
	    //移动生成div框
	    tools.addEvent(document,'mousemove',moveCreatDiv);
	    //鼠标抬起，框消失
	    tools.addEvent(document,'mouseup',upRemoveDiv);
	    
	    //鼠标点击document时，取消被选中项
	    unselect();
	    //右键弹框消失
	    rightMenuHide();
	    
	});
	
	//8、拖拽剪影，移动到,注意同时改变数据
	var cutShadow = null,
		pengObj = null,
		isDrag = false,
		shadowTarget = null,
		tips = null;
	tools.addEvent(document,'mousedown',function (ev){
		//如果是重民名就不执行拖拽
	    var target = ev.target;
	    console.log('剪影开始',target,tools.parents(target,'.tree_file_item'))
	    if (tools.parents(target,'.tree_file_item')) {
	    	console.log('开始触发')
	    	disX= ev.clientX;
	    	disY = ev.clientY;
	    	tools.addEvent(document,'mousemove',dragMove);
	    	tools.addEvent(document,'mouseup',dragUp);
	    	//找到目标源的父级
	    	shadowTarget = tools.parents(target,".tree_file_item");
	    }
	});
	
	//9 顶部的提示框
	var fullTipBox = tools.$('.full-tip-box')[0];
	var fullText = tools.$('.text',fullTipBox)[0];
	
	
	function tooltip(classNames,message){
	    
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
	        fullTipBox.style.transition = '0.4s';
	        fullTipBox.style.top = 0;
	    },0)
	    
	    fullText.innerHTML = message;
	    
	    fullTipBox.timer = setTimeout(function (){
	        fullTipBox.style.top = '-32px';
	    },2000);
	    
	}
	
	//10、点击新建按钮新建文件夹
	tools.addEvent(newConstruct,'click',isNewCreat);
	function isNewCreat(ev){
		//挂新建按钮对象上一个自定义属性，检测是否在新建，新建的话，再次重复点击就不能在新生成
		if (newConstruct.isNewConstruct) {
			return;
		}
		newConstruct.isNewConstruct = true;
		//传进去一个数据对象，生成一个新的文件夹结构
		var html = view.creatTreeFileItem({
			id:tools.uuid()
		});
		
		//插入到结构中
		treeFileCont.innerHTML = html + treeFileCont.innerHTML;
		
		var firstEle = treeFileCont.firstElementChild;
		var fileTitle = tools.$('.file_title',firstEle)[0];
		var fileEditor = tools.$('.file_editor',firstEle)[0];
		//console.log(fileEditor);
		fileTitle.style.display = 'none';
		fileEditor.style.display = 'block';
		
		//获取焦点
		fileEditor.focus();
		
		//避免冒泡，影响document的mousedown事件
		tools.addEvent(fileEditor,'click',function (ev){
		    ev.stopPropagation();
		});
		tools.addEvent(fileEditor,'mousedown',function (ev){
		    ev.stopPropagation();
		})
	    
	}
	
	//10.1新建完成后，点document,判断是否新建成功
	function newCreat(){
	    //doucument,多个down事件的时候，有相互影响，为了区分开相互影响，是在新建的时候，引入一个状态监听
	    if (newConstruct.isNewConstruct) { //如果是在新建状态
	    	console.log(1112);
	    	var firstEle = treeFileCont.firstElementChild;
			var fileTitle = tools.$('.file_title',firstEle)[0];
			var fileEditor = tools.$('.file_editor',firstEle)[0];
			//获取input的value
			var fileEditorVal = fileEditor.value.trim();
			
			//获取新建文件的pid,就是找到所在父层的id
			var pid = treeMainPath.lastElementChild.dataset.fileId;
			
			//下面代码是判断是否新建成功
			//如果是value是空，新建失败
			if (!fileEditorVal) {
				treeFileCont.removeChild(firstEle);
				tooltip('error','新建失败，文件名为空');
			} else if(dataAction.reName(datas,pid,fileEditorVal)){
				//如果有重名，新建不成功
				treeFileCont.removeChild(firstEle);
				tooltip('error','新建失败，有重命文件');
			} else {
				//新建成功
				fileTitle.innerHTML = fileEditorVal;
				fileEditor.style.display = 'none';
				fileTitle.style.display = 'block';
				
				//数据库中添加此条文件数据信息
				var newFile = {
					id:firstEle.dataset.fileId,
					pid:pid,
					title:fileEditorVal,
					type:'file'
				}
				datas.unshift(newFile);
				//数据库保存
				setUserData(datas,recycleDatas);
				//弹框提示新建成功
				tooltip('ok','新建文件成功');
				
				//数据库中数据改变，对应的三块内容都要从新渲染
				var fileId = pid;
				//重新渲染，
				renderFileMenuPath(fileId);
			}
			//新建结束，把状态改过来
			newConstruct.isNewConstruct = false;
	    }
	}
	tools.addEvent(document,'mousedown',function (){
		newCreat();
	});
	//10.2、按下enter键判断是否新建成功
	tools.addEvent(document,'keyup',function (ev){
		if (ev.which===13) {
			newCreat();
		};
	});
	
	//11、删除文件夹
	function delectHandle(ev){
		delect.delect = true;
	    //删除文件夹，点击弹出删除框，
	    //删除框上的内容操作
	    var selectArr = whoSelect();
	    if (selectArr.length === 0) {
	    	tooltip('warning','请选择文件');
	    	delect.delect = false;
	    }else {
	    	//调用插件，弹出删除框（注意上面的话，这个，这些）
	    	//设置参数对象
	    	var str = '这个';
	    	if (selectArr.length > 1 ) {
	    		str = '这些';
	    	}
	    	var options = {
	    		title:'删除文件',
    			content:'<div class="mod-alert">\
								<div class="alert-inner">\
								<i class="ico"></i>\
									<h4 class="title">确定要删除'+str+'文件吗？</h4>\
									<p class="info">已删除的文件可以在回收站找到</p>\
								</div>\
							</div>',
    			//定制okFn函数功能，把选择的文件夹删除
    			okFn:function (){
    			    //两种思路，删除文件的话，就是删除数据，从新渲染，或者直接删除数据
    			    var idArr = [];
    			    //找到各项选中的 id
    			    for (var i = 0; i < selectArr.length; i++) {
    			    	var fileId = selectArr[i].dataset.fileId;
    			    	idArr.push(fileId);
    			    }
    			    //通过id,删除id下面的所有子数据，同时把删除数据保存在recycleDatas内部
    			    recycleDatas = dataAction.batchDelect(datas,idArr,recycleDatas);
    			    //删除完后，保存下当前储存数据、回收数据，
    			    setUserData(datas,recycleDatas);
    			    
    			    //根据新的数据再重新渲染
    			    var id = treeMainPath.lastElementChild.dataset.fileId;
    			    renderFileMenuPath(id);
    			    
    			    //选中的被删除，全选也就不能勾选了
    			    tools.removeClass(checkAll,'check_alled')
    			    
    			    //状态变过来
    			    delect.delect = false;
    			},
    			element:delect
	    	}
	    	//传入参数，运行弹框
	    	dialog(options);
	    }
	}
	tools.addEvent(delect,'click',delectHandle);
	
	//12、重命名
	function renameHandle(ev){
//		ev.stopPropagation();
//		tools.addEvent(rename,'mousedown',function (ev){
//		    ev.stopPropagation();
//		});
		if (rename.isRename) {
			return;
		}
		rename.isRename = true;
	    var selectArr = whoSelect();
	    if (selectArr.length === 0) {
	    	tooltip('warning','请选择文件');
	    	rename.isRename = false;
	    }else if(selectArr.length > 1){
	    	tooltip('warning','只能对单个文件进行重命名');
	    	rename.isRename = false;
	    }else { 
	    	//只有一个文件时可以重命名，重命名时，空时，重名时
	    	//找到选中的这个文件夹
	    	var selectFile = selectArr[0];
	    	var fileTitle = tools.$('.file_title',selectFile)[0];
			var fileEditor = tools.$('.file_editor',selectFile)[0];
			fileTitle.style.display = 'none';
			fileEditor.style.display = 'block';
			
			//获取input的value
			var fileEditorVal = fileTitle.innerHTML;
			fileEditor.value = fileEditorVal;
			console.log(777);
			fileEditor.focus();
			fileEditor.select();
			
			//阻止冒泡,
			tools.addEvent(fileEditor,'click',function (ev){
			    ev.stopPropagation();
			});
			tools.addEvent(fileEditor,'mousedown',function (ev){
			    ev.stopPropagation();
			});
	    }
	}
	tools.addEvent(rename,'click',renameHandle);  
			
    //12.1 点击document判断是否命名成功
    function isRenameOk(){
	    //doucument,多个down事件的时候，有相互影响，为了区分开相互影响，是在新建的时候，引入一个状态监听
	    if (rename.isRename) { //如果是在在重命名状态
	    	
	    	var selectFile = whoSelect()[0];
	    	var fileTitle = tools.$('.file_title',selectFile)[0];
			var fileEditor = tools.$('.file_editor',selectFile)[0];
			
			//获取input的value
			var fileEditorVal = fileEditor.value.trim();
			//获取重命名文件的pid,就是找到所在父层的id
			var pid = treeMainPath.lastElementChild.dataset.fileId;
			
			//下面代码是判断是否命名成功
			//如果有重名，命名不成功
			console.log(fileEditorVal , fileTitle.innerHTML , 1+fileEditor.value);
			if (fileEditorVal === fileTitle.innerHTML) {
				fileEditor.style.display = 'none';
				fileTitle.style.display = 'inline-block';
				tooltip('warning','未改变文件名');
			}else if(dataAction.reName(datas,pid,fileEditorVal) && fileEditorVal !== fileTitle.innerHTML){
				fileEditor.style.display = 'none';
				fileTitle.style.display = 'inline-block';
				//弹框提示重命名失败
				tooltip('error','存在重名文件，失败');
			} else {
				//命名成功
				fileTitle.innerHTML = fileEditorVal;
				fileEditor.style.display = 'none';
				fileTitle.style.display = 'inline-block';	
				
				//数据库中此条文件数据信息title变化
				var renameData = dataAction.getDataById(datas,selectFile.dataset.fileId)
				renameData.title = fileEditorVal;
				setUserData(datas,recycleDatas);
				//弹框提示重命名成功
				
				tooltip('ok','文件重命名成功');
				
				//数据库中数据改变，对应的三块内容都要从新渲染
				var fileId = pid;
				//重新渲染，
				renderFileMenuPath(fileId);
			}
			//命名结束，把状态改过来
			rename.isRename = false;
	    }
    }
	tools.addEvent(document,'mousedown',isRenameOk);
    $(document).keydown(function (ev){
	    if (ev.which === 13) {
	    	isRenameOk();
	    }
	});
	
   	//13、移动到
   	function isMoveHandle(){
   	    var selectArr = whoSelect();
   	    if (selectArr.length === 0) {
   	    	tooltip('warning','请选择要移动的文件');
   	    	
   	    } else{
   	    	//出现弹框
   	    	//监听正在移动
   	    	move.isMove = true;
   	    	var moveId = 0;
   	    	var isMove = true;
   	    	this
   	    	//找到第一个title
   	    	var title = dataAction.getDataById(datas,selectArr[0].dataset.fileId).title;
   	    	
   	    	//调用插件出现谈框
   	    	dialog(
   	    		{
   	    			title:'选择存储位置',
   	    			content:view.moveDialogHtml(title),
   	    			okFn:function (){
   	    			    //用ismove监听是否可以操作如下代码：
   	    			    if (!isMove) {
   	    			    	
   	    			    	//选择移动到的文件夹，重名的不能移动
     	    			    var childsTitle = dataAction.getChildsById(datas,moveId);
   	    			    	
   	    			    	var onOff = true;  //监控是否成名
   	    			    	for (var i = 0; i < selectArr.length; i++) {
   	    			    		onOff = true;
   	    			    		//第i个selectarr的数据
   	    			    		var getData = dataAction.getDataById(datas,selectArr[i].dataset.fileId);
   	    			    		
   	    			    		for (var j = 0; j < childsTitle.length; j++) {
   	    			    			if (getData.title == childsTitle[j].title ) {
   	    			    				tooltip('warning','部分移动失败,重名');
   	    			    				onOff = false;
   	    			    				break;
   	    			    			}
   	    			    		}
   	    			    		
   	    			    		if (onOff) {
   	    			    			tooltip('ok','移动成功');
   	    			    			//把不重名的数据的pid改为要移动到文件的id
   	    			    			getData.pid = moveId;
   	    			    			getData.lastModified = tools.uuid();
   	    			    		}
   	    			    	}
   	    			    	setUserData();
   	    			    	//数据改变后，重新渲染结构
   	    			    	renderFileMenuPath(moveId);
   	    			    	
   	    			    	//确定按钮结束后，代表重命名结束，故状态要改变回来
   	    			    	move.isMove = false;
   	    			    }
   	    			},
   	    			element:move
   	    		}
   	    	);
   	    	
   	    	
			//弹框出现后，找到弹框，补充树形菜单结构，
			var fullPop = tools.$('.full-pop')[0];
			var dirTree = tools.$('.dirTree')[0];
			//把树形菜单渲染到结构内
			dirTree.innerHTML = view.creatTreeMenuHtml(datas,defaultId);
			
			//找到默认选中的tree，添加上class
			var prevIdTree = 0; //指定默认的id
			tools.addClass(tools.getTreeById("tree_item",prevIdTree,dirTree),"checked");
   	    	tools.addClass(dirTree,"tree-menu-comm");
   	    	
   	    	//找到错误信息提示span
   	    	var error = tools.$('.error',fullPop)[0];
   	    	
   	    	//填写提示信息：等'+num+'个文件
   	    	var fileNum = tools.$(".file-num",fullPop)[0];
   	    	if (selectArr.length>1) {
   	    		fileNum.innerHTML = '等'+selectArr.length+'个文件';
   	    	}
   	    	//操作树形菜单DOM，点击操作，把点击的那个dom,放到移动到fileMovePathTo内部
   	    	//利用事件委托给dirTree
   	    	tools.addEvent(dirTree,'click',function (ev){
   	    	
   	    	    var target = ev.target;
   	    	    if (target = tools.parents(target,".tree_item")) {
   	    	    	//只要点击就把状态变为false，只要下面有error提醒，状态就改为true
   	    	    	isMove = false;
   	    	    	//找到点击树形菜单的那个id
   	    	    	var clickId = target.dataset.fileId;
   	    	    	//对之前的那个默认菜单去掉选中的class,阴影去掉
   	    	    	tools.removeClass(tools.getTreeById("tree_item",prevIdTree,dirTree),"checked");
   	    	    	//点击的那个添加class选中
   	    	    	tools.addClass(target,'checked');
   	    	    	console.log(target,clickId);
   	    	    	prevIdTree = clickId ;
   	    	    	
   	    	    	//把点击选择的路径渲染出来
   	    	    	var fileMovePathTo = tools.$('.fileMovePathTo')[0];
   	    	    	fileMovePathTo.innerHTML = view.creatFileMovePath(datas,clickId);
   	    	    
   	    	    	//下面开始移动到点击的文件夹内部
   	    	    	
   	    	    	//不能移动到被移动的这些元素的父级上
   	    	    	//每次点击移动，error的内容都要清空
   	    	    	error.innerHTML = '';
   	    	    	
   	    	    	//找到被移动元素的父级id
   	    	    	var parentId = dataAction.getParent(datas,selectArr[0].dataset.fileId);
   	    	    	if (clickId == parentId) {
   	    	    		error.innerHTML = '文件已经在当前文件夹下';
   	    	    		isMove = true ;
   	    	    	}
   	    	    	
   	    	    	//不能移动到本身或子孙元素下
   	    	    	for (var i = 0; i < selectArr.length; i++) {
   	    	    		//找到选中元素的子孙数据
   	    	    		var selectId = selectArr[i].dataset.fileId;
   	    	    		var childs = dataAction.getChildsAll(datas,selectId);
   	    	    		
   	    	    		for (var j = 0; j < childs.length; j++) {
   	    	    			if (childs[j].id == clickId) {
   	    	    				error.innerHTML = "不能移动到本身或子孙元素下";
                                isMove = true;
                                break;
   	    	    			}
   	    	    		}
   	    	    	}
   	    	    	//移动到合适的位置不提醒
   	    	    	moveId = clickId;
   	    	    }
   	    	})
   	    }
   	}
   	tools.addEvent(move,'click',isMoveHandle);
	 
	
	//14、树形菜单的显示切换
	tools.addEvent(viewBtn,'click',function (){
	    tools.toggleClass(treeMenu,'show');
	    tools.toggleClass(treeContent,'show');
	});
	
	//14.1、目录按钮的功能
	tools.addEvent(indexBtn,'click',index);
	function index(){
	    //目录全部展示，折叠的切换
	    //点击切换打开/关闭状态
	    $('#tree_menu .tree_item').each(function (i){
	        if ($(this).hasClass('icon_open')) {
	    	    $(this).toggleClass('icon_close');
	    	}
	    });	    
	    $('#tree_menu .tree_item').next().slideToggle();
	}
	
	//15、点击music,只显示音频文件
	$('.music').click(function (){
	   	var str = view.creatConditionTreeFileCont(datas,-1,'type','','audio');
	    treeFileCont.innerHTML = str ;
	    if (!str) {
	    	tooltip('error','数据库中未找到指定类型的文件');
	    	treeFileCont.innerHTML = view.creatEmptyTreeFileCont('icon-notxt','暂无音乐','请点击左上角的“上传”按钮添加~');
	    }
    	//只要进去文件夹内部，全选不被勾选
		tools.removeClass(checkAll,'check_alled');
		//对新生成的file文件夹label，需要重新绑定check单选多选事件
		checksAddEventClick();
	});
	
	//15.1双击文件item内的音频，则播放----转到H5.js文件内操作
	
	//16、下载客户端
	$('.download').click(function (){
	   $('.wy-platform-download').toggle();
	});
	
	//17、上传功能
	$('#upload-file').on('change',function (){
	    var file = $(this)[0].files[0];
	    //选择存储的文件夹
	    //获取上传文件大小，日期，类型
	    var fileType = file.type,
	    	fileLastModified = tools.uuid(),
	    	fileLastModifiedDate = file.lastModifiedDate,
			fileName = file.name,
			fileSize = file.size,
			id = tools.uuid() ;
		var ele = this;
		var infoObj = {
	    	id:id,
	    	title:fileName,
	    	type:fileType,
	    	size:fileSize,
	    	lastModified:fileLastModified
	    };
	    var moveId = 0;
		//定义上传状态，决定是否出鼠标框选
		this.isUpload = true;
		console.dir(this,this.isUpload);
		
		function tankuang(result){
		    //调用插件，选择存储的文件位置(目的找到目标文件的ID)
	    	dialog(
	    		{
	    			title:'选择存储位置',
	    			content:view.saveDialogHtml('1个文件',fileType),
	    			okFn:function (){
	    			    	//点击确定按钮，把数据保存到相应的文件夹内
	    			    	infoObj.pid = moveId;
	    			    	infoObj.dataEncode = result;
	    			    	datas.push(infoObj);
//	    			    	dataAll.data = JSON.stringify(datas);
	    			    	setUserData(datas,recycleDatas);
	    			    	
	    			    	//数据改变后，重新渲染结构
	    			    	renderFileMenuPath(moveId);
	    			    	
	    			    	//确定按钮结束后，代表结束，故状态要改变回来
	    			    	$('#upload-file')[0].isUpload = false;
	    			    },
	    			element:ele
	    		}
	    	);
	    	
	    	//弹框出现后，找到弹框，补充树形菜单结构，
			var fullPop = tools.$('.full-pop')[0];
			var dirTree = tools.$('.dirTree')[0];
			//把树形菜单渲染到结构内
			dirTree.innerHTML = view.creatTreeMenuHtml(datas,defaultId);
			
			//找到默认选中的tree，添加上class
			var prevIdTree = 0; //指定默认的id
			tools.addClass(tools.getTreeById("tree_item",prevIdTree,dirTree),"checked");
	    	tools.addClass(dirTree,"tree-menu-comm");
	    	
	    	//找到错误信息提示span
	    	var error = tools.$('.error',fullPop)[0];
	    	
	    	//操作树形菜单DOM，点击操作，把点击的那个dom,放到移动到fileMovePathTo内部
	    	//利用事件委托给dirTree添加
	    	tools.addEvent(dirTree,'click',function (ev){
	    		
	    	    var target = ev.target;
	    	    if (target = tools.parents(target,".tree_item")) {//做了两部操作
	    	    	var clickId = target.dataset.fileId;
	    	    	//对之前的那个默认菜单去掉选中的class,阴影去掉
	    	    	tools.removeClass(tools.getTreeById("tree_item",prevIdTree,dirTree),"checked");
	    	    	//点击的那个添加class选中
	    	    	tools.addClass(target,'checked');
	    	    	console.log(target,clickId);
	    	    	prevIdTree = clickId ;
	    	    	
	    	    	//把点击选择的路径渲染出来
	    	    	var fileMovePathTo = tools.$('.fileMovePathTo')[0];
	    	    	fileMovePathTo.innerHTML = view.creatFileMovePath(datas,clickId);
	    	    
	    	    	//下面开始保存到点击的文件夹内部
	    	    	
	    	    	//每次点击移动，error的内容都要清空
	    	    	error.innerHTML = '';
	    	    	//检测保存到的文件内是否有重名的同类型文件
	    	    	var childs = dataAction.getChildsById(datas,clickId);
	    	    	for (var i = 0; i < childs.length; i++) {
	    	    		if (childs[i].title === fileName ) {
	    	    			if (childs[i].type === fileType ) {
	    	    				error.innerHTML = "该文件内有重名的同类型文件存在,";
	    	    			}
	    	    		}
	    	    	}
	    	    	
	    	    	//移动到合适的位置不提醒
	    	    	moveId = clickId;
	    	    }
	    	});
		}
    	
    	//读取文件
	    if(window.FileReader) {  
		    var fr = new FileReader();  
		    fr.onload = function(e) {  
                var result = e.target.result;
                //调用弹框，选择存储位置
                tankuang(result);
            };
            fr.onerror = function (){
            	alert('读取文件失败');
            }
            
            //根据不同的格式采用不同的读取方式
    		var regImage = /image\/\w+/g;
    		var regMsword = /\w+\/(msword)$/g;
    		var regMsexcel = /\w+\/(msexcel)$/g;
    		var regPdf = /\w+\/(pdf)$/g;
    		var regText = /text\/\w+$/g;
    		if(regMsword.test(fileType) ||regMsexcel.test(fileType)||regPdf.test(fileType)||regText.test(fileType)){
    			fr.readAsText(file,"UTF-8"); 
    		}else {
    			fr.readAsDataURL(file); 
    		}
		}  
		else {  
		    alert("Not supported by your browser!");
		    return;
		}  
	});
	
	//18、最近功能--渲染最近1天内操作过的文件
	tools.addEvent(nearrest,'click',function (ev){
		var dataTime = new Date().getTime() - 1*24*60*60*1000 ;
	    //数据的时间戳大于目标时间的渲染出来
	    //重写渲染模板
	    //渲染文件区域
	    var str = view.creatConditionTreeFileCont(datas,-1,'lastModified',dataTime,'>');
		treeFileCont.innerHTML = str ;
	    if (!str) {
	    	tooltip('error','数据库中未找到指定类型的文件');
	    }
//		console.log(view.creatConditionTreeFileCont(datas,-1,'lastModified',dataTime,'>'));
    	//只要进去文件夹内部，全选不被勾选
		tools.removeClass(checkAll,'check_alled');
		//对新生成的file文件夹label，需要重新绑定check单选多选事件
		checksAddEventClick();
			
	});	
	//19、点击文档按钮，只有文档类型的显示
	tools.addEvent(docBtn,'click',function (ev){
	    //数据的类型等于text的渲染出来
	    //渲染文件区域
	    var str = view.creatConditionTreeFileCont(datas,-1,'type','','doc');
	    treeFileCont.innerHTML = str ;
	    if (!str) {
	    	tooltip('error','数据库中未找到指定类型的文件');
	    	treeFileCont.innerHTML = view.creatEmptyTreeFileCont('icon-notxt','暂无文档','请点击左上角的“上传”按钮添加~');
	    }
    	//只要进去文件夹内部，全选不被勾选
		tools.removeClass(checkAll,'check_alled');
		//对新生成的file文件夹label，需要重新绑定check单选多选事件
		checksAddEventClick();
			
	});
	
	//20、点击图片按钮，只有图片类型的显示
	tools.addEvent(imagesBtn,'click',function (ev){
	    //数据的类型等于text的渲染出来
	    //渲染文件区域
		
	    var str = view.creatConditionTreeFileCont(datas,-1,'type','','image');
	    treeFileCont.innerHTML = str ;
	    if (!str) {
	    	tooltip('error','数据库中未找到指定类型的文件');
	    	treeFileCont.innerHTML = view.creatEmptyTreeFileCont('icon-nopicture','暂无图片','请点击左上角的“上传”按钮添加~');
	    }
    	//只要进去文件夹内部，全选不被勾选
		tools.removeClass(checkAll,'check_alled');
		//对新生成的file文件夹label，需要重新绑定check单选多选事件
		checksAddEventClick();
			
	});
	
	//22、点击视频按钮，只有视频类型的显示
	tools.addEvent(videoBtn,'click',function (ev){
	    //数据的类型等于text的渲染出来
	    //渲染文件区域
		
	    var str = view.creatConditionTreeFileCont(datas,-1,'type','','video');
	    treeFileCont.innerHTML = str ;
	    if (!str) {
	    	tooltip('error','数据库中未找到指定类型的文件');
	    	treeFileCont.innerHTML = view.creatEmptyTreeFileCont('icon-novideo','暂无视频','请点击左上角的“上传”按钮添加~');
	    }
    	//只要进去文件夹内部，全选不被勾选
		tools.removeClass(checkAll,'check_alled');
		//对新生成的file文件夹label，需要重新绑定check单选多选事件
		checksAddEventClick();
			
	});
	
	//23、回收站功能
	tools.addEvent(recycleBtn,'click',recycleRender);
	function recycleRender(){
	    //渲染文件区域
	    var str = view.creatConditionTreeFileCont(recycleDatas,-1,'','','recycle');
	    treeFileCont.innerHTML = str ;
	    if (!str) {
	    	//tooltip('error','回收站中不存在已删除的文件');
	    	treeFileCont.innerHTML = view.creatEmptyTreeFileCont('icon-notrash','回收站为空','');
	    }
    	//只要进去文件夹内部，全选不被勾选
		tools.removeClass(checkAll,'check_alled');
		//对新生成的file文件夹label，需要重新绑定check单选多选事件
		checksAddEventClick();
		//重新绑定hover事件
		console.log($('.tree_file_item'));
		$('.tree_file_item').off().hover(itemFileMover,itemFileMout);
	}
	
	//23.1、回收站内恢复，删除按钮功能
	recoverDelect();
	function recoverHandle(){
	    //获取元素ID,把数据找到--删除数据--回收到datas内--渲染回收站--操作
	    var fileId = $(this).parents('.tree_file_item').attr('data-file-id');
		var idArr = [fileId];
	    //通过id,删除id下面的所有子数据，同时把删除数据保存在Datas内部
	    datas = dataAction.batchDelect(recycleDatas,idArr,datas);
	    //删除完后，保存下当前储存数据库、回收数据库，
	    setUserData(datas,recycleDatas);
    	recycleRender();
    	
    	//渲染树形菜单目录
    	treeMenu.innerHTML = view.creatTreeMenuHtml(datas,defaultId);
	}
	function delectThorough(){
	 	var fileId = $(this).parents('.tree_file_item').attr('data-file-id');
	 	var idArr = [fileId];
	    //通过id,删除id下面的所有子数据，同时把删除数据保存在Datas内部
	    dataAction.batchDelect(recycleDatas,idArr,datas);
	    //删除完后，保存下当前储存数据库、回收数据库，
	    setUserData(datas,recycleDatas);
    	recycleRender();		    
	}
	function recoverDelect(){
		$('#tree_file_cont').on('click','.recover',recoverHandle);
		$('#tree_file_cont').on('click','.delect-thorough',delectThorough);
	}
	
	
	//登陆，退出
	$('.login-username').text(window.localStorage.getItem('currentLogin'));
	$('#login').mouseover(function (){
	    $('#user_info').show();
	});
	$('#user_info').mouseout(function (){
		$('#user_info').hide();
	});
	$('.login-out').click(function (){
	    window.location.href = 'index.html';
	});
	
	//24、搜索框
	$('#search').on('mousedown',function (ev){
		ev.stopPropagation();
	    $(this).focus().val('');
	    var _this = $(this);
    	function search1(){
	    	var val = _this.val();
    		if ( val !== '') {
		        var str = view.creatConditionTreeFileCont(datas,-1,'title',val,'search');
			    treeFileCont.innerHTML = str ;
			    if (!str) {
			    	tooltip('error','不存在搜索的资源');
			    	treeFileCont.innerHTML = view.creatEmptyTreeFileCont('icon-nosearch','抱歉，未找到匹配文件~','');
			    }
		    	//只要进去文件夹内部，全选不被勾选
				tools.removeClass(checkAll,'check_alled');
				//对新生成的file文件夹label，需要重新绑定check单选多选事件
				checksAddEventClick();
    		}
    	}
    	
	    $('#header_search').off()
	    	.click(search1)
	    	.keydown(function (ev){
	    		
	    	    if (ev.which === 13) {
	    	    	search1();
	    	    }
	    	});
		    
	})
	
	//25、双击各项，能预览功能
	$('#tree_file_cont').on('dblclick','.tree_file_item',function (){
		var fileId = $(this).attr('data-file-id');
		console.log(fileId);
		var str = view.creatPreviewCont(datas,fileId);
//		console.log(str);
		if (str) {
			$('.content').html(str);
			console.log($('.content p:nth-of-type(1)'));
			$('.content p:nth-of-type(1)').css({'text-align':'center',
				'font':'30px/30px "楷体"',
				'line-height':'30px',
				'height':'30px',
				'color':'red'
			});
			$('#preview').off().show();
		}
		$('.preview-close').off().click(function (){
			$('#preview').off().hide();
		});
	});	
	
	//26、清空回收站
	$('.clear-ecycle').click(function (){
	    recycleDatas.length = 0 ;
	    treeFileCont.innerHTML = view.creatEmptyTreeFileCont('icon-notrash','回收站为空','');
	    setUserData(datas,recycleDatas);
	    //只要进去文件夹内部，全选不被勾选
		tools.removeClass(checkAll,'check_alled');
	});
	
	//右键功能
	function rightMenuHide(){
	    $('.rightMenu').css({
		    			left:-500,
		    			top:0
		    		});
	}
//	$('.tree_file_item').on('mousedown',function (ev){
////	    ev.stopPropagation();
//	    console.log(999);
//	})
	$(document).on('contextmenu',function (ev){
	   	console.log(4)
	    ev.stopPropagation();
	    var target = ev.target;
	    ev.preventDefault();
	    //鼠标在文件夹上面时，才能出弹框&&不是回收站状态，才能出右键弹框
	    if(!tools.parents(target, ".tree_file_item") || tools.parents(target, ".recycle-btn")){
	    	rightMenuHide();
	    }else{
		    //如果有弹框，就直接赋值弹框位置，如果没有先生成，再赋值，
		    if (!$('.rightMenu').html()) {
		    	$('.rightMenu').html(view.creatContextMenu())
		    		.css({
		    			left:ev.clientX+3,
		    			top:ev.clientY+3
		    		});
		    }else {
		    	$('.rightMenu').css({
		    			left:ev.clientX+3,
		    			top:ev.clientY+3
		    		});
		    }
		    
		    //判断目标文件，如果没被选中，就添加选中，其它选中的就取消选中，然后在出弹框
			//找到label，看是否被选中
			var labelCheck = tools.parents(target, ".tree_file_item").firstElementChild;
			console.log(labelCheck,!$(labelCheck).hasClass(' checked'));
			if (!$(labelCheck).hasClass(' checked')) {
				//被选中的全部清空
				unselect();
				//当前的被选中
				$(labelCheck).addClass('checked');
				tools.addClass(tools.parents(target, ".tree_file_item"),'checked');
			} 
			//新建
			$('.rightMenu li').eq(0).off().one('mousedown',function (ev){
				console.log(0);
				ev.stopPropagation();
			    isNewCreat();
			    //右键菜单消失
			    rightMenuHide();
			});
			//删除
			$('.rightMenu li').eq(1).off().one('mousedown',function (ev){
				console.log(1);
			    ev.stopPropagation();
			    delectHandle();
			    //右键菜单消失
			    rightMenuHide();
			});
			//移动到
			$('.rightMenu li').eq(2).off().one('mousedown',function (ev){
			    console.log(2);
			    ev.stopPropagation();
			    isMoveHandle();
			    //右键菜单消失
			    rightMenuHide();
			});
			//重命名
			$('.rightMenu li').eq(3).off().one('mousedown',function (ev){
			    console.log(3);
			    ev.stopPropagation();
			    renameHandle();
			    //右键菜单消失
			    rightMenuHide();
			});
			
			
			
	    }
	    
	});
	
	//鼠标hover 时，判断是否回收，回收才能出现恢复，删除按钮
	
//~~~~~~~~~~~~~~~~~~~~~~函数封装~~~~~~~~~~~~~~~~~~~~~~~~~~
	
	
	//2.1封装函数，在页面尺寸变化是，动态计算高度
	function htmlHeight(){
	    var frameHeader = tools.$('#frame_header'),
	    	mainToobar = tools.$('#main_toobar'),
	    	mainMenuWrap = tools.$('#main_menu_wrap'),
	    	treeMenu = tools.$('#tree_menu');
	    var frameHeaderH = tools.getRect(frameHeader).height,
	    	mainToobarH = tools.getRect(mainToobar).height;
    	//计算高度
    	treeMenu.style.height = mainMenuWrap.style.height = document.documentElement.clientHeight - frameHeaderH - mainToobarH +'px';
        treeFileCont.style.height = document.documentElement.clientHeight - frameHeaderH - mainToobarH - 32 + 'px' ;
	    //动态计算高度
	    window.onresize = function (){
	       	treeFileCont.style.height = document.documentElement.clientHeight - frameHeaderH - mainToobarH - 32 + 'px' ;
	        treeMenu.style.height = mainMenuWrap.style.height = document.documentElement.clientHeight - frameHeaderH - mainToobarH +'px';
	    }
	}
	
	//3封装函数，通过对应的fileid来渲染三部分内容,onoff决定是否渲染对应的区域
	function renderFileMenuPath(fileId,onOff){
		var data = dataAction.getDataById(datas,fileId);
		var onOff = onOff==undefined ? true : false ;
		var regMsword = /\w+\/(msword)$/g;
		var regMsexcel = /\w+\/(msexcel)$/g;
		var regPdf = /\w+\/(pdf)$/g;
		var regText = /text\/\w+$/g;
		if (data.type == 'file') { //判断目的：点击时，不是文件夹类型就不渲染
			//渲染文件区域
			treeFileCont.innerHTML = view.creatTreeFileCont(datas,fileId);
			//渲染导航区域
			treeMainPath.innerHTML = view.creatTreeMainPath(datas,fileId);
			if (onOff) {
				//渲染树形菜单区域
				treeMenu.innerHTML = view.creatTreeMenuHtml(datas,defaultId);
			}
	   		//找到默认选中的tree，添加上class
			tools.addClass(tools.getTreeById("tree_item",prevId),"checked");
			//定位到指定的树形菜单上
			var prev = tools.getTreeById("tree_item",prevId);
			var tree = tools.getTreeById("tree_item",fileId);
			tools.removeClass(prev,'checked');
			tools.addClass(tree,'checked');
			prevId = fileId;
			
			//对新生成的file文件夹label，需要重新绑定check单选多选事件
			checksAddEventClick();
			//重新绑定hover事件
			$('.tree_file_item').hover(itemFileMover,itemFileMout);
			
		}else if(regMsword.test(data.type) ||regMsexcel.test(data.type)||regPdf.test(data.type)||regText.test(data.type)) {
//			$('<p></p>').html(data.dataEncode).appendTo($('body'));
		}
	};
	
	//4、封装函数，对label点击处理,添加或删除class,同时，父级随着添加或删除选中class
	
	function aloneCheckClick(obj){
	    tools.addEvent(obj,'click',function (ev){
	        ev.stopPropagation();
	        //每次执行都返回ture\false
	        var isAddClass = tools.toggleClass(obj,'checked');
	        //obj的父级是否被选中
	        checkAlled(obj);
	        if (isAddClass) {
	        	if(whoSelect().length === checks.length){
	        		tools.addClass(checkAll,'check_alled');
	        	}
	        }else {
	        	tools.removeClass(checkAll,'check_alled');
	        }
	    });
	    tools.addEvent(obj,'mousedown',function (ev){
	        ev.stopPropagation();
	    })
	}
	
	////全部check添加点击事件
	function checksAddEventClick(){
	    for (var i = 0; i < checks.length; i++) {
			aloneCheckClick(checks[i]);
		}
	}
	
	//封装函数判断tree_file_item是否要添加选中的checked--
	function checkAlled(obj){
	    if (tools.hasClass(obj,'checked')) {
	    	tools.addClass(tools.parents(obj,'.tree_file_item'),'checked')
	    } else{
	    	tools.removeClass(tools.parents(obj,'.tree_file_item'),'checked')
	    }
	}
	
	
	//4.1封装whoSelect()，哪一个tree_file_item被选中
	function whoSelect(){
	    var  arr = [];
	    for (var i = 0; i < checks.length; i++) {
	    	if (tools.hasClass(checks[i],'checked')) {
	    		arr.push(tools.parents(checks[i],'.tree_file_item'));
	    	}
	    }
	    return arr;
	}
	
	//7.1、封装函数，移动时生成框选框
	function moveCreatDiv(ev){
		//如果任意一边大于20才生成div
	    if (Math.abs(ev.clientX - disX)>20 || Math.abs(ev.clientY - disY)>20) {
	    	//判断是否生成有div，没有的情况下，才能生成，如果已经生成就不能在重复生成了
	    	if (!newDiv) {
	    		newDiv = document.createElement('div');
//	    		newDiv.style.left = disX +'px'
//	    		newDiv.style.top = disX + 'px'
				newDiv.className = 'selectTab';
	    		document.body.appendChild(newDiv);
	    	}
	    	//定位赋值
	    	

    		newDiv.style.left = Math.min(ev.clientX , disX) +1 +'px';
	    	newDiv.style.top = Math.min(ev.clientY , disY) +1+'px';
	    	//宽高赋值
	    	newDiv.style.width = Math.abs(ev.clientX - disX) + 'px';
	    	newDiv.style.height = Math.abs(ev.clientY - disY) + 'px';
	    
	    	//移动过程中检测碰撞元素，执行碰撞上的元素，添加checked,及label添加checked
	    	for (var i = 0; i < treeFileItems.length; i++) {
//	    		treeFileItems[i]
	    		if (tools.duang(newDiv,treeFileItems[i])) {
	    			tools.addClass(treeFileItems[i],'checked');
	    			tools.addClass(checks[i],'checked');
	    		}else {
	    			tools.removeClass(treeFileItems[i],'checked');
	    			tools.removeClass(checks[i],'checked');
	    		}
	    	}
	    	
	    }
	}
	//7.2、框选鼠标抬起时，生成的div,消失
	function upRemoveDiv(){
		//如果有生成的DIV就删除
	    if (newDiv) {
	    	document.body.removeChild(newDiv);
	    }
	    //移除事件
	    tools.removeEvent(document,'mousemove',moveCreatDiv);
	    tools.removeEvent(document,'mouseup',upRemoveDiv);
	    
	    //判断checkAll是否勾选
	    if (whoSelect().length === checks.length &&whoSelect().length !== 0) {
	    	tools.addClass(checkAll,'check_alled');
	    }
	}
	
	//8.1 拖拽移动的处理函数，拖拽时，生成div,然后根据拖拽的文件个数改变属性
	function dragMove(ev){
		console.log(disX,disY);
	    //出现剪影的背景，根据拖拽的个数而定
	    //把选中的拖拽到对应文件夹，本质是把选中文件的pid改为对应文件夹的id,同时检测这个pid内是否已经存在这写个文件
	    if (Math.abs(ev.clientX - disX)>10 || Math.abs(ev.clientY - disY)>10) {
	    	//如果不存在剪影，，就创建
	    	console.log('开始移动')
	    	if (!cutShadow) {
	    		console.log('声成结构')
	    		cutShadow = view.moveCreatShadow();
	    		document.body.appendChild(cutShadow);
	    		cutShadow.style.display = 'block';
			    //生成一个小的空白层，用来做碰撞检测
			    tips = document.createElement('div');
			    document.body.appendChild(tips);
			    tips.style.cssText = "width: 10px; height: 10px;position: absolute;left: 0;top: 0;"
	    	}
	    	//声明状态，在拖拽呢
	    	isDrag = true;
		    //给定坐标
	    	if (ev.clientX < ($('#tree_file_cont').offset().left)) {
		    	cutShadow.style.left =  $('#tree_file_cont').offset().left+'px';
	    	}else{
			    cutShadow.style.left = ev.clientX + 13 +'px';
	    	}
	    	if (ev.clientY < $('#tree_file_cont').offset().top) {
		    	cutShadow.style.top =  $('#tree_file_cont').offset().top+'px';
	    	}else{
			    cutShadow.style.top = ev.clientY + 13 +'px';
	    	}
		    
		    tips.style.left = ev.clientX +'px';
		    tips.style.top = ev.clientY +'px';
	    
	    
	    
	    
		    //拖拽时，如果没被选中的话，就添加class被选中，其他被选中的不被选中
		    if (!tools.hasClass(shadowTarget,'checked')) {
		    	//暴力清空，自己添加选中class
		    	unselect();
		    	tools.addClass(shadowTarget,'checked');
		    	var checkbox = shadowTarget.firstElementChild;
		    	tools.addClass(checkbox,'checked');
	//	    	console.log(1,checkbox,shadowTarget);
		    }
		    
		    //拖拽过程中，剪影的内容构造
		    var selectArr = whoSelect(),
		    	sum = tools.$('.sum',cutShadow)[0],
		    	icons = tools.$('.icons',cutShadow)[0],
		    	str = '';
//		    console.log(sum,icons);
		    //通过查看选中的个数生成剪影的个数
		    var len = selectArr.length ;
		    //判断文件类型，生成对应的图片
		    var num = len>4 ? 4:len;
		    for (var i = 0; i < num; i++) {
		    	var type = 
		    	dataAction.getDataById(datas,selectArr[i].dataset.fileId).type;
			    var newClassName  = view.judgeFileType(type) || '';
		    	str += '<i class="icon icon'+i+' '+newClassName+' icon-folder"></i>'
		    }
//		    console.log(selectArr,sum,len,icons);
		    sum.innerHTML = len;
		    icons.innerHTML = str;
		    
		    pengObj = null;
		  
		  	//被碰撞元素的背景改变
		    for (var i = 0; i < treeFileItems.length; i++) {
		    	//被碰撞元素不能在选择的元素内，否则无效
		    	
		    	if (tools.duang(tips,treeFileItems[i]) && !indexOf(selectArr,treeFileItems[i])) {
		    		treeFileItems[i].style.background = 'deepskyblue';
		    		pengObj = treeFileItems[i];
		    	}else {
		    		treeFileItems[i].style.background = '';
		    	}
		    } 
	    }
	}
	
	//8.1.1封装判断一个元素是不是存在一个数组中的函数
	function indexOf(arr,item){
	    for (var i = 0; i < arr.length; i++) {
	    	if (arr[i] === item) {
	    		return true;
	    	}
	    }
	    return false;;
	}
	
	//8.2 拖拽鼠标抬起
	function dragUp(){
		//document移除绑定的事件
		tools.removeEvent(document,'mousemove',dragMove);
		tools.removeEvent(document,'mouseup',dragUp);
		
		//剪影消失，
		if (cutShadow) {
			document.body.removeChild(cutShadow);
			document.body.removeChild(tips);
			
			cutShadow = null;
		}
		
	    //拖动的文件夹放到，被碰撞的pengObj内，被选中的文件夹的id等于，碰撞obj的Id,找到id,并重新渲染数据
	    if (pengObj) {
	    	//获取id,
	    	var pengId = pengObj.dataset.fileId;
	    	//当前数据的父ID(当前文件夹)
	    	var pengData = dataAction.getDataById(datas,pengId);
	    	var currentFileId = pengData.pid;
	    	
	    	//检测碰撞元素的type,如果不是file,就不能拖拽进来
	    	if (pengData.type !== 'file') {
	    		pengObj.style.background = '';
	    		tooltip("warning","只能移动到文件夹");
	    		return ;
	    	}
	    	var selectArr = whoSelect();
	    	//被碰撞元素的子数据集合
	    	var childDatas = dataAction.getChildsById(datas,pengId);
	    	var onOff = true;
	    	//记录塞到碰撞元素内的个数，
	    	var n = 0;
	    	for (var i = 0; i < selectArr.length; i++) {
	    		onOff = true;
	    		//获取被选中项的Id
	    		var getData = dataAction.getDataById(datas,selectArr[i].dataset.fileId);
	    		
	    		//外面的title和被碰撞元素的内部子数据title比较，不同就改变移动元素的pid为碰撞obj的id
	    		for (var j = 0; j < childDatas.length; j++) {
	    			if (getData.title == childDatas[j].title) {
	    				onOff = false;
	    				break;
	    			}
	    		}
	    		if(onOff){
	    			n++;
	    			getData.pid = pengId;
	    			getData.lastModified = tools.uuid();
	    		}
	    	}
	    	//保存数据
	    	setUserData(datas,recycleDatas);
	    	//这里是弹框提示
	    	if(n === selectArr.length){
	    		tooltip("ok","移动成功");
	    	}else {
	    		tooltip("warning","部分移动失败,有重名文件");
	    	}
	    	
	    	//调用函数根据更改后的数据，重新渲染三部分区域(开始渲染)
	    	//移动成功后，应该渲染的还是当前文件夹
	    	renderFileMenuPath(currentFileId);
	    	pengObj = null;
	    }
	    isDrag = false;
	}
	
	//8.3、暴力清空选中,被选中的文件，不被选中，当然checkall，也不被选中
	function unselect(){
	    for (var i = 0; i < treeFileItems.length; i++) {
	    	tools.removeClass(treeFileItems[i],'checked');
	    	tools.removeClass(checks[i],'checked');
	    }
	    tools.removeClass(checkAll,'check_alled');
//	    
	}
	
	
	//判断数据类型
	
})();
