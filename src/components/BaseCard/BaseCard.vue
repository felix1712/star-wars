<template src="./index.html"></template>

<script>
	export default{
		name: 'BaseCard',
		props: ['cardData'],
		methods: {
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
		},
	}
</script>

<style lang="scss">
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
</style>