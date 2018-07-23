<template>
	<div id='ogB'>
		<button class='button' @click='stockClick'> Stock </button>
		<button class='button' @click='repoClick'> Repo </button>
		<button class='button' @click='protectedClick'> Protected </button>
		<button class='button' @click='prsnSearchClick'> Person </button>
		</div>
</template>

<script>
	export default {
		name: 'home',
		methods: {
			stockClick: function() {
				this.$router.push('/stock')
			},
			repoClick: function() {
				this.$router.push('/repo')
			},
			protectedClick: function() {
				this.$router.push('/protected')
			},
			prsnSearchClick: function() {
				this.$router.push('/personSearch')
			}
		}
	}
</script>
