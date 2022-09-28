<script>
import TableRequest from "../../components/RequestComponents/TableRequest.vue";
import HeaderTable from "../../components/RequestComponents/HeaderTable.vue";
import Pagination from "../../components/layouts/Pagination.vue";
import DataError from "../../components/layouts/DataError.vue";
export default {
  components: {
    TableRequest,
    HeaderTable,
    Pagination,
    DataError,
  },
  data() {
    return {
      dataRequest: [],
      pagination: [],
      offset: 4,
      isSuccess: true,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await this.$axios.get("/requests");
        this.dataRequest = response.data.data;
        this.pagination = response.data.meta;
        this.isSuccess = true;
      } catch (error) {
        this.isSuccess = false;
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="mb-5 lg:text-center">
      <h1 class="font-bold text-xl md:text-5xl text-slate-70">
        List Permohonan Inventaris
      </h1>
      <p
        class="mt-1 md:mt-2 font-normal text-sm md:text-2xl text-blue-gray-500"
      >
        Jabar Digital Service
      </p>
    </div>

    <div
      class="w-full p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <HeaderTable></HeaderTable>

      <TableRequest
        v-if="isSuccess"
        :data-request="dataRequest"
        :is-success="isSuccess"
        class="mt-10 mb-10"
      ></TableRequest>

      <DataError v-if="!isSuccess"></DataError>

      <Pagination
        v-if="isSuccess"
        :pagination="pagination"
        :offset="offset"
      ></Pagination>
    </div>
  </div>
</template>
