auto;
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

function registEvent() {
    //启用按键监听
    events.observeKey();
    //监听音量上键按下
    events.onKeyDown("volume_down", function (event) {
        tLog("脚本手动退出");
        exit();
    });
}

function runThings() {
    //每隔一秒检测一次
    while (true) {
        sleep(1000);
        if (textEndsWith("点击\n预约").exists()) {
            tLog("点击预约");
            textEndsWith("点击\n预约").find().forEach(function (pos) {
                var posb = pos.bounds();
                click(posb.centerX(), posb.centerY());
            });
            break;
        }
        else {
            if (textEndsWith("刷新").exists()) {
                tLog("刷新");
                textEndsWith("刷新").find().forEach(function (pos) {
                    var posb = pos.bounds();
                    click(posb.centerX(), posb.centerY());
                });
            }
        }
    }
    //找到时间
    var ltime = "12:00";
    while (true) {
        sleep(500);
        if (textContains("12:00").exists()) {
            ltime = "12:00";
            break;
        }
        else {
            if (textContains("17:30").exists()) {
                ltime = "17:30"
                break;
            }
        }
        tLog("寻找时间");
    }
    //选择时间
    textContains(ltime).findOne(2000).click();
    tLog(ltime);
    sleep(200);
    //点击时间
    textEndsWith("时间").findOne(2000).click();
    tLog("点击时间");
    while (!textStartsWith("获取").exists()) {
        sleep(500);
        tLog("获取验证码界面");
    }
    //获取验证码
    textStartsWith("获取").findOne(8000).click();
    tLog("点击获取验证码");

    while (true) {
        if (images.detectsColor(captureScreen(), "#ffcc80", 121, 102, 30)) {
            sleep(400);
            click(922, 121);
            tLog("得到验证码");
            break;
        }
        else {
            tLog("等待验证码");
            sleep(500);
        }
    }
    //输入验证码
    sleep(600);
    textStartsWith("请输入").setText(getClip());
    tLog("输入验证码");
    sleep(200);
    //textStartsWith("确定").click();
    tLog("点击确定");
}

function whenComplete() {
    tLog("结束");
    exit();
}
function mainEntrence() {
    //前置操作
    prepareThings();
    //注册音量下按下退出脚本监听
    registEvent();
    //开始挂号
    runThings();
    //结束
    whenComplete();
}








