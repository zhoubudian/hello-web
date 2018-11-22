<style scoped>
@import url('../../assets/css/classify.css');
.bg{
  background: #F0F0F5;
}

.bga{
  background: #fff;
}

nav .inp a.router-link-active{
    display: block;
    width:100%;
    height:100%;
    background: #ffffff;
}
</style>


<template>

    <div>
        <common-header></common-header>
        <main>
            <nav>
               <ul>
                  <li class="inp" v-for="(cla,index) in navList" :key="index"  >
                      <router-link :to="'/classifylist'+index" :style="{background:bg}">
                        {{cla}}
                      </router-link> 
                  </li>
                  <!-- <li>设计.创作</li>
                  <li>语言.留学</li>
                  <li>职业.考证</li>
                  <li>升学.考研</li>
                  <li>兴趣.生活</li> -->
              </ul>
            </nav>
            <!-- <router-view></router-view> -->
        </main>
        <common-footer></common-footer>
    </div>
    
</template>


<script>
import CommonHeader from "../common/header";
import CommonFooter from "../common/footer";
import Axios from 'axios'
export default {
  components: {
    CommonHeader,
    CommonFooter
  },
  data(){
    return {
        navList:['IT.互联网','设计.创作','语言.留学','职业.考证','升学.考研','兴趣.生活'],
        isA:true,
        isB:false,
    }
  },
  methods:{
   /*  tz(n){
      console.log(typeof n);
        for(let i = 0; i<this.navList.length;i++){
          this.isA = true;
          this.isB = false;
          if(n == i){
              this.isA = false;
              this.isB = true;
          }
        }

    } */
  },
  props:['bg'],
  /* 
  computed:{
    showObj(){
      return {
        background:'#fff',
      }
    }
  } */
};
</script>
