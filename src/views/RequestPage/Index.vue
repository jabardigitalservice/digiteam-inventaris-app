<script>
import TableRequest from "../../components/RequestComponents/TableRequest.vue";
import HeaderTable from "../../components/RequestComponents/HeaderTable.vue";
import Pagination from "../../components/layouts/Pagination.vue";
import DataError from "../../components/layouts/DataError.vue";
import TitleCard from "../../components/layouts/TitleCard.vue";
import FormRequest from "../../components/RequestComponents/FormRequest.vue";
import DetailRequest from "../../components/RequestComponents/DetailRequest.vue";
import { fetchList } from "@/api";
export default {
  components: {
    TableRequest,
    HeaderTable,
    Pagination,
    DataError,
    TitleCard,
    FormRequest,
    DetailRequest,
  },
  data() {
    return {
      titleCard: "Daftar Permohonan",
      textCard:
        "Daftar permohonan inventaris yang ada di Jabar Digital Service.",
      dataRequest: [],
      pagination: [],
      isSuccess: true,
      selectPagination: {
        limit: 10,
        page: 1,
      },
    };
  },
  mounted() {
    this.getDataRequest();
  },
  methods: {
    async getDataRequest() {
      try {
        const params = {
          page: this.selectPagination.page,
          limit: this.selectPagination.limit,
        };
        const response = await fetchList("/requests", "GET", params);
        this.dataRequest = response.data;
        this.pagination = response.meta;
        this.isSuccess = true;
      } catch (error) {
        this.isSuccess = false;
      }
    },
    getSelectPagination(dataPagination) {
      this.selectPagination.limit = dataPagination.limit;
      this.selectPagination.page = dataPagination.page;
      this.getDataRequest();
    },
  },
};
</script>

<template>
  <div>
    <TitleCard :title-card="titleCard" :text-card="textCard" />

    <div
      class="w-full p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
    >
      <HeaderTable />
      <FormRequest @get-response-form="getDataRequest" />
      <DetailRequest />

      <TableRequest
        v-if="isSuccess"
        :data-request="dataRequest"
        :is-success="isSuccess"
        class="mt-5 mb-5"
      />

      <DataError v-if="!isSuccess" />

      <Pagination
        v-if="isSuccess"
        :pagination="pagination"
        @get-select-pagination="getSelectPagination"
      />
    </div>
  </div>
</template>
