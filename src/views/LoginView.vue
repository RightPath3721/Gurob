<template>
  <div
    id="login"
    class="text-white d-flex flex-column justify-content-center align-items-center position-relative"
  >
    <img
      class="m-5 logo"
      src="@/assets/images/Logobg.png"
      alt="Not find Logo"
    />
    <div class="container">
      <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-4">
          <div id="login-box">
            <form id="login-form" class="p-4" @submit.prevent="login">
              <h4 class="text-center text-white m-3">Log in</h4>
              <div class="form-group mt-5">
                <label for="username" class="text-white">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="form-control"
                  v-model="username"
                />
              </div>
              <div class="form-group mt-3 mb-5">
                <label for="password" class="text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-login btn-lg text-white form-control"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="page-footer position-absolute">
      <p>Pwoerd By gurob © Since 2018</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("Logging in...");
      console.log("Username:", this.username);
      console.log("Password:", this.password);
      this.$router.push({ name: "ShopAgreementsView" });
    },
  },
};
</script>
