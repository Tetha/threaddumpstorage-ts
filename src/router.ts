import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ThreadPoolAnalysisView from './views/ThreadPoolAnalysis.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/threaddump/:dumpId/pools',
      name: 'poolAnalysis',
      component: ThreadPoolAnalysisView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
