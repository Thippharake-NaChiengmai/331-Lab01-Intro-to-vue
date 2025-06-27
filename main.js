// const product = 'Socks'
const { createApp, ref, computed } = Vue;
const app = createApp({
    setup() {
        const cart = ref([]);
        const premium = ref(false);
        function updateCart(productId) {
            cart.value.push(productId);
        }
        return {
            cart,
            premium,
            updateCart
        }
    }
})
.component('product-display', ProductDisplay)
.mount('#app')


        