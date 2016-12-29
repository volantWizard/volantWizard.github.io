var view = (function (){
    return {
    	//判断文件类型
    	judgeFileType: function(type){
    		var regVideo = /video\/\w+/g;
    		var regImage = /image\/\w+/g;
    		var regAudio = /audio\/\w+/g;
    		var regMsword = /\w+\/(msword)$/g;
    		var regMsexcel = /\w+\/(msexcel)$/g;
    		var regPdf = /\w+\/(pdf)$/g;
    		var regText = /text\/\w+$/g;
    		if (regVideo.test(type)) {
    			newClassName = 'videoType';
    			return newClassName;
    		}
    		if (regImage.test(type)) {
    			newClassName = 'imageType';
    			return newClassName;
    		}
    		if (regAudio.test(type)) {
    			newClassName = 'audioType';
    			return newClassName;
    		}
    		if (regMsword.test(type)) {
    			newClassName = 'mswordType';
    			return newClassName;
    		}
    		if (regMsexcel.test(type)) {
    			newClassName = 'msexcelType';
    			return newClassName;
    		}
    		if (regPdf.test(type)) {
    			newClassName = 'pdfType';
    			return newClassName;
    		}
    		if (regText.test(type)) {
    			newClassName = 'textType';
    			return newClassName;
    		}
    	},
    	
    	//根据数据，生成单个文件的结构
    	creatTreeFileItem:function (item,onOff){
    		//判断数据的类型,生成不同的class/结构
    		var str = onOff==true?
    		`<div class="recycle-btn">
							<div class="mask"></div>
							<div class="btn-cont">
								<i class="recover" title="恢复"></i>
								<i class="delect-thorough" title="彻底删除"></i>
							</div>
						</div>` : '';
    		var newClassName  = view.judgeFileType(item.type) || '';
    		if (/image\/\w+/g.test(item.type)) {
    			var html = '<div class="tree_file_item '+newClassName+'" data-file-id = "'+item.id+'">\
							<label></label>\
							<span class="">\
								<i>\
									<img src="'+item.dataEncode+'"/>\
								</i>\
							</span>\
							<strong class = "file_title">'+item.title+'</strong>\
							<input type="text" name="txt" id="" value="" class="hide file_editor"/>\
							'+str+'\
						</div>';
    			
    		}else {
	    	    var html = '<div class="tree_file_item '+newClassName+'" data-file-id = "'+item.id+'">\
								<label></label>\
								<span class="">\
									<i></i>\
								</span>\
								<strong class = "file_title">'+item.title+'</strong>\
								<input type="text" name="txt" id="" value="" class="hide file_editor"/>\
								'+str+'\
							</div>';
    		}
    	    return html;
    	},
    	
    	//1.1 封装遍历数据后，生成全部内容结构的函数
		//参数说明：datas：操作的数据,pid：指定要渲染的pid
		creatTreeFileCont : function (datas,pid){
			var html = '';
			for (var i = 0; i < datas.length; i++) {
				if(datas[i].pid == pid){
					html += view.creatTreeFileItem(datas[i]);
				}
			}
			return html;
		},
		
		////1.2 封装遍历数据后，生成指定逻辑条件的全部内容结构的函数
		//参数说明：datas：操作的数据,pid：指定要渲染的pid,inputKey:输入数据的key值,targetValue：比较的目标值,logic:逻辑运算符,
		creatConditionTreeFileCont : function (datas,pid,inputKey,targetValue,logic){
			var html = '';
			if (logic == '>') {
				var condient = function (i){
				    return datas[i][inputKey] > targetValue ;
				}
			}else if(logic == '=='){
				var condient = function (i){
				    return datas[i][inputKey] == targetValue ;
				}
			}else if(logic=='doc'){
				var condient = function (i){
					var regMsword = /\w+\/(msword)$/g;
		    		var regMsexcel = /\w+\/(msexcel)$/g;
		    		var regPdf = /\w+\/(pdf)$/g;
		    		var regText = /text\/\w+$/g;
				    return  regMsword.test(datas[i][inputKey]) ||regMsexcel.test(datas[i][inputKey])||regPdf.test(datas[i][inputKey])||regText.test(datas[i][inputKey]);
				}
			}else if(logic =='image'){
				var condient = function (i){
					var regImage = /image\/\w+/g;
				    return regImage.test(datas[i][inputKey]) ;
				}
			}else if(logic =='audio'){
				var condient = function (i){
					var regAudio = /audio\/\w+/g;
				    return regAudio.test(datas[i][inputKey]) ;
				}
			}else if(logic =='video'){
				var condient = function (i){
					var regVideo = /video\/\w+/g;
				    return regVideo.test(datas[i][inputKey]) ;
				}
			}else if(logic =='recycle'){
				
				console.log(datas);
				for (var i = 0; i < datas.length; i++) {
					var onOff = true ;
					for (var j = 0; j < datas.length; j++) {
						console.log(datas[i].pid , datas[j].id);
						if (datas[i].pid === datas[j].id && i !=j) {
							//所有的比较,都没有相同了,才能渲染
							onOff = false ;
							break;
						}
					}
					if (onOff) {
						console.log(112);
						html += view.creatTreeFileItem(datas[i],true);
					}
				}
				return html;
			}else if(logic =='search'){
				var condient = function (i){
				    return (datas[i][inputKey]).indexOf(targetValue) != -1 ;
				}
			}
			for (var i = 0; i < datas.length; i++) {
				if(condient(i)){
					if (datas[i].type !== 'file') {
						html += view.creatTreeFileItem(datas[i]);
					}
				}
			}
			return html;
		},
    	
    	//1.3 内容为空时，生成的内容结构
    	creatEmptyTreeFileCont:function(className,title,txt){
    		return `<div class="empty-box">
			    	<div class="status-inner">
			    		<i class="icon ${className}"></i>
			    		<h2 class="title">${title}</h2>
			    		<p class="txt">${txt}</p>
			    	</div>
			    </div>`;
    	},
    	
    	//1.4生成预览结构
    	creatPreviewCont:function(data,itemId){
    		//传入id,就自动能判断,不同的数据类型
    		var datas = dataAction.getDataById(data,itemId);
    		var fileType = datas.type;
    		console.log(datas,itemId);
    		var dataEncode = datas.dataEncode;
//  		console.log(typeof dataEncode);
    		var regImage = /image\/\w+/g;
    		var regMsword = /\w+\/(msword)$/g;
    		var regMsexcel = /\w+\/(msexcel)$/g;
    		var regPdf = /\w+\/(pdf)$/g;
    		var regText = /text\/\w+$/g;
    		var regVideo = /video\/\w+/g;
    		if (regImage.test(fileType)) {
    			
    			return `<img src="${dataEncode}"/>` ;
    		} else if(regMsword.test(fileType) ||regMsexcel.test(fileType)||regPdf.test(fileType)||regText.test(fileType)){
    			var newArr = dataEncode.split('\n');
    			console.log(newArr);
    			var inner = '';
    			for (var i = 0; i < newArr.length; i++) {
    				inner += `<p>${newArr[i]}</p>`;
    			}
    			return `<div class="inner-wrap">${inner}</div>` ;
    		}else if(regVideo.test(fileType)){
    			return `<video class="play-v" controls src="${dataEncode}"/>` ;
    		}
    		
    	},
    	
    	//根据给定的单条数据，生成单个数据对应的一系列的树形项
    	creatTreeMenuLi : function (datas,treeChilds){
    		var level = dataAction.getLevel(datas,treeChilds.id);
    		var hasChild = dataAction.hasFileChilds(datas,treeChilds.id);
    		//新增加的class,是添加在父级身上还是自己身上
    		var treeContro = hasChild ? 'icon_open' : '';
    		var html = '';
    		var html = '<li>\
							<div data-file-id ="'+treeChilds.id+'" class="tree_item '+treeContro+'" style="padding-left:'+level*14+'px;">\
								<a href="javascript:;" class="link pr">\
									<i class=""></i>\
									<span class="title">'+treeChilds.title+'</span>\
								</a>\
							</div>';
			html += view.creatTreeMenuHtml(datas,treeChilds.id);
			
			html += '</li>';
			
			return html;
    	},
    	
    	//给定数据和指定的id\生成对应的treeMenu,html结构(不包括自身)
    	creatTreeMenuHtml : function (datas,id){
    	    var treeChilds = dataAction.getChildsById(datas,id);
    	    var html = '<ul>';
    	    
    	    for (var i = 0; i < treeChilds.length; i++) {
    	    	//是文件类型的才渲染
    	    	if ( treeChilds[i].type === 'file' ) {
	    	    	html += view.creatTreeMenuLi(datas,treeChilds[i]);
    	    	}
    	    }
    	    
    	    html += '</ul>';
    	    return html;
    	},
    
    	//指定数据,生成文件路径部分
    	creatTreeMainPath : function (datas,id){
    		//把数据反转过来
    		var parentDatas = dataAction.getParentsById(datas,id).reverse();
    		var zIndex = parentDatas.length*10;
    		var html = '';
    		for (var i = 0; i < parentDatas.length; i++) {
    			var cur = i ===  (parentDatas.length-1) ? 'current' : '';
    			html += '<span class="path '+cur+' fl pr" data-file-id = "'+parentDatas[i].id+'" style="z-index:'+(zIndex--)+';">'+parentDatas[i].title+'</span>';
    		}
    		return html;	
    	},
    	
    	//生成移动到的路径结构
    	creatFileMovePath : function(datas,id){
    		//把数据反转过来
    		var parentDatas = dataAction.getParentsById(datas,id).reverse();
    		var html = '';
    		for (var i = 0; i < parentDatas.length; i++) {
    			html += parentDatas[i].title + '\\' ;
    		}
    		html = html.slice(0,-1);
    		console.log(html);
    		return html ;
    	},
    	
    	//生成剪影结构
    	moveCreatShadow : function (){
    	    var newDiv = document.createElement('div');
    	    var html = '<div class = "icons">'
    	    			+'<i class="icon icon0 filetype icon-folder"></i>'  
                        +'</div>'
                        +'<span class="sum">1</span>';
            newDiv.innerHTML = html;
            newDiv.className = 'drag-helper ui-draggable-dragging';
            return newDiv;
    	},
    	
    	//生成移动到的文件结构
    	moveDialogHtml:function (title,type){
    		var newClassName = '';
    		var regVideo = /video\/\w+/g;
    		var regImage = /image\/\w+/g;
    		var regAudio = /audio\/\w+/g;
    		var regMsword = /\w+\/(msword)$/g;
    		var regMsexcel = /\w+\/(msexcel)$/g;
    		var regPdf = /\w+\/(pdf)$/g;
    		if (regVideo.test(type)) {
    			newClassName = 'videoType';
    		}
    		if (regImage.test(type)) {
    			newClassName = 'imageType';
    		}
    		if (regAudio.test(type)) {
    			newClassName = 'audioType';
    		}
    		if (regMsword.test(type)) {
    			newClassName = 'mswordType';
    		}
    		if (regMsexcel.test(type)) {
    			newClassName = 'msexcelType';
    		}
    		if (regPdf.test(type)) {
    			newClassName = 'pdfType';
    		}
    	    var html = '<p class="dir-file">\
                <span class="file-img '+newClassName+'"></span>\
                <span class="file-name">'+title+'</span>\
                <span class="file-num"></span>\
            </p>\
            <div class="dir-box">\
                <div class="cur-dir">\
                    <span>移动到：</span><span class="fileMovePathTo">请选择要移到的目标文件夹?</span>\
                </div>\
                <div class="dirTree"></div>\
            </div>';
    	    return html;
    	},
    	
    	//生成存储到结构
    	saveDialogHtml:function (title,type){
			var newClassName  = view.judgeFileType(type) || '';
    	    var html = '<p class="dir-file">\
                <span class="file-img '+newClassName+'"></span>\
                <span class="file-name">'+title+'</span>\
                <span class="file-num"></span>\
            </p>\
            <div class="dir-box">\
                <div class="cur-dir">\
                    <span>保存到：</span><span class="fileMovePathTo">选择下面文件夹</span>\
                </div>\
                <div class="dirTree"></div>\
            </div>';
    	    return html;
    	},
	   	//右键菜单
	   	creatContextMenu:function (){
	    	var html = `<li>
		    					<a href="javascript:;">
		    						<span>新建</span>
		    					</a>
		    				</li>
		    				<li>
		    					<a href="javascript:;"><span>删除</span></a>
		    				</li>
		    				<li>
		    					<a href="javascript:;"><span>移动到</span></a>
		    				</li>
		    				<li>
		    					<a href="javascript:;"><span>重命名</span></a>
		    				</li>
		    				`;
	    	return html;
	   	}
    
   }
   	
})();
 
   