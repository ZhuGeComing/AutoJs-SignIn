
launchApp("飞猪")
waitForPackage("com.taobao.trip")

sleep(5000)
click(965,2285)
sleep(3000)
click(931,637)
sleep(3000)
click(873,360)
sleep(2000)


var temp = text('立即签到').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(2000)

var i = 0
while(i<2){
    var temp = text('+2里程').findOne().bounds()
    click(temp.centerX(), temp.centerY())
    sleep(6000)
    
    var temp = text('立即领奖').findOne().bounds()
    click(temp.centerX(), temp.centerY())
    sleep(2000)
    
    var temp = text('开心收下').findOne().bounds()
    click(temp.centerX(), temp.centerY())
    sleep(2000)
    
    back()
    sleep(3000)
    i = i+1
}

var temp = text('+2里程').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(2000)

var temp = descContains('直播中').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(11000)

var temp = text('立即领奖').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(2000)

var temp = text('开心收下').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(2000)

back()
sleep(2000)
back()
sleep(3000)


var i = 0
while(i<2){
    var temp = text('+2里程').findOne().bounds()
    click(temp.centerX(), temp.centerY())
    sleep(6000)
    
    var temp = text('立即领奖').findOne().bounds()
    click(temp.centerX(), temp.centerY())
    sleep(2000)
    
    var temp = text('开心收下').findOne().bounds()
    click(temp.centerX(), temp.centerY())
    sleep(2000)
    
    back()
    sleep(3000)
    i = i+1
}




// var temp = text(key).findOne().bounds()
// }
// j = j+1
// click(temp.centerX(), temp.centerY()) 