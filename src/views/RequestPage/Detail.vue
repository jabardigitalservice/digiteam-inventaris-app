<script>
import TitleCard from "../../components/layouts/TitleCard.vue";
import { getDetail } from "@/api";
import RequestDetail from "../../components/RequestComponents/RequestDetail.vue";

export default {
  components: { TitleCard, RequestDetail },
  data() {
    return {
      titleCard: "Detail Permohonan",
      textCard: "Detail permohonan inventaris yang diminta.",
      detailRequest: {},
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
      } catch (error) {
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
    <TitleCard :title-card="titleCard" :text-card="textCard" />
    <div class="p-1 bg-gray-50 rounded-lg border border-gray-200 h-full">
      <RequestDetail
        :detail-request="detailRequest"
        @get-response-form="getDetailData"
      />
    </div>
  </div>
</template>
