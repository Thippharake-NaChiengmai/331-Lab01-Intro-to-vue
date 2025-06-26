// const product = 'Socks'
const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        // const product = ref('Socks');
        const product = ref('Boots');
        const productDescription = ref('A pair of warm and comfortable boots for winter.');
        return {
            product,
            productDescription
                    }
    }

}).mount('#app')