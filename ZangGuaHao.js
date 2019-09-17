requestScreenCapture();


textEndsWith("点击\n预约").findOne(5000).click()
sleep(2000)
textContains("08:00").findOne(6000).click()
textEndsWith("时间").findOne(5000).click()
sleep(2000)
textStartsWith("获取").findOne(5000).click()
    
while(true){
    if(images.detectsColor(captureScreen(), "#ffcc80", 121, 102, 30)){
        sleep(400)
        click(922, 121)
        sleep(400)
        break
    }
    else{
    }
    sleep(1000)
}

textStartsWith("请输入").setText(getClip())

// textStartsWith("确定").click()

