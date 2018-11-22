<style scoped>
@import url("../../assets/css/index.css");
/* .my-swipe{
    height: 145px;
} */

.my-swipe {
  height: 145px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top: 35px;
}

.slide1 {
  background: url(../../assets/img/0.jpg) no-repeat;
  background-size: 100% 100%;
  color: #fff;
}

.slide2 {
  background: url(../../assets/img/1.jpg) no-repeat;
  background-size: 100% 100%;
  color: #000;
}

.slide3 {
  background: url(../../assets/img/2.jpg) no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.slide4 {
  background: url(../../assets/img/3.jpg) no-repeat;
  background-size: 100% 100%;
  color: #fff;
}

.slide5 {
  background: url(../../assets/img/4.jpg) no-repeat;
  background-size: 100% 100%;
  color: #000;
}

.slide6 {
  background: url(../../assets/img/5.jpg) no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.slide7 {
  background: url(../../assets/img/6.jpg) no-repeat;
  background-size: 100% 100%;
  color: #fff;
}
.loading {
  margin-bottom: 1rem;
  text-align: center;
}
.tip{
  text-align: center;
}

.back{
    width:40px;
    height:40px;
    border-radius: 50%;
    position: fixed;
    bottom:15%;
    right:10%;
    background: #505050 url(../../assets/img/20181119145548.jpg) no-repeat 
    center;
    /* display: none; */
    opacity:0;
    transition: 0.6s;
}
</style>


<template>
    <div>
         <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
            <swipe-item class="slide5"></swipe-item>
            <swipe-item class="slide6"></swipe-item>
            <swipe-item class="slide7"></swipe-item>
        </swipe>

        <header>
            <div class="heaOne">
                <img src="@/assets/img/7.jpg" />
            </div>
            <div class="heaTwo">
                <img src="@/assets/img/8.jpg" />
            </div>
        </header>

        <main>
            <div id="mainA">
                <div class="web"><a href="#">前端<p></p></a></div>
                <div class="pro"><a href="#">編程语言</a></div>
                <div class="live"><a href="#">兴趣生活</a></div>
                <div class="move"><a href="#">+</a></div>
            </div>

             <div id="mainB">
                    <ul class="course">
                        <li class="couA">
                            <div class="couOne">
                                <img src="@/assets/img/356.jpg" />
                            </div>
                            <div class="couTwo">
                                <p class="one">js实现模态框组件</p>
                                <p class="two">cc</p>
                                <p class="three">
                                    <img src="@/assets/img/inclass.ede0540.gif" />
                                    直播中
                                    <span>39人在上课</span>
                                </p>
                            </div>
                        </li>
                        <li class="couA">
                            <div class="couOne">
                                <img src="@/assets/img/3562.jpg" />
                            </div>
                            <div class="couTwo">
                                <p class="one">canvas鼠标炫酷跟随效果</p>
                                <p class="two">渡一教育</p>
                                <p class="three">
                                    <img src="@/assets/img/inclass.ede0540.gif" />
                                    直播中
                                    <span>323人在上课</span>
                                </p>
                            </div>
                        </li>
                        <li class="couA">
                            <div class="couOne">
                                <img src="@/assets/img/3563.jpg" />
                            </div>
                            <div class="couTwo">
                                <p class="one">月薪6万和5000的前端代码差在哪</p>
                                <p class="two">志佳老师</p>
                                <p class="three">
                                    <img src="@/assets/img/inclass.ede0540.gif" />
                                    直播中
                                    <span>158人在上课</span>
                                </p>
                            </div>
                        </li>
                        <!-- <li class="couB"></li>
                        <li class="couC"></li> -->
                    </ul>
            </div>

            <div id="open">
            <div class="openA">
                / 精选公开课 /
                <ul class='openUl'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div class="openB">
                <div class="class">课程</div>
                <div class="classList">
                    <ul class="dirList">
                        <li>不限</li>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>React</li>
                        <li>Vue.js</li>
                        <li>Bootstrap</li>
                        <li>Web全栈</li>
                    </ul>
                </div>
            </div>

            <div class="openC">
                <div class="openOne">水平</div>
                    <div class="openTwo">
                        <ul>
                            <li>不限</li>
                            <li>基础</li>
                            <li>进阶</li>
                        </ul>
                    </div>
                </div>

                <div class="openD">
                    <ul class="Done">
                        <li class="a">
                            <div class="aOne">
                                <img src="@/assets/img/3564.jpg" />
                            </div>
                            <p class="aTwo">Web前端开发之JavaScript精英课堂[渡一教育]</p>
                            <p class="aThree">免费</p>
                        </li>
                        <li class="a">
                            <div class="aOne">
                                <img src="@/assets/img/3565.jpg" />
                            </div>
                            <p class="aTwo">165天逆袭web全栈工程师 (高级篇) React/Vue/Node.js框架实战</p>
                            <p class="aThree">免费</p>
                        </li>
                        <li class="a">
                            <div class="aOne">
                                <img src="@/assets/img/3566.jpg" />
                            </div>
                            <p class="aTwo">资深前端手把手用实战教你冲击月薪3万</p>
                            <p class="aThree">免费</p>
                        </li>
                        <li class="a">
                            <div class="aOne">
                                <img src="@/assets/img/3567.jpg" />
                            </div>
                            <p class="aTwo">Web前端/全栈核心(html5/css3/js/vue/react/angular/es6)s/jq/vue/ajax</p>
                            <p class="aThree">免费</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="choic">
                <div class="choicA">
                        / 精选付费课 /
                        <ul class='choicUl'>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                </div>

                <div class="choicD">
                        <ul class="Done">
                            <li @click="goDetail(home.id)" class="a" v-for="home in HomeList" :key="home.id">
                                <div class="aOne">
                                    <img :src="home.img" />
                                </div>
                                <p class="aTwo">{{home.nm}}</p>
                                <p class="aThree">￥{{home.dur}}</p>
                            </li>
                        </ul>
                        <div class="loading" v-show="loadingShow">
                            <img src="@/assets/img/loading.gif" />
                        </div>
                        <div class="tip" v-show="tip">
                            <h4>-没有更多了-</h4>
                        </div>
                </div>
            </div>
        </main>
        
        <div class="back" >
        </div>
    
    </div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
import Axios from "axios";
// import '../../assets/js/index1.js'
export default {
  components: {
    swipe: Swipe,
    "swipe-item": SwipeItem
  },
  data() {
    return {
      HomeList: [],
      loadingShow:false,
      tip:false,
    };
  },
  methods: {
    loadingData() {
      let url = "/static/data/moviedata.json";
      Axios.get(url)
        .then(res => {
          let limit = res.data.data.movies;
          // console.log(limit);
          let data = limit.slice(
            this.HomeList.length,
            this.HomeList.length + 4
          );
        //   console.log(data);
          if(data.length<4){
              this.tip = true;
          }
          this.HomeList = this.HomeList.concat(data);
        })
        .catch(()=>{
            alert('错误');
        });
    },
    goDetail(homeId){
        this.$router.push('/home/homedetail/'+homeId);
    },
  },
  mounted() {
    this.loadingData();
    let oBck = document.getElementsByClassName('back')[0];
    window.onscroll = () => {
        let clientHeight = document.documentElement.clientHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        scrollHeight = scrollHeight -5;
        // console.log(clientHeight,scrollTop,scrollHeight);
        if(clientHeight + scrollTop >= scrollHeight){
            this.loadingShow = true;
            if(!this.tip){
                this.loadingData();
            }else{
                this.loadingShow = false;
            }
        }
        
        if(scrollTop>300){
            oBck.style.opacity = "1";
        }else{
            oBck.style.opacity = '0';
        }
        // this.bhome(scrollTop);
        oBck.onclick = function(){
            // alert();
            scrollTo(0,0);
        }
    }




    var oDirList = document.querySelector(".dirList");

    var x0, x1, x2;
    oDirList.addEventListener(
      "touchstart",
      function(e) {
        var e = event || window.event;
        x0 = oDirList.offsetLeft;
        //console.log('x0=>'+x0);
        x1 = e.touches[0].clientX;
        //console.log('x1=>'+x1);
      },
      false
    );

    oDirList.addEventListener(
      "touchmove",
      function(e) {
        var e = event || window.event;
        x2 = e.changedTouches[0].clientX;

        var x = x0 + (x2 - x1);

        if (x > 0) {
          x = 0;
        }
        if (x < -510) {
          x = -510;
        }
        oDirList.style.left = x + "px";
      },
      false
    );

    oDirList.addEventListener("touchend", function() {
      oDirList.ontouchmove = null;
    });
  }
};
</script>