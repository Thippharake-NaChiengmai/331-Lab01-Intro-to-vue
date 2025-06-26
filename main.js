// const product = 'Socks'
const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        // const product = ref('Socks');
        const product = ref('Boots');
        const productDescription = ref('A pair of warm and comfortable boots for winter.');
        const image = ref('./assets/images/socks_green.jpg');
        const productLink = ref('https://www.camt.cmu.ac.th');
        return {
            product,
            productDescription,
            image,
            productLink
        }
    }

}).mount('#app')