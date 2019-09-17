
while(true){
    var currentHours  = new Date().getHours()
    var currentMinutes  = new Date().getMinutes()
    if(currentMinutes == 00 && currentHours == 11){
        if(device.isScreenOn()){

        }
        else{
            device.wakeUp()
            sleep(1000)
            swipe(554, 2, 554, 300, 20)
            sleep(2000)
            longClick(908, 475)
            sleep(1000)
            click(554, 1388)
            sleep(300)
            click(554, 1209)
            sleep(300)
            click(845, 1209)
            sleep(300)
            click(845, 1388)
            sleep(2000)
        }

        home()
        launchApp("微信")
        sleep(5000)

        // var miss = textContains("有猫病").findOne().parent().parent().parent().parent()
        var miss = textContains("文件传输").findOne().parent().parent().parent().parent()
        miss.click()
        sleep(2000)
        setText("宝贝，中午记得吃药~")
        sleep(1000)
        click(1010, 1832)
        sleep(2000)
        back()
        sleep(1000)
        home()

        break
    }
}


