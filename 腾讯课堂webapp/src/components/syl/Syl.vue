<style scoped>
main{
    width: 100%;
    overflow: hidden;
    margin:40px 0 65px 0;
}
#top{
    width:100%;
    height:90px;
    /* background: #0ff; */
    border-bottom:1px solid #F2F2F2;
    overflow: hidden;
}

#top .cla{
    width:90%;
    margin:10px auto 0 auto;
    color: #767676;
    font-size: 0.2rem;
}

#top .quan{
    width:90%;
    height: 55px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#top .quan .min span{
    font-size: 0.5rem;
}
#top .quan .rew{
    width:90px;
    height:28px;
    border:1px solid #00BAFF;
    color: #00BAFF;
    text-align: center;
    line-height: 28px;
}
#list{
    width:100%;
    overflow: hidden;
}
#list ul{
    width:90%;
    margin:10px auto 0 auto;
}

#list ul li{
    display: flex;
    height:auto;
    align-items: center;
    margin-top:10px;
}

#list ul li .pic{
    flex: 1 1 0;

}
#list ul li .pic img{
    width:100%;
    height:80%;
}
#list ul li .dir{
    flex: 1.5 1 0;
    display: flex;
}

#list .dir .dirOne{
    flex: 2 1 0;
    margin-left: 5px;
    font-size: 0.3rem;
}
#list .dir .dirOne .oneA{
    overflow: hidden;
    text-overflow: ellipsis;
    width:100%;
    height:55px;
    white-space: wrap;
    line-height: 25px;
    font-size: 0.3rem;
}
#list .dir .dirOne .oneB{
    font-size: 0.2rem;
    color: #767676;
}

#list .dir .dirOne .oneB img{
    vertical-align: middle;
}
#list .dir .dirTwo{
    flex: 1 0 0;
    text-align: center;
}

#list .dir .dirTwo .twoA{
    margin:5px 0;
}

#list .dir .dirTwo .twoB{
    font-size: 0.2rem;
    color: #7FC7F7;
}
</style>

<template>
    <div>
        <common-header></common-header>
        <main>
            <div id="top">
                <p class="cla">今天上课</p>
                <div class="quan">
                    <p class="min"><span>0</span>分钟 | 赶紧开始上课吧!</p>
                    <p class="rew">时长总奖励</p>
                </div>
            </div>

            <div id="list">
                <ul>
                    <li v-for="(syl,index) in sylList" :key="index">
                        <div class="pic">
                            <img :src="syl.src" >
                        </div>
                        <div class="dir">
                            <div class="dirOne">
                                <p class="oneA">{{syl.title}}</p>
                                <p class="oneB">
                                    <img src="@/assets/img/20181119215239.jpg" />
                                    继续学习
                                </p>
                            </div>
                            <div class="dirTwo">
                                <img src="@/assets/img/20181119215546.jpg" class="twoA" />
                                <p class="twoB">已学习</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
        <common-footer></common-footer>
    </div>
</template>

<script>
import CommonHeader from "../common/Header";
import CommonFooter from "../common/Footer";
import Axios from 'axios'
export default {
    components: {
        CommonHeader,
        CommonFooter
  },
  data(){
      return {
          sylList:[]
      }
  },
  mounted(){
      let url = '/static/data/musicdata.json';
      Axios.get(url).then(res=>{
          this.sylList = res.data.musicData;
          console.log(this.sylList);
      }).catch();
  }
}
</script>
