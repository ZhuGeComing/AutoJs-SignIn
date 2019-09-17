requestScreenCapture();
//截图

function fresh(){
    click(1050, 195)
    sleep(1000)
    click(421, 1632)
    sleep(1100)
}

var img = captureScreen();
var point = findColor(img, "#00d2be", {
region: [23, 960, 1020, 400],
threshold: 4
});
if(point){
    toast("找到啦:" + point);
    click(point.x+50,point.y+50)
    sleep(500)
    click(225, 662)
    sleep(500)
    descEndsWith("时间").findOne().click()
    // sleep(500) 
    // click(792, 1806)
    sleep(500)
    descStartsWith("获取").click()
}


while(true){
    var img = captureScreen();
    if(images.detectsColor(img, "#ffcc80", 121, 102, 30)){
        sleep(500)
        click(922, 121)
        break
    }
    else{
    }
        sleep(1000)
}
sleep(1000)
textStartsWith("请输入").setText(getClip())

// descStartsWith("确定").click()