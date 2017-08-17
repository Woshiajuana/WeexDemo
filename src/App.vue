<template>
    <div id="app">
        <!--头部-->
        <header-wrap></header-wrap>
        <!--/头部-->
        <!--主体-->
        <div class="views">
            <list class="list" @loadmore="fetch" loadmoreoffset="10">
                <cell class="cell" v-for="num in lists">
                    <div class="panel">
                        <text class="text">{{num}}</text>
                    </div>
                </cell>
            </list>
        </div>
        <!--/主体-->
        <!--尾部-->
        <nav-bar></nav-bar>
        <!--/尾部-->
    </div>
</template>

<script>
    import HeaderWrap from './components/header-wrap.vue'
    import NavBar from './components/nav-bar.vue'
    const modal = weex.requireModule('modal')
    const LOADMORE_COUNT = 4
    export default {
        name: 'header',
        data () {
            return {
                lists: [1, 2, 3, 4, 5]
            }
        },
        components: {
            HeaderWrap,
            NavBar
        },
        methods: {
            fetch (event) {
                modal.toast({ message: 'loadmore', duration: 1 })
                setTimeout(() => {
                    const length = this.lists.length
                    for (let i = length; i < length + LOADMORE_COUNT; ++i) {
                        this.lists.push(i + 1)
                    }
                }, 800)
            }
        }
    }
</script>

<style scoped>
    #app{
        position: relative;
        width: 100%;
        height: 100%;
    }
    .views{
        position: absolute;
        left: 0;
        right: 0;
        top: 100px;
        bottom: 100px;
        background-color: #ff0;
    }
    .panel {
        width: 600px;
        height: 250px;
        margin-left: 75px;
        margin-top: 35px;
        margin-bottom: 35px;
        flex-direction: column;
        justify-content: center;
        border-width: 2px;
        border-style: solid;
        border-color: rgb(162, 217, 192);
        background-color: rgba(162, 217, 192, 0.2);
    }
    .text {
        font-size: 50px;
        text-align: center;
        color: #41B883;
    }
</style>
