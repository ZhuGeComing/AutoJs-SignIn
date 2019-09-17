requestScreenCapture();
var i = 1
while(i<20){
    var a = textContains('2019-').findOne().bounds()
    if(a.centerY()<400){
        swipe(579, 750, 579, 680, 25)
        sleep(2000)
    }
    click(500, a.centerY())
    // toast(a.centerY())

    var j = 1
    while(j<2){
        j = j+1
        sleep(7277)
        toast("第"+i+"个文章")
    }
    back()
    sleep(2000)
    


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

