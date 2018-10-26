  let oChanImg = document.getElementById("change").getElementsByTagName("img"),
      oXzImg = document.getElementById("xiaz").getElementsByTagName("img")[0],
      oXzH2 = document.getElementById("xiaz").getElementsByTagName("h2")[0],
      oSmaLi = document.getElementById("small").getElementsByTagName("li"),
      oBanner = document.getElementById("banner");
  let timer = null,
      n = 0;

  if (timer) {
      clearInterval(timer);
      timer = null;
  }

  timer = setInterval(chang, 3000);

  function chang() {
      n++;
      if (n == oSmaLi.length) n = 0;
      changeImg(n);

  }

  function changeImg(num) {
      for (let i = 0; i < oSmaLi.length; i++) {
          oSmaLi[i].className = '';
          oChanImg[i].style.opacity = 0;
      }
      /* oChanImg.style.top = -num * 500 + "px"; */
      if (num == 0) {
          oXzImg.src = "img/btn-down-blue.png";
          oXzH2.style.color = "#0083E4";
      } else {
          oXzImg.src = "img/btn-down-green.png";
          oXzH2.style.color = "#009773";
      }
      oChanImg[num].style.opacity = 1;
      oSmaLi[num].className = 'white';
  }
  oBanner.onmouseover = function () {
      clearInterval(timer);
  }

  oBanner.onmouseout = function () {
      timer = setInterval(chang, 3000);
  }

  for (let j = 0; j < oSmaLi.length; j++) {
      oSmaLi[j].onmouseover = function () {
          changeImg(j);
      }
  }