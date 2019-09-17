requestScreenCapture();
// 
// 
while(true){
    var temp = images.read("/sdcard/fooViewSave/1.jpg")
    var p = findImage(captureScreen(), temp)
    var i = 0
    if(p){    
        id("rightButton").findOne().click()
        sleep(200)
        if(p){
            swipe(579, 750, 579, 700, 25)
        }
    }
    else{
        swipe(579, 750, 579, 700, 25)
    }
 
    
}

