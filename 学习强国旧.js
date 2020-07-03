//desc("挑战答题").findOne(5000).click()
var ind = 1
while(ind<5){
    sleep(3000)
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
    // toast("原始题目："+t.desc())
    var reg = new RegExp('“', 'g')
    var newstr = t.desc().replace(reg, ' ')
 
    var reg1 = new RegExp('”', 'g')
    var newstr = newstr.replace(reg1, ' ')

    var reg2 = new RegExp('，', 'g')
    var newstr = newstr.replace(reg2, ' ')

    var reg3 = new RegExp(',', 'g')
    var newstr = newstr.replace(reg3, ' ')

    var title = newstr.replace(/\s+/g, ' ')

    var text = files.read("/sdcard/脚本/xuexi/data5.txt")
    var arr = text.split(',')
    // if(arr.indexOf(title) !== -1){
    //     key = arr[arr.indexOf(title) +1]
        
    //     var uc = className("ListView").findOne().children()
    //     temp = uc[parseInt(key)-1].bounds()
    //     click(temp.centerX(), temp.centerY())
    //     sleep(2000)
    // }

    // files.write("/sdcard/脚本/xuexi/data5.txt", text);

    if(arr.indexOf(title) !== -1){
        key = arr[arr.indexOf(title) +1]
        var uc = className("ListView").findOne().children()
        if(parseInt(key)>4){
            key = "1"
            arr[arr.indexOf(title) +1] = key.toString() 
            toast("容我再想一想")
            toast(title + key.toString())
            var s = arr.join()    
            files.write("/sdcard/脚本/xuexi/data5.txt", s)            
        }
        temp = uc[parseInt(key)-1].bounds()
        click(temp.centerX(), temp.centerY())
        sleep(3000)
        var end = desc("结束本局").findOne(3000)
        if(end){
            sleep(2000)
            end.click()
            key = parseInt(key) + 1
            arr[arr.indexOf(title) +1] = key.toString() 
            toast("容我再想一想")
            toast(title + key.toString())
            var s = arr.join()    
            files.write("/sdcard/脚本/xuexi/data5.txt", s)
            sleep(3000)
            desc("再来一局").findOne(5000).click()
            sleep(2000)
        }

    }
    else{
            var uc = className("ListView").findOne().children()
            temp = uc[0].bounds()
            click(temp.centerX(), temp.centerY())
            sleep(3000)

            var end = desc("结束本局").findOne(1000)
            if(end){
                end.click()
                var person = [title, "2"]
                var s = person.join()
                toast(s.split(','))               
                files.append("/sdcard/脚本/xuexi/data5.txt", s+',')
                sleep(3000)
                sleep(3000)
                desc("再来一局").findOne(5000).click()
                sleep(2000)
            }else{
                var person = [title, "1"]
                var s = person.join()
                toast(s.split(','))               
                files.append("/sdcard/脚本/xuexi/data5.txt", s+',')
                sleep(3000)
            }
    }
    // ind++
}



    // var end = desc("结束本局").findOne(1000)
    // if(end){
    //     sleep(2000)
    //     end.click()

    // }else{