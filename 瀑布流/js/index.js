window.onload = function () {
    imgLocation("container", 'box');
    var imgData = {
        data: [{
                'src': '1.jpg',
            },{
                'src': '3.jpg',
            },{
                'src': '111.jpg',
            },{
                'src': '222.jpg',
            },{
                'src': 'je1.PNG',
            },{
                'src': 'je9.PNG',
            },{
                'src': 'jx4.png',
            },{
                'src': 't2.1.jpg',
            },{
                'src': 'xp1.1.jpg',
            },{
                'src': 'xp2.2.jpg',
            }
        ]
    }
    window.onscroll = function () {
        if (checkFlag()) {
            var cparent = document.getElementById('container');
            for(var i=0;i<imgData.data.length;i++){
                var ccontent = document.createElement('div');
                ccontent.className = 'box';
                cparent.appendChild(ccontent);
                var boximg = document.createElement('div');
                boximg.className = 'box_img';
                ccontent.appendChild(boximg);
                var img = document.createElement('img');
                img.src = 'img/' + imgData.data[i].src;
                boximg.appendChild(img);
            }
            imgLocation("container", 'box');
        };
    }
}

//到达底部
function checkFlag() {
    var cparent = document.getElementById('container');
    var ccontent = getChildElement(cparent, 'box');
    var lastContentHeight = ccontent[ccontent.length - 1].offsetTop; //最后一张图片距顶部的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if (lastContentHeight < scrollTop + pageHeight) {
        return true;
    }
}

function imgLocation(parent, content) {
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent, content); //box
    var imgWidth = ccontent[0].offsetWidth; //一张图片的宽度
    var num = Math.floor(document.documentElement.clientWidth / imgWidth); //一排能放几张图片
    cparent.style.cssText = 'width:' + imgWidth * num + 'px;margin:0 auto'; //设置宽度
    var BoxHeightArr = []; //第一排图片的高度
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            BoxHeightArr[i] = ccontent[i].offsetHeight;

        } else {
            var minHeight = Math.min.apply(null, BoxHeightArr); //取第一排高度最小的一张
            var minIndex = getminheightLocation(BoxHeightArr, minHeight); //位置
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + 'px';
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }
    }
}

function getminheightLocation(BoxHeightArr, minHeight) {
    //找出高度最小的一张的位置
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i;
        }
    }
}

//找class为box
function getChildElement(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for (var i = 0; i < allcontent.length; i++) {
        if (allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}