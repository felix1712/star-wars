<template src="./index.html"></template>

<script>
	import BaseCard from '@/components/BaseCard/BaseCard.vue';

	export default {
		name: 'DetailPeople',
		data() {
			return {
				homeWorld: '',
				species: [],
				films: [],
				starships: [],
				vehicles:[],
			}
		},
		props: ['peopleData'],
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
			let homeWorldUrl = this.peopleData.homeworld.split('api/').pop();
			this.callService(homeWorldUrl, (data) => {this.homeWorld = data})
			this.peopleData.species.forEach((value) => {
				let speciesUrl = value.split('api/').pop();
				this.callService(speciesUrl, (data) => {this.species = this.species.concat(data)})
			})

			this.peopleData.starships.forEach((value) => {
				let starShipsUrl = value.split('api/').pop();
				this.callService(starShipsUrl, (data) => {this.starships = this.starships.concat(data)})
			})

			this.peopleData.vehicles.forEach((value) => {
				let vehiclesUrl = value.split('api/').pop();
				this.callService(vehiclesUrl, (data) => {this.vehicles = this.vehicles.concat(data)})
			})

			this.peopleData.films.forEach((value) => {
				let filmsUrl = value.split('api/').pop();
				this.callService(filmsUrl, (data) => {this.films = this.films.concat(data)})
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