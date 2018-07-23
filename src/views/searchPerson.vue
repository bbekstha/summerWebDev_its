
<template>
	<div id='contentItems'>
		<input type='text' id="Input" @keyup.enter='findPerson' v-model='searchParam'>
		<button class='button' @click='findPerson'> Search </button>
		<button id='homeBtn' class='button' @click='goHome'> Go Home </button>
	</div>
</template>

<script>
	import personSearch from '../routesFunctionalities/personSearch.js'
   export default {
      name: 'searchPerson',
      data: function() {
   		return {
   			searchParam: ''
   		}
      },
   	methods: {
   		findPerson: function(){
   			personSearch(this.searchParam)
   		},
   		goHome: function() {
   			console.log("Going home")
   			this.$router.push('/')
   		}
   	}
   }
</script>
