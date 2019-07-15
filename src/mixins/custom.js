const customJs = {
	methods: {
		imageError(selector){
			var imageStatic = require(`@/assets/images/star-wars.png`);
			selector.target.src = imageStatic;
		},
	},
};

export default customJs;
