<template>
    <div class="parent">
        <h3>this is parent</h3>
        <button type="button" @click="clickHandler">change self</button>
        <button type="button" @click="clickHandler2">change child</button>
        <div>Test:{{msg}}</div>
        <child></child>
    </div>
</template>

<script>
    import store from "./state"
    import child from "./child"

    export default {
        computed:{
            msg(){
                return store.state.testMsg;
            }
        },
        methods:{
            clickHandler(){
                store.commit("changeTextmsg","parent is old")
            },
            clickHandler2(){
                store.commit("changeChildText","child is young")
            },
        },
        components:{
            'child':child
        },
        store,
    }
</script>

<style>

</style>