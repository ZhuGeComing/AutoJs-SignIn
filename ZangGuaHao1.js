requestScreenCapture();


// textEndsWith("点击\n预约").findOne(5000).click()
// sleep(1000)
// textContains("08:00").findOne(6000).click()
// textEndsWith("时间").findOne(5000).click()
// sleep(2000)
// textStartsWith("获取").findOne(5000).click()
    
// var temp = images.read("/sdcard/fooViewSave/mms.jpg")
// var p = findImage(captureScreen(), temp)
// while(true){
//     if(p){
//         sleep(400)
//         click(95, 312)
//         sleep(300)
//         break
//     }
//     sleep(500)
//     var p = findImage(captureScreen(), temp)
// }


textStartsWith("请输入").setText(getClip())

// textStartsWith("确定").click()