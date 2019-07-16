<template>
  <div id="app">
  	<div id="loader" v-if="isLoading">
			<img src="@/assets/images/load.gif">
		</div>
    <router-view/>
  </div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		computed: {
	    ...mapState({
	      isLoading: state => state.isLoading,
	    }),
	  },
	}
</script>
<style lang="scss">
	@import "@/assets/styles/main.scss";
	#app{
		height: 100%;
		background: #010314;

		#loader{
			background: rgba($v-background, 0.3);
			width: 100%;
			height: auto;
			bottom: 0;
			top: 0;
			left: 0;
			position: absolute;
			z-index: 9;

			img{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				-webkit-transform: translate(-50%, -50%);
			}
		}
	}
</style>
