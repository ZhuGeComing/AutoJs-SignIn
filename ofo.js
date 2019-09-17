// home()
launchApp("ofo共享单车")
waitForPackage("so.ofo.labofo")
sleep(8000)
click(696,1866)
sleep(2000)
click(696,1866)
sleep(2000)
click(696,1866)
sleep(2000)

click(1010,127)
sleep(4000)
click(547,519)
sleep(2000)
longClick(451,800)
sleep(2000)
click(129,677)
sleep(2000)
files.create("/sdcard/脚本/ofo/data.txt")
var currentMonth  = new Date().getMonth()+1
files.append("/sdcard/脚本/ofo/data.txt",currentMonth+"-"+new Date().getDate()+" "+getClip()+"\n")

home()








// files.create("/sdcard/脚本/ofo/data.txt")