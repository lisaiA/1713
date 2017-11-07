<template>
    <div class="ticket-con">
        <paginate class="view-list page" ref="paginator" name="tourlistInfo" :list="tourlistInfo" :per="per">
            <dl class="ticket-list" v-for="item in paginated('tourlistInfo')" :key="item.id">
                <dt class="ticket-img">
                    <img class="ticket-img-con" :src="item.src" alt="">
                </dt>
                <dd class="ticket-item">
                    <h2 class="ticket-title">{{item.title}}</h2>
                    <div class="ticket-tag">
                        <span class="tag-where">{{item.titleWhere}}</span>
                        <span class="tag-cost">{{item.titleCost}}</span>
                        <span class="tag-shopping">{{item.titleShop}}</span>
                    </div>
                    <div class="list-price">
                        <span class="price-con">&yen;<em class="price-con-info">{{item.money}}</em></span>
                        <span class="price-flag">起</span>
                    </div>
                    <div class="ticket-sold">
                        <span class="ticket-sold-num">{{item.surplus}}</span>
                    </div>
                </dd>
            </dl>
        </paginate>
        <div class="moreinfo">
            <div class="pagination">
                <a @click="prevPage" class="linkPage">上一页</a>
                <span v-if="$refs.paginator" ref="pageNumber" class="page-num" :val="pageNum">
                    {{pageNum}} / {{pageAllNum}}
                </span>
                <a @click="textPage" class="linkPage">下一页</a>
            </div>
        </div>
    </div>
</template>

<script>
    import { paginate } from 'vue-paginate'
    export default {
        props: ['tourlistInfo'],
        name:'HelloWorld',
        data () {
            return {
                isAction: this.pre,
                per: 10,
                paginate: ['tourlistInfo']
            }
        },
        // mounted: function () {
        //     this.$nextTick(function () {
        //         window.addEventListener('scroll', this.onScroll)
        //     })
        // },
        computed: {
            pageNum: function() {
                return parseInt(parseInt(this.$refs.paginator.pageItemsCount)/this.per)+1
            },
            pageAllNum: function() {
                return Math.ceil(this.tourlistInfo.length / this.per)
            } 
        },
        methods: {
            prevPage () {
                if (this.$refs.paginator) {
                    var current = this.pageNum;
                    if(current > 1) {
                        this.$refs.paginator.goToPage(this.pageNum-1);
                    }
                }
                window.scrollTo(0,0);
            },
            textPage () {
                if (this.$refs.paginator) {
                    var num = parseInt(this.tourlistInfo.length/this.per)+1;
                    var current = this.pageNum;
                    if(current < num) {
                        this.$refs.paginator.goToPage(this.pageNum+1);
                    }
                }
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style scoped>
    .ticket-con {
        background: #fff;
    }
    .ticket-list {
        position: relative;
        min-height: 2rem;
        _height: 2rem;
        overflow: hidden;
        display: flex;
    }
    .ticket-img {
        /*float: left;*/
        margin: .2rem;
        width: 1.6rem;
        height: 1.6rem;
    }
    .ticket-img-con {
        width: 1.6rem;
        height: 1.6rem;
    }
    .ticket-item {
        /*float: left;*/
        flex: 1;
        padding: .2rem .2rem .2rem 0;
        height: 1.6rem;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #ccc;
    }
    .ticket-title {
        line-height: .36rem;
        font-size: .3rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .ticket-tag {
        position: relative;
        top: .06rem;
        overflow: hidden;
        max-height: .58rem;
        margin-right: 1rem;
        padding-top: .06rem;
        line-height: .24rem;
        font-size: 0;
    }
    .tag-where {
        position: relative; 
        display: inline;
        padding: 0 .1rem;
        font-size: .24rem;
        color: #00bcd4;
    }
    .tag-cost {
        display: inline;
        padding: 0 .1rem;
        font-size: .24rem;
        color: #616161;
        border-right: 1px solid #eee;
        border-left: 1px solid #eee;
    }
    .tag-shopping {
        display: inline;
        padding: 0 .1rem;
        font-size: .24rem;
        color: #616161;
    }
    .list-price {
        position: absolute;
        right: .2rem;
        bottom: .48rem;
        height: .32rem;
        line-height: .32rem;
        color: #9e9e9e;
        text-align: right;
    }
    .price-con {
        font-size: .22rem;
        font-weight: bold;
        color: #ff8300;
    }
    .price-con-info {
        font-size: .32rem;
        padding-left: .04rem;
    }
    .price-flag {
        font-size: .24rem;
        padding-left: .02rem;
    }
    .ticket-sold {
        position: absolute;
        left: -.1rem;
        bottom: .2rem;
        width: 100%;
        font-size: 0;
        color: #9e9e9e;
    }
    .ticket-sold-num {
        padding: 0 .1rem;
        font-size: .22rem;
    }
    .moreinfo {
        padding-top: .2rem;
        color: #00afc7;
        text-align: center;
        line-height: .7rem;
        background: #f5f5f5;
    }
    .linkPage {
        display: inline-block;
        width: 1.4rem;
        border: .02rem solid #00afc7;
        background: #fff;
        color: #00afc7;
        line-height: .6rem;
        border-radius: .06rem;
    }
    .disablePage {
        background: #bdbdbd;
        color: #fff;
        border: 0;
    }
    .page-num {
        color: #212121;
        line-height: .6rem;
        padding: 0 15px;
    }
    .page-text {
        padding-top: .2rem;
        line-height: .3rem;
        font-size: .3rem;
    }
</style>
