requestScreenCapture();
var i = 1
while(i<30){
    var a = textContains('2019-').findOne().bounds()
    if(a.centerY()<370){
        swipe(579, 750, 579, 720, 25)
        sleep(2000)
    }
    click(500, a.centerY())


    var j = 1
    while(j<7){
        j = j+1
        // var a = text("重新播放").findOne(2000)
        // if(a){
        //     a.parent().click()
        // } 
        sleep(1027.7)
        // toast(j)
    }
    back()
    sleep(2000)
    toast("第"+i+"个视频")


    var a = textContains('2019-').findOne().bounds()
    var first = a.centerY()
    sleep(1000)
    swipe(579, 750, 579, 695, 25)
    sleep(2000)
    var a = textContains('2019-').findOne().bounds()
    var second = a.centerY()
    // toast(first - second)
    if(first - second == 371){
        swipe(579, 750, 579, 685, 25)
        sleep(2000)
    }

    i = i+1


}

