//获取元素
var heaIntro = document.getElementsByClassName('hea_intro')[0];
var timeAxis = document.getElementsByClassName('timeAxis')[0];
var cases = document.getElementsByClassName('case')[0];
var project = document.getElementsByClassName('project')[0];


//渲染userinfro
//获取数据
heaIntro.innerHTML = template('user',{userInfo:userInfo});

//渲染timeAxis
timeAxis.innerHTML = template('timeAxis',{timeAxisArr:timeAxisArr});

//渲染cases
cases.innerHTML = template('cases',{casees:casees});

//渲染project
project.innerHTML = template('project',{projects:projects});


