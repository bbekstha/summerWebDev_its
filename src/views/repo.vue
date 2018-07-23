<template>
	<div id='contentItems'>
		<input type='text' id="Input" @keyup.enter='displayRepos' v-model='accessToken'>
		<button class='button' @click='displayRepos'> Display repos </button>
		<button id='homeBtn' class='button' @click='goHome'> Go Home </button>
	</div>
</template>

<script>
	import accessFunction from '../routesFunctionalities/repo.js'
   export default {
      name: 'repo',
      data: function() {
   		return {
   			accessToken: ''
   		}
   	},
      methods: {
   		displayRepos: function(){
   			accessFunction(this.accessToken)
   		},
   		goHome: function() {
   			console.log("Going home")
   			this.$router.push('/')
   		}
   	}
   }
</script>
