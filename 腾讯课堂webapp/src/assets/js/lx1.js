var carousel = document.getElementById('carousel');
var imageLis = document.querySelectorAll('#carousel ul li')
//信号量
var idx=2;
var next=3;
var prev=1;

var windowWidth;
//初始化
init();
//窗口变化
window.onreset = init;
function init() {
    //初始化,根据屏幕的变化,根据宽度计算轮播的高度
    windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //windowWidth / height = 200 /130;
    carousel.style.height = windowWidth / (200 / 130);
    //初始设置li的默认位置
    for (var i=0; i<imageLis.length;i++){
        imageLis[i].style.webkitTransform = 'translateX(' + windowWidth + 'px)';
    }
    //去掉所有图片的过度,因为鼠标滑动时不需要过度
    noneTransition();
    //让当前三个信号量上一张,下一张,当前张确定位置
    changex();
}
function noneTransition() {
    imageLis[idx].style.transition = 'none';
    imageLis[next].style.transition = 'none';
    imageLis[prev].style.transition = 'none';
}
function changex() {
    imageLis[idx].style.webkitTransform = 'translateX(0px)';
    imageLis[next].style.webkitTransform = 'translateX(' + windowWidth + 'px)';
    imageLis[prev].style.webkitTransform = 'translateX(' + -windowWidth + 'px)';
}
//手指事件监听
carousel.addEventListener('touchstart',touchstartHandle,false);
carousel.addEventListener('touchmove',touchmoveHandle,false);
carousel.addEventListener('touchend',touchendHandle,false);
//手指偏移量
var deltaX;
//开始记录时手指的位置
var startX;
//时间戳
var startTime;

function touchstartHandle(event) {
    event.preventDefault();
    //判断手指个数,如果大于1跟手指头,返回
    if (event.touches.length > 1){
        return;
    }
    //记录手指偏移量
    deltaX = event.touches[0].clientX;
    //记录手指位置
    startX = event.touches[0].clientX;
    //去掉过度
    noneTransition();
    //重新设置当前信号量的位置
    changex();
    //记录手指点下的时间
    startTime = new Date();
}
function touchmoveHandle() {
    event.preventDefault();
    //判断手指数
    if (event.touches.length > 1){
        return;
    }
    //获得当前坐标
    var clientX = event.touches[0].clientX - deltaX;
    //三张图片跟随手指的移动而移动
    imageLis[idx].style.webkitTransform = 'translateX(' + clientX + 'px)';
    imageLis[next].style.webkitTransform = 'translateX(' + (windowWidth + clientX) + 'px)';
    imageLis[prev].style.webkitTransform = 'translateX(' + (-windowWidth + clientX) + 'px)';
}
function touchendHandle(event) {
     event.preventDefault();
     //判断滑动是否成功
    //获取滑动距离
    var distence = event.changedTouches[0].clientX - startX;
    //获取滑动时间
    var time = new Date() - startTime;
    console.log(distence,time);
    //成功的条件  如果滑动的距离超过屏幕的一半,不管时间,表示成功
    //如果滑动的时间小雨500毫秒且移动距离大于30像素
    //如果滑动的距离为正数,表示向右,反之向左
    if (distence >= windowWidth / 2 || (distence > 30 && time < 500)){
        console.log('向右滑动成功');
        //改变信号量
        /*perv=1 idx=2 next=3
        * -->
        * prev=0 inx=1 next=2
        *
        * */
        next = idx;
        idx = prev;
        prev--;
        if (prev < 0){
            prev = 4;
        }

        //此时手指头已经移开了,接下来图片的运动靠的是过度
        //只需要给需要移动的人添加过度
        imageLis[idx].style.transition = 'all 0.3s ease 0s';
        imageLis[next].style.transition = 'all 0.3s ease 0s';
        //接下来就是移动了
        imageLis[idx].style.webkitTransform = 'translateX(0px)';
        imageLis[next].style.webkitTransform = 'translateX(' + windowWidth + 'px)';

    } else if (distence < -windowWidth / 2 || (distence < -30 && time < 500)){
        showNext();
        console.log('向左滑动成功')
    } else{
        console.log('滑动失败')
        //反回原位,三人都加过度
        imageLis[idx].style.transition = 'all 0.3s ease 0s';
        imageLis[prev].style.transition = 'all 0.3s ease 0s';
        imageLis[next].style.transition = 'all 0.3s ease 0s';
        //移动归位
        changex();
    }
}
function showNext() {
    /*
    * prev=1 idx=2 next=3;
    * -->
    * prev=2 idx=3 next=4
    * */
    prev=idx;
    idx=next;
    next++;
    if (next > 4){
        next = 0;
    }
    //新的next看不到不用管怎么变化
    imageLis[next].style.transition = 'none';
    imageLis[next].style.webkitTransform = 'translateX('+ windowWidth + 'px)';

    imageLis[idx].style.transition = 'all 0.3s ease 0s';
    imageLis[prev].style.transition = 'all 0.3s ease 0s';

    imageLis[idx].style.webkitTransform = 'translateX(0px)';
    imageLis[prev].style.webkitTransform = 'translateX(' + -windowWidth + 'px)';
}
