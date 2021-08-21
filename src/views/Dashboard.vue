<template>
  <div class="columns pt-2 pb-2">
    <main class="column is-three-fifths is-offset-one-fifth">
      <main-box/>
    </main>
  </div>
</template>

<script>
import MainBox from '@/components/Mainbox.vue';

export default {
  name: 'Home',
  components: {
    'main-box': MainBox,
  },
};
</script>
<style scoped>
</style>
