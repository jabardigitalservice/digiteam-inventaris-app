<script>
export default {
  components: {},
  props: {
    pagination: [Object, Array],
    offset: Number,
  },
  data() {
    return {
      itemsPerPage: [5, 15, 25, 50, 100, "All"],
    };
  },
  computed: {
    pagesNumber() {
      // todo : i will fix it this code if API is done from backend
      if (!this.pagination.to) {
        return [];
      }
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      let pagesArray = [];
      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }
      return pagesArray;
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-1 tablet:grid-cols-2">
    <div class="">
      <span class="mr-2">Tampilkan </span>
      <select class="mr-2 w-14">
        <option v-for="page in itemsPerPage" :key="page" :value="page">
          {{ page }}
        </option>
      </select>
      <span> Item dari total 50</span>
    </div>

    <div>
      <div class="inline-block float-right text-blue-gray-800">
        <nav>
          <ul class="inline-flex -space-x-px">
            <li>
              <a
                href="#"
                class="py-2 px-3 ml-0 leading-tight rounded-l-lg border border-gray-300 hover:bg-white hover:text-gray-700"
                ><</a
              >
            </li>

            <li>
              <a
                href="#"
                class="py-2 px-3 leading-tight rounded-r-lg border border-gray-300 hover:bg-white hover:text-gray-700"
                >></a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="inline-block float-right mr-2">
        <span class="mr-2">Halaman</span>
        <Select class="mr-2 w-14">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </div>
    </div>
  </div>
</template>
