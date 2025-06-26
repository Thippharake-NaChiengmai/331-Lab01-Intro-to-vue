// const product = 'Socks'
const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        // const product = ref('Socks');
        const product = ref('Boots');
        const productDescription = ref('A pair of warm and comfortable boots for winter.');
        const image = ref('./assets/images/socks_green.jpg');
        const productLink = ref('https://www.camt.cmu.ac.th');
         const inStock = computed(() => inventory.value > 0);
        const inventory = ref(100);
        const onSale = computed(() => inventory.value > 0);
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester']);
        const variants = ref([
            {
                id: 2234, color: 'green', image: './assets/images/socks_green.jpg'
            },
            {
                id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'
            }
        ]);


        const sizes = ref(['S', 'M', 'L']);
        const sizesInLine = computed(() => sizes.value.join('/'));
         const cart = ref(0);
        function addToCart() {
            cart.value += 1;
        }
         function updateImage(variantImage) {
            image.value = variantImage;
        }

         function toggleStock () {
      inventory.value = inventory.value > 0 ? 0 : 100;
    }


        return {
            product,
            productDescription,
            image,
            productLink,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            sizesInLine,
            cart,
            addToCart,
            updateImage,
            toggleStock
        }
    }

}).mount('#app')