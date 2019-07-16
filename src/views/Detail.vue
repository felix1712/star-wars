<template>
	<div class="page-detail">
		<div class="row s-container">
			<div class="col-6 image-section">
				<img :src="imageUrl(detailData.name)" @error="$root.imageError">
			</div>
			<div class="col-6 info-section">
				<div class="col-12">
					<h3 v-if="detailData.name">{{detailData.name}}</h3>
					<h3 v-if="detailData.title">{{detailData.title}}</h3>
				</div>
				<DetailPeople 
					:peopleData="detailData"
					v-if="detailData"
				/>
				<!-- <DetailPeople />
				<DetailFilm />
				<DetailStarShips />
				<DetailVehicles /> -->
			</div>
		</div>
	</div>
</template>

<script>
	import DetailPeople from '@/components/DetailPeople/DetailPeople.vue';

	export default{
		name: 'Details',
		data() {
			return {
				detailData: '',
			}
		},
		mounted() {
			this.detailData = this.$route.params.detailData || '';
		},
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
		components: {
			DetailPeople,
		},
	}
</script>

<style lang="scss">
	@import "@/assets/styles/main.scss";

	.page-detail{
		.image-section{
			img{
				width: 100%;
		    height: 50vh;
		    object-fit: contain;
		  }
		}
		.info-section{
			color: $v-white;

			p{
				color: $v-white;
				font-size: 1.3rem;
				margin: 0;
			}
			h3{
				margin: 3rem 0;
				font-size: 4rem;
			}
			h5{
				text-transform: capitalize;
				margin: 1rem 0;
				font-size: 2rem;
				color: $v-second-line;
			}
		}
	}
</style>