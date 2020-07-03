// 加入修改选项
total = 0
j = 0
while(j<1){
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
    
    toast("原始题目："+t.desc())
    
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
        var temp = desc(key).findOne(2000)
        if(temp){
            while(temp.bounds().centerY()>2120){
                swipe(579, 750, 579, 690, 25)
                sleep(2000)
                var temp = desc(key).findOne()
            }
            while(temp.bounds().centerY()<400){
                swipe(579, 690, 579, 750, 25)
                sleep(2000)
                var temp = desc(key).findOne()
            }
            
            click(temp.bounds().centerX(), temp.bounds().centerY()) 
            sleep(3000)
        }
        else{
            var text = files.read("/sdcard/脚本/xuexi/data5.txt")    
            var arr = text.split(',')
            if(arr.indexOf(title) !== -1){
                key = arr[arr.indexOf(title) +1]
                
                var uc = className("ListView").findOne().children()
                temp = uc[parseInt(key)-1].bounds()
                click(temp.centerX(), temp.centerY())
                sleep(2000)
            }
            else{
                alert("没有答案，请选一个答案，并记住答案")
                sleep(3000)
                key = rawInput("请输入答案的数字")
                if(key !== null){
                    var person = [title, key]
                    var s = person.join()
                    toast(s.split(','))               
        
                    
                    files.append("/sdcard/脚本/xuexi/data5.txt",s + ',')
                }
                sleep(2000)
                break
            }
        }
    
    }
    
    else{  
        var text = files.read("/sdcard/脚本/xuexi/data5.txt")    
        var arr = text.split(',')
        if(arr.indexOf(title) !== -1){
            key = arr[arr.indexOf(title) +1]
            
            var uc = className("ListView").findOne().children()
            temp = uc[parseInt(key)-1].bounds()
            click(temp.centerX(), temp.centerY())
            sleep(2000)
        }
        else{
            alert("没有答案，请选一个答案，并记住答案")
            sleep(3000)
            key = rawInput("请输入答案的数字")
            if(key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6"){
                var person = [title, key]
                var s = person.join()
                toast(s.split(','))               
                
                files.append("/sdcard/脚本/xuexi/data5.txt",s + ',')
            }
            var end = desc("结束本局").findOne(5000)
            if(end){
                end.click()
            }
            break
    
    
        }
    
    }
    
    
}
