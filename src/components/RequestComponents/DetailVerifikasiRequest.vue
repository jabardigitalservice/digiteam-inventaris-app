<script>
import HRCenter from "../layouts/HRCenter.vue";
import { formatDateTime } from "@/utils/formatDate.js";
export default {
  components: { HRCenter },
  props: {
    conditionDetailVerifikasi: { type: Object, default: () => ({}) },
    detailRequest: { type: Object, default: () => ({}) },
  },
  computed: {
    pickUpTime() {
      return formatDateTime(this.detailRequest.pickup_date);
    },
  },
};
</script>

<template>
  <div>
    <label
      v-if="conditionDetailVerifikasi.detailRejectedRequest"
      class="block mt-5"
    >
      <HRCenter>
        <template #title>Notes Rejected</template>
      </HRCenter>

      <span class="block text-sm font-bold text-slate-700">Notes Rejected</span>
      <span>{{ detailRequest.notes }}</span>
    </label>

    <label v-if="conditionDetailVerifikasi.detailListItem" class="block mt-5">
      <HRCenter>
        <template #title>List Request</template>
      </HRCenter>
      <span class="block text-sm font-bold text-slate-700">List Request</span>
      <a :href="detailRequest.file_url" target="_blank" class="text-blue-500">{{
        detailRequest.filename
      }}</a>
    </label>

    <template v-if="conditionDetailVerifikasi.detailRequestItem">
      <HRCenter>
        <template #title>Detail Barang yang diminta</template>
      </HRCenter>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700">Merk Item</span>

        <span>{{ detailRequest.item_brand }}</span>
      </label>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Barang yang diminta</span
        >

        <span>{{ detailRequest.item_name }}</span>
      </label>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >No Barang Inventaris</span
        >

        <span>{{ detailRequest.item_number }}</span>
      </label>
    </template>

    <label v-if="conditionDetailVerifikasi.detailCheckItem" class="block mt-5">
      <HRCenter>
        <template #title>Catatan Kondisi Barang</template>
      </HRCenter>

      <span class="block text-sm font-bold text-slate-700"
        >Catatan Kondisi Barang</span
      >
      <span>{{ detailRequest.notes }}</span>
    </label>

    <template v-if="conditionDetailVerifikasi.detailReceivedItem">
      <HRCenter>
        <template #title>Detail Pengambilan Barang</template>
      </HRCenter>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Tanggal Pengambilan</span
        >
        <span>{{ pickUpTime }}</span>
      </label>
    </template>

    <template v-if="conditionDetailVerifikasi.detailPickUpItem">
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Penanda Tangan BAST Pengambilan</span
        >
        <span>{{ detailRequest.pickup_signing }}</span>
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Evidence Pengambilan</span
        >
        <a
          :href="detailRequest.pickup_evidence_url"
          target="_blank"
          class="text-blue-500"
          >{{ detailRequest.pickup_evidence }}</a
        >
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >BAST Pengambilan</span
        >
        <a
          :href="detailRequest.pickup_bast_url"
          target="_blank"
          class="text-blue-500"
          >{{ detailRequest.pickup_bast }}</a
        >
      </label>
    </template>

    <template v-if="conditionDetailVerifikasi.detailReturnItem">
      <HRCenter>
        <template #title>Detail Pengembalian Barang</template>
      </HRCenter>
      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Tanggal Pengembalian</span
        >
        <span>17-10-2023</span>
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Penanda Tangan BAST Pengembalian</span
        >
        <span>Ray F S HRD</span>
      </label>

      <span class="block text-sm font-bold text-slate-700 mt-5"
        >Catatan Kondisi Pengembalian Barang</span
      >
      <span>barang saat dikembalikan dalam kondisi baik dan lecet fisik</span>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >Evidence Pengembalian</span
        >
        <a href="" class="text-blue-500">Download Evidence Pengembalian</a>
      </label>

      <label class="block mt-5">
        <span class="block text-sm font-bold text-slate-700"
          >BAST Pengembalian</span
        >
        <a href="" class="text-blue-500">Download BAST Pengembalian</a>
      </label>
    </template>
  </div>
</template>
