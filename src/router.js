import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import('./views/About.vue')
        },
        {
            path: '/works',
            name: 'works',
            component: () =>
                import('./views/Works.vue')
        },
        {
            path: '/megalotto',
            name: 'megalotto',
            component: () =>
                import('./views/Megalotto.vue')
        },
        {
            path: '/linkiar',
            name: 'linkiar',
            component: () =>
                import('./views/Linkiar.vue')
        },
        {
            path: '/crucijuegos',
            name: 'crucijuegos',
            component: () =>
                import('./views/Crucijuegos.vue')
        }
    ],
    mode: 'history'
});
