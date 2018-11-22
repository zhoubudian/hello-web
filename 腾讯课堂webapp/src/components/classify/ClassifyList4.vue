<style scoped>
@import url('../../assets/css/classify.css');
</style>

<template>
  <main>
        <classify></classify>
        <div class="dir">
                <div class="dirA">
                    <p class="a">大学</p>
                    <ul class="b">
                        <li>自考</li>
                        <li>专升本</li>
                        <li>研究生</li>
                        <li>博士生</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">高中</p>
                    <ul class="b">
                        <li>高考备战</li>
                        <li>高一</li>
                        <li>高二</li>
                        <li>高三</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">初中</p>
                    <ul class="b">
                        <li>中考备战</li>
                        <li>初一</li>
                        <li>初二</li>
                        <li>初三</li>
                        <li>初四</li>
                        <li>更多</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">小学</p>
                    <ul class="b">
                        <li>语文</li>
                        <li>数学</li>
                        <li>英语</li>
                        <li>其他</li>
                        <li>小升初备战</li>
                        <li>更多</li>
                    </ul>
                </div>
            </div>
  </main>
    
</template>

<script>
import Classify from "./Classify"
export default {
    components:{
        Classify,
    }
}
</script>
