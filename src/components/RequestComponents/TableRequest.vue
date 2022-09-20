<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      dataRequest: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("item_requests")
        .then((response) => {
          this.dataRequest = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div class="w-full">
    <div class="border-b border-gray-200 shadow shadow-blue-500/50">
      <table class="divide-gray-300 w-full">
        <thead class="bg-green-500">
          <tr>
            <th class="px-6 py-2 text-sm lg:text-md font-bold">No</th>
            <th class="px-6 py-2 text-sm lg:text-md font-bold">
              Jenis Permohonan
            </th>
            <th class="px-6 py-2 text-sm lg:text-md font-bold">Nama Pegawai</th>
            <th class="px-6 py-2 text-sm lg:text-md font-bold">
              Unit / Divisi
            </th>
            <th class="px-6 py-2 text-sm lg:text-md font-bold">
              Barang yang diajukan
            </th>
            <th class="px-6 py-2 text-sm lg:text-md font-bold">Status</th>
            <th class="px-6 py-2 text-sm lg:text-md font-bold">Action</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-300 text-center">
          <tr
            v-for="(request, index) in dataRequest"
            :key="request.id"
            class="whitespace-nowrap"
          >
            <td class="px-6 py-4 text-sm">{{ index + 1 }}</td>
            <td class="px-6 py-4">
              <div
                v-if="request.request_type == 1"
                class="text-sm bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
              >
                Baru
              </div>
              <div
                v-if="request.request_type == 2"
                class="text-sm bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
              >
                Tukar
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm">{{ request.user_name }}</div>
            </td>
            <td class="px-6 py-4 text-sm">{{ request.id }}</td>
            <td class="px-6 py-4 text-sm">{{ request.item_name }}</td>
            <td class="px-6 py-4 text-sm">{{ request.status }}</td>
            <td class="px-6 py-4 text-sm">{{ request.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
