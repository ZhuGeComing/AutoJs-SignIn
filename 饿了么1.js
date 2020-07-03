launchApp("饿了么")
sleep(7000)

click(755,1987)
sleep(5000)

desc("我的").findOne(4000).parent().click()
sleep(2000)

textContains("10元红包").findOne(4000).parent().click()
sleep(2000)


// text("立即签到").findOne(4000).click()
// sleep(2000)

// click(539,1323)
// sleep(3000)

// click(545,1523)
// sleep(3000)

// text("微信").findOne(4000).click()
// sleep(2000)

// back()
// sleep(2000)

// click(545,1323)
// sleep(3000)


// click(545,1323)
// sleep(3000)