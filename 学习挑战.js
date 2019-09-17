total = 0
j = 0
while(total<2){
    if(descContains("。").exists()){
        var t = descContains("。").findOne()
    }
    else if(descContains("，").exists()){
        var t = descContains("，").findOne()
    }
    else if(descContains("？").exists()){
        var t = descContains("？").findOne()
    }
    else if(descContains("：").exists()){
        var t = descContains("：").findOne()
    }
    
    var reg = new RegExp('“', 'g')
    var newstr = t.desc().replace(reg, ' ')
    
    var reg1 = new RegExp('”', 'g')
    var newstr = newstr.replace(reg1, ' ')
    
    var reg2 = new RegExp('，', 'g')
    var newstr = newstr.replace(reg2, ' ')
    
    var reg3 = new RegExp(',', 'g')
    var newstr = newstr.replace(reg3, ' ')
    
    var title = newstr.replace(/\s+/g, ' ')
    
    var text = files.read("/sdcard/脚本/xuexi/data2.txt")
    
    var arr = text.split(',')
    
    
    // judge = judge + 1
    // toast("我已经答对" + judge + "题了")
    sleep(1000)
    if(arr.indexOf(title) !== -1){
        key = arr[arr.indexOf(title) +1]
        var temp = desc(key).findOne().bounds()
        while(temp.centerY()>2120){
            swipe(579, 750, 579, 690, 25)
            sleep(2000)
            var temp = desc(key).findOne().bounds()
        }
        while(temp.centerY()<400){
            swipe(579, 690, 579, 750, 25)
            sleep(2000)
            var temp = desc(key).findOne().bounds()
        }
        j = j+1
        click(temp.centerX(), temp.centerY()) 
        click(889, 165)
        sleep(2000)
    }

    else{  
        if(descContains("。").exists()){
            var t = descContains("。").findOne()
        }
        else if(descContains("，").exists()){
            var t = descContains("，").findOne()
        }
        else if(descContains("？").exists()){
            var t = descContains("？").findOne()
        }
        else if(descContains("：").exists()){
            var t = descContains("：").findOne()
        }
        else if(descContains("（").exists()){
            var t = descContains("（").findOne()
        }
        
        title = t.desc().replace('“', '').replace('”', '')
        
        var text = files.read("/sdcard/脚本/xuexi/data1.txt")
        
        var arr = text.split(',')
        
        
        // judge = judge + 1
        // toast("我已经答对" + judge + "题了")
        sleep(1000)
        if(arr.indexOf(title) !== -1){
            key = arr[arr.indexOf(title) +1]
            var temp = desc(key).findOne().bounds()
            while(temp.centerY()>2120){
                swipe(579, 750, 579, 690, 25)
                sleep(2000)
                var temp = desc(key).findOne().bounds()
            }
            while(temp.centerY()<400){
                swipe(579, 690, 579, 750, 25)
                sleep(2000)
                var temp = desc(key).findOne().bounds()
            }
            j = j+1
            click(temp.centerX(), temp.centerY()) 
            // click(889, 165)
            sleep(2000)
        }
        else{
            // click(555, 1533)
            // sleep(2000)
            // click(555, 1633)
            // sleep(2000)
            // if(desc('结束本局').exists()){
            //     desc('结束本局').findOne().click()
            //     sleep(2000)
            //     desc('退出').findOne().click()
            //     sleep(4000)
            //     desc('挑战答题').findOne().click()
            //     sleep(2000)
            // }
            // if(j>=5 && j<10){
            //     total = total +1
            //     toast(total) 
            //     j = 0
            // }
            // else if(j>=10){
            //     total = total +2
            //     toast(total)
            //     j = 0
            // }
            // setClip(title)
            // files.append("/sdcard/脚本/xuexi/data1.txt",getClip() + ',,')
        }

    }

}