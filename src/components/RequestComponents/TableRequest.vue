<script>
import StatusRequest from "./StatusRequest.vue";
import TypeRequest from "./TypeRequest.vue";
import ActionTable from "../layouts/ActionTable.vue";
export default {
  components: { StatusRequest, TypeRequest, ActionTable },
  props: { dataRequest: Array },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<template>
  <div class="w-full">
    <div class="shadow overflow-x-auto rounded border-b border-blue-700">
      <table class="w-full bg-white table-auto">
        <thead class="text-white bg-blue-700">
          <tr>
            <th class="th-table">No</th>
            <th class="th-table">Jenis Permohonan</th>
            <th class="th-table">Nama Pegawai</th>
            <th class="th-table">No Telepon</th>
            <th class="th-table">Unit / Divisi</th>
            <th class="th-table">Inventaris</th>
            <th class="th-table">Status</th>
            <th class="th-table">Action</th>
          </tr>
        </thead>
        <tbody class="text-center text-sm">
          <tr
            v-for="(request, index) in dataRequest"
            :key="request.id"
            class="bg-white border-b"
          >
            <td class="td-table">{{ index + 1 }}</td>
            <td class="td-table">
              <TypeRequest :request-type="request.request_type"></TypeRequest>
            </td>
            <td class="td-table">
              <div class="">{{ request.username }}</div>
            </td>
            <td class="td-table">
              {{ request.phone_number }}
            </td>
            <td class="td-table">
              {{ request.division }}
            </td>
            <td class="td-table">
              {{ request.item_name }}
            </td>

            <td class="td-table">
              <StatusRequest :status="request.status"></StatusRequest>
            </td>
            <td class="td-table">
              <ActionTable></ActionTable>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
