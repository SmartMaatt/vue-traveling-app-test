import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
        import(/* webpackChunkName: "Destination" */ "../views/DestinationDetails.vue"),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () =>
            import(/* webpackChunkName "Experience"*/ "../views/ExperienceDetails.vue")

      }
    ],
    beforeEnter: (to, form, next) => {
      var exist = null;
      for(let i = 0; i< store.destinations.length; i++){
        if(store.destinations[i].slug === to.params.slug)
          exist = store.destinations[i];
      }

      if(exist){
        next()
      }
      else{
        next({name: "notFound"})
      }
    }
  },
  {
    path: "/user",
    name: "user",
    component: () =>
        import(/* webpackChunkName Login */ "../views/User.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
        import(/*webpackChunkName User*/ "../views/Login.vue")
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () =>
        import(/*webpackChunkName Invoices*/ "../views/Invoices.vue"),
    meta: { requiresAuth: true}
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
        import(/* webpackChunkName "NotFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }
    else {
      const position = {};
      if(to.hash) {
        position.selector = to.hash;
        if(to.hash === '#experience'){
          position.offset = { y: 140 };
        }
        if(document.querySelector(to.hash)){
          return position
        }
        return false;
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
      if(!store.user){
        next({name: "login",  query: {redirect: to.fullPath}});
      }
      else{
        next();
      }
  }
  else{
    next();
  }
})

export default router;
