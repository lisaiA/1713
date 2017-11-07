<template>
    <div id="spot">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
            <swiper-slide>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
                        </dd>
                        <dt>
                            景点门票
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png" alt="">
                        </dd>
                        <dt>
                            动植物园
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png" alt="">
                        </dd>
                        <dt>
                            故宫
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <router-link to="/daytour">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png" alt="">
                        </dd>
                        <dt>
                            一日游
                        </dt>
                    </router-link>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png" alt="">
                        </dd>
                        <dt>
                            必游榜单
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png" alt="">
                        </dd>
                        <dt>
                            秋色美
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png" alt="">
                        </dd>
                        <dt>
                            游乐场
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png" alt="">
                        </dd>
                        <dt>
                            泡温泉
                        </dt>
                    </a>
                </dl>
                </swiper-slide>
                <swiper-slide>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png" alt="">
                        </dd>
                        <dt>
                            城市观光
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png" alt="">
                        </dd>
                        <dt>
                            玻璃栈道
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png" alt="">
                        </dd>
                        <dt>
                            名胜古迹
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png" alt="">
                         </dd>
                        <dt>
                            周边游
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png" alt="">
                        </dd>
                        <dt>
                            自然风光
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png" alt="">
                        </dd>
                        <dt>
                            古北水镇
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png" alt="">
                        </dd>
                        <dt>
                            景点讲解
                        </dt>
                    </a>
                </dl>
                <dl class="list">
                    <a href="">
                        <dd>
                            <img src="http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png" alt="">
                        </dd>
                        <dt>
                            全部
                        </dt>
                    </a>
                </dl>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
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
            }
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
