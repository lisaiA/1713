<template>
    <div class="hello">
        <indexheader/>
        <headercarousel :swiperInfo="swiperInfo"/>
        <headerspot/>
        <headerlocation/>
        <headerselling/>
        <headerweek/>
    </div>
</template>

<script>
    import header from './components/header.vue';
    import carousel from './components/carousel.vue';
    import spot from './components/spot.vue';
    import location from './components/location.vue';
    import selling from './components/selling.vue';
    import week from './components/week.vue';
    import axios from 'axios';
    import { GET_HOME_DATA } from './types.js'
    import { mapState, mapActions } from 'vuex'

    export default {
	   name:'HelloWorld',
        components: {
        	indexheader : header,
            headercarousel: carousel,
            headerspot: spot,
            headerlocation:location,
            headerselling:selling,
            headerweek:week
        },
        computed: mapState({
            swiperInfo: (state) => {
                return state.home.swiperInfo;
            },
            spotInfo: (state) => {
                return state.home.spotInfo;
            }
        }),
        mounted() {
            if(!this.swiperInfo.length) {
                this.getIndexData();
            }
        },
        methods: mapActions({
            getIndexData: (dispatch) => {
                dispatch(GET_HOME_DATA)
            }
        })
            // getIndexData() {
            //     this.$store.dispatch(GET_HOME_DATA)
            // }
            // handleGetIndexDataSucc(res) {
            //     const data = res.data.data;
            //     this.$store.commit("setData", data.swiperInfo)
            //     // this.swiperInfo = data.swiperInfo;
            // },
            // handleGetIndexDataErr(err) {
            //     console.log(err)
            // }
        
    }
</script>

<style scoped>

</style>
