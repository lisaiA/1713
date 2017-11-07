<template>
    <header class="header">
	  	<a href="" class="headerLeft iconfont icon-back"></a>
	  	<div class="headerTitle">
	  		<router-link to="search" class="iconfont icon-sousuo">
	  			输入城市/景点/游玩主题
	  		</router-link>
	  	</div>
	  	<div class="headerRight">
	  		<a href=""><span class="city">北京</span></a>
	  	</div>
	</header>
</template>

<script>

export default {
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>

<style scoped>
	.header{
		display: box;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
		display: flex;
	}
	.headerLeft{
		display: inline-block;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .4rem 0 0;
		color: #fff;
		font-size: .5rem;
	}
	.headerTitle{
		display: inline-block;
	    box-sizing: border-box;
	    flex: 1;
	    position: relative;
	    height: .6rem;
	    margin: .14rem 0;
	    background: #fff;
	    line-height: .6rem;
	    border-radius: .06rem;
	    padding-left: .2rem;
	}
	.headerTitle a{
    	color: #e4e7ea;
    	font-size: .28rem;
	}
	.headerRight{
		display: inline-block;
		height: 100%;
		margin-right: .3rem;	
	}
	.headerRight a{
		display: inline-block;
	    line-height: .88rem;
	    color: #fff
	}
	.city{
		padding: 0 .22rem;
		position: relative;
	}
	.city:after{
		content: "";
		width: 0;
		height: 0;
		border-left: .12rem solid transparent;
		border-right: .12rem solid transparent;
		border-top:.12rem solid #fff;
		position: absolute;
		top: .1rem;
	}
</style>
