let taxRate = 1.23;
const vm = Vue.createApp({
  data() {
    return {
      price: 4,
      items: 0
    }
  },
  computed: {
    taxRate() {
      return (taxRate*100)-100;
    },
    includingVat() {
      return (this.price*taxRate).toFixed(2);
    },
    total() {
      return (this.includingVat*this.items).toFixed(2);
    }
  }
}).mount('#app');