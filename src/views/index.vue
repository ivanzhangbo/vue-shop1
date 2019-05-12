<template>
    <div>
        <ul class="welcome">
                <li id="ECS_MEMBERZONE" v-if="userInfo.name">
                <router-link :to="'/app/home/member/userinfo'">{{userInfo.name}}</router-link>
                &nbsp;[
                <a @click="loginOut">退出</a>
                ]</li>
                <li id="ECS_MEMBERZONE" v-else>
                <router-link :to="'/app/login'">请登录</router-link>
                <s>|</s>
                 <router-link :to="'/app/register'">免费注册</router-link>
                </li>

</ul>
        index
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default{
        data(){
            return{
            }
        },
        methods:{
            loginOut(){
            // this.$http.get('/getMenu')
            //     .then((response)=> {

                    //跳转到登录
                    this.$router.push({ name: 'login' })
            //     })
            //     .catch(function (error) {
            //       console.log(error);
            // });
        },

        },
        computed: {
            ...mapGetters({
              // goods_list: 'goods_list',
              userInfo:'userInfo'
            })
        }
    }
</script>

<style>

</style>