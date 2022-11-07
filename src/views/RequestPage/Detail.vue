<script>
import { getDetail } from "@/api";
import DataError from "../../components/layouts/DataError.vue";
import RequestDetail from "../../components/RequestComponents/RequestDetail.vue";

export default {
  components: { RequestDetail, DataError },
  data() {
    return {
      titleCard: "Detail Permohonan",
      detailRequest: {},
      isSuccess: true,
    };
  },
  mounted() {
    this.getDetailData();
  },
  methods: {
    async getDetailData() {
      try {
        const response = await getDetail(
          "requests",
          "GET",
          this.$route.params.id
        );
        this.detailRequest = response.data;
        this.isSuccess = true;
      } catch (error) {
        this.isSuccess = false;
        this.$store.dispatch("sweetalert/errorAlert", {
          title: "Server Error!",
          text: "-",
        });
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="bg-gray-50 rounded-lg border h-full">
      <RequestDetail
        v-if="isSuccess"
        :detail-request="detailRequest"
        @get-response-form="getDetailData"
      />

      <DataError v-if="!isSuccess" />
    </div>
  </div>
</template>
