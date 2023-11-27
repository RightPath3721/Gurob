<template>
  <div class="container">
    <div class="row">
      <div class="col text-right mt-3">
        <button class="second-btn" @click="logout">
          <span class="icon">
            <img src="@/assets/images/Logosm.png" alt="Icon" class="icon-img" />
          </span>
          Admin
          <span class="icon">
            <img src="@/assets/images/logout.png" alt="Icon" class="icon-img" />
          </span>
        </button>
      </div>
    </div>
    <div class="row text-white mb-3">
      <div class="header-title">Shop Agreements</div>
    </div>
    <div class="row text-white justify-content-between mb-3">
      <div class="col-md-4 row d-flex justify-content-between">
        <div class="input-search position-relative">
          <input
            type="text"
            class="search-input"
            placeholder="Name / Email / Ref ID"
            v-model="searchText"
            @input="($e) => filterBySearch($e)"
          />
          <svg
            fill="#546076"
            height="64px"
            width="64px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.4 488.4"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="0.9767999999999999"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path
                    d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="col-md-8 row d-flex justify-content-between">
        <div class="col-md-2">
          <div class="dropdown">
            <button
              class="dropdown-toggle"
              type="button"
              id="dropdown-countrymenu"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="">{{ selectedCountry }}</span>
              <i class="fa fa-angle-down"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdown-countrymenu">
              <li>
                <a
                  class="dropdown-item dropdown-item-header"
                  href="#"
                  @click="filterByCountry('All')"
                  >Country</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="filterByCountry('Saudi')"
                  >Saudi</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item dropdown-item-footer"
                  href="#"
                  @click="filterByCountry('Non-Saudi')"
                  >Non-Saudi</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <div class="dropdown">
            <button
              class="dropdown-toggle"
              type="button"
              id="dropdown-invoice"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span>{{ selectedInvoice }}</span>
              <i class="fa fa-angle-down"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdown-invoice">
              <li>
                <a
                  class="dropdown-item dropdown-item-header"
                  href="#"
                  @click="filterByInvoice('All')"
                  >Invoice Status</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click="filterByInvoice('Paid')"
                  >Paid</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item dropdown-item-footer"
                  href="#"
                  @click="filterByInvoice('Unpaid')"
                  >Unpaid</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
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
                  @click="filterByYear('All')"
                  >Year</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#" @click="filterByYear('2023')"
                  >2023</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item dropdown-item-footer"
                  href="#"
                  @click="filterByYear('2022')"
                  >2022</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
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
                  @click="filterByMonth('All')"
                  >Month</a
                >
              </li>
              <div class="calendar">
                <div class="dates">
                  <button
                    v-for="month in 12"
                    :key="month"
                    @click="filterByMonth(month)"
                    :class="{ today: month === selectedMonth }"
                  >
                    {{ month }}
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <button class="second-btn setting-btn" @click="showSettingsModal">
            Settings
          </button>
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-8 col-sm-12 text-white">
        <div class="row mb-3">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Overdue</h5>
                <p class="card-text">7</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Total Bank Fees</h5>
                <p class="card-text">3 M</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Total Merchants</h5>
                <p class="card-text">1200</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Total Sales</h5>
                <p class="card-text">16 M</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Total Profits</h5>
                <p class="card-text">170000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-12 text-white">
        <div class="col right-card">
          <div class="card right-card">
            <div class="card-body">
              <h5 class="card-title">Sales Statistics</h5>
              <ChartComponents :profitings="profitingTotal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-white">
      <div class="d-flex justify-content-between">
        <div class="invoice-title">
          <p>Invoices</p>
        </div>
        <div class="import-export-btn">
          <button class="second-btn" @click="showImportModal">Import</button>
          <button class="primary-btn ml-3" @click="showExportModal">
            Export
          </button>
        </div>
      </div>
      <div
        class="d-flex justify-content-center align-items-center"
        style="overflow-x: auto"
      >
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Ref ID</th>
              <th>Tap ID</th>
              <th>Merchant Info</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Country</th>
              <th style="position: relative">
                BANK Fees<br />
                <label
                  style="
                    position: absolute;
                    bottom: 0px;
                    font-size: small;
                    font-weight: normal;
                  "
                  >Include(Tax)</label
                >
              </th>
              <th>Extra Cost</th>
              <th>Profiting</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="align-middle"
              v-for="row in filteredTableData"
              :key="row.id"
            >
              <td>{{ row.refID }}</td>
              <td>{{ row.TapID }}</td>
              <td>
                <p>{{ row.name }}</p>
                <p>{{ row.email }}</p>
                <p class="block-user" v-if="row.blockStatus === 'Block User'">
                  <i class="fa fa-ban"></i> {{ row.blockStatus }}
                </p>
                <p
                  class="unlock-user"
                  v-if="row.blockStatus === 'Unblock User'"
                >
                  <svg
                    style="margin-left: 0"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0625 6.60938H6.60807V3.71848C6.60807 2.4435 7.68052 1.40625 8.9987 1.40625C10.3169 1.40625 11.3893 2.4435 11.3893 3.71848V5.0625H12.7956V3.71848C12.7956 1.66809 11.0923 0 8.9987 0C6.90511 0 5.20182 1.66809 5.20182 3.71848V6.60938H3.9375C2.77439 6.60938 1.82812 7.55564 1.82812 8.71875V15.8906C1.82812 17.0537 2.77439 18 3.9375 18H14.0625C15.2256 18 16.1719 17.0537 16.1719 15.8906V8.71875C16.1719 7.55564 15.2256 6.60938 14.0625 6.60938ZM14.7656 15.8906C14.7656 16.2783 14.4502 16.5938 14.0625 16.5938H3.9375C3.5498 16.5938 3.23438 16.2783 3.23438 15.8906V8.71875C3.23438 8.33105 3.5498 8.01562 3.9375 8.01562H14.0625C14.4502 8.01562 14.7656 8.33105 14.7656 8.71875V15.8906Z"
                      fill="#2EC875"
                    />
                    <path
                      d="M9 10.0547C8.28158 10.0547 7.69922 10.6371 7.69922 11.3555C7.69922 11.8142 7.93687 12.2171 8.29557 12.4488V13.9922C8.29557 14.3805 8.61036 14.6953 8.9987 14.6953C9.387 14.6953 9.70182 14.3805 9.70182 13.9922V12.4504C10.062 12.2191 10.3008 11.8153 10.3008 11.3555C10.3008 10.6371 9.71842 10.0547 9 10.0547Z"
                      fill="#2EC875"
                    />
                  </svg>
                  {{ row.blockStatus }}
                </p>
              </td>
              <td>{{ row.amount }}</td>
              <td>{{ row.currency }}</td>
              <td>{{ row.country }}</td>
              <td>{{ row.bankfees }} USD</td>
              <td>{{ row.extraCost }} USD</td>
              <td>{{ row.profiting }}</td>
              <td>{{ row.date }}</td>
              <td>{{ row.paymentMethod }}</td>
              <td>
                <p class="unlock-user" v-if="row.status === 'Paid'">Paid</p>
                <button
                  class="pay-btn primary-btn"
                  v-if="row.status === 'Unpaid'"
                >
                  Pay
                </button>

                <svg
                  v-if="row.status === 'Unpaid'"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <SettingsModal />
    <ImportModal />
    <ExportModal />
  </div>
