<script>
import TableRequest from "../../components/RequestComponents/TableRequest.vue";
import HeaderTable from "../../components/RequestComponents/HeaderTable.vue";
import Pagination from "../../components/layouts/Pagination.vue";
import DataError from "../../components/layouts/DataError.vue";
import TitleCard from "../../components/layouts/TitleCard.vue";
export default {
  components: {
    TableRequest,
    HeaderTable,
    Pagination,
    DataError,
    TitleCard,
  },
  data() {
    return {
      titleCard: "Daftar Permohonan",
      textCard:
        "Daftar permohonan inventaris yang ada di Jabar Digital Service.",
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
    <TitleCard :title-card="titleCard" :text-card="textCard"></TitleCard>

    <div
      class="w-full p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
    >
      <HeaderTable></HeaderTable>

      <TableRequest
        v-if="isSuccess"
        :data-request="dataRequest"
        :is-success="isSuccess"
        class="mt-5 mb-5"
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
