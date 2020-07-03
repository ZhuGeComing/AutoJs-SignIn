// var a = 1
// a = a.toString()
// var person = ["title", a]
// var s = person.join()
// toast(s.split(','))               
// setClip(s)
// files.append("/sdcard/脚本/xuexi/data6.txt", s+',')


var text = files.read("/sdcard/脚本/xuexi/data6.txt")
var arr = text.split(',')

key = arr[arr.indexOf("title") +1]
toast(key)
key = parseInt(key) + 1
arr[arr.indexOf("title") +1] = key.toString() 
var s = arr.join()
toast(s.split(','))               
files.write("/sdcard/脚本/xuexi/data6.txt", s)