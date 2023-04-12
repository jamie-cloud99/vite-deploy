<template>
  <div class="card">
    <img :src=product.imageUrl :alt=product.title class="card-img-top">
    <div class="card-body">
      <h6>  {{ product.title }}
        <span class="float-end">$ {{ product.price }} </span>
      </h6>
      <a type="button" class="btn btn-outline-primary w-100"
      @click="addToCart(product.id)">加入購物車</a>
    </div>
  </div>
</template>

<script>
import cartStore from "../stores/cartStore.js"
import {  mapActions } from "pinia"

export default {
  props: ['product'],
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>

<style scoped>
  .card-img-top {
    object-fit: cover;
    height: 200px;
  }
</style>