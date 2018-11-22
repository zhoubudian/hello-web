<style scoped>
@import url("../../assets/css/erji.css");

</style>


<template>
    <div>
        <!-- <h2>{{this.$route.params.homeId}}</h2> -->
         <div id="banner">
            <video :src="homeList.rt" controls></video>
        
        <!-- <div class="vid">
            <a href="#">
            </a>
        </div> -->
    </div>

    <main>
        <div id="abstract">
            <h3 class="absOne">{{homeList.nm}}</h3>
            <p class="absTwo">最近在学2万人　累计报名6万人　好评度98%</p>
            <p class="absThree">{{homeList.pn}}</p>
        </div>

        <div id="teacher">
            <p class="teaOne">老师介绍 <span>(5)</span></p>
            <div class="teaTwo">
                <div class="teaA"><img :src="homeList.imax" /></div>
                <div class="teaB">
                    <p class="teaB-a">{{homeList.cat}}</p>
                    <p class="teaB-b">好评度 -</p>
                    <p class="teaB-c">课程数 28</p>
                    <p class="teaB-d">学生数 0</p>
                </div>
                <div class="teaC">
                    {{homeList.dir}}
                </div>
            </div>
            <div class="teaTwo">
                <div class="teaAa"><img :src="homeList.late" /></div>
                <div class="teaB">
                    <p class="teaB-a">陈思彤</p>
                    <p class="teaB-b">好评度 -</p>
                    <p class="teaB-c">课程数 28</p>
                    <p class="teaB-d">学生数 0</p>
                </div>
                <div class="teaC">
                    {{homeList.dra}}
                </div>
            </div>
        </div>

        <div id="coures">
            <p class="couresOne">课程详情</p>
            <img :src="homeList.img" class="pic" />
            <p class="couresTwo">*课程提供者: 渡一教育</p>
        </div>

        <div id="introduce">
            <h3 class="intOne">机构介绍</h3>
            <div class="intTwo">
                <div class="intA">
                    <img :src="homeList.snum" />
                </div>
                <div class="intB">
                    <div class="intB-a">{{homeList.src}} <img src="@/assets/img/rz.png" /></div>
                    <div class="intB-b">
                        <ul class="intB-ul">
                            <li>
                                <p>96%</p>
                                <p>好评度</p>
                            </li>
                            <li>
                                <p>23</p>
                                <p>课程数</p>
                            </li>
                            <li>
                                <p>13万</p>
                                <p>学生数</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="intC">
                {{homeList.star}}
            </div>
        </div>
    </main>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data () {
        return {
            homeList : [],
        }
    },
    mounted(){
        let url1 = '/static/data/moviedetail'+this.$route.params.homeId+'.json';
        // console.log(url1);
        Axios.get(url1).then(res=>{
            this.homeList = res.data.data.MovieDetailModel;
            console.log(this.homeList);
        }).catch();
    }
    
}
</script>