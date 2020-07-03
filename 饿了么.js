
launchApp("饿了么")
sleep(7000)


desc("饿了么").findOne(4000).parent().click()
sleep(2000)



desc("我的").findOne(4000).parent().click()
sleep(1000)

textContains("10元红包").findOne(4000).parent().click()
sleep(2000)


