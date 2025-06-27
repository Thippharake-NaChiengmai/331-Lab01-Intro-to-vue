const ReviewForm = {
    props: {
        productId: Number
    },
    template: /*html*/
        `
    <form class="review-form">
    <h3>Leave a Review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="form.name">

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

    <label>Would you recommend this product?</label>
      <div>
        <input type="radio" id="recommend-yes" value="Yes" v-model="form.recommend">
        <label for="recommend-yes">Yes</label>
        <input type="radio" id="recommend-no" value="No" v-model="form.recommend">
        <label for="recommend-no">No</label>
      </div>
    <button class="submit-button" type="submit">Submit Review</button>
</form>
`,
    setup(_, { emit }) {
        const { reactive } = Vue;
        const form = reactive({
            name: '',
            review: '',
            rating: null,
            recommend: null
        });
        const onSubmit = () => {
             if (form.name === '' || form.review === '' || form.rating === null) {
                alert('Review is incomplete. Please fill out all fields.')
                return
            }
            const productreview = {
                name: form.name,
                review: form.review,
                rating: form.rating,
                recommend: form.recommend
            }
            emit('review-submitted', productreview);
            form.name = '';
            form.review = '';
            form.rating = null;
            form.recommend = null;
        }

        return {
            form,
            onSubmit  
        }
    }
}
