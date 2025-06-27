// const product = 'Socks'
const { createApp, ref, computed } = Vue;
const app = createApp({
    setup() {
        const cart = ref(0);
        const premium = ref(true);
        return {
            cart,
            premium
        }
    }
})
.component('product-display', ProductDisplay)
.mount('#app')


        