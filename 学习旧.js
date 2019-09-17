requestScreenCapture();
// home()
launchApp("学习强国")
// // waitForPackage("cn.xuexi.android")
sleep(7000)


// //////////////////// 分享
// var i = 0
// while(i<2){
//     text("关注").findOne(3000).parent().parent().parent().click()
//     sleep(2000)
//     click(234,1123)
//     sleep(2000)
//     click(993,1852)
//     sleep(2000)
//     click(679,1091)
//     sleep(2000)
//     back()
//     sleep(2000) 
//     back()
//     sleep(2000)
//     i = i + 1
// }

// //////////////////// 评论

// var i = 0
// while(i<2){
//     text("关注").findOne(3000).parent().parent().parent().click()
//     sleep(2000)
//     click(234,1123)
//     sleep(2000)
//     click(213,1841)
//     sleep(2000)
//     setText("参政议政！共商国是！")
//     sleep(2000)
//     text("发布").findOne(2000).click()
//     sleep(2000)
//     back()
//     i = i+1
// }

// //////////////////// 收藏

// text("关注").findOne(3000).parent().parent().parent().click()
// sleep(2000)
// click(537,1829)
// sleep(2000)
// click(1000,280)
// sleep(2000)
// click(668,593)
// sleep(2000)
// if((new Date().getDate())%2 == 1){
//     click(810,478)
// }
// else{
//     click(569,478)
// }
// sleep(2000)

// var i = 0
// while(i<2){
//     click(489,1040)
//     sleep(2000)

//     var temp = images.read("/sdcard/fooViewSave/xing.jpg")
//     var p = findImage(captureScreen(), temp)
//     if(p){
//         click(p.x+40,p.y+60)
//         sleep(2000)
//         i = i+1
//         back()
//         sleep(2000)
//         swipe(579, 750, 579, 680, 25)
//         sleep(2000) 
//     }
//     else{
//         sleep(2000)
//         back()
//         sleep(2000)
//         swipe(579, 750, 579, 680, 25)
//         sleep(2000)
//     }
// }


//////////////////// 智能答题 
t = 0
while(t<6){
    t = t+1
    setClip("中国")
    text("我的").findOne(3000).parent().parent().parent().click()
    sleep(4000)
    click(397,981)
    sleep(3000)
    click(160,1767)
    sleep(2000)
    
    j = 0
    while(j<5){
        j = j+1
        var i = 0
        var temp = images.read("/sdcard/fooViewSave/a.jpg")
        while(i<4){
            i = i+1
            var p = findImage(captureScreen(), temp)
            if(p){
                click(p.x+40,p.y+60)
                sleep(2000)
            }
        }
        
        var i = 0
        var temp1 = images.read("/sdcard/fooViewSave/kuo.jpg")
        while(i<4){
            i = i+1
            var p1 = findImage(captureScreen(), temp1)
            if(p1){
                longClick(p1.x+80,p1.y+20)
                sleep(700)
                click(p1.x+80,p1.y-100)  
                sleep(2000)
            }
        }
        click(777,1879)
    }
    sleep(2000)
    
    var judge = desc("暂不").exists()
    if(judge){
        sleep(2000)
        click(678,1138)  
        sleep(2000)
        back()
        sleep(2000)
        back()
    }
    else{
        back()
        sleep(2000)
        click(379,1187)
        sleep(2000)
        click(224,144)  
        t = t-1
    }
}


// ////////////////////////////////////每周一答
// t = 0
// while(t<2){
//     t = t+1
//     setClip("中国")
//     text("我的").findOne(3000).parent().parent().parent().click()
//     sleep(4000)
//     click(397,981)
//     sleep(3000)
//     click(930,1039)
//     sleep(2000)
    
//     j = 0
//     while(j<5){
//         j = j+1
//         var i = 0
//         var temp = images.read("/sdcard/fooViewSave/a.jpg")
//         while(i<4){
//             i = i+1
//             var p = findImage(captureScreen(), temp)
//             if(p){
//                 click(p.x+40,p.y+60)
//                 sleep(2000)
//             }
//         }
        
//         var i = 0
//         var temp1 = images.read("/sdcard/fooViewSave/kuo.jpg")
//         while(i<4){
//             i = i+1
//             var p1 = findImage(captureScreen(), temp1)
//             if(p1){
//                 longClick(p1.x+80,p1.y+20)
//                 sleep(700)
//                 click(p1.x+80,p1.y-100)  
//                 sleep(2000)
//             }
//         }
//         click(777,1879)
//     }
//     sleep(2000)
    
//     var judge = desc("继续答题").findOne(2000)
//     if(judge){
//         back()
//         sleep(2000)
//         click(379,1187)
//         sleep(2000)
//         click(224,144)  
//         t = t-1
//     }
//     else{
//         sleep(2000)
//         click(678,1138)  
//         sleep(2000)
//         back()
//         sleep(2000)
//         back()
//     }
// }

//////////////// 阅读文章
// var i = 0
// while(i<9){
//     i = i+1
//     text("关注").findOne(3000).parent().parent().parent().click()
//     sleep(2000)
//     swipe(579, 750, 579, 640, 25)
//     sleep(2000)
//     click(522,915)
//     sleep(15000)
//     back()
// }

// //////////////////// 观看视频
// text("视频学习").findOne(3000).parent().parent().parent().click()
// var i = 0
// while(i<9){
//     i = i+1
//     sleep(2000)
//     swipe(579, 750, 579, 640, 25)
//     sleep(2000)
//     click(522,915)
//     sleep(15000)
//     back()
//     launchApp("学习强国")
//     sleep(2000)
// }


