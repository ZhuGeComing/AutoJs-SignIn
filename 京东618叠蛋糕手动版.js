//by gong56 from zkb
//京东618叠蛋糕js脚本0521


//温馨提示，不想提示可删除
dialogs.alert("请确认无障碍和悬浮窗权限已开启\n请允许跳转请求\n如有问题可以在帖子里留言");

console.show();
auto.waitFor();

var i = 0;
var j = 0;

sleep(1000);
//打开活动页面
log("正在进入个人中心");

/*
//这是淘宝双十二的跳转链接，注释了，改成京东的就能自动了
app.startActivity({ 
    data: "taobao://pages.tmall.com/wow/hdwk/act/191212-main", 
    packageName: "com.taobao.taobao", 
});
*/

sleep(1000);

className("android.view.View").text("做任务领金币").waitFor();

log("到达个人中心");

if(!textContains("任务每日0点刷新").exists()){
    className("android.view.View").text("做任务领金币").findOne().parent().click()
    
    }

textContains("任务每日0点刷新").waitFor()
sleep(1000);
log("到达任务中心");


//签到
sleep(1000);
if(text("去签到").exists()){
    text("去签到").findOne().click();
    sleep(200);
    log("签到成功")
}
sleep(500);


//做任务
//获取控件
while(1){
var a = text("去完成").findOnce(j);
if(a != null){
//获取父控件
var b = a.parent().parent().parent();

//获取第一个子控件
var c = b.child(0).child(1).text();
if(c.search("8秒") != -1){
    
    i++;
    log("开始第"+i+"次去完成");
    a.click();
    sleep(5000);
    textStartsWith("恭喜完成").findOne(8000);
    sleep(random(2,10)*200); 
    back();
    log("已完成第"+i+"次！");
    sleep(2000);
    j=0;
    }
else{j++;}}
else{log("貌似没有任务了，脚本退出\n如未完成，请重新运行");
  exit();
  }}



   