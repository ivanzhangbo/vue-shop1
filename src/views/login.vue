<template>
    <div>
        <p>用户名<input type="text" v-model="username"></p>
        <p>密码<input type="password" v-model="password"></p>
        <button @click="login">登录</button>
    </div>
</template>

<script>
    import { login } from "../api/api"
  import cookie from '../static/js/cookie';

    export default{
        data(){
            return{
                username:"",
                password:"",
            }
        },
        methods:{
            login(){
        // if(this.userName==''||this.parseWord==''){
        //   this.error = true;
        //   return
        // }
        var that = this;
        login({
          username:this.username, //当前页码
          password:this.password
      }).then((response)=> {
            console.log(response);
            //本地存储用户信息
            cookie.setCookie('name',this.username,7);
            cookie.setCookie('token',response.data.token,7)
            //存储在store
            // 更新store数据
            that.$store.dispatch('setInfo');
            //跳转到首页页面
            this.$router.push({ name: 'index'})
          })
          .catch(function (error) {
            if("non_field_errors" in error){
              that.error = error.non_field_errors[0];
            }
            if("username" in error){
              that.userNameError = error.username[0];
            }
            if("password" in error){
              that.parseWordError = error.password[0];
            }
          });

        //      this.$http.post('/login', {
        //   params: {
        //     userName:this.userName,
        //     parseWord:this.parseWord,
        //   }
        // })
        //   .then((response)=> {
        //     console.log(response);
        //     //本地存储用户信息
        //     cookie.setCookie('name',response.data.info.name,7);
        //     cookie.setCookie('id',response.data.info.id,7)
        //     //存储在store
        //     // 更新store数据
        //     this.$store.dispatch('setInfo');

        //     //跳转到首页页面
        //     this.$router.push({ name: 'index'})

        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      },

        }
    }
</script>

<style>

</style>