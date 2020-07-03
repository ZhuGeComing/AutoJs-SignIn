requestScreenCapture();

launchApp("学习强国")
sleep(10000)

////////////////// 评论
text("百灵").findOne(3000).parent().parent().click()
sleep(2000)
click(532,2269)
sleep(2000)
click(534,1423)

var i = 0
while(i<2){
    click(534,1423)
    sleep(2000)
    click(213,2283)
    sleep(2000)
    setText("参政议政！共商国是！")
    sleep(2000)
    text("发布").findOne(2000).click()
    sleep(2000)
    i = i+1
    back()
    sleep(2000)
}

////////////////// 收藏

text("百灵").findOne(3000).parent().parent().click()
sleep(2000)
click(532,2269)
sleep(2000)
click(1000,280)
sleep(2000)
click(137,1507)
sleep(2000)
if((new Date().getDate())%2 == 1){
    click(810,478)
}
else{
    click(569,478)
}
sleep(2000)


var i = 0
while(i<2){
    sleep(2000)
    click(489,940)
    sleep(2000)

    var temp = images.read("/sdcard/fooViewSave/xing.jpg")
    var p = findImage(captureScreen(), temp)
    if(p){
        click(p.x+40,p.y+60)
        sleep(2000)
        i = i+1
        back()
        sleep(2000)
        swipe(579, 750, 579, 680, 25)
        sleep(2000)
    }
    else{
        sleep(2000)
        back()
        sleep(2000)
        swipe(579, 750, 579, 680, 25)
        sleep(2000)
    }
}
// back()
sleep(2000)
////////////////// 陕西
back()

text("百灵").findOne(3000).parent().parent().click()
sleep(2000)
click(532,2269)
sleep(2000)
click(1000,280)
sleep(2000)
click(912,429)
sleep(2000)
click(142,596)
sleep(2000)
click(516,783)
sleep(2000)
back()
sleep(2000)

////////////////// 分享
back()
sleep(2000)
text("百灵").findOne(3000).parent().parent().click()
sleep(2000)
click(532,2269)
sleep(2000)
click(1000,280)
sleep(2000)
click(137,1507)
sleep(2000)
if((new Date().getDate())%2 == 1){
    click(810,478)
}
else{
    click(569,478)
}
sleep(2000)

var i = 0
while(i<2){
    click(499,915)
    sleep(2000) 
    click(993,2273)
    sleep(2000)
    click(663,1567)
    sleep(2000)
    click(793,1883)
    sleep(6000)
    back()
    sleep(2000) 
    back()
    sleep(2000)
    i = i + 1
}
back()
sleep(2000)



// //////////////////// 智能答题
// t = 0
// while(t<6){
//     t = 