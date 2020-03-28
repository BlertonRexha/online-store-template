<template>
    <div class="card">
        <img :src="require('@/assets/images/'+product.cover_img)" height="250px" width="100%">
        <div class="title-row">
            <h4>{{product.title}}</h4>
            <div>
                <heart-icon size="1.5x" class="custom-class pointer" @click="setToFavorites(product)" :style="{color: product.isFavourite ? 'red' : 'black'}"></heart-icon>
            </div>
        </div>
        <div class="description">
            {{product.description.substring(0,80)}}
        </div>
        <div class="stars">
            <star-icon height="15px" width="15px" v-for="(so,key) in product.ratings" :key="key"></star-icon>
        </div>
        <div class="review-price-rate">
            <strong>{{product.reviews}} Review</strong>
            <strong class="price">
                {{product.ratings}}€
            </strong>
        </div>
        <div class="buttons">
            <div class="add-to-chart" @click="addToCard(product)">{{product.isAddedToCart ? 'Remove form':'Add to'}} cart</div>
            <div class="view-details" @click="viewDetails(product)">
                <info-icon height="14px"></info-icon>
                Details
            </div>
        </div>
        <detailed-product :product="detailedProduct" v-if="showDetailsModal" @close="showDetailsModal = false"></detailed-product>
    </div>
</template>
<script>
import { HeartIcon, StarIcon, InfoIcon } from 'vue-feather-icons'
import DetailedProduct from '@/components/DetailedProduct';
export default {

    name: 'Card',
    props: ['product'],
    components: { HeartIcon, StarIcon, InfoIcon, DetailedProduct },

    data() {
        return {
            detailedProduct: null,
            showDetailsModal: false,
        }
    },
    methods: {
        addToCard(product) {
            product.isAddedToCart = !product.isAddedToCart
            this.$emit('setToCart', product)
        },
        setToFavorites(product) {
            product.isFavourite = !product.isFavourite
            this.$emit('setToFavorites', product)
        },
        viewDetails(product){
            this.detailedProduct = product
            this.showDetailsModal = true
        }
    }
}
</script>
<style lang="scss" scoped>
.card {
    padding: 10px;

    .title-row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .custom-class:hover {
            color: red;
        }
    }

    .description {
        color: #777;
    }

    .stars {
        font-weight: 700;
        color: #FDCC0D;
    }

    .review-price-rate {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        border-bottom: 1px solid #00d1b2;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .add-to-chart,
        .view-details {
            background: #00d1b2;
            color: #fff;
            padding: 5px 10px;
            border-radius: 3px;
            font-weight: 600;
            cursor: pointer;
        }

        .view-details {
            display: flex;
            align-items: center;
            svg{
                margin: 5px;
            }
        }
    }
}
</style>