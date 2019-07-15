<template>
  <div id="home">
  	<div class="banner-full">
	  	<div class="main-title">
	  		<div class="banner-logo"></div>
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
  		<div class="scroll-down">
  			<div class="arrow">
  				<div class="line"></div>
				  <div class="point"></div>
  			</div>
  		</div>
  	</div>
  	<div class="s-container">
	  	<div class="content">
	  		<BaseLandingContent 
	  			:headerTitle="'Character'"
	  			:contentData="peoples"
	  		/>
	  		<BaseLandingContent 
	  			:headerTitle="'Planets'"
	  			:contentData="planets"
	  		/>
	  		<BaseLandingContent 
	  			:headerTitle="'Starships'"
	  			:contentData="starships"
	  		/>
	  	</div>
	  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import BaseLandingContent from '@/components/BaseLandingContent/BaseLandingContent.vue';

export default {
  name: 'home',
  data(){
  	return {
  		peoples: [],
  		planets: [],
  		starships: [],
  	}
  },
  components: {
    HelloWorld,
    BaseLandingContent,
  },
  async mounted() {
  	this.$root.baseService('people', 'get')
    .then((res) => {
    	this.peoples = res.results;
    })

    this.$root.baseService('planets', 'get')
    .then((res) => {
    	this.planets = res.results;
    })

    this.$root.baseService('starships', 'get')
    .then((res) => {
    	this.starships = res.results;
    })
  }
};
</script>

<style lang="scss">
	@import "@/assets/styles/main.scss";
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

				.banner-logo{
					opacity: 0;
					position: absolute;
					width: 50%;
					left: 50%;
					height: 50%;
					top: 50%;
				  transform: translateX(-50%) translateY(-50%);	
				  animation: logo 10s ease-out infinite; 
				}
			}

			.particle-js{
				position: absolute;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100%;
			}

			.scroll-down{
				position: absolute;
				bottom: 5vh;
				transform: rotate(90deg);
				.arrow {
					width:120px;
				}

				.line {
					margin-top: 4px;
			    width: 105px;
			    background: rgba($v-white, 0.6);
			    height: 2px;
			    float: left;
				}
				.point {    
					width: 0;
			    height: 0;
			    border-top: 5px solid transparent;
			    border-bottom: 5px solid transparent;
			    border-left: 15px solid rgba(#fff, 0.7);
			    float: right;
				}
			}
		}
	}
</style>