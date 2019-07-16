<template src="./index.html"></template>

<script>
	import BaseCard from '@/components/BaseCard/BaseCard.vue';

	export default{
		name: 'DetailPlanet',
		data(){
			return {
				films: [],
				people: [],
			}
		},
		props: ['planetData'],
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
			this.planetData.films.forEach((value) => {
				let filmsUrl = value.split('api/').pop();
				this.callService(filmsUrl, (data) => {this.films = this.films.concat(data)})
			})

			this.planetData.residents.forEach((value) => {
				let peopleUrl = value.split('api/').pop();
				this.callService(peopleUrl, (data) => {this.people = this.people.concat(data)})
			})
		},
		components: {
			BaseCard,
		},
	}
</script>