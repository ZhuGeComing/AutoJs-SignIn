// home()
// var temp = desc('签到').findOne().bounds()
// click(temp.centerX(), temp.centerY())
// sleep(2000)

// while(true){
//     click(558, 1039)
//     sleep(3000)
//     click(838, 1349)
//     sleep(3000)
// }




// events.observeNotification();
// events.once("notification", function(n){
//     var str = n.getPackageName();
//     if(str.search("mms") != -1){
//         sleep(800)
//         click(95, 312)
        
//     }
// });
var a = 1
a = a.toString()
var person = ["title", a]
var s = person.join()
toast(s.split(','))               
setClip(s)
files.append("/sdcard/脚本/xuexi/data6.txt", s+',')