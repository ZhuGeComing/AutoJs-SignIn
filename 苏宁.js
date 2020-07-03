
launchApp("苏宁易购")
sleep(10000)
click(530, 1131)
sleep(2000)
click(426, 333)
sleep(2000)
click(593, 306)
sleep(10000)

requestScreenCapture()
var temp = images.read("/sdcard/fooViewSave/zuan.jpg")
var p = findImage(captureScreen(), temp)
while(p){
    click(p.x+20,p.y+30)
    sleep(3000)
    var p = findImage(captureScreen(), temp)
}

click(905, 1307)
sleep(3000)
click(213, 1282)
sleep(5000)
