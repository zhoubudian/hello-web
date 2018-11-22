import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/Home'
import HomeList from '@/components/home/HomeList'
import HomeDetail from '@/components/home/HomeDetail'
// import Classify from '@/components/classify/Classify'
import ClassifyList0 from '@/components/classify/ClassifyList0'
import ClassifyList1 from '@/components/classify/ClassifyList1'
import ClassifyList2 from '@/components/classify/ClassifyList2'
import ClassifyList3 from '@/components/classify/ClassifyList3'
import ClassifyList4 from '@/components/classify/ClassifyList4'
import ClassifyList5 from '@/components/classify/ClassifyList5'
import Login from '@/components/login/Login'
import Syl from '@/components/syl/Syl'
import My from '@/components/my/My'
import MyList from '@/components/my/MyList'
import Dialog from '@/components/dialog/Dialog'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/home/homelist'
    },{
      path:'/home',
      name:'Home',
      component:Home,
      children:[
        {
          path:'homelist',
          component:HomeList,
        },{
          path:'homedetail/:homeId',
          component:HomeDetail,
        }
      ],
    },/* {
      path:'/classify',
      name:'Classify',
      component:Classify,
      // redirect:'/cl'
      children:[
      ],
    } */
      {
        path:'/classifylist0',
        name:"ClassifyList0",
        component:ClassifyList0,
      },
      {
        path:'/classifylist1',
        name:"ClassifyList1",
        component:ClassifyList1,
      },
      {
        path:'/classifylist2',
        name:"ClassifyList2",
        component:ClassifyList2,
      },
      {
        path:'/classifylist3',
        name:"ClassifyList3",
        component:ClassifyList3,
      },
      {
        path:'/classifylist4',
        name:"ClassifyList4",
        component:ClassifyList4,
      },
      {
        path:'/classifylist5',
        name:"ClassifyList5",
        component:ClassifyList5,
      },{
        path:'/login',
        name:'Login',
        component:Login,
      },{
        path:'/syl',
        name:'Syl',
        component:Syl,
      },{
        path:'/my',
        name:'My',
        component:My,
        redirect:'/my/mylist',
        children:[{
          path:'mylist',
          component:MyList
        }],
      },{
        path:'/dialog',
        name:'Dialog',
        component:Dialog
      }
    
  ]
})
