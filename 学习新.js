var judge = 0
while(true){
    if(desc("单选题").exists()){
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
        else if(descContains("、").exists()){
            var t = descContains("、").findOne()
        }
        else if(descContains("(").exists()){
            var t = descContains("(").findOne()
        }
        else if(descContains("会议").exists()){
            var t = descContains("会议").findOne()
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
        
        
        if(desc("A.").exists()){
            a = desc("A.").findOne().parent().child(2).desc()
        }
        if(desc("B.").exists()){
            b = desc("B.").findOne().parent().child(2).desc()
        }
        if(desc("C.").exists()){
            c = desc("C.").findOne().parent().child(2).desc()
        }
        if(desc("D.").exists()){
            d = desc("D.").findOne().parent().child(2).desc()
        }   
    
    
    
        var text = files.read("/sdcard/脚本/xuexi/data2.txt")
    
        var arr = text.split(',')
        // toast(arr)
        if(arr.indexOf(title) == -1){
            // toast(title)
            toast("NO")
            var temp = descContains("A").findOne().bounds()
            while(temp.centerY()>2129){
                swipe(579, 750, 579, 690, 25)
                sleep(2000)
                var temp = descContains("A").findOne().bounds()
            }
            while(temp.centerY()<400){
                swipe(579, 690, 579, 750, 25)
                sleep(2000)
                var temp = descContains("A").findOne().bounds()
            }
            click(temp.centerX(), temp.centerY()) 
            sleep(2000)
            click(889, 287)
            sleep(2000)
        
            if(descContains("正确答案").exists()){
                var answer = descContains("正确答案").findOne()
                answer = answer.desc().substring(5)
            }
            else{
                answer = "A"
            }
            // toast(answer)
        
            
            if(answer.indexOf("A") != -1){
                key = a
                sleep(1000)
            }
            if(answer.indexOf("B") != -1){
                key = b
                sleep(1000)
            }
            if(answer.indexOf("C") != -1){
                key = c
                sleep(1000)
            }
            if(answer.indexOf("D") != -1){
                key = d
                sleep(1000)
            }
            // if(answer.indexOf("E") != -1){
            //     var temp = descContains("E").findOne().bounds()
            //     click(temp.centerX(), temp.centerY()) 
            //     sleep(1000)
            // }
            // toast(key)
        
            var person = [title, key]
            var s = person.join()
            toast(s.split(','))               
            setClip(s)
            
            files.create("/sdcard/脚本/xuexi/data2.txt")
            files.append("/sdcard/脚本/xuexi/data2.txt",getClip() + ',')
            sleep(5000)
            click(889, 287)
            sleep(1000)
        }
        else{
            toast("YES")
            // swipe(579, 750, 579, 650, 25)
            // sleep(2000)
            sleep(1000)
            judge = judge + 1
            key = arr[arr.indexOf(title) +1]
            var temp = desc(key).findOne().bounds()
            while(temp.centerY()>2129){
                swipe(579, 750, 579, 690, 25)
                sleep(2000)
                var temp = descContains("A").findOne().bounds()
            }
            while(temp.centerY()<400){
                swipe(579, 690, 579, 750, 25)
                sleep(2000)
                var temp = descContains("A").findOne().bounds()
            }
            click(temp.centerX(), temp.centerY()) 
            click(889, 287)
            toast("我已经答对" + judge + "题了")
            sleep(2500)
        }
    
    
    
    }
    
    else if(desc("多选题").exists()){
    
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
        else if(descContains("、").exists()){
            var t = descContains("、").findOne()
        }
        else if(descContains("(").exists()){
            var t = descContains("(").findOne()
        }
        else if(descContains("保护制度").exists()){
            var t = descContains("保护制度").findOne()
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
        // toast(title)
        
        if(desc("A.").exists()){
            a = desc("A.").findOne().parent().child(2).desc()
        }
        if(desc("B.").exists()){
            b = desc("B.").findOne().parent().child(2).desc()
        }
        if(desc("C.").exists()){
            c = desc("C.").findOne().parent().child(2).desc()
        }
        if(desc("D.").exists()){
            d = desc("D.").findOne().parent().child(2).desc()
        }   
        if(desc("E.").exists()){
            e = desc("E.").findOne().parent().child(2).desc()
        }   
        if(desc("F.").exists()){
            f = desc("F.").findOne().parent().child(2).desc()
        }   
        if(desc("G.").exists()){
            g = desc("G.").findOne().parent().child(2).desc()
        }  
        
        var text = files.read("/sdcard/脚本/xuexi/data3.txt")
        var arr = text.split(',')
        if(arr.indexOf(title) == -1){
            var temp = descContains("A").findOne().bounds()
            while(temp.centerY()>2129){
                swipe(579, 750, 579, 690, 25)
                sleep(2000)
                var temp = descContains("A").findOne().bounds()
            }
            while(temp.centerY()<400){
                swipe(579, 690, 579, 750, 25)
                sleep(2000)
                var temp = descContains("A").findOne().bounds()
            }
            click(temp.centerX(), temp.centerY()) 
            sleep(2000)
            click(889, 287)
            sleep(1000)
            
            
            if(descContains("正确答案").exists()){
                var answer = descContains("正确答案").findOne()
                answer = answer.desc().substring(5)
            }
            else{
                answer = "A"
            }
            keys = [title,answer.length]
            
            
            if(answer.indexOf("A") != -1){
                key = keys.push(a)
                sleep(1000)
            }
            if(answer.indexOf("B") != -1){
                key = keys.push(b)
                sleep(1000)
            }
            if(answer.indexOf("C") != -1){
                key = keys.push(c)
                sleep(1000)
            }
            if(answer.indexOf("D") != -1){
                key = keys.push(d)
                sleep(1000)
            }
            if(answer.indexOf("E") != -1){
                key = keys.push(e)
                sleep(1000)
            }
            if(answer.indexOf("F") != -1){
                key = keys.push(f)
                sleep(1000)
            }
            if(answer.indexOf("G") != -1){
                key = keys.push(g)
                sleep(1000)
            }
            var s = keys.join()
            toast(s.split(','))               
            setClip(s)
            
            files.create("/sdcard/脚本/xuexi/data3.txt")
            files.append("/sdcard/脚本/xuexi/data3.txt",getClip() + ',')
            click(889, 287)
            sleep(2500)
        }
        else{
            num = arr[arr.indexOf(title) +1]
            judge = judge + 1
            var ind = 0
            while(ind<parseInt(num)){
                ind = ind+1
                key = arr[arr.indexOf(title) + ind + 1]
                if(desc(key).exists()){
                    var temp = desc(key).findOne().bounds()
                    while(temp.centerY()>2129){
                        swipe(579, 750, 579, 690, 25)
                        sleep(2000)
                        var temp = desc(key).findOne().bounds()
                    }
                    while(temp.centerY()<400){
                        swipe(579, 690, 579, 750, 25)
                        sleep(2000)
                        var temp = desc(key).findOne().bounds()
                    }
                    click(temp.centerX(), temp.centerY()) 
        
                    sleep(700)
                }
            }
            // toast(key)
            click(889, 287)
            toast("我已经答对" + judge + "题了")
            sleep(2000)
        }
    
    }
    
    else if(desc("填空题").exists()){
        if(descContains("，").exists()){
            var t = descContains("，").findOne()
        }
        else if(descContains("、").exists()){
            var t = descContains("、").findOne()
        }
        else if(descContains("？").exists()){
            var t = descContains("？").findOne()
        }
        else if(descContains("：").exists()){
            var t = descContains("：").findOne()
        }
        else if(descContains("。").exists()){
            var t = descContains("。").findOne()
        }
        else if(descContains("(").exists()){
            var t = descContains("(").findOne()
        }
        else if(descContains("我国").exists()){
            var t = descContains("我国").findOne()
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
        // toast(title)
        
        var text = files.read("/sdcard/脚本/xuexi/data4.txt")
        var arr = text.split(',')
        if(arr.indexOf(title) == -1){
            setText("123")
            sleep(500)
            click(889, 287)
            sleep(1000)
            
            
            
            if(descContains("正确答案").exists()){
                var answer = descContains("正确答案").findOne()
                answer = answer.desc().substring(5)
            }
            // toast(answer)
            key = [title, answer]
            var s = key.join()
            toast(s.split(','))               
            setClip(s)
            
            files.create("/sdcard/脚本/xuexi/data4.txt")
            files.append("/sdcard/脚本/xuexi/data4.txt",getClip() + ',')
            click(889, 287)
            sleep(2000)
        }
        else{
            judge = judge + 1
            k = arr[arr.indexOf(title) +1]
            setText(k)
            toast(k)
            sleep(1000)
            click(889, 287)
            toast("我已经答对" + judge + "题了")
            sleep(2000)
        }
        
    }
    
    else if(desc("再来一组").exists()){
        click(desc("再来一组").findOne().bounds().centerX(), desc("再来一组").findOne().bounds().centerY())
        sleep(3000)
    }
    
}

