<script>
export default {
  props: {
    pagination: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      selectPagination: {
        limit: 10,
        page: 1,
      },
      limit: [10, 15, 20, 25, 50, 100, "All"],
    };
  },
  methods: {
    getPagination(typeChange) {
      if (typeChange === "change-limit") {
        this.selectPagination.limit = this.selectPagination.limit;
        this.selectPagination.page = 1;
      } else if (typeChange === "change-page") {
        this.selectPagination.page = this.selectPagination.page;
      }
      this.$emit("get-select-pagination", this.selectPagination);
    },
    changePage(type) {
      if (type === "increment") {
        this.selectPagination.page = this.selectPagination.page + 1;
      } else if (type === "decrement") {
        this.selectPagination.page = this.selectPagination.page - 1;
      }
      this.$emit("get-select-pagination", this.selectPagination);
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-1 tablet:grid-cols-2">
    <div class="">
      <span class="mr-2">Tampilkan </span>
      <select
        v-model="selectPagination.limit"
        class="mr-2 w-14"
        @change="getPagination('change-limit')"
      >
        <option v-for="limits in limit" :key="limits" :value="limits">
          {{ limits }}
        </option>
      </select>
      <span> Item dari total {{ pagination.total }}</span>
    </div>

    <div>
      <div class="inline-block float-right text-blue-gray-800">
        <nav>
          <ul class="inline-flex -space-x-px">
            <li>
              <button
                class="py-2 px-3 ml-0 leading-tight rounded-l-lg border border-gray-300 hover:bg-white hover:text-gray-700 disabled:bg-gray-400"
                :disabled="pagination.page === 1"
                @click="changePage('decrement')"
              >
                &lt;
              </button>
            </li>

            <li>
              <button
                class="py-2 px-3 leading-tight rounded-r-lg border border-gray-300 hover:bg-white hover:text-gray-700 disabled:bg-gray-400"
                :disabled="pagination.page === pagination.last_page"
                @click="changePage('increment')"
              >
                &gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div class="inline-block float-right mr-2">
        <span class="mr-2">Halaman</span>
        <select
          v-model="selectPagination.page"
          class="mr-2 w-14"
          @change="getPagination('change-page')"
        >
          <option
            v-for="(page, index) in pagination.last_page"
            :key="index"
            :value="page"
          >
            {{ page }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
