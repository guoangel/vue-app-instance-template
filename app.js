let taxRate = 1.23;
const vm = Vue.createApp({
  data() {
    return {
      price: 4,
      items: 0
    }
  },
  methods: {
    includingVatM() {
      console.log('method - includingVat');
      return (this.price
        * taxRate).toFixed(2);
    }
  },
  computed: {
    taxRate() {
      console.log('taxRate');
      return (taxRate * 100) - 100;
    },
    includingVat() {
      console.log('computed - includingVat');
      return (this.price
        * taxRate).toFixed(2);
    },
    total() {
      return (this.includingVat
        * this.items).toFixed(2);
    }
  }
}).mount('#app');