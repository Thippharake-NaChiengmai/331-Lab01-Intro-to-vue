// const product = 'Socks'
const { createApp, ref, computed } = Vue;

const app = createApp({
    setup() {
        // const product = ref('Socks');
        const product = ref('Boots');
        const productDescription = ref('A pair of warm and comfortable boots for winter.');
        const brand = ref('SE 331');
        const image = computed(() => {
            return variants.value[selectedVariant.value].image;
        });
        const productLink = ref('https://www.camt.cmu.ac.th');
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        });
        const inventory = ref(100);
        const onSale = computed(() => {
            return variants.value[selectedVariant.value].quantity;
        });
        const saleMessage = computed(() =>
  onSale.value ? `${brand.value} ${product.value} is on sale!` : ''
)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester']);
        const variants = ref([
            {
                id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50
            },
            {
                id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0
            }
        ]);
        const selectedVariant = ref(0);
        const sizes = ref(['S', 'M', 'L']);
        const sizesInLine = computed(() => sizes.value.join('/'));
        const cart = ref(0);
        const title = computed(() => {
            return brand.value + ' ' + product.value;
        });
        function addToCart() {
            cart.value += 1;
        }
        function updateImage(variantImage) {
            image.value = variantImage;
        }

        function updateVariant(index) {
            selectedVariant.value = index;
        }
        function toggleStock() {
            inventory.value = inventory.value > 0 ? 0 : 100;
        }


        return {
            product,
            brand,
            productDescription,
            image,
            productLink,
            inStock,
            inventory,
            onSale,
            saleMessage,
            details,
            variants,
            selectedVariant,
            sizes,
            sizesInLine,
            cart,
            title,
            addToCart,
            updateImage,
            updateVariant,
            toggleStock
        }
    }

}).mount('#app')