<template>
    <div class="selling">
        <dl>
            <dt>
                <a href=""><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt=""></a>
            </dt>
            <dd>
                <h2>故宫</h2>
                <p class="pp">东方宫殿建筑代表，世界宫殿建筑典范</p>
                <p class="ppp">
                    <i>￥</i>
                    <span>65</span>
                    起
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href=""><img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg" alt=""></a>
            </dt>
            <dd>
                <h2>八达岭长城</h2>
                <p class="pp">不到长城非好汉</p>
                <p class="ppp">
                    <i>￥</i>
                    <span>25</span>
                    起
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href=""><img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg" alt=""></a>
            </dt>
            <dd>
                <h2>颐和园</h2>
                <p class="pp">保存完整的一座皇家行宫御苑</p>
                <p class="ppp">
                    <i>￥</i>
                    <span>1</span>
                    起
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href=""><img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg" alt=""></a>
            </dt>
            <dd>
                <h2>北京欢乐谷</h2>
                <p class="pp">七大主题园区带你畅享北京欢乐谷</p>
                <p class="ppp">
                    <i>￥</i>
                    <span>58</span>
                    起
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <a href=""><img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" alt=""></a>
            </dt>
            <dd>
                <h2>慕田峪长城</h2>
                <p class="pp">秀美长城，关键是人少</p>
                <p class="ppp">
                    <i>￥</i>
                    <span>19.1</span>
                    起
                </p>
            </dd>
        </dl>
        <div class="checkselling">
            <a href="">
                查看所有产品
            </a>
        </div>
    </div>
</template>

<script>
export default {
	name:'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
    .selling{
        background: #fff;
    }
    dl{
        height: 1.4rem;
        padding: .24rem;
        border-bottom: 1px solid #eee;
    }
    dl dt{
        float: left;
    }
    dl dt img{
        width: 1.4rem;
        height: 1.4rem;
    }
    dd{
        margin-left: 1.6rem;
    }
    h2{
        overflow: hidden;
        margin-top: .04rem;
        margin-bottom: .1rem;
        color: #212121;
        font-size: .3rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .pp{
        overflow: hidden;
        margin-bottom: .1rem;
        height: .4rem;
        line-height: .4rem;
        color: #9e9e9e;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .ppp{
        color: #9e9e9e;
        font-size: .28rem;
        padding-top: .1rem;

    }
    i{
        font-size: .24rem;
        color: #ff8300;
        display: block;
        float: left;
    }
    span{
        font-size: .36rem;
        padding: 0 .04rem;
        color: #ff8300;
        display: block;
        float: left;
        margin-top: -.09rem;
    }
    .checkselling{
        height: .88rem;
        background: #fff;
        line-height: .88rem;
        text-align: center;
    }
</style>
