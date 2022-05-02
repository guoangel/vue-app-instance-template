const vm = Vue.createApp({
  data() {
    return {
      name: '',
      gender: 'unknown'
    }
  },
  computed: {
    message() {
      return `Hello ${this.prefix} ${this.name}`;
    },
    prefix() {
      switch (this.gender) {
        case 'male': return 'Mr ';
        case 'female':  return 'Ms ';
        default: return '';
      }
    }
  },
  watch: {
    name(newName, oldName) {
      console.log(newName);
      console.log(oldName);

      fetch(`https://api.genderize.io?name=${newName}`).then(response => response.json()).then(json => this.gender = json.gender);
    },
    message() {
      console.log('The watcher was called');
    }
  }
}).mount('#app');