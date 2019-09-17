sleep(1000);
mainEntrence();

function tLog(msg) {
    toast(msg);
    console.log(msg)
}

function prepareThings() {
    //setScreenMetrics(1080, 1920);
    //请求截图
    if (!requestScreenCapture()) {
        tLog("请求截图失败");
        exit();
    }
}

function runThings() {
    var xzxq = dialogs.singleChoice("请选择星期", ["星期三", "星期六"], 0);
    toast("选择了第" + (xzxq + 1) + "个选项");
    var lx = 0;
    var ly = 1400;
    if (xzxq == 0) {
        lx = 510;
    } else {
        lx = 857;
    }
    //每隔一秒检测一次    
    while (true) {
        sleep(1000);
        if (images.detectsColor(captureScreen(), "#00bfa5", lx, ly, 30)) {
            click(lx, ly);
            tLog("点击预约");
            break;
        } else {
            id("tv_refresh_table").findOne().click();
            tLog("刷新");
        }
    }

    while (true) {
        sleep(400);
        if (images.detectsColor(captureScreen(), "#ffffff", 210, 1780, 30)) {
            sleep(200);
            click(210, 1780);
            tLog("点击时间");
            break;
        }
        tLog("寻找时间界面");
    }
    /*
    while (true) {
        sleep(400);
        if (images.detectsColor(captureScreen(), "#00bfa5", 630, 1840, 30)) {
            sleep(200);
            click(630, 1840);
            tLog("点击下一步");
            break;
        }
        tLog("寻找下一步界面");
    }

    while (true) {
        sleep(400);
        if (images.detectsColor(captureScreen(), "#00bfa5", 630, 1840, 30)) {
            sleep(200);
            click(630, 1840);
            tLog("点击确认");
            break;
        }
        tLog("寻找下一步界面");
    }
*/
}

function whenComplete() {
    tLog("结束");
    exit();
}
function mainEntrence() {
    //前置操作
    prepareThings();
    //开始挂号
    runThings();
    //结束
    whenComplete();
}








