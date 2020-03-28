<template>
    <div class="home">
        <header-content @filter="search = $event"></header-content>
        <div class="product">
            <div class="item" v-for="(prod,key) in filterProducts()" :key="key">
                <card :product="prod" @setToCart="setToCart($event)" @setToFavorites="setToFavorites($event)"></card>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import HeaderContent from '@/components/HeaderContent'
import Card from '@/components/Card'

export default {
    name: 'home',
    components: {
        HeaderContent,
        Card
    },
    data(){
        return {
            search: null
        }
    },
    computed: {
        ...mapState({
            products: state => state.products,
        })
    },
    methods: {
        ...mapMutations(['addOrRemoveToCart', 'addOrRemoveToFavorites']),
        setToCart(item) {
            this.addOrRemoveToCart(item);
        },
        setToFavorites(item) {
            this.addOrRemoveToFavorites(item);
        },
        filterProducts() {
            if (this.search)
                return this.products.filter(post => {
                    return post.title.toLowerCase().includes(this.search.toLowerCase()) || post.description.toLowerCase().includes(this.search.toLowerCase())
                })
            else
                return this.products
        }
    }
}
</script>
<style scoped lang="scss">
.home {
    .product {
        margin: 15px 15%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;

        .item {
            border: 1px solid #e2e2e2;
            box-shadow: 0 10px 10px #e2e2e2;
        }
    }
}
</style>