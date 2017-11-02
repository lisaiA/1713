<template>
  <div class="hello">
    <indexheader/>
    <headercarousel/>
    <headerspot/>
    <headerlocation/>
    <headerselling/>
    <headerweek/>
  </div>
</template>

<script>
import header from "./header.vue";
import carousel from "./carousel.vue";
import spot from "./spot.vue";
import location from "./location.vue";
import selling from "./selling.vue";
import week from "./week.vue";
export default {
	name:'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  	indexheader : header,
    headercarousel: carousel,
    headerspot: spot,
    headerlocation:location,
    headerselling:selling,
    headerweek:week
  }
}
</script>

<style scoped>

</style>
