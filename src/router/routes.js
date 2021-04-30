import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Post from "../views/Post.vue";
import Profile from "../views/Profile.vue";
import notFound from "../views/notFound.vue";
import Product from "../views/Product.vue";
const routes =[
    {path:'/home',component:Home,name:'home'},
    {path:'/about',component:About,name:'about'},
    {path:'/post/:slug',component: Post,name:'post'},
    {path:'/product/:slug',component: Product,name:'product'},
    {path:'/@:username',component: Profile,name:'profile'},
    {path:'/:match(.*)',component: notFound ,name:'404'},
];
export default routes;