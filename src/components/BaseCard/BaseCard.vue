<template src="./index.html"></template>

<script>
	export default{
		name: 'BaseCard',
		props: ['cardData'],
		methods: {
			imageUrl(data){
				if(data){
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
				}
				return this.$root.imageError;
			}
		},
	}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.card-frame{
	flex: 0 0 auto;
	cursor: pointer;
	background: transparent !important;
	border: none !important;
	box-shadow: none !important;

	.card-border{
		border: 3px solid $v-second-line;
		padding: 15px;

		.image-content{
			img{
				width: 100%;
		    height: 20vh;
		    object-fit: contain;
			}
		}

		.title-content{
			text-align: center;
			font-size: 2rem;
			min-height: 75px;
			h5{
				margin-bottom: 1.5rem !important;
				color: #fff !important;
			}
		}
	}
}
</style>