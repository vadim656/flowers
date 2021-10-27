import { createApp } from 'vue'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';

import './index.css'
import './style-app.css'



const app = createApp( App );
app.use( VueSplide );
app.mount( '#app' );