// // // // home()
launchApp("百度")
waitForPackage("com.baidu.searchbox")
sleep(5000)

text("我的").findOne(2000).parent().click()
text("百度积分商城").findOne(2000).parent().click()
sleep(4000)
textContains("签到").findOne(2000).click()
sleep(7000)
click(921,576)
sleep(3000)
back()
sleep(3000)


var i = 0
while(i < 20){
    i = i+1
    text("我的").findOne(2000).parent().click()
    text("百度积分商城").findOne(2000).parent().click()
    sleep(3000)
    click(967,1611)
    sleep(2500)
    // swipe(579, 750, 579, 590, 25)
    // sleep(2000)
    // click(952,648)
    // sleep(2500)
    click(610,738)
    sleep(3000)
    back()
    sleep(2500)
}

home()

