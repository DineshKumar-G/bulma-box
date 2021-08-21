<template>
  <div class="is-flex is-justify-content-space-between">
    <div>
      <span class="is-uppercase has-text-black has-text-weight-semibold"
        >{{ title }}
      </span>
      <div
        class="has-text-grey"
        v-if="selectedOpts.length"
      >
        Selected:
        <span class="is-capitalized" v-for="opt of selectedOpts" :key="opt">
          {{ opt }},
        </span>
      </div>
    </div>
    <div>
      <drop-down
        class="column is-narrow"
        @changedOpts="updatedSelectedOpts"
      ></drop-down>
    </div>
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';

export default {
  props: {
    title: String,
  },
  components: {
    'drop-down': Dropdown,
  },
  data() {
    return {
      selectedOpts: [],
    };
  },
  methods: {
    updatedSelectedOpts(opts) {
      this.selectedOpts = opts;
    },
  },
};
</script>
