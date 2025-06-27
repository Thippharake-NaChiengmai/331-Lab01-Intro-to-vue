const ProductDisplay = {
    props: {            
        premium: Boolean
    },
    components: {
    'product-details': ProductDetails
  },
  template: /*html*/
  `
  <div class="product-display">
            <div class="product-container">
            <p>Shipping: {{ Shipping }}</p>
                <div class="product-image">
                    <img :src="image" :class="{ 'out-of-stock-image': !inStock }">
                </div>
            </div>
        </div>
        <div class="product-info">
            <h1><a :href="productLink" :style="{'text-decoration': 'none', 'color': '#282828'}">{{ title }}</a></h1>
            <h3>{{ productDescription }}</h3>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
            <p v-else>Out of Stock</p>
            <p v-if="onSale" :style="{'color': 'red', 'font-weight': 'bold'}">{{ saleMessage }}</p>
            <ul>
            <product-details :details="details"></product-details>
            <br>
                <li>Size: {{ sizesInLine }}</li>
            </ul>
             <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                class="color-circle" :style="{ backgroundColor: variant.color }">
            </div>
                 <button class="button" :disabled='!inStock' @click="addToCart" :class="{ disabledButton: !inStock }">Add to Cart</button>
            <button class="button toggle" @click="toggleStock">{{ inventory > 0 ? 'In Stock' : 'Out of Stock' }}</button>

            </div>
        </div>
  `,
     setup(props, { emit }) {
        const { ref, computed } = Vue;
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
        const title = computed(() => {
            return brand.value + ' ' + product.value;
        });
        function addToCart() {
            emit('add-to-cart', variants.value[selectedVariant.value].id);
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

        const Shipping = computed(() => {
          if (props.premium) {
            return '30'
          } else {
            return 'Free'
          }
        });

        return {
            product,
            brand,
            productDescription,
            Shipping,
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
            title,
            addToCart,
            updateImage,
            updateVariant,
            toggleStock
        }
    }

}