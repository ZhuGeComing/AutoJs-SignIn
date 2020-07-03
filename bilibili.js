var options = ["666", "233", "害怕", "？？？"]
var i = dialogs.select("请选择一个选项", options);


click(1133, 592)
sleep(1000)
click(1263,1011)
sleep(1000)

switch(i) {
    case 0:
        setText("666")
        break;
    case 1:
        setText("233")
        break;
    case 2:
        setText("害怕")
        break;
    case 3:
        setText("？？？")
        break;
    default:
       break;
} 

click(2179,51)