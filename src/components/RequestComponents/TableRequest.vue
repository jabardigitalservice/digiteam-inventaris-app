<script>
import StatusRequest from "./StatusRequest.vue";
import TypeRequest from "./TypeRequest.vue";
import { getDetail } from "@/api";
import { statusObject } from "@/constants";
export default {
  components: { StatusRequest, TypeRequest },
  props: {
    dataRequest: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dataDetailRequest: {},
    };
  },
  methods: {
    async getDataRequest(id, type, modal_name) {
      try {
        const response = await getDetail(type, "GET", id);
        this.dataDetailRequest = response.data;
        this.$emit("get-detail-request", this.dataDetailRequest, modal_name);
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
              <TypeRequest :request-type="request.request_type" />
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
              {{ request.requested_item }}
            </td>

            <td class="td-table">
              <StatusRequest :status="request.status" />
            </td>
            <td class="td-table">
              <router-link
                :to="{ name: 'detail-request', params: { id: request.id } }"
                class="text-blue-800 bg-white border border-blue-800 hover:bg-blue-800 hover:text-white active:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Detail
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
