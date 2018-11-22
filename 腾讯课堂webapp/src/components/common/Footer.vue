<style scoped>
@import url('../../assets/css/index.css');
footer .router-link-active .a{
    display: none;
}
footer .router-link-active .b{
    display: block;
}
.b{
    display: none;
}
a.router-link-active{
    color: #00BAFF;
}
footer li a{
    outline: none;
}
</style>


<template>
    <footer>
        <li><router-link to="/home/homelist">
            <img src="@/assets/img/20181120224758.jpg" class="a"/>
            <img src="@/assets/img/20181120225009.jpg" class="b"/>
            首页
        </router-link></li>
        <li><router-link to="/classifylist0">
            <img src="@/assets/img/20181120224826.jpg" class="a"/>
            <img src="@/assets/img/20181120225029.jpg" class="b"/>
            分类
        </router-link></li>
        <li><router-link to="/login">
            <img src="@/assets/img/20181120225040.jpg" class="a"/>
            <img src="@/assets/img/20181120224857.jpg" class="b"/>
            课程
        </router-link></li>
        <li><router-link to="/my">
            <img src="@/assets/img/20181120224948.jpg" class="a"/>
            <img src="@/assets/img/20181120225056.jpg" class="b"/>    
            我的
        </router-link></li>
    </footer>
</template>

<script>
export default {
    
}
</script>