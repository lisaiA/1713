<template>
    <div class="hello">
        <h2>周末去哪儿</h2>
        <dl>
            <a href="">
                <dt>
                    <img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="">
                </dt>
                <dd>
                    <h3>北京温泉排行榜</h3>
                    <h4>细数北京温泉，温暖你的冬天</h4>
                </dd>
            </a>
        </dl>
        <dl>
            <a href="">
                <dt>
                    <img src="http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" alt="">
                </dt>
                <dd>
                    <h3>寻找北京的皇城范儿</h3>
                    <h4>数百年的宫廷庙宇，至今依旧威严霸气</h4>
                </dd>
            </a>
        </dl>
        <dl>
            <a href="">
                <dt>
                    <img src="http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg" alt="">
                </dt>
                <dd>
                    <h3>北京必游TOP10</h3>
                    <h4>来北京必去的景点非这些地方莫属</h4>
                </dd>
            </a>
        </dl>
        <dl>
            <a href="">
                <dt>
                    <img src="http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg" alt="">
                </dt>
                <dd>
                    <h3>登高望远秋色佳</h3>
                    <h4>山顶满眼彩色，此情此景醉了</h4>
                </dd>
            </a>
        </dl>
        <dl>
            <a href="">
                <dt>
                    <img src="http://img1.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg" alt="">
                </dt>
                <dd>
                    <h3>秋高气爽去礼佛</h3>
                    <h4>秋风伴着美妙经声，品尝秋的另一番滋味</h4>
                </dd>
            </a>
        </dl>
    </div>
</template>

<script>

    export default {
        name:'HelloWorld',
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>
    h2{
        height: .8rem;
        padding-left: .26rem;
        line-height: .8rem;
        color: #212121;
    }
    dl{
        margin-bottom: .1rem;
        background: #fff;
        height: 3.6rem;
    }
    dt{
        height: 0;
        width: 100%;
        padding-bottom: 2.4rem;
    }
    dt img{
        width: 100%;
    }
    dd{
        padding: .14rem .2rem .2rem .2rem;
    }
    h3{
        overflow: hidden;
        padding-right: 1.4rem;
        color: #212121;
        font-size: .28rem;
        line-height: .48rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    h4{
        overflow: hidden;
        padding-right: 1.4rem;
        color: #616161;
        font-size: .24rem;
        line-height: .42rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
