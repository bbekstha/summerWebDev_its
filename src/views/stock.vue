<template>
	<div id='contentItems'>
	<input type='text' id="Input" @keyup.enter='searchStock' v-model='stockSymbol'>
	<button class='button' @click='searchStock'> Search stock </button>
	<button id='homeBtn' class='button' @click='goHome'> Go Home </button>
	</div>
</template>

<script>
   import searchFunction from '../routesFunctionalities/stock.js'
   export default {
      name: 'home',
      data: function() {
   		return {
   			stockSymbol: ''
   		}
   	},
   	methods: {
   		searchStock: function() {
   			searchFunction(this.stockSymbol)
   		},
   		goHome: function() {
   			console.log("Going home")
   			this.$router.push('/')
   		}
   	}
   }
</script>
