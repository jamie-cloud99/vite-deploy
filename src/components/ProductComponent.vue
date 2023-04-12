<template>
  <div class="row row-cols-3 my-4 py-4 g-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <CardComponent :product="product"></CardComponent>
    </div>
  </div>
</template>


<script>
import CardComponent from './CardComponent.vue';
import productStore from '../stores/productStore.js';
import { mapState } from 'pinia';

export default {
  components: {
    CardComponent
  },
  computed: {
    ...mapState(productStore, ['sortProducts'])
  }
}
</script>