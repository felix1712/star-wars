<template src="./index.html"></template>

<script>
	import BaseCard from '@/components/BaseCard/BaseCard.vue';

	export default {
		name: 'DetailFilm',
		data() {
			return {
				planets: [],
				species: [],
				starships: [],
				vehicles:[],
			}
		},
		props: ['filmData'],
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
			this.filmData.species.forEach((value) => {
				let speciesUrl = value.split('api/').pop();
				this.callService(speciesUrl, (data) => {this.species = this.species.concat(data)})
			})

			this.filmData.starships.forEach((value) => {
				let starShipsUrl = value.split('api/').pop();
				this.callService(starShipsUrl, (data) => {this.starships = this.starships.concat(data)})
			})

			this.filmData.vehicles.forEach((value) => {
				let vehiclesUrl = value.split('api/').pop();
				this.callService(vehiclesUrl, (data) => {this.vehicles = this.vehicles.concat(data)})
			})

			this.filmData.planets.forEach((value) => {
				let planetsUrl = value.split('api/').pop();
				this.callService(planetsUrl, (data) => {this.planets = this.planets.concat(data)})
			})
		},
		components: {
			BaseCard,
		}
	}
</script>

<style lang="scss">
	.title-content{
		h5{
			white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
		}
	}
</style>