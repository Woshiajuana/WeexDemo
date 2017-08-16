import Vue from 'vue'
import Router from 'vue-router'
/**四大首页容器*/
import Index from '../views/index/Index.vue'

Vue.use(Router);

const router = new Router({
    routes: [
        /**首页容器*/
        {
            path: '/',
            component: Index,
            children: [
                /**首页*/
                {
                    path: '/',
                    name: 'home',
                    component: Home,
                    meta: {
                        status: 1
                    }
                },
                /**发现*/
                {
                    path: '/find',
                    name: 'find',
                    component: Find,
                    meta: {
                        status: 2
                    }
                },
                /**留言*/
                {
                    path: '/message',
                    name: 'message',
                    component: Message,
                    meta: {
                        status: 3
                    }
                },
                /**关于*/
                {
                    path: '/about',
                    name: 'about',
                    component: About,
                    meta: {
                        status: 4
                    }
                }
            ]
        },
        /**搜索*/
        {
            path: '/search',
            component: Search,
            children: [
                {
                    path: '/',
                    name: 'search-index',
                    component: SearchIndex,
                    meta: {
                        status: 2
                    }
                },
                {
                    path: 'result/:key_words',
                    name: 'search-result',
                    component: SearchResult,
                    meta: {
                        status: 2
                    }
                }
            ]
        },
        /**文章*/
        {
            path: '/article/:_id',
            name: 'article',
            component: Article,
            meta: {
                status: 5
            }
        }
    ]
});



export default router
