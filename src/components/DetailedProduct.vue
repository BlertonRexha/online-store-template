<template>
    <div class="detailed-product">
        <modal cross-btn="true" size-close-icon="md" size="70%" @close="$emit('close')">
            <div slot="modal-title">
                <h3>Product Details</h3>
            </div>
            <div slot="content" class="container">
                <div class="cover">
                    <img :src="require('@/assets/images/'+copied_product.cover_img)" width="100%" height="200px">
                    <div class="img-cover">
                        <div class="images" v-for="img in copied_product.images" @click="copied_product.cover_img = img">
                            <img :src="require('@/assets/images/'+img)" height="100%" width="100%">
                        </div>
                    </div>
                </div>
                <div class="data">
                    <div class="title-desc">
                        <div class="title">{{copied_product.title}}</div>
                        <div class="description">{{copied_product.description}}</div>
                        <div class="stars">
                            <star-icon height="15px" width="15px" v-for="(so, i) in copied_product.ratings" :key="i"></star-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div slot="modal-footer" class="footer">
                <span :class="{'disabled': product.isAddedToCart}" style="margin-right: 10px;">
                    <shopping-cart-icon size="1.5x" class="custom-class" @click="addToCard()"></shopping-cart-icon>
                </span>
                <span :class="{'disabled': !product.isAddedToCart}">
                    <trash-2-icon size="1.5x" class="custom-class" @click="removeFromCart()"></trash-2-icon>
                </span>
            </div>
        </modal>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import Modal from "@/components/Modal";
import { Trash2Icon, StarIcon, ShoppingCartIcon } from 'vue-feather-icons'
export default {

    name: 'DetailedProduct',
    components: { Modal, Trash2Icon, StarIcon, Modal, ShoppingCartIcon },
    props: ['product'],

    data() {
        return {
            copied_product: null,
        }
    },
    beforeMount() {
        this.copied_product = JSON.parse(JSON.stringify(this.product))
    },
    methods: {
        ...mapMutations(['addOrRemoveToCart']),
        removeFromCart() {
            this.product.isAddedToCart = false;
            this.addOrRemoveToCart(this.product);
        },
        addToCard() {
            this.product.isAddedToCart = true
            this.addOrRemoveToCart(this.product);
        },
    }
}
</script>
<style lang="scss" scoped>
.detailed-product {
    .container {
        overflow: scroll;
        display: flex;
        margin: 0 20px;
        margin-top: 10px;

        .cover {
            width: 30%;

            .img-cover {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 10px;
                cursor: pointer;

                .images {
                    height: 60px;
                }
            }
        }

        .data {
            flex: 1;
            display: flex;
            margin-left: 10px;

            .title-desc {
                flex: 1;

                .title {
                    font-size: 20px;
                    font-weight: 600;
                }

                .description {
                    font-weight: 500;
                    color: #777;
                }

                .stars {
                    font-weight: 700;
                    color: #FDCC0D;
                }
            }
        }
    }

    .footer {
        span {
            cursor: pointer;
        }

        .disabled {
            opacity: 0.2;
            cursor: not-allowed;
        }
    }

}
</style>