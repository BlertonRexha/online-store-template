<template>
    <div class="favorite-products">
        <modal cross-btn="true" size-close-icon="md" size="40%" @close="$emit('close')" position="top-right">
            <div slot="modal-title">
                <h3>Favorites</h3>
            </div>
            <div slot="content" class="container">
                <div class="item" v-for="(item,key) in list" :key="key">
                    <div class="cover">
                        <img :src="require('@/assets/images/'+item.cover_img)" height="150px" width="150px">
                    </div>
                    <div class="data">
                        <div class="title-desc">
                            <div class="title">{{item.title}}</div>
                            <div class="description">{{item.description}}</div>
                            <div class="stars">
                                <star-icon height="15px" width="15px" v-for="(so,i) in item.ratings" :key="i"></star-icon>
                            </div>
                        </div>
                        <div class="btn">
                            <heart-icon size="1.5x" class="custom-class pointer" @click="setToFavorites(item)" :style="{color: item.isFavourite ? 'red' : 'black'}"></heart-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div slot="modal-footer">
            </div>
        </modal>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import Modal from "@/components/Modal";
import { HeartIcon, StarIcon } from 'vue-feather-icons'
export default {

    name: 'FavoriteProducts',
    components: { Modal, HeartIcon, StarIcon },
    props: ['list'],

    data() {
        return {

        }
    },
    methods: {
        ...mapMutations(['addOrRemoveToFavorites']),
        setToFavorites(item) {
            item.isFavourite = false;
            this.addOrRemoveToFavorites(item);
        }
    }
}
</script>
<style lang="scss" scoped>
.favorite-products {
    .container {
        height: 400px;
        overflow: scroll;

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
}
</style>