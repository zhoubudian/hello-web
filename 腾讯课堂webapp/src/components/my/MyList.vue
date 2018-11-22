<style scoped>
main{
    /* margin:35px 0 60px 0; */
    width:100%;
    height: 100%;
    position: fixed;
    top:35px;
    left:0px;
    background: #F3F3F7;
    margin-bottom: 60px;
}

#tit{
    width:100%;
    height:100px;
    background: #fff;
    margin-top:2px;
    border-bottom:1px solid #F2F2F2;
    display: flex;
    align-items:center;
}
#tit img{
    display: block;
}
#tit .titA{
    width:60px;
    height:60px;
    margin-left:5%;
}

#tit .titB{
    font-size: 0.4rem;
    margin-left:2%;
    margin-right: auto;
}

#tit .titC{
    width: 28px;
    height:26px;
    margin-right: 5%;
}

#house{
    width:100%;
    height:80px;
    background:#fff;
    margin-top:1px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#house .houA{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
}
#house .houB{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
}

#house .houB img{
    margin-bottom: 3px;
}
#list{
    width:100%;
    overflow: hidden;
    margin-top:10px;
}

#list .listA{
    width:100%;
    height:44px;
    border:1px solid #F2F2F2;
    background: #fff;
    display: flex;
    align-items: center;
}
#list .listA .lista{
    margin-right:auto;
    margin-left:5%;
    font-size: 0.3rem;
    text-shadow: 0 0 1px #ccc;
}

#list .listA .listb{
    vertical-align: middle;
}

#list .listA .listc{
    margin-right: 3%;
    margin-left: 2%;
    font-size: 0.35rem;
}
#list .listA .listc span{
    color:#CECECE;
    /* padding-left:; */
    font-weight: bold;
}

#list .listB{
    width:100%;
    height:44px;
    border:1px solid #F2F2F2;
    background: #fff;
    display: flex;
    align-items: center;
    margin:10px 0;
}

#list .listB .lista{
    margin-right:auto;
    margin-left:5%;
    font-size: 0.3rem;
    text-shadow: 0 0 1px #ccc;
}
#list .listB .listc{
    margin-right: 3%;
    margin-left: 2%;
    font-size: 0.35rem;
    color:#CECECE;
    /* padding-left:; */
    font-weight: bold;
}




</style>


<template>
    <main>
        <div id="tit">
            <img src="@/assets/img/g.jpg"  class="titA"/>
            <p class="titB">......</p>
            <img src="@/assets/img/20181121194644.jpg" class="titC"/>
        </div>

        <div id="house">
            <div class="houA">
                <img src="@/assets/img/20181121194740.jpg" />
                <p>订单管理</p>
            </div>
            <div class="houB">
                <img src="@/assets/img/20181121194752.jpg" />
                <p>收藏</p>
            </div>
        </div>

        <div id="list">
            <div class="listA">
                <p class="lista">余额</p>
                <img src="@/assets/img/20181121194805.jpg" class="listb" />
                <p class="listc">0 <span> &gt; </span></p>
            </div>
            <div class="listA">
                <p class="lista">优惠券</p>
                <!-- <img src="@/assets/img/20181121194805.jpg" class="listb" /> -->
                <p class="listc">0 <span> &gt; </span></p>
            </div>
            <div class="listB">
                <p class="lista">上课流量免费</p>
                <!-- <img src="@/assets/img/20181121194805.jpg" class="listb" /> -->
                <p class="listc">&gt; </p>
            </div>
            <div class="listB">
                <p class="lista">反馈建议</p>
                <!-- <img src="@/assets/img/20181121194805.jpg" class="listb" /> -->
                <p class="listc"> &gt; </p>
            </div>
            <div class="listB">
                <p class="lista">设置</p>
                <!-- <img src="@/assets/img/20181121194805.jpg" class="listb" /> -->
                <p class="listc"> &gt; </p>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    
}
</script>
