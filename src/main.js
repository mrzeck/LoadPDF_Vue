import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import storeConfig from './store';
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

const store = createStore({
    ...storeConfig,
    // plugins: [createPersistedState()] 
})

const app = createApp(App)
app.use(store)
app.mount('#app')
