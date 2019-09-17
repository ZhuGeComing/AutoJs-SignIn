requestScreenCapture()
home()
launchApp("虾米音乐")
waitForPackage("fm.xiami.main")
sleep(7000)
click(977,2285)
text("养虾米").findOne().parent().parent().click()
sleep(5000)
var point = findColor(captureScreen(), "#2661DD", {
    region: [27,530,1010,700],
    threshold: 2
    });
    while(point){
        click(point.x,point.y)
        var point = findColor(captureScreen(), "#2661DD", {
            region: [27,530,1010,856],
            threshold: 2
            });
    }
    sleep(3000)
back()
sleep(5000)
back()
sleep(4000)

var temp = text('我的音乐').findOne().bounds()
click(temp.centerX(), temp.centerY())

sleep(2000)
swipe(579, 750, 579, 640, 18)
sleep(3000)
click(587, 1295)
sleep(2000)
click(587, 1495)
sleep(2000)
// click(579, 1431)
// sleep(2000)


id("player_btn_share_top").findOne(2000).click()
text("动态").findOne(2000).parent().click()
text("发布").findOne(2000).click()


id("player_btn_comment").findOne(2000).click()
id("comment_view").click()
sleep(2000)
setText("666")
text("发送").findOne(2000).click()
var temp = images.read("/sdcard/fooViewSave/3.jpg")
var i = 1
while(i<7){
    var p = findImage(captureScreen(), temp)
    while(p){
        click(p.x+20,p.y+30)
        var p = findImage(captureScreen(), temp)
    }
    swipe(579, 750, 579, 670, 25)
    sleep(1000)
    i = i+1
}

sleep(2000)
back()
sleep(2000)
back()
sleep(2000)

click(970,2313)
text("福利任务").findOne(2000).parent().parent().click()


var temp = textEndsWith('领取奖励').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(2000)

text("任务中心").findOne(2000).parent().click()
sleep(2000)


// home()


// toast(getPackageName("虾米音乐"))



