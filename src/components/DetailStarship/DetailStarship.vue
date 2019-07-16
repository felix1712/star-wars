<template src="./index.html"></template>

<script>
	import BaseCard from '@/components/BaseCard/BaseCard.vue';

	export default{
		name: 'DetailStarship',
		data(){
			return {
				films: [],
				pilots: [],
			}
		},
		props: ['starshipData'],
		methods: {
			async callService(data, cb){
				let storeData = '';
				await this.$root.baseService(data, 'get')
		    .then((res) => {
		    	storeData = res;
		    })
		    cb(storeData);
			},
		},
		async mounted() {
			this.starshipData.films.forEach((value) => {
				let filmsUrl = value.split('api/').pop();
				this.callService(filmsUrl, (data) => {this.films = this.films.concat(data)})
			})

			this.starshipData.pilots.forEach((value) => {
				let starshipUrl = value.split('api/').pop();
				this.callService(starshipUrl, (data) => {this.pilots = this.pilots.concat(data)})
			})
		},
		components: {
			BaseCard,
		},
	}
</script>