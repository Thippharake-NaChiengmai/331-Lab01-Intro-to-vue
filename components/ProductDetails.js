const ProductDetails = {
  props: {
    details: Array 
  },
  template: 
  /*html*/`
    <div class="product-details">
      <h3>Product Details</h3>
      <ul>
        <li v-for="detail in details" :key="detail">
          {{ detail }}
        </li>
      </ul>
    </div>
  `
}
