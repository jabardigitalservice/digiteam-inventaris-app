<script>
import TableRequest from "../../components/RequestComponents/TableRequest.vue";
import HeaderTable from "../../components/RequestComponents/HeaderTable.vue";
import Pagination from "../../components/layouts/Pagination.vue";
import DataError from "../../components/layouts/DataError.vue";
import TitleCard from "../../components/layouts/TitleCard.vue";
import FormRequest from "../../components/RequestComponents/FormRequest.vue";
import { fetchList } from "@/api";

export default {
  components: {
    TableRequest,
    HeaderTable,
    Pagination,
    DataError,
    TitleCard,
    FormRequest,
  },
  data() {
    return {
      titleCard: "Daftar Permohonan",
      textCard:
        "Daftar permohonan inventaris yang ada di Jabar Digital Service.",
      dataRequest: [],
      pagination: {},
      isSuccess: true,
      selectPagination: {
        limit: 10,
        page: 1,
      },
      selectFilter: {
        request_type: "",
        division: "",
        status: "",
      },
      searchValue: "",
      detailRequest: {},
      modalName: "",
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
          request_type: this.selectFilter.request_type,
          division: this.selectFilter.division,
          status: this.selectFilter.status,
          q: this.searchValue,
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
    getSelectFilter(valueFilter) {
      this.selectFilter.request_type = valueFilter.request_type;
      this.selectFilter.division = valueFilter.division;
      this.selectFilter.status = valueFilter.status;
      this.$refs.changePagination.resetPagination();
      this.getDataRequest();
    },
    getDetailRequest(data, modal_name) {
      this.detailRequest = data;
      this.modalName = modal_name;
    },
    getSearch(valueSearch) {
      this.searchValue = valueSearch;
      this.$refs.changePagination.resetPagination();
      this.getDataRequest();
    },
  },
};
</script>

<template>
  <div>
    <TitleCard :title-card="titleCard" :text-card="textCard" />

    <div class="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
      <HeaderTable
        v-if="isSuccess"
        @get-select-filter="getSelectFilter"
        @get-search="getSearch"
      />
      <FormRequest @get-response-form="getDataRequest" />

      <TableRequest
        v-if="isSuccess"
        :data-request="dataRequest"
        :is-success="isSuccess"
        class="my-5"
      />

      <DataError v-if="!isSuccess" />

      <Pagination
        v-if="isSuccess"
        ref="changePagination"
        :pagination="pagination"
        @get-select-pagination="getSelectPagination"
      />
    </div>
  </div>
</template>
