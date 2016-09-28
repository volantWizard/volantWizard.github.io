/*--------------ID tagName class 获取元素的函数封装----------------------*/
function $(selector,context){
	var firstChar = selector.charAt(0);
	context = context || document;
	if( firstChar === "#" ){
		return document.getElementById(selector.substring(1));
	}else if(firstChar === "."){
		return context.getElementsByClassName(selector.substring(1));
	}else{
		return context.getElementsByTagName(selector);
	}	
}
/*--------------获取css样式里的元素属性----------------------*/
function getStyle(obj,attr){
    return getComputedStyle(obj)[attr];   
}


