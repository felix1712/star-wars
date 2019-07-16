<template src="./index.html"></template>

<script>
	import BaseCard from '@/components/BaseCard/BaseCard.vue';

	export default {
		name: 'DetailPeople',
		data() {
			return {
				films: [],
				people: [],
			}
		},
		props: ['speciesData'],
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
			this.speciesData.films.forEach((value) => {
				let filmsUrl = value.split('api/').pop();
				this.callService(filmsUrl, (data) => {this.films = this.films.concat(data)})
			})

			this.speciesData.people.forEach((value) => {
				let peopleUrl = value.split('api/').pop();
				this.callService(peopleUrl, (data) => {this.people = this.people.concat(data)})
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