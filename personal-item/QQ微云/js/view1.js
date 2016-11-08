var view = (function (){
    return {
    	//根据数据，生成单个文件的结构
    	creatTreeFileItem:function (item){
    	    var html = '<div class="tree_file_item" data-file-id = "'+item.id+'">\
							<label></label>\
							<span class="">\
								<i></i>\
							</span>\
							<strong class = "file_title">'+item.title+'</strong>\
							<input type="text" name="txt" id="" value="" class="hide file_editor"/>\
						</div>';
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
    	
    	//根据给定的单条数据，生成单个数据对应的一系列的树形项
    	creatTreeMenuLi : function (datas,treeChilds){
    		var level = dataAction.getLevel(datas,treeChilds.id);
    		var hasChild = dataAction.hasChilds(datas,treeChilds.id);
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
    	    	html += view.creatTreeMenuLi(datas,treeChilds[i]);
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
    	moveDialogHtml:function (title){
    	    var html = '<p class="dir-file">\
                <span class="file-img"></span>\
                <span class="file-name">'+title+'</span>\
                <span class="file-num"></span>\
            </p>\
            <div class="dir-box">\
                <div class="cur-dir">\
                    <span>移动到：</span><span class="fileMovePathTo">111</span>\
                </div>\
                <div class="dirTree"></div>\
            </div>';
    	    return html;
    	}
    	
    	
    
    }
   	
    
    
    
    
})();
 
   