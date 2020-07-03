requestScreenCapture();
while(true){
    var temp = images.read("/sdcard/fooViewSave/jingdong.jpg")
    var p = findImage(captureScreen(), temp)
    if(p){
        click(p.x+40,p.y+60)
    }
    sleep(2000)
    back()
    sleep(2000)
    click(546, 1631)
    sleep(2000)
}