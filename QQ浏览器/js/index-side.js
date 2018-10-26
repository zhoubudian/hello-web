  let oJl = document.getElementsByClassName('jl'),
      oGdt = document.getElementsByClassName('gdt'),
      oImg = document.getElementsByClassName('lbRight')[0].getElementsByTagName('img'),
      oDivImg = document.getElementsByClassName('chaImg'),
      oDivOne = document.getElementsByClassName('lbJl')[0];

  var i = 0,
      timerA = null,
      imgArr = ['-45px -6px', '-128px -3px', '-213px -3px'],
      imgCha = ['-4px -6px', '-86px -3px', '-172px -6px'];
  if (timerA) {
      clearInterval(timerA);
      timerA = null;
  }

  //   oJl[0].style.backgroundPosition ='-4px -6px' ;
  timerA = setInterval(sideChange, 3000);

  function sideChange() {
      i++;
      if (i == oJl.length) {
          i = 0;
      }
      sideShow(i);
  };

  function sideShow(ind) {
      for (let a = 0; a < oJl.length; a++) {
          oJl[a].style.backgroundPosition = imgArr[a];
          oGdt[a].style.width = 0;
          oGdt[a].style.transition = '0s';
          oImg[a].style.opacity = 0;
      }
      oJl[ind].style.backgroundPosition = imgCha[ind];
      oGdt[ind].style.width = '100%';
      oGdt[ind].style.transition = '3s';
      oImg[ind].style.opacity = 1;
  };

  oDivOne.onmouseover = function () {
      clearInterval(timerA);
  }


  for (let b = 0; b < oDivImg.length; b++) {
      oDivImg[b].onmouseover = function () {
          i = b;
          sideShow(i);

      }
      oDivImg[b].onmouseout = function () {
          timerA = setInterval(sideChange, 3000);
      }
  }