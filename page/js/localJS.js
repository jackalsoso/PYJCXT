var baseUrl = "http://47.111.247.216/suzhou/";


function isJSON(str) {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == 'object' && obj) {
                return true;
            } else {
                return false;
            }

        } catch (e) {
            console.log('error：' + str + '!!!' + e);
            return false;
        }
    }
}

function load(url) {
    location.href = url;
}

//写cookies 
function setCookie(name, value) {
    if (typeof (value) != 'string') {
        localStorage.setItem(name, JSON.stringify(value))
    }
    else {
        localStorage.setItem(name, value)
    }
}

//读取cookies 
function getCookie(name) {
    var result = localStorage.getItem(name);
    if (isJSON(result)) {
        return JSON.parse(result)
    } else {
        return result;
    }
}

//删除cookies 
function deleteCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function logout() {
    deleteCookie("token")
    load('../login.html')
}

var pageLayout = null;
var pageLayouts = [
    {//<1600
        "main": {
            leftW: 162,
        },
        "time": {
            chartW: 800,
            chartH: 400,
        },
        "statistics": {
            chartHFactor: 1,
        },
        "vehicle": {
            leftW: 162,
        },
    },
    {//1600~1920
        "main": {
            leftW: 262,
        },
        "time": {
            chartW: 900,
            chartH: 450,
        },
        "statistics": {
            chartHFactor: 2,
        },
        "vehicle": {
            leftW: 262,
        },
    },
    {//>=1920
        "main": {
            leftW: 362,
        },
        "time": {
            chartW: 1000,
            chartH: 500,
        },
        "statistics": {
            chartHFactor: 2,
        },
        "vehicle": {
            leftW: 362,
        },
    }
]
function getLayout() {
    if (window.innerWidth < 1024) {
        pageLayout = pageLayouts[0]
        alert('分辨率过低，可能出现无法正常显示的情况，建议更换显示器')
        // }else if(window.innerWidth<1366){
        //     pageLayout = pageLayouts[0]
    } else if (window.innerWidth < 1600) {
        pageLayout = pageLayouts[0]
    } else if (window.innerWidth < 1920) {
        pageLayout = pageLayouts[1]
    } else {
        pageLayout = pageLayouts[2]
    }
}
getLayout()
