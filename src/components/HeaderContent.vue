<template>
    <div class="header-content">
        <div class="title">
            <!-- <shopping-bag-icon height="25px" class="custom-class"></shopping-bag-icon> -->
            <img src="@/assets/images/wave.png" height="25px" alt="">
            <strong> nline Store </strong>
        </div>
        <div class="input-div">
            <input type="text" v-model="search" placeholder="Search..." @input="$emit('filter', search)">
            <search-icon class="search-icon"></search-icon>
        </div>
        <div class="buttons">
            <div class="shopping-cart" @click="showCartModal = !showCartModal">
                <shopping-cart-icon size="1.5x" class="custom-class"></shopping-cart-icon>
                <span class="badge">{{filteredCart.length}}</span>
            </div>
            <div class="shopping-favorites" @click="showFavoritesModal = !showFavoritesModal">
                <heart-icon size="1.5x" class="custom-class"></heart-icon>
                <span class="badge">{{filteredFavorites.length}}</span>
            </div>
            <div>
                <facebook-icon size="1.5x" class="custom-class"></facebook-icon>
            </div>
            <div>
                <instagram-icon size="1.5x" class="custom-class"></instagram-icon>
            </div>
        </div>
        <favorite-products :list="filteredFavorites" v-if="showFavoritesModal" @close="showFavoritesModal= false"></favorite-products>
        <cart-products :list="filteredCart" v-if="showCartModal" @close="showCartModal= false"></cart-products>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { ShoppingCartIcon, FacebookIcon, InstagramIcon, ShoppingBagIcon, SearchIcon, HeartIcon } from 'vue-feather-icons'
import FavoriteProducts from "@/components/FavoriteProducts";
import CartProducts from "@/components/CartProducts";
export default {
    name: 'HeaderContent',
    components: {
        ShoppingCartIcon,
        FacebookIcon,
        InstagramIcon,
        ShoppingBagIcon,
        SearchIcon,
        HeartIcon,
        FavoriteProducts,
        CartProducts
    },
    data() {
        return {
            search: null,
            showFavoritesModal: false,
            showCartModal: false,
        }
    },
    computed: {
        ...mapState({
            products: state => state.products,
        }),
        filteredCart() {
            return this.products.filter(x => x.isAddedToCart)
        },
        filteredFavorites() {
            return this.products.filter(x => x.isFavourite)
        }
    },
}
</script>
<style scoped lang="scss">
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e2e2e2;

    .title {
        display: flex;

        strong {
            font-size: 20px;
            color: #0eb0ef;
        }
    }


    .input-div {
        width: 400px;
        position: relative;

        input {
            padding: 5px;
            width: 100%;
            outline: none;
            font-size: 15px;
            border: 1px solid #e2e2e2;
            border-radius: 5px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
        }

        .search-icon {
            position: absolute;
            font-size: 25px;
            top: 2px;
            right: 10px;
            color: #aaa;
            padding-left: 7px;
        }
    }

    .buttons {
        display: flex;
        align-items: center;

        div {
            display: flex;
            align-items: center;
            margin: 0 5px;
            cursor: pointer;

            &:hover {
                color: #51bafc;
            }
        }

        .shopping-cart,
        .shopping-favorites {
            position: relative;

            .badge {
                font-size: 10px;
                line-height: 12px;
                font-weight: 700;
                color: white;
                background: red;
                border: 1px solid red;
                border-radius: 10px;
                position: absolute;
                padding: 0 3px;
                right: -7px;
                top: -7px;
            }
        }
    }
}
</style>