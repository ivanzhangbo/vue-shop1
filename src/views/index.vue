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

        商品数量:{{listData.length}}
        <hr>
        <ul>
            <li v-for="list in listData">{{list.name}}--{{list.shop_price}}</li>
        </ul>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getGoods } from '../api/api'

    export default{
        data(){
            return{
                top_category:'',
                listData: [],
                cateMenu: {}, //菜单列表
                isObject:true,
                ordering: '-add_time',
                proNum: 0, //商品数量
                curLoc: [], //当前位置
                priceRange: [], //价格区间
                pricemin: '', //价格最低
                pricemax: '', //价格最高
                pageType:'list',
                searchWord:'',
                currentCategoryName:''
            }
        },
        methods:{
            loginOut(){
            // this.$http.get('/getMenu')
            //     .then((response)=> {

                    //跳转到登录
                    this.$router.push({ name: 'login' })
             },
            getListData() {
                  getGoods({
                    page: 1, //当前页码
                    top_category: this.top_category, //商品类型
                    ordering: this.ordering, //排序类型
                    pricemin: this.pricemin, //价格最低 默认为‘’ 即为不选价格区间
                    pricemax: this.pricemax // 价格最高 默认为‘’
                  }).then((response)=> {

                    this.listData = response.data.results;
                    this.proNum = response.data.count;
                  }).catch(function (error) {
                    console.log(error);
                  });
            },
        },
        computed: {
            ...mapGetters({
              // goods_list: 'goods_list',
              userInfo:'userInfo'
            })
        },
        created() {
            this.getListData();
        }
    }
</script>

<style>

</style>