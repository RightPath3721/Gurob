<template>
  <div>
    <button
      type="button"
      class="btn btn-primary d-none"
      data-bs-toggle="modal"
      data-bs-target="#settingsModal"
    ></button>
    <div
      class="modal fade"
      id="settingsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="settings-label"
      aria-hidden="true"
    >
      <div class="modal-dialog mt-4" role="document">
        <div class="modal-content">
          <div class="mt-4 text-align-center" style="position: relative">
            <h5 class="modal-title" id="settings-label">Settings</h5>
            <i class="fa fa-times times" data-bs-dismiss="modal"></i>
          </div>
          <div class="modal-body col-sm-12">
            <div class="row">
              <div class="col-sm-6">
                <div class="price-monthly d-flex">
                  <div class="col-5">
                    <label>Saudi monthly plan price</label>
                    <div class="position-relative">
                      <input class="setting-input" type="Number" />
                      <span class="input-usd">USD</span>
                    </div>
                  </div>
                  <div class="col-2"></div>
                  <div class="col-5 position-relative">
                    <label>non-Saudi monthly plan price</label>
                    <div class="position-relative">
                      <input class="setting-input" type="Number" />
                      <span class="input-usd">USD</span>
                    </div>
                  </div>
                </div>
                <div class="price-monthly d-flex mt-3">
                  <div class="col-5">
                    <label>monthly issue day</label>
                    <input class="setting-input" type="Number" />
                  </div>
                  <div class="col-2"></div>
                  <div class="col-5">
                    <label>Invoice due date</label>
                    <input class="setting-input" />
                  </div>
                </div>
                <div class="mt-3 d-flex">
                  <div class="col setting-label">payment method</div>
                  <div class="col setting-label">percentage</div>
                  <div class="col setting-label">additional fee</div>
                </div>
                <div
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <div
                    class="col text-center setting-label d-flex align-items-center"
                  >
                    <svg
                      width="40"
                      height="14"
                      viewBox="0 0 40 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.3501 0.741211L14.3426 13.2338H17.5513L19.5576 0.741211H16.3501ZM26.0289 5.82998C24.9075 5.27625 24.2201 4.90252 24.2201 4.33617C24.2338 3.82123 24.8014 3.29368 26.0689 3.29368C27.1114 3.2675 27.8776 3.51249 28.4589 3.75625L28.7501 3.88622L29.1863 1.27246C28.5525 1.02747 27.5476 0.757525 26.3063 0.757525C23.1376 0.757525 20.9064 2.40502 20.8925 4.76131C20.8663 6.50011 22.49 7.465 23.7051 8.04383C24.9463 8.63759 25.3689 9.02256 25.3689 9.55011C25.3552 10.3601 24.3652 10.7338 23.4414 10.7338C22.1615 10.7338 21.4739 10.5413 20.4302 10.09L20.0077 9.89751L19.559 12.6138C20.3127 12.9489 21.6989 13.2438 23.1378 13.2589C26.5053 13.2589 28.6965 11.6363 28.724 9.12511C28.735 7.74756 27.8788 6.69246 26.0289 5.82998ZM37.4126 0.779872H34.93C34.165 0.779872 33.5837 0.999913 33.2525 1.78493L28.4862 13.2338H31.8537L32.7812 10.7551H36.5487L37.0299 13.2438H40L37.4126 0.779872ZM33.7151 8.25358C33.7801 8.25989 35.0076 4.2073 35.0076 4.2073L35.9851 8.25358C35.9851 8.25358 34.3489 8.25358 33.7151 8.25358ZM11.6614 0.741211L8.51758 9.22876L8.17511 7.55494C7.59382 5.62365 5.77138 3.52497 3.73755 2.48248L6.61631 13.2213H10.0114L15.0564 0.742581H11.6614V0.741211Z"
                        fill="#42BBFF"
                      />
                      <path
                        d="M7.11753 2.35256C6.87254 1.40001 6.09122 0.757576 5.03009 0.743866H0.0512743L0 0.975011C3.88382 1.9325 7.14372 4.87871 8.20129 7.64999L7.11753 2.35256Z"
                        fill="#EFC75E"
                      />
                    </svg>
                    &nbsp;Visa Card
                  </div>
                  <div class="col position-relative">
                    <input class="setting-input width-95" type="Number" />
                    <span class="input-usd">%</span>
                  </div>
                  <div class="col position-relative">
                    <input class="setting-input" type="Number" />
                    <span class="input-usd">USD</span>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <div
                    class="col text-center setting-label d-flex align-items-center"
                  >
                    <svg
                      width="40"
                      height="24"
                      viewBox="0 0 40 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <rect width="40" height="24" fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlink:href="#image0_1_612"
                            transform="scale(0.005 0.00833333)"
                          />
                        </pattern>
                        <image
                          id="image0_1_612"
                          width="200"
                          height="120"
                          xlink:href="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    &nbsp;Master Card
                  </div>
                  <div class="col position-relative">
                    <input class="setting-input width-95" type="Number" />
                    <span class="input-usd">%</span>
                  </div>
                  <div class="col position-relative">
                    <input class="setting-input" type="Number" />
                    <span class="input-usd">USD</span>
                  </div>
                </div>
                <div
                  class="mt-3 d-flex align-items-center justify-content-between"
                >
                  <div
                    class="col text-center setting-label d-flex align-items-center"
                  >
                    <img
                      src="../../assets/images/Mada.png"
                      style="width: 40px; height: 13px"
                    />
                    &nbsp;Mada Card
                  </div>
                  <div class="col position-relative">
                    <input class="setting-input width-95" type="Number" />
                    <span class="input-usd">%</span>
                  </div>
                  <div class="col position-relative">
                    <input class="setting-input" type="Number" />
                    <span class="input-usd">USD</span>
                  </div>
                </div>
                <div
                  class="mt-3"
                  v-for="field in userPasswordFields"
                  :key="field"
                >
                  <div class="setting-label">{{ field }}</div>
                  <div class="position-relative">
                    <input
                      :type="
                        showuserPasswordFields[field] ? 'text' : 'password'
                      "
                      :id="`${field}_input`"
                      class="col setting-input"
                      v-model="userpasswords[field]"
                    />
                    <i
                      class="bi"
                      :class="
                        showuserPasswordFields[field]
                          ? 'bi-eye-slash'
                          : 'bi-eye'
                      "
                      @click="toggleuserPasswordFieldsVisibility(field)"
                    ></i>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 setting-right">
                <div v-for="field in passwordFields" :key="field">
                  <div class="setting-label">{{ field }}</div>
                  <div class="position-relative">
                    <input
                      :type="showPasswordFields[field] ? 'text' : 'password'"
                      :id="`${field}_input`"
                      class="col setting-input"
                      v-model="passwords[field]"
                    />
                    <i
                      class="bi"
                      :class="
                        showPasswordFields[field] ? 'bi-eye-slash' : 'bi-eye'
                      "
                      @click="togglePasswordFieldsVisibility(field)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3 d-flex justify-content-center">
            <button
              type="button"
              class="second-btn modal-btn mr-5"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button class="primary-btn modal-btn ml-5" data-bs-dismiss="modal">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';
