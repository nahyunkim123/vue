import Vue from 'vue';
import VueRouter from 'vue-router';
import Careers from './views/Careers';
import Company from './views/Company';
import Investors from './views/Investors';
import News from './views/News';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/Careers", 
            component: Careers
        },
        {
            path: "/Company", 
            component: Company
        },
        {
            path: "/Investors", 
            component: Investors
        },
        {
            path: "/News", 
            component: News
        }
    ]
});

export default router;