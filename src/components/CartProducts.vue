<template>
    <div class="cart-products">
        <modal cross-btn="true" size-close-icon="md" size="40%" @close="$emit('close')" position="top-right">
            <div slot="modal-title" class="title">
                <h3>Cart Products</h3>
                <button class="buy" @click="buy_screen = true">Buy</button>
            </div>
            <div slot="content" class="container">
                <div class="buy-screen" v-if="buy_screen">
                    <div class="success-checkmark" v-if="collected">
                        <div class="check-icon">
                            <span class="icon-line line-tip"></span>
                            <span class="icon-line line-long"></span>
                            <div class="icon-circle"></div>
                            <div class="icon-fix"></div>
                        </div>
                        <div class="collected">Collected!</div>
                    </div>
                    <div v-else class="fields">
                        <div>
                            <input type="text" placeholder="Card Number">
                        </div>
                        <div>
                            <input type="date" placeholder="Expiry Date">
                        </div>
                        <div>
                            <input type="text" placeholder="CCV">
                        </div>
                    </div>
                </div>
                <div class="item" v-for="(item,key) in list" ::key="key" v-else>
                    <div class="cover">
                        <img :src="require('@/assets/images/'+item.cover_img)" height="150px" width="150px">
                    </div>
                    <div class="data">
                        <div class="title-desc">
                            <div class="title">{{item.title}}</div>
                            <div class="description">{{item.description}}</div>
                            <div class="stars">
                                <star-icon height="15px" width="15px" v-for="(so, i) in item.ratings" :key="i"></star-icon>
                            </div>
                        </div>
                        <div class="btn">
                            <trash-2-icon size="1.5x" class="custom-class pointer" @click="removeFromCart(item)"></trash-2-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div slot="modal-footer">
                <div v-if="buy_screen" class="footer-btn">
                    <button @click="buy_screen = false; collected = false">Cancel</button>
                    <button @click="collected = true">Collect</button>
                </div>
            </div>
        </modal>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import Modal from "@/components/Modal";
import { Trash2Icon, StarIcon } from 'vue-feather-icons'
export default {

    name: 'FavoriteProducts',
    components: { Modal, Trash2Icon, StarIcon },
    props: ['list'],

    data() {
        return {
            buy_screen: false,
            collected: false,
        }
    },
    methods: {
        ...mapMutations(['addOrRemoveToCart']),
        removeFromCart(item) {
            item.isAddedToCart = false;
            this.addOrRemoveToCart(item);
        }
    }
}
</script>
<style lang="scss" scoped>
.cart-products {
    .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .buy {
            cursor: pointer;
            padding: 5px;
            background-color: #f5f5f5;
            border: none;
            box-shadow: 1px 1px 4px #e4e4e4;
            margin-right: 10px;
            font-weight: 700;
            color: #d45358;

            &:focus {
                outline: none;
            }
        }
    }

    .container {
        height: 400px;
        overflow: scroll;

        .buy-screen {
            .success-checkmark {
                width: 90px;
                height: 135px;
                margin: 50px auto;
                text-align: center;
                color: #4caf50;
                font-weight: 600;

                .collected{
                    margin-top: 10px;
                }

                .check-icon {
                    width: 80px;
                    height: 80px;
                    position: relative;
                    border-radius: 50%;
                    box-sizing: content-box;
                    border: 4px solid #4CAF50;

                    &::before {
                        top: 3px;
                        left: -2px;
                        width: 30px;
                        transform-origin: 100% 50%;
                        border-radius: 100px 0 0 100px;
                    }

                    &::after {
                        top: 0;
                        left: 30px;
                        width: 60px;
                        transform-origin: 0 50%;
                        border-radius: 0 100px 100px 0;
                        animation: rotate-circle 4.25s ease-in;
                    }

                    &::before,
                    &::after {
                        content: '';
                        height: 100px;
                        position: absolute;
                        background: #FFFFFF;
                        transform: rotate(-45deg);
                    }

                    .icon-line {
                        height: 5px;
                        background-color: #4CAF50;
                        display: block;
                        border-radius: 2px;
                        position: absolute;
                        z-index: 10;

                        &.line-tip {
                            top: 46px;
                            left: 14px;
                            width: 25px;
                            transform: rotate(45deg);
                            animation: icon-line-tip 0.75s;
                        }

                        &.line-long {
                            top: 38px;
                            right: 8px;
                            width: 47px;
                            transform: rotate(-45deg);
                            animation: icon-line-long 0.75s;
                        }
                    }

                    .icon-circle {
                        top: -4px;
                        left: -4px;
                        z-index: 10;
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        position: absolute;
                        box-sizing: content-box;
                        border: 4px solid rgba(76, 175, 80, .5);
                    }

                    .icon-fix {
                        top: 8px;
                        width: 5px;
                        left: 26px;
                        z-index: 1;
                        height: 85px;
                        position: absolute;
                        transform: rotate(-45deg);
                        background-color: #FFFFFF;
                    }
                }
            }

            @keyframes rotate-circle {
                0% {
                    transform: rotate(-45deg);
                }

                5% {
                    transform: rotate(-45deg);
                }

                12% {
                    transform: rotate(-405deg);
                }

                100% {
                    transform: rotate(-405deg);
                }
            }

            @keyframes icon-line-tip {
                0% {
                    width: 0;
                    left: 1px;
                    top: 19px;
                }

                54% {
                    width: 0;
                    left: 1px;
                    top: 19px;
                }

                70% {
                    width: 50px;
                    left: -8px;
                    top: 37px;
                }

                84% {
                    width: 17px;
                    left: 21px;
                    top: 48px;
                }

                100% {
                    width: 25px;
                    left: 14px;
                    top: 45px;
                }
            }

            @keyframes icon-line-long {
                0% {
                    width: 0;
                    right: 46px;
                    top: 54px;
                }

                65% {
                    width: 0;
                    right: 46px;
                    top: 54px;
                }

                84% {
                    width: 55px;
                    right: 0px;
                    top: 35px;
                }

                100% {
                    width: 47px;
                    right: 8px;
                    top: 38px;
                }
            }

            .fields {
                div {
                    margin: 10px;

                    input {
                        padding: 10px;
                        width: 100%;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }


        }

        .item {
            display: flex;
            margin: 0 20px;
            margin-top: 10px;
            border-bottom: 1px solid #e2e2e2;

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

                .btn {
                    margin: auto;
                }
            }
        }
    }

    .footer-btn {
        button {
            padding: 5px 10px;
            border: 1px solid #e2e2e2;
            border-radius: 3px;
            font-weight: 600;
            color: #777;
            cursor: pointer;

            &:focus {
                outline: none;
            }

            &:last-child {
                margin-left: 10px;
            }
        }
    }
}
</style>