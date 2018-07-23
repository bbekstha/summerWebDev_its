
<template>
	<div id='contentItems'>
		<button id='homeBtn' class='button' @click='goHome'> Go Home </button>
	</div>
</template>

<script>
	import { protectedContent } from '../routesFunctionalities/protected.js'
	export default {
		methods: {
			goHome: function() {
				console.log("Going home")
				this.$router.push('/')
			}
		},
		mounted: protectedContent
	}
</script>
