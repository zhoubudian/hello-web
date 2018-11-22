window.onload = function() {
    slide();
}

function slide() {
    var bannerImgs = document.querySelector(".banner_imgs");
    var Indexs = document.querySelectorAll(".banner_index li");
    var imgLis = document.querySelectorAll(".banner_imgs li");

    //屏幕宽度
    var screenWidth = document.body.offsetWidth;
    var index = 1;

    //默认显示的应该是第二张图片
    bannerImgs.style.transform = "translateX(" + screenWidth * index * -1 + "px)";

    //添加过渡效果
    function setTransition() {
        bannerImgs.style.webkitTransition = "all .2s";
        bannerImgs.style.transition = "all .2s";
    }

    //清除过渡效果
    function clearTransition() {
        bannerImgs.style.webkitTransition = "none";
        bannerImgs.style.transition = "none";
    }

    //设置移动距离
    function setTranslateX(distance) {
        bannerImgs.style.webkitTransform = "translateX(" + distance + "px)";
        bannerImgs.style.transform = "translateX(" + distance + "px)";
    }

    //控制小圆点
    function setPoint() {
        for (var i = 0; i < Indexs.length; i++) {
            Indexs[i].className = "";
        }
        Indexs[index - 1].className = "current";
    }

    //设置定时器
    var timer = setInterval(function() {
        index++;
        setTransition();
        setTranslateX(screenWidth * index * -1);
    }, 1000);

    //添加过渡动画结束事件
    bannerImgs.addEventListener("transitionend", function() {
        if (index > 8) {
            index = 1;
        } else if (index < 1) {
            index = 8;
        }
        clearTransition();
        setTranslateX(screenWidth * index * -1);
        setPoint();
    })


    //添加touch事件
    var startX = 0;
    var moveX = 0;
    var isMove = false;

    bannerImgs.addEventListener("touchstart", function(event) {
        isMove = false;
        clearInterval(timer);
        startX = event.touches[0].clientX;
    })

    bannerImgs.addEventListener("touchmove", function(event) {
        isMove = true;
        moveX = event.touches[0].clientX - startX;
        setTranslateX(moveX + index * screenWidth * -1);
    })

    bannerImgs.addEventListener("touchend", function(event) {
        if(isMove && Math.abs(moveX) > screenWidth/3){
            if (moveX < 0) {
                index++;
            } else if (moveX > 0) {
                index--;
            }
        }
        setTransition();
        setTranslateX(index * screenWidth * -1);
        timer = setInterval(function() {
            index++;
            setTransition();
            setTranslateX(screenWidth * index * -1);
        }, 1000);
    })
}