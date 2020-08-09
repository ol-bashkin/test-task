import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store/";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        beforeEnter(routeTo, routeFrom, next) {
            store.state.user.user !== null ? next("/welcome") : next();
        }
    },
    {
        path: "/registration",
        name: "registration",
        component: () => import("../views/Registration.vue"),
        beforeEnter(routeTo, routeFrom, next) {
            store.state.user.user !== null ? next("/welcome") : next();
        }
    },
    {
        path: "/welcome",
        name: "welcome",
        component: () => import("../views/Welcome.vue"),
        props: true,
        meta: { requireAuth: true }
    },
    { path: "*", redirect: "/" }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((routeTo, routeFrom, next) => {
    const userString = localStorage.getItem("user");
    if (!store.state.user.user && userString) {
        const userData = JSON.parse(userString);
        store.commit("user/SET_USER_DATA", userData);
    }
    routeTo.matched.some(record => record.meta.requireAuth) && !userString
        ? next("/")
        : next();
});

export default router;
