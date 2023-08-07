import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import storeConfig from './store';
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import router from './router';

const store = createStore({
    ...storeConfig,
})

const app = createApp(App)
app.use(router);
app.use(store)
app.mount('#app')
