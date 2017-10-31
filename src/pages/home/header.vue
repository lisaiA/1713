<template>
  <header class="header">
  	<a href="" class="headerLeft"><</a>
  	<div class="headerTitle">
  		<a href="">
  			输入城市/景点/游玩主题
  		</a>
  	</div>
  	<div class="headerRight">
  		<span class="city">北京</span>
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
	}
	.headerLeft{
		display: inline-block;
		width: .4rem;
		line-height: .88rem;
		padding: 0 .2rem;
		color: #fff;
		font-size: .4rem;
		float: left;
	}
	.headerTitle{
		height: .6rem;
		width: 4.08rem;
		padding-left: 0.2rem;
		background: #fff;
		line-height: .6rem;
		border-radius: .06rem;
		margin: .14rem 0;
		float: left;
	}
	.headerTitle a{
		white-space: nowrap;
    	text-overflow: ellipsis;
    	color: #e4e7ea;
	}
	.headerRight{
		height: .88rem;
		line-height: .88rem;
		margin-right: .04rem;
		float: right;	
	}
	.city{
		color: #fff;
		font-size: 14px;
		padding: 0 .22rem;
		position: relative;
		margin-right: .24rem;
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
