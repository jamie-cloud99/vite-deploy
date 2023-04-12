<template>
  <div class="bg-light my-4 p-4">
    <p v-if="!cartList.carts">購物車沒有任何品項</p>  
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="cart in cartList.carts" :key="cart.cartId">
          <td><a href="#" class="link-dark" @click.prevent="removeCartItem(cart.cartId)">
          <i class="fas fa-times"></i></a></td>
          <td><img :src="cart.product.imageUrl" :alt="cart.product.title" width="1000" height="1000" class="table-image"></td>
          <td> {{ cart.product.title }} </td>
          <td><select name="" class="form-select" :value="cart.qty"
          @change="(evt) => setCartQty(cart.cartId, evt)">
            <option v-for="i in 10" :key="'cart.product.id' + i" :value="i"> {{ i }} </option>
          </select></td>
          <td class="text-end">$ {{ cart.subtotal }} </td>
        </tr>
      </tbody>
      <tfoot>
        <tr><td colspan="5" class="text-end">總金額 $ {{ cartList.total }} </td></tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from "../stores/cartStore.js"
import { mapState, mapActions } from "pinia"

export default {
  computed: {
    ...mapState(cartStore, ['cartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'setCartQty'])
  }
}
</script>

<style scoped>
.table-image {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
  
</style>