<template>
    <div>
        <div class="location">
            <a href="" class="dingwei">
                <span class="iconfont icon-dingwei">定位失败</span>
            </a>
            <a href="">
                <span class="iconfont icon-shuikeyikanxiaodiqiu">5折泡温泉</span>
            </a>
        </div>
        <ul>
            <li></li>
            <li class="right"></li>
        </ul>
        <h2>热销推荐</h2>
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
    .location{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .28rem;
        background: #fff;
    }
    .location a{
        width: 50%;
        text-align: center;
        color: #212121;
        line-height: 1rem;
    }
    .dingwei{
        border-right: 1px solid #eee;
    }
    ul{
        width: 100%;
        margin-top: .2rem;
        height: 1.4rem;
        background: #fff;
    }
    li{
        height: 100%;
        width: 50%;
        box-sizing:border-box;
        float: left;
        background:url(http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png) center center no-repeat;
        background-size:auto 100%;
    }
    .right{
        background:url(http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png) center center no-repeat;
        background-size:auto 100%;
        border-left: 1px solid #eee;
    }
    h2{
        height: .8rem;
        padding-left: .26rem;
        line-height: .8rem;
        color: #212121;
    }
</style>
