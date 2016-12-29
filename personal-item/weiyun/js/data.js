
/*
	第一层的id为 0
	
	每一个文件是一个对象，这个对象包含的是一个文件的信息

	{
		id:0,          文件的id
		pid:-1,        父数据的id
		title:"微云",  文件的名
		type:"file"    文件的类型
	}

*/



var data = 
	[
		{
			id:0,
			pid:-1,
			title:"微云",
			type:"file"
		},
		{
			id:1,
			pid:0,
			title:"文档",
			type:"file"
		},
		{
			id:2,
			pid:0,
			title:"视频",
			type:"file"
		},
		{
			id:3,
			pid:0,
			title:"音乐",
			type:"file"
		},
		{
			id:4,
			pid:0,
			title:"图片",
			type:"file"
		}
		
	]
