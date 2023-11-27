<template>
  <div
    id="loading"
    class="text-white d-flex flex-column justify-content-center align-items-center position-relative"
  >
    <img
      class="m-5 logo"
      src="@/assets/images/Logobg.png"
      alt="Not find Logo"
    />
    <div class="container">
      <div class="loading d-flex flex-column justify-content-center">
        <img
          src="@/assets/images/loading.png"
          alt="payment-loading"
          class="mb-5"
        />
        <p class="mt-3">Please do not close the page until it is finished</p>
      </div>
    </div>
    <div class="page-footer position-absolute">
      <p>Pwoerd By gurob © Since 2018</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
};
</script>
