import { createWebHistory, createRouter } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import paymentSuccessComponent from "@/components/TransactionComponents/SuccessComponent";
import paymentLoadingComponent from "@/components/TransactionComponents/LoadingComponent";
import paymentFailureComponent from "@/components/TransactionComponents/FailureComponent";
import ShopAgreementsView from "@/views/ShopAgreementsView.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/shop-agreements",
    name: "ShopAgreementsView",
    component: ShopAgreementsView,
  },
  {
    path: "/payment-failure",
    name: "paymentFailureComponent",
    component: paymentFailureComponent,
  },
  {
    path: "/payment-success",
    name: "paymentSuccessComponent",
    component: paymentSuccessComponent,
  },
  {
    path: "/payment-loading",
    name: "paymentLoadingComponent",
    component: paymentLoadingComponent,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
