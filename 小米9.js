requestScreenCapture();
back()
while(true){
    back()
    idContains("fragment_search_left_icon").waitFor()
    click(314,601)
    sleep(800)
    var point = findColor(captureScreen(), "#FF6B01", {
        region: [551,1815,352,53],
        threshold: 4
        });
    if(point){
        click(point.x,point.y)
        sleep(500)
        click(point.x,point.y)
        sleep(1000)
        var point1 = findColor(captureScreen(), "#FF6B01", {
            region: [255,1782,144,53],
            threshold: 4
            });
        if(point1){
            sleep(300)
            click(point1.x,point1.y)
            textContains("合计").waitFor()
            click(857, 1833)
            var p = confirm("结算吗？")
            if(p){
                textContains("配送至").waitFor()
                toast("123")
                // click(837,1846)
                break
            }
            else{
                idContains("fragment_search_left_icon").waitFor()
            }
        }
    }

}




// toast("123")
// click(765,1830)
// back()

// idContains("fragment_search_left_icon").waitFor()
// toast("123")
