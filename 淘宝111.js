
// launchApp("淘宝")
// sleep(5000)

var options = ["去分享", "去进店", "去浏览", "去签到"]
var j = dialogs.select("请选择一个选项", options);
if(i == 0){
    toast("您选择的是" + options[i]);
    text("去分享").findOne(5000).click()
    sleep(2000)
}
else if(j == 1){
    var key = rawInput("请输入需要进店的次数")
    var i = 0
    toast("您选择的是" + options[j]);
    while(i<key){
        text("去进店").findOne(5000).click()
        sleep(3000)
        swipe(579, 750, 579, 700, 25)
        sleep(18000)
        back()
        sleep(2000)
        i = i +1
    }
}

else if(j == 2){
    var key = rawInput("请输入需要该页面上去浏览的次数")
    toast("您选择的是" + options[j]);
    var i = 0
    while(i<key){
        text("去浏览").findOne(5000).click()
        sleep(3000)
        swipe(579, 750, 579, 600, 25)
        sleep(2000)
        swipe(579, 750, 579, 700, 25)
        sleep(18000)
        back()
        sleep(2000)
        i = i +1
    }
}

else if(j == 3){
    text("去浏览").findOne(5000).click()
    toast("您选择的是" + options[j]);
    sleep(3000)
    click(919, 1163)
}

else{
    toast("您取消了选择");
}





