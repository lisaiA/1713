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
    import header from './header.vue';
    import carousel from './carousel.vue';
    import spot from './spot.vue';
    import location from './location.vue';
    import selling from './selling.vue';
    import week from './week.vue';
    import axios from 'axios';

    export default {
	   name:'HelloWorld',
        data () {
            return {
                swiperInfo: []
            }
        },
        components: {
        	indexheader : header,
            headercarousel: carousel,
            headerspot: spot,
            headerlocation:location,
            headerselling:selling,
            headerweek:week
        },
        mounted() {
            this.getIndexData();
        },
        methods: {
            getIndexData() {
                axios.get('/static/index.json?city=北京')
                    .then(this.handleGetIndexDataSucc.bind(this))
                    .catch(this.handleGetIndexDataErr.bind(this));
            },
            handleGetIndexDataSucc(res) {
                const data = res.data.data;
                this.swiperInfo = data.swiperInfo;
            },
            handleGetIndexDataErr(err) {
                console.log(err)
            }
        }
    }
</script>

<style scoped>

</style>
