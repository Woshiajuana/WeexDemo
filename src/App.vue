<template>
    <div id="app">
        <!--头部-->
        <header-wrap></header-wrap>
        <!--/头部-->
        <!--主体-->
        <div class="views"></div>
        <!--/主体-->
        <!--尾部-->
        <footer-wrap></footer-wrap>
        <!--/尾部-->
    </div>
</template>

<script>
    import HeaderWrap from './components/header-wrap.vue'
    import FooterWrap from './components/footer-wrap.vue'
    export default {
        name: 'header',
        components: {
            HeaderWrap,
            FooterWrap
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
</style>
