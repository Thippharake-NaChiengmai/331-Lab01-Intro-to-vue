// const product = 'Socks'
const { createApp, ref, computed } = Vue;
const app = createApp({
    setup() {
        const cart = ref([]);
        const premium = ref(false);
        function updateCart(productId) {
            cart.value.push(productId);
        }

        const productCounts = computed(() => {
      const counts = {}
      cart.value.forEach(id => { counts[id] = (counts[id] || 0) + 1 })
      return counts      
    })

    function add(id)    { cart.value.push(id) }
    function remove(id) {
      const idx = cart.value.indexOf(id)
      if (idx !== -1) cart.value.splice(idx, 1)
    }
        return {
            cart,
            premium,
            productCounts,
            updateCart,
            add,
            remove             
        }
    }
})
.component('product-display', ProductDisplay)
.component('product-details', ProductDetails)
.component('review-form', ReviewForm)
.component('review-list', ReviewList)
.mount('#app')


        