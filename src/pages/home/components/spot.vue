<template>
    <div id="spot">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item, index) in getSpotInfo" :key="index">
                <dl class="list" v-for="inner in item" :key="inner.id">
                    <router-link :to="inner.link">
                        <dd>
                            <img :src="inner.src" alt="">
                        </dd>
                        <dt>
                            {{inner.title}}
                        </dt>
                    </router-link>
                </dl>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import { mapGetters } from 'vuex'

    export default {
        name: 'spot',
        data() {
            return {
                swiperOption: {
                    autoplay: 0,
                    direction: 'horizontal',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    observeParents: true,
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            ...mapGetters(['getSpotInfo'])
            // getSpotInfo() {
            //     const result = [];
            //     this.$store.state.home.spotInfo.forEach((value, index) => {
            //         let page = Math.floor(index / 8);
            //         if(!result[page]) {
            //             result[page] = [];
            //         }
            //         result[page].push(value);
            //     })
            //     return result;
            // }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
    
    #spot{
      height: 3.8rem;
      overflow: hidden;
      border-bottom:1px solid #eee;
      background: #fff;
    }
    #spot .swiper-container{
      height: 3.8rem;
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
    .list{
      float: left;
      width: 25%;
      height: 1.3rem;
      padding-top: .3rem;
      text-align: center;
    }
    .list a{
      color: #00afc7;
    }
    .list a dd img{
      width: .66rem;
      height: .66rem;
    }
    .list a dt{
      margin-top: .2rem;
      color: #212121;
      font-size: .28rem;
    }
</style>
