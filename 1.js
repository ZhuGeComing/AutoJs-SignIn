if(descContains("A").exists()){
    // toast("Yes")

    var text = files.read("/sdcard/脚本/xuexi/data.txt")

    var arr = text.split(',')
    
    if(descContains("。").exists()){
        var t = descContains("。").findOne()
    }
    else if(descContains("（").exists()){
        var t = descContains("（").findOne()
    }
    else if(descContains("？").exists()){
        var t = descContains("？").findOne()
    }

    title = t.desc().substring(1, 8)
    if(arr.indexOf(title) == -1){
        toast("没有")
        var temp = descContains("A").findOne().bounds()
        click(temp.centerX(), temp.centerY()) 
        sleep(2000)


        var duo = desc("多选题")
        if(duo.exists()){
            click(889, 165)
            sleep(1000)
        }

        var a = descContains("正确答案")
        if(a.exists()){
            var answer = descContains("正确答案").findOne()
            answer = answer.desc().substring(5)
        
            var t = descContains("。").findOne()
            title = t.desc().substring(1, 8)
            
            var person = [title, answer]
            var s = person.join()
            // toast(person.join())
            // toast(person.indexOf(answer))
            toast(s.split(','))
            
            setClip(s)
            
            files.create("/sdcard/脚本/xuexi/data.txt")
            files.append("/sdcard/脚本/xuexi/data.txt",getClip() + ',')
            
            sleep(2000)
            click(889, 165)
        }
        else{
            sleep(2000)
        }



    }
    else{
        key = arr[arr.indexOf(title) +1]
        if(key.indexOf("A") != -1){
            var temp = descContains("A").findOne().bounds()
            click(temp.centerX(), temp.centerY()) 
            sleep(1000)
        }
        if(key.indexOf("B") != -1){
            var temp = descContains("B").findOne().bounds()
            click(temp.centerX(), temp.centerY()) 
            sleep(1000)
        }
        if(key.indexOf("C") != -1){
            var temp = descContains("C").findOne().bounds()
            click(temp.centerX(), temp.centerY()) 
            sleep(1000)
        }
        if(key.indexOf("D") != -1){
            var temp = descContains("D").findOne().bounds()
            click(temp.centerX(), temp.centerY()) 
            sleep(1000)
        }
        if(key.indexOf("E") != -1){
            var temp = descContains("E").findOne().bounds()
            click(temp.centerX(), temp.centerY()) 
            sleep(1000)
        }
        sleep(1000)
        click(889, 165)
    }


    

}
else{
    sleep(3000)
    setText("123456")
    sleep(500)
    click(889, 165)
    sleep(500)
    click(889, 165)
    sleep(1000)
}

if(desc("再来一组").exists()){
    click(desc("再来一组").findOne().bounds().centerX(), desc("再来一组").findOne().bounds().centerY())}
