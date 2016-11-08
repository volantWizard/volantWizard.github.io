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
		treeMenu = tools.$('#tree_menu');
	
	//2、获得数据的数组集合
	var datas = data.files;
	
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
	console.log(move);
	
















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
	    
	})
	
		//3.2点击路径导航区域
	tools.addEvent(treeMainPath,'click',function (ev){
	    var target = ev.target;
	    var fileId = target.dataset.fileId;
	    renderFileMenuPath(fileId);
	    //只要进去导航重渲染，全选不被勾选
//		tools.removeClass(checkAll,'checked');  
	})	
		
		//3.3点击树形菜单区域
	tools.addEvent(treeMenu,'click',function (ev){
	    var target = ev.target;
	    //找到目标源要指定操作的父级
	    if (target = tools.parents(target,".tree_item")) {
	    	var  fileId = target.dataset.fileId;
	    	//调用函数，操作
	    	renderFileMenuPath(fileId);
	    	//只要进去文件夹内部，全选不被勾选
//			tools.removeClass(checkAll,'checked');  	
	    }
	})	

	//4、每一个文件夹单选功能，同时检测全选是否勾选-----------------------
	checksAddEventClick();
	
	// 4.1根据
	
	
	//5、每一个文件夹hover功能
	
	
	
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
	    	move.isMove == true
	    	
	    	) {
	    		
	    	return ;
	    }
	    
	    newDiv = null ;
	    disX = ev.clientX;
	    disY = ev.clientY;
	    //移动生成div框
	    tools.addEvent(document,'mousemove',moveCreatDiv);
	    //鼠标抬起，框消失
	    tools.addEvent(document,'mouseup',upRemoveDiv);
	    
	    //鼠标点击document时，取消被选中项
	    unselect();
	    
	});
	
	//8、拖拽剪影，移动到,注意同时改变数据
	var cutShadow = null,
		pengObj = null,
		isDrag = false,
		shadowTarget = null,
		tips = null;
	tools.addEvent(document,'mousedown',function (ev){
		//如果是崇民名就不执行拖拽
	    var target = ev.target;
	    if (tools.parents(target,'.tree_file_item')) {
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
	tools.addEvent(newConstruct,'click',function (ev){
		//挂新建按钮对象上一个自定义属性，检测是否在新建，新建的话，再次重复点击就不能在新生成
		if (this.isNewConstruct) {
			return;
		}
		this.isNewConstruct = true;
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
	
	});
	
	//10.1新建完成后，点document,判断是否新建成功
	tools.addEvent(document,'mousedown',function (){
	    //doucument,多个down事件的时候，有相互影响，为了区分开相互影响，是在新建的时候，引入一个状态监听
	    if (newConstruct.isNewConstruct) { //如果实在新建状态
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
			} else if(dataAction.reName(datas,pid,fileEditorVal)){
				//如果有重名，新建不成功
				treeFileCont.removeChild(firstEle);
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
	});
	
	//11、删除文件夹
	tools.addEvent(delect,'click',function (){
		this.delect = true;
		console.log(1);
	    //删除文件夹，点击弹出删除框，
	    //删除框上的内容操作
	    var selectArr = whoSelect();
	    if (selectArr.length === 0) {
	    	tooltip('warning','请选择文件');
	    }else {
	    	//调用插件，弹出删除框（注意上面的话，这个，这些）
	    	//设置参数对象
	    	//console.log(2);
	    	var str = '这个';
	    	if (selectArr.length > 1 ) {
	    		str = '这些';
	    	}
	    	
	    	var options = {
	    		title:'删除文件',
    			content:'确定要删除'+str+'文件夹吗？',
    			//定制okFn函数功能，把选择的文件夹删除
    			okFn:function (){
    			    //两种思路，删除文件的话，就是删除数据，从新渲染，或者直接删除数据
    			    var idArr = [];
    			    //找到各项选中的 id
    			    for (var i = 0; i < selectArr.length; i++) {
    			    	var fileId = selectArr[i].dataset.fileId;
    			    	idArr.push(fileId);
    			    }
    			    //通过id,删除id下面的所以子数据
    			    dataAction.batchDelect(datas,idArr);
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
	});
	
	//12、重命名
	tools.addEvent(rename,'click',function (ev){
		//
		console.log(this.isRename);
		ev.stopPropagation();
		tools.addEvent(rename,'mousedown',function (ev){
		    ev.stopPropagation();
		});
		if (this.isRename) {
			return;
		}
		this.isRename = true;
		console.log(222);
	    var selectArr = whoSelect();
	    if (selectArr.length === 0) {
	    	tooltip('warning','请选择文件');
	    	this.isRename = false;
	    }else if(selectArr.length > 1){
	    	tooltip('warning','只能对单个文件进行重命名');
	    	this.isRename = false;
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
			fileEditor.focus();
			fileEditor.select();
			
			//阻止冒泡,
			
			tools.addEvent(fileEditor,'click',function (ev){
			    ev.stopPropagation();
			});
			tools.addEvent(fileEditor,'mousedown',function (ev){
			    ev.stopPropagation();
			});
			console.log(this.isRename);
	    }
	});    
    //12.1 点击document判断是否命名成功
	tools.addEvent(document,'mousedown',function (){
	    console.log(111,rename.isRename);
	    //doucument,多个down事件的时候，有相互影响，为了区分开相互影响，是在新建的时候，引入一个状态监听
	    if (rename.isRename) { //如果是在在重命名状态
	    	console.log(333);
	    	var selectFile = whoSelect()[0];
	    	var fileTitle = tools.$('.file_title',selectFile)[0];
			var fileEditor = tools.$('.file_editor',selectFile)[0];
			
			//获取input的value
			var fileEditorVal = fileEditor.value.trim();
			console.log(fileEditor.value)
			//获取重命名文件的pid,就是找到所在父层的id
			var pid = treeMainPath.lastElementChild.dataset.fileId;
			
			//下面代码是判断是否命名成功
			//如果有重名，命名不成功
			console.log(fileEditorVal , fileTitle.innerHTML , 1+fileEditor.value);
			if (fileEditorVal === fileTitle.innerHTML) {console.log(31);
				console.log(fileEditor,fileTitle);
				fileEditor.style.display = 'none';
				fileTitle.style.display = 'block';
				console.log(fileEditor,fileTitle);
			}else if(dataAction.reName(datas,pid,fileEditorVal) && fileEditorVal !== fileTitle.innerHTML){
				fileEditor.style.display = 'none';
				fileTitle.style.display = 'block';
				console.log(3);
				//弹框提示重命名失败
				tooltip('error','重名，重命名失败');
			} else {console.log(2);
				//命名成功
				fileTitle.innerHTML = fileEditorVal;
				fileEditor.style.display = 'none';
				fileTitle.style.display = 'block';
				
				//数据库中此条文件数据信息title变化
				var renameData = dataAction.getDataById(datas,selectFile.dataset.fileId)
				renameData.title = fileEditorVal;
				
				//弹框提示重命名成功
				
				tooltip('ok','文件重命名成功');
				
				//数据库中数据改变，对应的三块内容都要从新渲染
				var fileId = pid;
				//重新渲染，
				renderFileMenuPath(fileId);
			}
			//命名结束，把状态改过来
			rename.isRename = false;
			console.log(rename.isRename);
	    }
	});
    
   	//13、移动到
   	tools.addEvent(move,'click',function (){
   	    var selectArr = whoSelect();
   	    if (selectArr.length === 0) {
   	    	tooltip('warning','请选择要移动的文件');
   	    } else{
   	    	//出现弹框
   	    	//监听正在移动
   	    	this.isMove = true;
   	    	var moveId = 0;
   	    	var isMove = true;
   	    	
   	    	//找到第一个title
   	    	var title = dataAction.getDataById(datas,selectArr[0].dataset.fileId).title;
   	    	
   	    	//调用插件粗线谈框
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
   	    			    			//把不重名的数据的pid改为要移动到文件的id
   	    			    			getData.pid = moveId;
   	    			    		}
   	    			    	}
   	    			    	
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
   	    	//利用时间委托给dirTree
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
   	});
	 

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
    	mainMenuWrap.style.height = document.documentElement.clientHeight - frameHeaderH - mainToobarH +'px';
        treeMenu.style.height = document.documentElement.clientHeight - frameHeaderH - mainToobarH +'px';
	    //动态计算高度
	    window.onresize = function (){
	        mainMenuWrap.style.height = document.documentElement.clientHeight - frameHeaderH - mainToobarH +'px';
	        treeMenu.style.height = document.documentElement.clientHeight - frameHeaderH - mainToobarH +'px';
	    }
	}
	
	
	//3封装函数，通过对应的fileid来渲染三部分内容
	function renderFileMenuPath(fileId){
		//渲染文件区域
		treeFileCont.innerHTML = view.creatTreeFileCont(datas,fileId);
		//渲染导航区域
		treeMainPath.innerHTML = view.creatTreeMainPath(datas,fileId);
		//渲染树形菜单区域
		treeMenu.innerHTML = view.creatTreeMenuHtml(datas,defaultId);
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
	    if (Math.abs(ev.clientX - disX)>20 || Math.abs(ev.clientY - disY)) {
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
	    		treeFileItems[i]
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
		
	    //出现剪影的背景，根据拖拽的个数而定
	    //把选中的拖拽到对应文件夹，本质是把选中文件的pid改为对应文件夹的id,同时检测这个pid内是否已经存在这写个文件
	    if (Math.abs(ev.clientX - disX)>10 || Math.abs(ev.clientY - disY)>10) {
	    	//如果不存在剪影，，就创建
	    	if (!cutShadow) {
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
		    cutShadow.style.left = ev.clientX + 13 +'px';
		    cutShadow.style.top = ev.clientY + 13 + 'px';
		    
		    tips.style.left = ev.clientX +'px';
		    tips.style.top = ev.clientY +'px';
	    }
	    
	    //拖拽时，如果没被选中的话，就添加class被选中，其他被选中的不被选中
	    if (!tools.hasClass(shadowTarget,'checked')) {
	    	//暴力清空，自己添加选中class
	    	unselect();
	    	console.log(1);
	    	tools.addClass(shadowTarget,'checked');
	    	var checkbox = shadowTarget.firstElementChild;
	    	tools.addClass(checkbox,'checked');
	    }
	    
	    //拖拽过程中，剪影的内容构造
	    var selectArr = whoSelect(),
	    	sum = tools.$('.sum',cutShadow)[0],
	    	icons = tools.$('.icons',cutShadow)[0],
	    	str = '';
	    
	    //通过查看选中的个数生成剪影的个数
	    var len = selectArr.length ;
	    for (var i = 0; i < len; i++) {
	    	str += '<i class="icon icon'+i+' filetype icon-folder"></i>'
	    }
//	    console.log(sum,len,icons);
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
	    			console.log(getData);
	    			getData.pid = pengId;
	    		}
	    	}
	    	//这里是弹框提示
	    	if(n === selectArr.length){
	    		tooltip("ok","移动成功");
	    	}else {
	    		tooltip("warning","部分移动失败,有重名文件");
	    	}
	    	
	    	//调用函数根据更改后的数据，重新渲染三部分区域(开始渲染)
	    	renderFileMenuPath(pengId);
	    	
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
	}
})();
