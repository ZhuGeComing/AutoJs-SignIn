// home()
launchApp("支付宝")
waitForPackage("com.eg.android.AlipayGphone")
sleep(5000)
text("我的").findOne(2000).parent().click()
sleep(4000)
click(551,470)
sleep(5000)
click(165,1057)
var i = 0
while(i<6){
    sleep(2000)
    click(542,686)
}
home()





// sleep(7000)
// click(930,1853)
// sleep(2000)VR的·
// click(811,588)
// sleep(3000)
// click(659,555)
// home()
// toast(getPackageName("手机淘宝"))