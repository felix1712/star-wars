<template src="./index.html"></template>

<script>
	import BaseCard from '@/components/BaseCard/BaseCard.vue';

	export default {
		name: 'BaseLandingContent',
		props: ['headerTitle', 'contentData'],
		methods: {
			slideClick(data) {
				let content = document.querySelector(".slider-landing");
				if(data === 'left'){
      		content.scrollLeft -= 150;
      	} else if(data === 'right'){
      		content.scrollLeft += 150;
      	}
			},
		},
		components: {
			BaseCard,
		}
	}
</script>

<style lang="scss">
	@import "@/assets/styles/main.scss";

	.base-landing-content{
		margin: 7rem 0;

		.header-section{
			margin-bottom: 20px;

			.header-content{
				color: $v-white;
				font-size: 3rem;
				margin: 0;
				margin-bottom: 15px;
				text-transform: uppercase;
			}
			.line-header{
				border-top: 3px solid $v-white;
				width: 10rem;
			}
		}

		.slider-landing{
			display: flex;
		  flex-wrap: nowrap;
		  overflow-x: auto;
		  max-width: 35vw;
		  margin: 0 auto;
		}

		.arrow{
			position: relative;
			top: 17vh;

			&.left{
				// margin-left: 2vw;
			}

			&.right{
				// margin-right: 2vw;
				float: right;
			}
		}

		.load-more-content{
			a{
				font-size: 1.5rem;
				color: $v-white;
				margin-right: 2.5rem;
			}
		}
	}
</style>