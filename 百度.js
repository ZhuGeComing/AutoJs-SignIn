// // // // home()
launchApp("百度")
waitForPackage("com.baidu.searchbox")
sleep(5000)

text("我的").findOne(2000).parent().click()
sleep(5000)
click(921,398)
sleep(3000)
