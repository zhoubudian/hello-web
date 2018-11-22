<style scoped>
main{
    width:100%;
    height:580px;
    background: #EFEFEF;
    overflow: hidden;
}

#logo{
    width:100%;
    height:100px;
    margin: 30px 0 20px 0;
}

#logo img{
    width:80%;
    height:100px;
    display: block;
    margin:0 auto;
}

#inp{
    width:90%;
    height:100px;
    background: #fff;
    border-radius: 5px;
    margin:0 auto;
}

#inp input{
    width:97%;
    height:49px;
    border:none;
    margin-left:1%;
    color: #A9A9A9;
    padding-left:1%;
    font-size: 0.3rem; 
}

#inp input:nth-child(1){
    border-bottom:1px solid #EBEBEB;
}

#inp input:focus{
    outline: none;
}
#login{
    width:90%;
    height:45px;
    background: #0070DF;
    text-align: center;
    color: #fff;
    line-height: 45px;
    font-size: 0.25rem;
    border-radius: 5px;
    margin:12px auto;
}

#loginOne{
    width:90%;
    height:45px;
    color: #0070DF;
    text-align: center;
    line-height: 45px;
    font-size: 0.25rem;
    border-radius: 5px;
    border:1px solid #0070Df;
    margin:0 auto;
}
footer{
    width:90%;
    height:50px;
    display: flex;
    margin:10px auto;
    justify-content: space-between;
    align-items: center;
}

footer p{
    color: #006283;

}
</style>


<template>
    <main>
        <div id="logo">
            <img src="@/assets/img/logo1.png"/>
        </div>

        <div id="inp">
            <input type="text" v-model="zh" placeholder="QQ号码/手机/邮箱">
            <input type="password" v-model="mm" placeholder="请输入你的QQ密码">
        </div>

        <div id="login" @click="judge">
            登录
        </div>

        <div id="loginOne">
            一键登录
        </div>

        <footer>
            <p>忘记密码?</p>
            <p>注册新账号</p>
        </footer>
    </main>
</template>

<script>
export default {
    data(){
        return {
            zh:'',
            mm:''
        }
    },
    methods:{
        judge(){
            // console.log(oInp);
            let a = /\d/;
            let msg = 'wodiai';
            

            if(a.test(this.zh) && this.mm == msg){
                this.$router.push('/syl');
            }else{
                // alert('请重新填写');
                this.zh = '请填写正确的账号和密码';
                this.mm = '';
            }
        }
    }
}
</script>
