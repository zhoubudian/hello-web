<style scoped>
@import url('../../assets/css/classify.css');
</style>

<template>
  <main>
        <classify></classify>
        <div class="dir">
                <div class="dirA">
                    <p class="a">运动健康</p>
                    <ul class="b">
                        <li>体育休闲</li>
                        <li>健身训练</li>
                        <li>舞蹈健美</li>
                        <li>武术格斗</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">生活百科</p>
                    <ul class="b">
                        <li>婚恋交友</li>
                        <li>家居家装</li>
                        <li>时尚美妆</li>
                        <li>美食烹饪</li>
                        <li>养生保健</li>
                        <li>其他</li>
                    </ul>
                </div>
                <div class="dirA">
                    <p class="a">母婴亲子</p>
                    <ul class="b">
                        <li>科学孕产</li>
                        <li>育儿护理</li>
                        <li>亲子启蒙</li>
                        <li>家庭教育</li>
                        <li>少儿编程</li>
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
import Classify from "./Classify"
export default {
    components:{
        Classify,
    }
}
</script>
