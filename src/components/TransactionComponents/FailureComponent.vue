<template>
  <div
    id="failure"
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
          src="@/assets/images/failure.png"
          alt="payment-failure"
          class="mb-5"
        />
        <p class="mt-3">
          Payment process failed, please try again!<br />reason：
          ******************************
        </p>
      </div>
    </div>
    <div class="page-footer position-absolute">
      <p>Pwoerd By gurob © Since 2018</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FailureComponent",
};
</script>
