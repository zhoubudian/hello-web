let oJlB = document.getElementsByClassName('jlB'),
    oGdtB = document.getElementsByClassName('gdtB'),
    oImgB = document.getElementsByClassName('lbBRight')[0].getElementsByTagName('img'),
    oDivImgB = document.getElementsByClassName('chaImgB'),
    oBA = document.getElementsByClassName('lbBA')[0];

var j = 0,
    timerB = null,
    imgArrB = ['-45px -47px', '-128px -47px', '-213px -47px'],
    imgChaB = ['-4px -47px', '-86px -47px', '-172px -47px'];

if (timerB) {
    clearInterval(timerB);
    timerB = null;
}

timerB = setInterval(sideChangeB, 3000);

function sideChangeB() {
    j++;
    if (j == oJlB.length) {
        j = 0;
    }
    sideShowB(j);
};

function sideShowB(ind) {
    for (let a = 0; a < oJlB.length; a++) {
        oJlB[a].style.backgroundPosition = imgArrB[a];
        oGdtB[a].style.width = 0;
        oGdtB[a].style.transition = '0s';
        oImgB[a].style.opacity = 0;
    }
    oJlB[ind].style.backgroundPosition = imgChaB[ind];
    oGdtB[ind].style.width = '100%';
    oGdtB[ind].style.transition = '3s';
    oImgB[ind].style.opacity = 1;
};

oBA.onmouseover = function () {
    clearInterval(timerB);
}


for (let b = 0; b < oDivImgB.length; b++) {
    oDivImgB[b].onmouseover = function () {
        j = b;
        sideShowB(j);

    }
    oDivImgB[b].onmouseout = function () {
        timerB = setInterval(sideChangeB, 3000);
    }
}