import Vue from 'vue';
import firebase from 'firebase';
//import vuetify from './plugins/vuetify' // path to vuetify export
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCrFvxyBZF8Q-IFaAWB63rHABpCjn5PxiQ',
  authDomain: 'crud-5b23f.firebaseapp.com',
  databaseURL: 'https://crud-5b23f.firebaseio.com',
  projectId: 'crud-5b23f',
  storageBucket: 'crud-5b23f.appspot.com',
  messagingSenderId: '422158947751',
  appId: '1:422158947751:web:4467259022c9227c265282',
  measurementId: 'G-GGRQPLKX80',
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');

