
// var key = rawInput("请输入需要该页面上去浏览的次数")
key = 100
var i = 0
while(i<key){
    text("去浏览").findOne().click()
    sleep(3000)
    swipe(579, 2023, 579, 1720, 25)
    sleep(2000)
    swipe(579, 750, 579, 700, 25)
    sleep(18000)
    back()
    sleep(2000)
    i = i +1
}