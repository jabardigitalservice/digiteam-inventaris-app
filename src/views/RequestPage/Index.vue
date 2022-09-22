<script>
import TableRequest from "../../components/RequestComponents/TableRequest.vue";
import HeaderTable from "../../components/RequestComponents/HeaderTable.vue";
import axios from "axios";
import Pagination from "../../components/layouts/Pagination.vue";
export default {
  components: {
    TableRequest,
    HeaderTable,
    Pagination,
  },
  data() {
    return {
      dataRequest: [],
      pagination: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      await axios
        .get("item_requests")
        .then((response) => {
          this.dataRequest = response.data.data;
          this.pagination = response.data.meta;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
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
        :data-request="dataRequest"
        class="mt-10 mb-10"
      ></TableRequest>

      <Pagination :pagination="pagination"></Pagination>
    </div>
  </div>
</template>
