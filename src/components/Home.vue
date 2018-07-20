<template>
	<div id='ogB'>
   	<button class='button' @click='stockClick'> Stock </button>
   	<button class='button' @click='repoClick'> Repo </button>
   	<button class='button' @click='protectedClick'> Protected </button>
   	<button class='button' @click='prsnSearchClick'> Person </button>
	</div>
</template>


	methods: {
		stockClick: function() {
			console.log("Stock clicked")
			this.$router.push('/stock')
			// this.$emit('stock-click', 'stock')
		},
		repoClick: function() {
			console.log("Repo Clicked")
			this.$router.push('/repo')
			// this.$emit('repo-click', 'repo')
		},
		protectedClick: function() {
			console.log("Protected clicked")

			if(getCookie('id_token')){
				this.$router.push('/protected')
				// this.$emit('protected-click', 'protectedCont')
			} else {
				authenticate()
			}

		},
		prsnSearchClick: function() {
			console.log("Person clicked")
			this.$router.push('/personSearch')
			// this.$emit('prsn-search-click', 'searchPerson')
		}
	}
}
