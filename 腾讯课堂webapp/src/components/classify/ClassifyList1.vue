<style scoped>
@import url('../../assets/css/classify.css');
</style>

<template>
  <main>
        <classify></classify>
        <div class="dir">
                <div class="dirA">
                    <p class="a">平面设计</p>
                    <ul class="b">
                        <li>电商美工</li>
                        <li>综合平面</li>
                        <li>摄影后期</li>
                        <!-- <li>游戏运营</li>
                        <li>新媒体营销</li> -->
                        <li>更多</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">UI设计</p>
                    <ul class="b">
                        <li>交互设计</li>
                        <li>游戏UI</li>
                        <li>web UI</li>
                        <li>APP UI</li>
                        <li>腾讯设计</li>
                        <li>其他</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">设计软件</p>
                    <ul class="b">
                        <li>Photoshop</li>
                        <li>InDesign</li>
                        <li>Axure</li>
                        <li>ADR</li>
                        <li>lllustrator</li>
                        <li>更多</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">游戏动画设计</p>
                    <ul class="b">
                        <li>游戏角色</li>
                        <li>场景概念</li>
                        <li>游戏模型</li>
                        <li>游戏特效</li>
                        <li>动画设计</li>
                        <li>更多</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">环境艺术设计</p>
                    <ul class="b">
                        <li>室内设计</li>
                        <li>建筑设计</li>
                        <li>景观设计</li>
                        <li>更多</li>
                    </ul>
                </div>
            </div>
  </main>
    
</template>

<script>
import Classify from  './Classify'
export default {
    components:{
        Classify,
    }
}
</script>
