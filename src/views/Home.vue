<template>
  <div id="home">
  	<div class="banner-full">
	  	<div class="main-title">
	  		<h3>Star Wars</h3>
	  	</div>
  		<vue-particles 
  			color="#ffffff"
  			shapeType="star"
  			:particleSize="2"
  			:lineLinked="false"
  			:particleOpacity="0.7"
  			hoverMode="repulse"
  			class="particle-js"
  		>
  		</vue-particles>
  	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
	#home{
		.banner-full{
			background: #010314;
			height: 100vh;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;

			.main-title{
				color: #fff;
				z-index: 999;
			}

			.particle-js{
				position: absolute;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100%;
			}
		}
	}
</style>