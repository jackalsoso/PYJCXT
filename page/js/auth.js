function getBridgeInfo(){
	return getCookie('bridge')
}
function getBridgeId(){
	return getCookie('bridgeId')
}
// function getCookie(name){
// 	return parent.getCookie(name);
// }
// function setCookie(name,value) {
// 	setCookie(name,value)
// }
// function deleteCookie(name){
//     deleteCookie(name)
// }
function exit(){
    parent.exit()
}
function logout(){
    parent.logout()
}
function load(url){
    parent.load(url)
}
function chooseFile(callback,type){
    parent.chooseFile(callback,type)
}
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}
function getResourceUrl(filePath,fileType,type){
    return baseUrl+"resource/getPicture?Authorization=Bearer "+token+"&filePath="+encodeURI(filePath)+"&fileType="+fileType+"&type="+type+'&tttt='+randomNum(-1000000,1000000)
}
function WGLDebugLog(msg){
    console.log(msg)
}

//预警颜色
var warningColors=['#23D561','#FEFA52','#FFB951','#FA654D'];

var token = getCookie("token");
if(!token){
    alert('登录状态失效，请重新登录');
    load("../login.html")
}
var account = parent.account
var bridgeId = getBridgeId()
var bridge = getBridgeInfo()
var sides = getCookie("bridgeSides")
var side = getCookie("side")
var loads = getCookie("loads")
var laneMap = getCookie("laneMap")
var monitors = getCookie("monitors")
var points = getCookie("points")
var structs = getCookie("structs")
var components = getCookie("components")
if(!points && monitors){
    points = []
    for (let index = 0; index < monitors.length; index++) {
        const m = monitors[index];
        for (let j = 0; j < m.list.length; j++) {
            const mp = m.list[j];
            points.push({name:mp.measurePoint,color:mp.color,type:m.name,x:mp.x,y:mp.y,z:mp.z,memberName:mp.memberName})
        }
    }
    setCookie("points",points)
}
if(!side) side = sides[0]
var baseUrl = parent.baseUrl
//拦截器
if(typeof(axios)!='undefined'){
    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            axiosError(error.response)
        }
    );

    axios.interceptors.request.use(
        config => {
            config.headers.Authorization = "Bearer "+token
            return config
        },
        err => {
            return Promise.reject(err)
        }
    )
}
var isAlerting=false;
var axiosError = function(resp){
    if(isAlerting) return;
    isAlerting = true;
    if(resp.status == 500){
        alert("服务器错误："+resp.data)
    }else if(resp.status == 403 || resp.status == 401){
        alert("您无权访问该页面，请使用有权限的账号登录")
        logout()
    }else if(resp.status == 404){
        alert('服务接口不存在')
    }
    isAlerting = false;
}
