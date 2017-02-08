//画地图必须要经纬度数据
//申请百度开发者密钥
var token =	'RVmaXUa1eGW88dkTl7wrQ1OGTNXEL3Ac';
//获取url
var url = 'http://api.map.baidu.com/geocoder/v2/?output=json&ak='+token+'&address=';
//发送请求的参数
var placeInput = $('#place-input'),
	searchBtn = $('#search-btn');
var myChart = echarts.init(document.getElementById('main'),'dark');
//要想动态的添加渲染数据，先定义一个数据仓库
var chartData = [];
//一开始先渲染出地图
drawMap();
searchBtn.click(function (){
    var place = placeInput.val();
    if (place) {
    	myChart.showLoading();
	    $.getJSON(url+place+'&callback=?',function (res){
	    	var loc;
	    	if (res.status===0) {
	    		myChart.hideLoading();
	    		loc = res.result.location;
	    		chartData.push({
	    			name:place,
	    			value:[loc.lng,loc.lat]
	    		});
	    		myChart.setOption({
	    			series: [{
			            // 根据名字对应到相应的系列
			            name: '要去的地方',
			            data:chartData
			        }]
	    		});
	    	} else {
	    		alert('百度没有找到对应的地址信息')
	    	}
	    })
    }
});
function drawMap(){
    var option = {
    	title:{
			text: '2017年去哪儿',
	        subtext: '请输入你要去的地方，自动记录',
	        x:'center',
	        textStyle: {
	            color: '#fff'
	        }			    		
    	},
    	tooltip:{
	        trigger: 'item',
	        formatter: function (params) {
	            return params.name;
	        }
    	},
    	toolbox:{
    		show:true,
    		feature:{
    			saveAsImage:{
    				show:true
    			}
    		}
    	},
    	legend:{
    		orient: 'vertical',
	        y: 'bottom',
	        x:'right',
	        data:['要去的地方'],
	        textStyle: {
	            color: '#fff'
	        }
    	},
    	visualMap:{
    		min:0,
    		max:500,
    		calculable:true,
    		inrange:{
    			color: ['#121122', 'rgba(3,4,5,0.4)', 'red']
    		},
    		realtime:true,
    		dimension:0,
    		textStyle: {
	            color: '#fff'
	        }
    	},
    	geo:{
    		map:'china',
    		label:{
	            emphasis: {
	                show: false
	            }
			},
			itemStyle: {
	            normal: {
	                areaColor: '#323c48',
	                borderColor: '#111'
	            },
	            emphasis: {
	                areaColor: '#2a333d'
	            }
	        }
    	},
    	series:[
    	{
    		name:"要去的地方",
    		type:'scatter',
    		coordinateSystem:'geo',
    		data:chartData,
    		symbolSize:12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
    	}]
    }
    myChart.setOption(option);
}
