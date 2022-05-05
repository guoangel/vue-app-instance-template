const app = Vue.createApp({
  data() {
    return {}
  },
  methods: {},
  computed: {}
});
app.component('hello-world-item', {
  props:['task'],
  template: `<div class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">{{task}}</div>`,
});
app.mount('#app');