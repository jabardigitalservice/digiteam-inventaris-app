<script>
import TableRequest from "../../components/RequestComponents/TableRequest.vue";
import HeaderTable from "../../components/RequestComponents/HeaderTable.vue";
export default {
  components: {
    TableRequest,
    HeaderTable,
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

      <TableRequest></TableRequest>
    </div>
  </div>
</template>
