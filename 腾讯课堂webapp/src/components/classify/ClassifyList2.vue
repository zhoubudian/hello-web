<style scoped>
@import url('../../assets/css/classify.css');
</style>

<template>
  <main>
        <classify></classify>
        <div class="dir">
                <div class="dirA">
                    <p class="a">日语</p>
                    <ul class="b">
                        <li>入门日语</li>
                        <li>初级日语</li>
                        <li>中高级日语</li>
                        <li>兴趣日语</li>
                        <li>日语考试</li>
                        <li>日本留学</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">韩语</p>
                    <ul class="b">
                        <li>韩语零基础</li>
                        <li>韩语初级</li>
                        <li>韩语中高级</li>
                        <li>旅游韩语</li>
                        <li>韩流文化</li>
                        <li>留学</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">小语种</p>
                    <ul class="b">
                        <li>法语</li>
                        <li>德语</li>
                        <li>西班牙语</li>
                        <li>葡萄牙语</li>
                        <li>方言</li>
                        <li>其他</li>
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
