<script>
import StatusRequest from "./StatusRequest.vue";
import TypeRequest from "./TypeRequest.vue";
export default {
  components: { StatusRequest, TypeRequest },
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
            <th
              class="px-4 py-2 font-semibold text-sm border-r border-slate-200"
            >
              No
            </th>
            <th
              class="px-4 py-2 font-semibold text-sm border-r border-slate-200"
            >
              Jenis Permohonan
            </th>
            <th
              class="px-4 py-2 font-semibold text-sm border-r border-slate-200"
            >
              Nama Pegawai
            </th>
            <th
              class="px-4 py-2 font-semibold text-sm border-r border-slate-200"
            >
              No Telepon
            </th>
            <th
              class="px-4 py-2 font-semibold text-sm border-r border-slate-200"
            >
              Unit / Divisi
            </th>
            <th
              class="px-4 py-2 font-semibold text-sm border-r border-slate-200"
            >
              Inventaris
            </th>
            <th
              class="px-4 py-2 font-semibold text-sm border-r border-slate-200"
            >
              Status
            </th>
            <th
              class="px-4 py-2 font-semibold text-sm border-r border-slate-200"
            >
              Action
            </th>
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
              <div class="">{{ request.username }}</div>
            </td>
            <td class="px-6 py-4 border border-slate-200">
              {{ request.phone_number }}
            </td>
            <td class="px-6 py-4 border border-slate-200">
              {{ request.division }}
            </td>
            <td class="px-6 py-4 border border-slate-200">
              {{ request.item_name }}
            </td>

            <td class="px-6 py-4 border border-slate-200">
              <StatusRequest :status="request.status"></StatusRequest>
            </td>
            <td class="px-6 py-4 border border-slate-200">
              <div class="flex justify-center">
                <div>
                  <div class="dropdown">
                    <button
                      id="action Button"
                      class="dropdown-toggle text-blue-700 font-bold hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex items-center whitespace-nowrap"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      @click="show = !show"
                    >
                      Aksi
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        class="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </button>
                    <ul
                      v-show="show"
                      class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
                      aria-labelledby="action Button"
                    >
                      <li>
                        <a
                          class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                          href="#"
                          >Detail</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                          href="#"
                          >Verifikasi</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                          href="#"
                          >Hapus</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
