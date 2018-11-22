<style scoped>
@import url('../../assets/css/classify.css');
</style>

<template>
  <main>
        <classify>
        </classify>    
        <div class="dir">
                <div class="dirA">
                    <p class="a">互联网产品</p>
                    <ul class="b">
                        <li>产品策划</li>
                        <li>产品运营</li>
                        <li>游戏策划</li>
                        <li>游戏运营</li>
                        <li>新媒体营销</li>
                        <li>更多</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">互联网营销</p>
                    <ul class="b">
                        <li>淘宝营销</li>
                        <li>跨境电商</li>
                        <li>微信营销</li>
                        <li>京东营销</li>
                        <li>拼多多</li>
                        <li>其他</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">编程语言</p>
                    <ul class="b">
                        <li>C</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>PHP</li>
                        <li>C#/.Net</li>
                        <li>更多</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">游戏开发</p>
                    <ul class="b">
                        <li>Unity3d</li>
                        <li>Cocos2d-x</li>
                        <li>游戏服务器</li>
                        <li>Html5游戏</li>
                        <li>VR/AR</li>
                        <li>更多</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">移动开发</p>
                    <ul class="b">
                        <li>Android</li>
                        <li>IOS开发</li>
                        <li>微信开发</li>
                        <li>跨平台APP</li>
                        <li>云计算</li>
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
