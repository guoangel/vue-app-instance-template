const app = Vue.createApp({
  data() {
    return {}
  },
  methods: {},
  computed: {}
});
app.component('hello-world-item', {
  props:{
    task: {
      type: String,
      required: true,
      validator(value) {
        return "Okay" === value;
      }
    },
    id: {
      required: true,
      type: Number,
      validator(value) {
        return value >=1 && value <=100;
      },
      default() {
        return 50;
      }
    }
  },
  template: `<div class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">{{task}}</div>`,
});
app.mount('#app');