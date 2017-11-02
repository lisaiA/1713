<template>
    <div id="carrousel">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x200_b984ddf7.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg" alt=""></swiper-slide>
             <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1707/90/2ab6fd356529aa02.jpg_640x200_5a7251a0.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1710/16/249e5d9c533f6e02.jpg_640x200_9d63493e.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
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
