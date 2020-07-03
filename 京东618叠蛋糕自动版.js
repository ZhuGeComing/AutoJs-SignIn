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

app.startActivity({ 
  data: "openApp.jdMobile://virtual?params=%7B%22des%22%3A%22m%22%2C%22url%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22category%22%3A%22jump%22%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22lkyl%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22ref%22%3A%22https%3A%2F%2Fbunearth.m.jd.com%2FbabelDiy%2FZeus%2F3xAU77DgiPoDvHdbXUZb95a7u71X%2Findex.html%22%2C%22psn%22%3A%221664140455%7C472%22%2C%22psq%22%3A5%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221664140455%22%2C%22mba_sid%22%3A%221572979455588510925986537476%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mnpm_ComponentApplied%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22177095863%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1572882675599%22%2C%22__jda%22%3A%22177095863.1664140455.1538579865.1572975960.1572979455.472%22%7D%7D",
});

sleep(1000);

className("android.view.View").text("做任务领金币").waitFor();

log("到达个人中心");

sleep(1000);
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



   