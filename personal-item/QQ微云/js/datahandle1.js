var dataAction = (function (){
    return {
    	//找到指定id下的所有子数据
    	getChildsById:function (datas,id){
    		var arr = [];
    		for (var i = 0; i < datas.length; i++) {
    			if(datas[i].pid == id){
    				arr.push(datas[i]);
    			}
    		}
    		return arr;
    	},
    	//找到指定id的数据及所有祖先数据
    	getParentsById : function (datas,id){
    		var arr = [];
    		for (var i = 0; i < datas.length; i++) {
    			if (datas[i].id == id) {
    				arr.push(datas[i]);
    				//arr.concat()不改变原数组，返回拼接好的新数组
    				arr = arr.concat(dataAction.getParentsById(datas,datas[i].pid));
    			}
    		}
    		return arr;
    	},
    	
    	//找到指定id的数据，及所有子数据
    	getChildsAll:function (datas,id){
    	    var arr = [];
    	    for (var i = 0; i < datas.length; i++) {
    	    	if(datas[i].id == id){
    	    		arr.push(datas[i]);
    	    		var childs = dataAction.getChildsById(datas,datas[i].id)
    	    		for (var j = 0; j < childs.length; j++) {
    	    			arr = arr.concat(dataAction.getChildsAll(datas,childs[j].id))
    	    		}
    	    	}
    	    }
    	    return arr;
    	}
    	,
    	//找到指定ID的项在那个层级（梯队），处理缩进问题
    	getLevel:function (datas,id){
    		return	dataAction.getParentsById(datas,id).length;	     
    	},
    	//判断是否有子集，处理是否添加图标
    	hasChilds:function (datas,id){
    		return !!dataAction.getChildsById(datas,id).length;
    	},
    	
    	//获取指定id,对应的数据
    	getDataById : function(datas,id){
    		for (var i = 0; i < datas.length; i++) {
    			if (datas[i].id == id) {//注意数据类型
    				console.log(typeof datas[i].id ,typeof id);
    				return datas[i];
    			}
    		}
    		return null;
    	},
    	
    	//判断是否重名
    	reName : function (datas,pid,title){
    	    var childs = dataAction.getChildsById(datas,pid);
    	    for (var i = 0; i < childs.length; i++) {
    	    	if (childs[i].title === title ) {
    	    		return true;
    	    	}
    	    }
    	    return false;
    	},
    	
    	//批量删除指定id下面的所有子集
    	//idArr 是一个id,集合,里面是要删除数据的id
    	batchDelect:function (datas,idArr){
    		for (var i = 0; i < idArr.length; i++) {
    			var childsAll = dataAction.getChildsAll(datas,idArr[i]);
    			for (var j = 0; j < childsAll.length; j++) {
	    			for (var k = 0; k < datas.length; k++) {
	    				if (childsAll[j].id == datas[k].id ) {
	    					datas.splice(k,1);
	    					break;
	    				}
	    			}
    			}
    		}    
    	},
    	
    	//找到对应的父级
    	getParent:function (datas,id){
        	var parents = dataAction.getParentsById(datas,id);

        	return parents[1];
        }
    	
    	
    	
    	
    }
}())
