<template>
  <div class="box db-box bg-lightestgray is-paddingless">
    <div class="box first-box">
      <card title="overall"></card>
    </div>
    <section class="section p-3">
      <span class="is-uppercase has-text-black has-text-weight-semibold">
        breakdown
      </span>
      <div class="has-text-grey pb-2">
        Select the options from dropdown menu.
      </div>
      <div class="box second-box bg-greyishwhite">
        <card title="category 1"></card>
      </div>
      <div class="columns">
        <div class="column pt-0 desktop-pr-0 pr-0">
          <div class="box cols-box bg-greyishwhite">
            <card title="category 2"></card>
          </div>
        </div>
        <div class="column pt-0">
          <div class="box cols-box bg-greyishwhite">
            <card title="category 3"></card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 60%;
}
.db-box {
  overflow: auto;
  height: calc(100vh - 40px);
}
.first-box {
  height: 40%;
  margin-bottom: 1vh !important;
}
.second-box {
  height: 30%;
}
.columns {
  height: 55%;
  .column,
  .cols-box {
    height: 100%;
  }
}
</style>
