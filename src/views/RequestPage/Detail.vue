<script>
import TitleCard from "../../components/layouts/TitleCard.vue";

export default {
  components: { TitleCard },
  data() {
    return {
      titleCard: "Detail Permohonan",
      textCard: "Detail permohonan.",
    };
  },
};
</script>

<template>
  <div>
    <TitleCard :title-card="titleCard" :text-card="textCard" />
    <div class="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
      <div class="grid grid-rows-1 md:grid-cols-5 gap-6 mb-5">
        <h3>Detail</h3>
      </div>
    </div>
  </div>
</template>
