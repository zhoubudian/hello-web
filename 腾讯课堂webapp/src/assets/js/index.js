window.onload = function () {
    slide();
}

function slide() {
    //获取
    let bannerImg = document.querySelector('.banner_imgs');
    let Indexs = document.querySelectorAll('.banner_index li');
    let ImgLis = document.querySelectorAll('.banner_imgs li');

    //屏幕宽度
    let screenWidth = document.body.offsetWidth;
    let index = 0;

    //默认显示第二张图片
    let transX = screenWidth * index * -1;
    bannerImg.style.transform = `translateX(${transX}px)`;

    //设置过渡
    function setTransition() {
        bannerImg.style.webkitTransition = "all .2s";
        bannerImg.style.transition = 'all .1s';
    }

    //清除过渡时间
    function clearTransition() {
        bannerImg.style.webkitTransition = "none";
        bannerImg.style.transition = 'none';
    }

    //设置移动的距离
    function setTransfromX(distance) {
        bannerImg.style.webkitTransform = "translateX(" + distance + "px)";
        bannerImg.style.transform = `translateX(${distance}px)`
    }

    //控制小点
    function setPoint() {
        for (let i = 0; i < Indexs.length; i++) {
            Indexs[i].className = '';
        }
        Indexs[index].className = 'current';
    }

    //定时器
    let timer = setInterval(function () {
        index++;
        setTransition(); //添加过渡时间
        setTransfromX(screenWidth * index * -1);
    }, 2000);

    //添加过渡动画结束事件
    bannerImg.addEventListener('transitionend', function () {
        if (index > 6) {
            index = 0;
        } else if (index < 0) {
            index = 6;
        }

        clearTransition();
        setTransfromX(screenWidth * index * -1);
        setPoint();
    }, false);


    //touch事件
    let startX = 0;
    let moveX = 0;
    let isMove = false;

    bannerImg.addEventListener('touchstart', function (e) {
        var e = event || window.event;
        isMove = false;
        clearInterval(timer);
        startX = e.touches[0].clientX;
        // console.log(e.touches[0].clientX);
    });

    bannerImg.addEventListener('touchmove', function (e) {
        var e = event || window.event;
        isMove = true;
        moveX = e.changedTouches[0].clientX - startX;
        setTransfromX(moveX + index * screenWidth * -1);
    });

    bannerImg.addEventListener('touchend', function (e) {
        var e = event || window.event;
        if (isMove && Math.abs(moveX) > screenWidth / 4) {
            if (moveX > 0) {
                index--;
            } else if (moveX < 0) {
                index++;
            }
        }
        setTransition();
        setTransfromX(screenWidth * index * -1);
        timer = setInterval(function () {
            index++;
            setTransition(); //添加过渡时间
            setTransfromX(screenWidth * index * -1);
        }, 2000);
    });
}