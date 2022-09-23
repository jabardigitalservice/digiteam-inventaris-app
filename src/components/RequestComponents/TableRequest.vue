<script>
export default {
  components: {},
  props: { dataRequest: Array },
};
</script>

<template>
  <div class="w-full">
    <div class="border-b border-gray-200 shadow">
      <table class="divide-gray-300 w-full">
        <thead class="bg-green-200">
          <tr>
            <th class="px-6 py-2 text-sm md:text-md font-bold">No</th>
            <th class="px-6 py-2 text-sm md:text-md font-bold">
              Jenis Permohonan
            </th>
            <th class="px-6 py-2 text-sm md:text-md font-bold">Nama Pegawai</th>
            <th class="px-6 py-2 text-sm md:text-md font-bold">
              Unit / Divisi
            </th>
            <th class="px-6 py-2 text-sm md:text-md font-bold">
              Barang yang diajukan
            </th>
            <th class="px-6 py-2 text-sm md:text-md font-bold">Status</th>
            <th class="px-6 py-2 text-sm md:text-md font-bold">Action</th>
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
              <span
                v-if="request.request_type == 1"
                class="text-sm bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
              >
                Baru
              </span>
              <span
                v-if="request.request_type == 2"
                class="text-sm bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
              >
                Tukar
              </span>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm">{{ request.user_name }}</div>
            </td>
            <td class="px-6 py-4 text-sm">{{ request.id }}</td>
            <td class="px-6 py-4 text-sm">{{ request.item_name }}</td>
            <td class="px-6 py-4 text-sm">
              <span
                v-if="request.status == 1"
                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                >Pengajuan Masuk
              </span>

              <span
                v-else-if="request.status == 2"
                class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
                >Pengajuan Ditolak
              </span>

              <span
                v-else-if="request.status == 3"
                class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
              >
                Pengajuan Diterima
              </span>

              <span
                v-else-if="request.status == 4"
                class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
              >
                Permintaan Barang Masuk
              </span>

              <span
                v-else-if="request.status == 5"
                class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
              >
                Pengecekan Kelayakan
              </span>

              <span
                v-else-if="request.status == 6"
                class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900"
              >
                Barang Siap Diambil
              </span>

              <span
                v-else-if="request.status == 7"
                class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
                >Pengajuan Selesai
              </span>
            </td>
            <td class="px-6 py-4 text-sm">{{ request.id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
