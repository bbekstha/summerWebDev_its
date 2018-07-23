import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { getCookie, setCookie } from './routesFunctionalities/cookieFunction.js'
import { authenticate } from './routesFunctionalities/protected.js'
import './format.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted: function(){
     let keyUrl = location.hash.substring(1);
     if (keyUrl.includes("id_token")){
        var id_tokenVal = keyUrl.substring("id_token=".length, keyUrl.indexOf("&"))
        var exprIndex = keyUrl.indexOf("expires_in") + "expires_in=".length
        var exprVal = keyUrl.substring(exprIndex, keyUrl.indexOf("&", exprIndex))

        setCookie("id_token", id_tokenVal, exprVal);
        window.location = window.location.origin
     }
  }
}).$mount('#app')

// For each route check if authentication is required
// If route requires authentication and is not authenticated
// direct to aws cognito for authentication
// If authenticated, proceed with the routing
router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth) {
		let auth = getCookie('id_token')
		if(auth) {
			next()
		} else {
			authenticate()
		}
	} else {
		next()
	}
})
