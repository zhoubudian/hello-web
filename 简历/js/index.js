// var oLbImg = document.getElementsByClassName('lb')[0].getElementsByTagName('img');
var oLbImg = document.getElementsByClassName('lb')[0];
let i = 0,
    timer = null;
var arrImg = ['500414848.jpg','people.jpg','U1Tqqdw.jpg'];

    if(timer){
        clearInterval(timer);
        timer = null;
    }

    timer = setInterval(carousel,2000);

    function carousel(){
        i++;
        if(i == arrImg.length) i = 0;
        change(i);
    }

    function change(ind){
        /* for(let j=0;j<arrImg.length;j++){
            oLbImg.style.opacity = 0;
        } */
        oLbImg.style.background = 'url(img/'+arrImg[ind]+') fixed center center no-repeat';
        oLbImg.style.backgroundSize = '100% 100%';
    }

    var oB = document.getElementsByClassName('b')[0];
    var oBb = document.getElementsByClassName('bb')[0];
    var oBbb = document.getElementsByClassName('bbb')[0];
    var oBbbb = document.getElementsByClassName('bbbb')[0];
    document.onscroll = function(){
        var Top = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(scrollTop);
        if(Top>1000){
            oB.style.width = '70%';
            oBb.style.width = '60%';
            oBbb.style.width = '60%';
            oBbbb.style.width = '50%';
        }
    }
 

var oWorkPic = document.getElementsByClassName('workPic');
var oWorkImg;

function workImg(oWorkPic) { 
    for(let a = 0;a<oWorkPic.length;a++){
        oWorkImg = oWorkPic[a].getElementsByTagName('img');
        // console.log(oWorkImg);
        next(oWorkImg);
    }
    
 }
workImg(oWorkPic);

function next(oWorkImg){
    for(let i = 0 ; i<oWorkImg.length ; i++){
        oWorkImg[i].onmouseover = function(){
            oWorkImg[i].style.transform = 'scale(1.3)';
            oWorkImg[i].style.zIndex = '90';
            // clearInterval(timerA);
            // console.log(i);
        }
        oWorkImg[i].onmouseout = function(){
            oWorkImg[i].style.transform = 'scale(1)';
            oWorkImg[i].style.zIndex = (5-i)*10;
            // console.log(oWorkImg[i].style.zIndex);
            // timerA = setInterval(workShow,3000);
        }
    }
}
//  function next(elem) { 
//      do{
//          elem = elem.nextSibling;
//      }while(elem && elem.nodeType != 1 );
//      return elem;
//   }
//  = oWorkPic.getElementsByTagName('img');



var oWorkChange = document.getElementsByClassName('workChange');
var oWorkDot = document.getElementsByClassName('workDot')[0].getElementsByTagName('li');
oWorkChange[0].style.display = 'block';
var timerA =null;
var num = 0;

    if(timerA){
        clearInterval(timerA);
        timerA = null;
    }

    timerA = setInterval(workShow,4000);

    function workShow(){
        num++;
        if(num == oWorkDot.length) num = 0;
        workChange(num);
    }

    function workChange(n){
        for(let j = 0 ; j<oWorkDot.length; j++){
            oWorkChange[j].style.display = 'none';
            oWorkDot[j].style.width = '10px';
            oWorkDot[j].style.height = '10px';
        }
        oWorkChange[n].style.display = 'block';
        oWorkDot[n].style.width = '14px';
        oWorkDot[n].style.height = '14px';
    }

    for(let c = 0;c<oWorkDot.length;c++){
        oWorkDot[c].onmouseover = function () { 
            clearInterval(timerA);
            workChange(c);
         }
         oWorkDot[c].onmouseout = function(){
             num = c;
            timerA = setInterval(workShow,4000);
         }
    }

    let oBack = document.getElementById('back');
    let oTopNav = document.getElementById('topNav');
    window.onscroll = function () { 
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollTop);
        if(scrollTop>400){
            oBack.style.opacity = 1;
            oTopNav.style.opacity = 1;
        }else{
            oBack.style.opacity = 0;
            oTopNav.style.opacity = 0;
        }
        oBack.onclick =function(){
            scrollTo(0,0);
        }
     }












 