export default {
  name: "SettingsModal",
  data() {
    return {
      userpasswords: {
        CurrentPassword: null,
        NewPassword: null,
        ConfirmPassword: null,
      },
      showuserPasswordFields: {
        CurrentPassword: false,
        NewPassword: false,
        ConfirmPassword: false,
      },
      passwords: {
        SecretKey: null,
        PublicKey: null,
        MerchantID: null,
        PaymentUsername: null,
        PaymentPassword: null,
        PaymentAPIKey: null,
      },
      showPasswordFields: {
        SecretKey: false,
        PublicKey: false,
        MerchantID: false,
        PaymentUsername: false,
        PaymentPassword: false,
        PaymentAPIKey: false,
      },
    };
  },
  computed: {
    userPasswordFields() {
      return {
        CurrentPassword: "Current password",
        NewPassword: "New password",
        ConfirmPassword: "Confirm password",
      };
    },
    passwordFields() {
      return {
        SecretKey: "Prod - Secret Key",
        PublicKey: "Prod - Public Key",
        MerchantID: "Merchant ID / Account ID",
        PaymentUsername: "Username",
        PaymentPassword: "Password",
        PaymentAPIKey: "API Key",
      };
    },
  },
  methods: {
    toggleuserPasswordFieldsVisibility(field) {
      this.showuserPasswordFields[field] = !this.showuserPasswordFields[field];
    },
    togglePasswordFieldsVisibility(field) {
      this.showPasswordFields[field] = !this.showPasswordFields[field];
    },
  },
};
</script>
