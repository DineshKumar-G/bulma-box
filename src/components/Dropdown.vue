<template>
  <b-dropdown
    class="menu-dropdown"
    ref="dropdown"
    v-model="selectedOptions"
    multiple
    aria-role="list"
    position="is-bottom-left"
    max-height="180px"
    :scrollable="true"
    @change="emitChange"
  >
    <template #trigger="p">
      <b-button
        :class="
          p.active
            ? 'bg-navyblue has-text-white'
            : 'bg-lightestgray has-text-black'
        "
        class="is-size-7 is-rounded is-uppercase"
      >
        Compare
      <span class="icon pl-2">
        <i class="fas" :class="p.active ? 'fa-caret-up' : 'fa-caret-down'"></i>
      </span>
      </b-button>
    </template>

    <b-dropdown-item
      v-for="i of 10"
      :key="i"
      :value="`option ${i}`"
      custom
      aria-role="listitem"
    >
        <b-checkbox @input="$refs.dropdown.selectItem(`option ${i}`)">
          <span class="has-text-dark">Option {{i}}</span>
        </b-checkbox>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  data() {
    return {
      selectedOptions: [],
    };
  },
  methods: {
    async emitChange() {
      await this.$nextTick();
      // On selecting/de-selecting an option, emit an event to parent component,
      // to display the selected opts in the Card level.
      this.$emit('changedOpts', this.selectedOptions);
    },
  },
};
</script>
