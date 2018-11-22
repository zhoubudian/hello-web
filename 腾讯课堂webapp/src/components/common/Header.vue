<style scoped>
@import url('../../assets/css/index.css');
.dia{
    width:100%;
    height:100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    top:35px;
    left:0;
    bottom:0;
    right:0;
    z-index: 100;
}
.dia .bg{
    width:100%;
    height:300px;
    background: #fff;
    border-top:1px solid #F2F2F2;
}

.dia .bg .he{
    width:90%;
    height:40px;
    line-height: 40px;
    color: #8F8F8F;
    margin:0 auto;
    border:none;
}

.dia .bg .he img.pic{
    display:inline-block;
    height: 25px;
    margin-left:3%;
    margin-top:0.13rem;
    margin-right: 3%;
    /* vertical-align: -3px; */
}

.dia .bg .bgul{
    width:90%;
    height: 80px;
    margin:0 auto;
    display: flex;
    flex-flow: wrap;
    /* justify-content: space-around; */
    align-items: center;
    border-bottom:1px solid #F2F2F2;
}

.dia .bg .bgul li{
    flex:0 1 auto;
    padding: 0 15px;
    border:1px solid #CFDFED;
    height:25px;
    line-height: 25px;
    border-radius: 10px;
    margin-left:10px;
}

.dia .bg .bglist{
    width:90%;
    height:170px;
    margin:0 auto;
}

.dia .bg .bglist li{
    line-height: 28px;
    margin-left: 2%;
}
</style>



<template>
    <div>
        <div id="tit">
            <div class="pic"><img src="@/assets/img/loading-animate@2x.8abbdd8.gif" /></div>
            <div class="search"><input type="text" class="inp" @click="blo" v-model="keytext" @keydown.enter="change" /></div>
        </div>
        <div :class="{dia:show}" v-show="chan">
            <div class="bg">
                <header class="he">
                    <img src="@/assets/img/20181121225836.jpg" class="pic" />
                    热门搜索
                </header>
                <ul class="bgul">
                    <li>会计</li>
                    <li>公务员</li>
                    <li>ps</li>
                    <li>雅思</li>
                    <li>物理</li>
                    <li>excel</li>
                    <li>考研政治</li>
                </ul>
                <ul class="bglist">
                    <li v-for="seach in seachList" :key="seach.id" v-text="seach.name"
                    @click="goClass(seach.id)"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:false,
            chan:false,
            // seachList:['','','','','',''],
            seachList:[
                {'id':0,
                 'name':'IT互联网'
                },
                {'id':1,
                 'name':'设计.创作'
                },
                {'id':2,
                 'name':'语言.留学'
                },
                {'id':3,
                 'name':'职业.考试'
                },
                {'id':4,
                 'name':'升学.考研'
                },
                {'id':5,
                 'name':'兴趣.生活'
                },
            ],
            keytext:[],
        }
    },
    methods:{
        blo(){
            if(!this.show){
                this.show = true;
                this.chan = true;
            }else{
                this.show = false;
                this.chan = false;
            }
        },
        change(){
            var arr = this.seachList.filter(val => {
                if(val.name.includes(this.keytext)){
                    return val;
                }
            });
            this.seachList = arr;
        },
        goClass(ind){
            this.$router.push('/classifylist'+ind);
        }
    }
}
</script>