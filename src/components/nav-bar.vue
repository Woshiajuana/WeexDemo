<template>
    <div class="nav-bar-wrap">
        <a href="" class="nav-bar-item"><text class="nav-bar-item-text">首页</text></a>
        <a href="" class="nav-bar-item"><text class="nav-bar-item-text">发现</text></a>
        <a href="" class="nav-bar-item"><text class="nav-bar-item-text">消息</text></a>
        <a href="" class="nav-bar-item"><text class="nav-bar-item-text">我的</text></a>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar'
    }
</script>

<style scoped>
    .nav-bar-wrap{
        position: absolute;
        display: flex;
        flex-direction: row;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100px;
        background-color: #f2f2f2;
        border-top: 1px solid #ddd;
    }
    .nav-bar-item{
        flex: 1;
        width: 120px;
        justify-content: center;
        align-items:center;
    }
    .nav-bar-item-text{
        color: #999;
    }
</style>
