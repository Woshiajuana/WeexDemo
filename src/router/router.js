
import Router from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(Router)

// Story view factory
function createStoriesView (type) {
    return {
        name: `${type}-stories-view`,
        render (createElement) {
            return createElement(StoriesView, { props: { type }})
        }
    }
}

export default new Router({
    routes: [
        { path: '/home', component: Home },
        { path: '/', redirect: '/top' }
    ]
})
