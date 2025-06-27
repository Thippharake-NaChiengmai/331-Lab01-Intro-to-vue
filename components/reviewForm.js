const ReviewForm = {
    props: {
        productId: Number
    },
    template: /*html*/
        `
    <form class="review-form">
    <h3>Leave a Review</h3>
    <label for="name">Name:</label>
    <input id="name" v-moldel="form.name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="form.review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model="form.rating">
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Star</option>
    </select>
    <button class="submit-button" type="submit">Submit Review</button>
</form>
`,
    setup(_, { emit }) {
        const { ref, reactive } = Vue;
        const reviews = ref([]);
        const form = reactive({
            name: '',
            review: '',
            rating: null
        });
        const onSubmit = () => {
            const productreview = {
                name: form.name,
                review: form.review,
                rating: form.rating
            };
            emit('submit-review', productreview);
            form.name = '';
            form.review = '';
            form.rating = null;
        }
        function addReview(productreview) {
            reviews.value.push(productreview);
        }

        return {
            form,
            reviews,
            onSubmit,   
            addReview
        }
    }
}
