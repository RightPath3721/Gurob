<template>
  <div>
    <button
      type="button"
      class="btn btn-primary d-none"
      data-bs-toggle="modal"
      data-bs-target="#import-modal"
    ></button>
    <div
      class="modal fade"
      id="import-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="settings-label"
      aria-hidden="true"
    >
      <div class="modal-dialog mt-4" role="document">
        <div class="modal-content modal-width-m">
          <div class="mt-4 text-align-center" style="position: relative">
            <h5 class="modal-title" id="settings-label">Import</h5>
            <i class="fa fa-times times" data-bs-dismiss="modal"></i>
          </div>
          <div class="modal-body col-md-12">
            <div class="row">
              <label>Please select:</label>
            </div>
            <div class="row d-flex justify-content-between">
              <div class="col-6">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    id="dropdown-year"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>{{ selectedYear }}</span>
                    <i class="fa fa-angle-down"></i>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdown-year">
                    <li>
                      <a
                        class="dropdown-item dropdown-item-header"
                        href="#"
                        @click="selectYear('Year')"
                        >Year</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click="selectYear('2023')"
                        >2023</a
                      >
                    </li>
                    <li>
                      <a
                        class="dropdown-item dropdown-item-footer"
                        href="#"
                        @click="selectYear('2022')"
                        >2022</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-6">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    id="dropdown-month"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>{{ selectedMonth }}</span>
                    <i class="fa fa-angle-down"></i>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdown-month">
                    <li>
                      <a
                        class="dropdown-item dropdown-item-header"
                        href="#"
                        @click="selectMonth('Month')"
                        >Month</a
                      >
                    </li>
                    <div class="calendar">
                      <div class="dates">
                        <button
                          v-for="month in 12"
                          :key="month"
                          @click="selectMonth(month)"
                          :class="{ today: month === selectedMonth }"
                        >
                          {{ month }}
                        </button>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div
              class="d-flex flex-column justify-content-center align-items-center import-file"
            >
              <img src="@/assets/images/excel.png" alt="xlsx file" />
              <label class="mt-4">Accepted Files (.CSV, XLSX)</label>
            </div>
          </div>
          <div class="modal-body w-100 d-flex justify-content-between">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                  stroke="#A4B4CB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                  stroke="#A4B4CB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 13H13"
                  stroke="#A4B4CB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 17H11"
                  stroke="#A4B4CB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <label style="font-size: small"> File.Xls</label>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#FF6969"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 12L10.58 14.83L16.25 9.17004"
                stroke="#FF6969"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="modal-body mb-3 d-flex justify-content-center">
            <button class="primary-btn modal-btn w-100" data-bs-dismiss="modal">
              Import File
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
  name: "ImportModal",
  data() {
    return {
      selectedMonth: "Month",
      selectedYear: "Year",
    };
  },
  computed: {},
  methods: {
    selectYear(year) {
      this.selectedYear = year;
    },
    selectMonth(month) {
      this.selectedMonth = month;
    },
  },
};
</script>
