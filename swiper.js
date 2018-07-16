var mesEvents = ['touchend', 'touchstart', 'touchmove', 'swipe']
var swipeStart = {}
var swipeEnd = {}

mesEvents.forEach(evenement=>{
    window.addEventListener(evenement, (e)=>{
        switch(e.type){
            case 'touchstart':
            swipeStart = e.changedTouches[0]
            break;
            case 'touchmove':
            e.preventDefault()
            break;
            case 'touchend':
            swipeEnd = e.changedTouches[0]
            swipeControler(swipeStart, swipeEnd)
            break;
            case 'swipe':
            console.log("Swipe occured ",e.detail)
            break;
            default:
        }
    }, {passive: false})
})
function swipeControler(start, end){
    var details ={
        up: false,
        right: false,
        down: false,
        left: false
    }
    /* 
        startX - endX > 0 swipe left
        startX - endX < 0 swipe right
        startY - endY > 0 swipe up
        startY - endY < 0 swipe down
    */
    var Xcompare = start.clientX - end.clientX
    var Ycompare = start.clientY - end.clientY
    if(Xcompare > -20 && Xcompare < 20){
        details.right = false
        details.left = false
    }
    if(Ycompare > -20 && Ycompare < 20){
        details.up = false
        details.down = false
    }
    if(Xcompare > 50){details.left = true}
    if(Xcompare < -50){details.right = true}
    if(Ycompare > 50){details.up = true}
    if(Ycompare < -50){details.down = true}
    if(details.up == true || details.right == true || details.down == true || details.left == true)
    {
        window.onswipe =  new CustomEvent('swipe', {detail:details})
        window.dispatchEvent(window.onswipe)
        details ={
            up: false,
            right: false,
            down: false,
            left: false
        }
    }
}
