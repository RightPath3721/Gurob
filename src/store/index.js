import { createStore } from "vuex";
import shop from "./modules/shop";

export default createStore({
  modules: {
    shop,
  },
});
