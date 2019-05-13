<template>
    <div class="child">
        <h3>this is parent</h3>
        <button type="button" @click="clickHandler">change self</button>
        <button type="button" @click="clickHandler2">change child</button>
        <div>Test:{{msg}}</div>
    </div>
</template>

<script>
    import store from "./state"

    export default {
        name:"child",
        computed:{
            msg(){
                return store.state.testMsg;
            }
        },
        methods:{
            clickHandler(){
                store.commit("changeTextmsg","parent is not old")
            },
            clickHandler2(){
                store.commit("changeChildText","child is too por")
            },
        },
        store,
    }
</script>

<style>

</style>