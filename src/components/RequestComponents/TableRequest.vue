<script>
import StatusRequest from "./StatusRequest.vue";
import TypeRequest from "./TypeRequest.vue";
export default {
  components: { StatusRequest, TypeRequest },
  props: { dataRequest: Array },
};
</script>

<template>
  <div class="w-full">
    <div class="shadow overflow-hidden rounded border-b border-blue-700">
      <table class="min-w-full bg-white">
        <thead class="text-white text-md bg-blue-700">
          <tr class="">
            <th class="px-6 py-2 border border-slate-200">No</th>
            <th class="px-6 py-2 border border-slate-200">Jenis Permohonan</th>
            <th class="px-6 py-2 border border-slate-200">Nama Pegawai</th>
            <th class="px-6 py-2 border border-slate-200">Unit / Divisi</th>
            <th class="px-6 py-2 border border-slate-200">
              Barang yang diajukan
            </th>
            <th class="px-6 py-2 border border-slate-200">Status</th>
            <th class="px-6 py-2 border border-slate-200">Action</th>
          </tr>
        </thead>
        <tbody class="text-center text-sm">
          <tr
            v-for="(request, index) in dataRequest"
            :key="request.id"
            class="bg-white border-b"
          >
            <td class="px-6 py-4 border border-slate-200">{{ index + 1 }}</td>
            <td class="px-6 py-4 border border-slate-200">
              <TypeRequest :request-type="request.request_type"></TypeRequest>
            </td>
            <td class="px-6 py-4 border border-slate-200">
              <div class="">{{ request.user_name }}</div>
            </td>
            <td class="px-6 py-4 border border-slate-200">{{ request.id }}</td>
            <td class="px-6 py-4 border border-slate-200">
              {{ request.item_name }}
            </td>
            <td class="px-6 py-4 border border-slate-200">
              <StatusRequest :status="request.status"></StatusRequest>
            </td>
            <td class="px-6 py-4 border border-slate-200">{{ request.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
