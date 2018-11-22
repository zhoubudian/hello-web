var oDirList = document.querySelector('.dirList');

var x0,x1,x2;
oDirList.addEventListener('touchstart',function(e){
    var e = event || window.event;
    x0 = oDirList.offsetLeft;
    //console.log('x0=>'+x0);
    x1 = e.touches[0].clientX;
    //console.log('x1=>'+x1);
},false);

oDirList.addEventListener('touchmove',function(e){
    var e = event || window.event;
    x2 = e.changedTouches[0].clientX;

    var x = x0 + (x2 - x1);

    if(x>0){
        x = 0;
    }
    if(x< -510){
        x = -510;
    }
    oDirList.style.left = x + 'px';
},false);

oDirList.addEventListener('touchend',function () { 
    oDirList.ontouchmove = null;
 });