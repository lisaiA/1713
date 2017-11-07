<template>
    <div id="carrousel">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in swiperInfo" :key="item.id">
                <router-link :to="item.link">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        props: ['swiperInfo'],
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    autoplay: 1000,
                    direction: 'horizontal',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    observeParents: true,
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
    
    #carrousel{
      height: 2rem;
    }
    #carrousel .swiper-container{
      height: 100%;
    }
    #carrousel .swiper-container img{
      width: 100%;
      height: 100%;
    }
    .swiper-scrollbar{
        z-index: -1;
    }
    .swiper-button-prev{
      display: none;
    }
    .swiper-button-next{
      display: none;
    }
    
</style>
