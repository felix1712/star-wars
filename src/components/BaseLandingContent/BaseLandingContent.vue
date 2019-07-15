<template src="./index.html"></template>

<script>
	export default {
		name: 'BaseLandingContent',
		props: {
			headerTitle: {
				required: true,
				default: '',
			},
			contentData: {
				// default: []
			}
		},
		methods: {
			slideClick(data) {
				let content = document.querySelector(".slider-landing");
				if(data === 'left'){
      		content.scrollLeft -= 150;
      	} else if(data === 'right'){
      		content.scrollLeft += 150;
      	}
			},
			imageUrl(data){
				let name = data.toLowerCase();
				if(name.indexOf(' ') != -1){
					name = name.substr(0,name.indexOf(' '));
				}
				try {
				   const url = require(`@/assets/images/people/${name}.png`);
				   return url
				} catch (ex) {
				    return this.$root.imageError;
				}
				return this.$root.imageError;
			}
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

  		.card-frame{
  			flex: 0 0 auto;
  			margin: 0 10px;
  			cursor: pointer;

  			.image-content{
  				img{
  					width: 100%;
				    height: 20vh;
				    object-fit: contain;
  				}
  			}

  			.title-content{
  				color: #fff;
  				text-align: center;
  				font-size: 2rem;
  			}
  		}
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
	}
</style>