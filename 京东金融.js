launchApp("京东金融")
sleep(5000)


var temp = id("ll_xb").findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(3000)

var temp = text("每日签到").findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(3000)

var temp = desc("签到领钢镚").findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(5000)

back()
sleep(4000)
click(970,1834)
sleep(4000)

var temp = desc("立即领取").findOne().bounds()
click(temp.centerX(), temp.centerY())
sleep(5000)