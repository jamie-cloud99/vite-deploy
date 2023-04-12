import { defineStore } from "pinia"
import productStore from "./productStore.js";

export default defineStore('cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart (productId, qty=1) {
      const currentCart = this.cart.find(item => item.productId === productId)
      if(currentCart){
        currentCart.qty++ // 物件傳參考，所以原有cart數量會改變
      } else {
        const cartId = new Date().getTime();
        this.cart.push({
          cartId,
          productId,
          qty
        })
      }
    },
    removeCartItem (id) {
      const index = this.cart.findIndex(item => item.cartId === id)
      this.cart.splice(index, 1)
    },
    setCartQty (id, event) {
      const currentCart = this.cart.find(item => item.cartId === id)
      currentCart.qty = event.target.value * 1 // 字串轉數值
    }
  },
  getters: {
    cartList: ({cart}) => {
      // 1. 購物車品項整合產品資訊
      // 2. 計算小計
      // 3. 計算總金額
      const { products } = productStore();

      const carts = cart.map(item => {
        const product = products.find(product => product.id === item.productId)
        return {
          ...item,
          product,
          subtotal: product.price * item.qty,
        }
      })

      const total = carts.reduce((acc,cur) => acc + cur.subtotal, 0)

      return {
        carts,
        total
      }
    }
  }
})