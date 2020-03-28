import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [{
            id: 1,
            title: 'Product 1',
            cover_img: 'cover-image.jpg',
            images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-3.jpg', 'image-2.jpg', 'image-3.jpg', 'image-1.jpg', 'image-3.jpg', 'image-1.jpg'],
            description: 'CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military, CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military ,CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military',
            price: 50,
            ratings: 3,
            reviews: 5,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        }, {
            id: 2,
            title: 'Product 2',
            cover_img: 'cover-image.jpg',
            images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
            description: 'CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military, CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military ,CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military',
            price: 35,
            ratings: 5,
            reviews: 10,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        }, {
            id: 3,
            title: 'Product 3',
            cover_img: 'cover-image.jpg',
            images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
            description: 'CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military, CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military ,CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military',
            price: 110,
            ratings: 2,
            reviews: 3,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        }, {
            id: 4,
            title: 'Product 4',
            cover_img: 'cover-image.jpg',
            images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
            description: 'CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military, CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military ,CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military',
            price: 50,
            ratings: 1,
            reviews: 0,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        }, {
            id: 5,
            title: 'Product 5',
            cover_img: 'cover-image.jpg',
            images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
            description: 'CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military, CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military ,CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military',
            price: 35,
            ratings: 4,
            reviews: 2,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        }, {
            id: 6,
            title: 'Product 6',
            cover_img: 'cover-image.jpg',
            images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
            description: 'CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military, CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military ,CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military',
            price: 110,
            ratings: 5,
            reviews: 1,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        }, {
            id: 7,
            title: 'Product 7',
            cover_img: 'cover-image.jpg',
            images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
            description: 'CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military, CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military ,CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military',
            price: 50,
            ratings: 5,
            reviews: 7,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        }, {
            id: 8,
            title: 'Product 8',
            cover_img: 'cover-image.jpg',
            images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
            description: 'CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military, CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military ,CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military',
            price: 35,
            ratings: 3,
            reviews: 0,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        }, {
            id: 9,
            title: 'Product 9',
            cover_img: 'cover-image.jpg',
            images: ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'],
            description: 'CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military, CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military ,CURREN Casual Sport Watches for Men Blue Top Brand Luxury Military',
            price: 110,
            ratings: 4,
            reviews: 2,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantity: 1
        }],
    },
    mutations: {
        addOrRemoveToCart: (state, payload) => {
            let index = state.products.findIndex(x => x.id === payload.id)
            state.products[index] = payload;
        },
        addOrRemoveToFavorites: (state, payload) => {
            let index = state.products.findIndex(x => x.id === payload.id)
            state.products[index] = payload;
        },
    },
    actions: {}
})