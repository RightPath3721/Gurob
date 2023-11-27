<template>
  <div>
    <button
      type="button"
      class="btn btn-primary d-none"
      data-bs-toggle="modal"
      data-bs-target="#export-modal"
    ></button>
    <div
      class="modal fade"
      id="export-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="settings-label"
      aria-hidden="true"
    >
      <div class="modal-dialog mt-4" role="document">
        <div class="modal-content modal-width-m">
          <div class="mt-4 text-align-center" style="position: relative">
            <h5 class="modal-title" id="settings-label">Export</h5>
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
          <div class="modal-body mb-3 d-flex justify-content-center">
            <button class="primary-btn modal-btn w-100" data-bs-dismiss="modal">
              Export File
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
  name: "ExportModal",
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