</template>

<script>
import $ from "jquery";
import SettingsModal from "@/components/ShopAgreementsComponents/SettingsModal.vue";
import ImportModal from "@/components/ShopAgreementsComponents/ImportModal.vue";
import ExportModal from "@/components/ShopAgreementsComponents/ExportModal.vue";
import ChartComponents from "@/components/ShopAgreementsComponents/ChartComponents.vue";
import "bootstrap";
import "@/assets/css/calendar.css";
export default {
  components: {
    SettingsModal,
    ExportModal,
    ImportModal,
    ChartComponents,
  },
  data() {
    return {
      tableData: [],
      filteredTableData: [],
      selectedCountry: "Country",
      selectedInvoice: "Invoice Status",
      selectedYear: "Year",
      selectedMonth: "Month",
    };
  },
  methods: {
    logout() {
      this.$router.push({ name: "LoginView" });
    },
    showSettingsModal() {
      $('[data-bs-target="#settingsModal"]').click();
    },
    showImportModal() {
      $('[data-bs-target="#import-modal"]').click();
    },
    showExportModal() {
      $('[data-bs-target="#export-modal"]').click();
    },
    filterBySearch(country) {
      this.filteredTableData = this.tableData.filter((row) => {
        return (
          row.name.toLowerCase().includes(country.target.value) ||
          row.name.includes(country.target.value) ||
          row.email.toLowerCase().includes(country.target.value) ||
          row.email.includes(country.target.value) ||
          row.refID.toString().includes(country.target.value)
        );
      });
    },
    selectCountry(country) {
      this.selectedCountry = country;
    },
    filterByCountry(country) {
      if (country == "All") {
        this.selectCountry("Country");
        this.filteredTableData = this.tableData;
      } else {
        this.selectCountry(country);
        this.filteredTableData = this.tableData.filter(
          (row) => row.country === country
        );
      }
    },
    selectInvoice(invoice) {
      this.selectedInvoice = invoice;
    },
    filterByInvoice(invoice) {
      if (invoice == "All") {
        this.selectInvoice("Invoice Status");
        this.filteredTableData = this.tableData;
      } else {
        this.selectInvoice(invoice);
        this.filteredTableData = this.tableData.filter(
          (row) => row.status === invoice
        );
      }
    },
    selectYear(year) {
      this.selectedYear = year;
    },
    filterByYear(year) {
      if (year == "All") {
        this.selectYear("Year");
        this.filteredTableData = this.tableData;
      } else {
        this.selectYear(year);
        this.filteredTableData = this.tableData.filter((row) =>
          row.date.includes(year)
        );
      }
    },
    selectMonth(month) {
      this.selectedMonth = month;
    },
    filterByMonth(month) {
      if (month === "All") {
        this.selectMonth("Month");
        console.log("selecteMonth====0");
        this.filteredTableData = this.tableData;
      } else {
        this.selectMonth(month);
        this.filteredTableData = this.tableData.filter((row) => {
          console.log(parseInt(row.date.split(".")[1], 10));
          const dateParts = row.date.split(".");
          const rowMonth = parseInt(dateParts[1], 10);
          return rowMonth === month;
        });
      }
    },
  },

  created() {
    this.tableData = this.$store.state.shop.data;
    this.filteredTableData = this.tableData;
    console.log("tableData", this.tableData);
  },
  computed: {
    profitingTotal() {
      return this.tableData.reduce((total, item) => total + item.profiting, 0);
    },
  },
};
</script>
