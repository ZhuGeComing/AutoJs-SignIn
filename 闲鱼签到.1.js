// home()

requestScreenCapture()
launchApp("闲鱼")
waitForPackage("com.taobao.idlefish")
sleep(5000)
text("我的").findOne(2000).parent().parent().click()
text("闲鱼币").findOne(2000).click()
desc("马上签到").findOne(2000).parent().click()
sleep(5000)
click(913, 327)
sleep(2000)

var temp = desc('赚闲鱼币').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(2000)


var temp = desc('去分享').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(4000)
click(289, 1574)
sleep(2000)
click(979, 142)
sleep(2000)
var temp = text('微信').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(2000)
var temp = text('去粘贴').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(2000)
back()
sleep(2000)
back()
sleep(2000)
back()
sleep(2000)
back()
sleep(2000)


var temp = desc('去签到').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(4000)

click(919,345)
sleep(4000)
var temp = text('签到').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(4000)
back()
sleep(2000)

click(973,525)
sleep(4000)
var temp = text('签到').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(4000)
back()
sleep(2000)

click(945,776)
sleep(4000)
var temp = text('签到').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(4000)
back()
sleep(2000)
back()
sleep(2000)



var temp = desc('去参与').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(4000)

swipe(579, 780, 579, 580, 18)
sleep(3000)


var point = findColor(captureScreen(), "#FF366A", {
    region: [27,530,1010,700],
    threshold: 2
    });
if(point){
    click(point.x,point.y)
}
sleep(3000)

var temp = desc('100闲鱼币夺宝').findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(4000)

click(849, 1905)
sleep(2000)
click(849, 1905)
sleep(2000)
click(849, 1905)
sleep(2000)

click(569, 2225)