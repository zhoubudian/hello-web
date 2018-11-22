<style scoped>
@import url('../../assets/css/classify.css');
</style>

<template>
  <main>
        <classify></classify>
        <div class="dir">
                <div class="dirA">
                    <p class="a">医疗卫生</p>
                    <ul class="b">
                        <li>职业药师</li>
                        <li>职业医师</li>
                        <li>职业护士</li>
                        <li>卫生资格</li>
                        <li>其他</li>
                        <li>更多</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">建筑工程</p>
                    <ul class="b">
                        <li>一级建造师</li>
                        <li>二级建造室</li>
                        <li>消防工程师</li>
                        <li>工程造价</li>
                        <li>工程施工</li>
                        <li>更多</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">职业技能</p>
                    <ul class="b">
                        <li>人力资源</li>
                        <li>心理咨询</li>
                        <li>IT类考试</li>
                        <li>办公软件</li>
                        <li>技工技能</li>
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
