<template>
	<div class="list-content">
		<div class="s-container">
			<div class="row">
				<div class="col-3">
					<div class="panel-filter-head clearfix">
            <h4 class="s-float-l">FILTER BY</h4>
          </div>

          <div class="panel-filter-group">
            <input type="text" v-model="searchModel" class="panel-search-input" placeholder="Search by name" @keyup.enter="search">
            <template v-for="filter in filterTitle">
	            <div class="list-group stand-list-group">
	              <a class="list-group-item" :class="[filter === paramsList ? 'active' : '']" @click="filterApply(filter)">{{filter}}</a>
	            </div>
	          </template>
          </div>
				</div>
				<div class="col-9 s-px-5">
					<template v-for="item in listData">
						<router-link :to="{name: 'Detail', params: {detailData: item, type: paramsList}}">
							<BaseCard
								:cardData="item"
							/>
						</router-link>
					</template>
					<div class="col-12 load-more-frame" v-if="nextUrl">
						<a class="load-more-list" @click="loadMore">Load More</a>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import BaseCard from '@/components/BaseCard/BaseCard.vue';

	export default {
		name: 'List',
		data() {
			return {
				paramsList: null,
				nextUrl: null,
				listData: [],
				filterTitle: ['people', 'planets', 'starships', 'vehicles', 'films', 'species'],
				searchModel: null,
			}
		},
		mounted() {
			this.paramsList = this.$route.params.listType ? this.$route.params.listType.toLowerCase() : 'people';
			if(this.paramsList === 'character'){
				this.paramsList = 'people'
			};
			this.callService(this.paramsList);
		},

		methods: {
			callService(data){
				this.$root.baseService(data, 'get')
		    .then((res) => {
		    	this.listData = res.results;
		    	this.nextUrl = res.next;
		    })
			},
			search(){
				let url;
				if(this.searchModel){
				 url = this.paramsList + '/?search=' + this.searchModel
				} else {
					url = this.paramsList;
				}
				this.callService(url)
			},
			loadMore(){
				if(this.nextUrl){
					let url = this.nextUrl.split('api/').pop();
					this.$root.baseService(url, 'get')
					.then((res) => {
						this.listData = this.listData.concat(res.results);
						this.nextUrl = res.next;
					})
				}
			},
			filterApply(data){
				this.paramsList = data;
				this.callService(data);
			}
		},
		components: {
			BaseCard
		},
	}
</script>

<style lang="scss">
	@import "@/assets/styles/main.scss";

	.list-content{
		.load-more-frame{
			margin-top: 30px;
			text-align: center;
			.load-more-list{
				color: $v-white;
				border: 2px solid $v-white;
				padding: 10px 20px;
				font-size: 1.4rem;

				&:hover{
					border: 2px solid $v-second-line;
					color: $v-second-line;
				}
			}
		}
	}
</style>