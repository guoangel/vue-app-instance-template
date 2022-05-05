let nextTaskId = 100;

const app = Vue.createApp({
  data() {
    return {
      onlyPending: false,
      tasks: []
    }
  },
  methods: {
    taskAdded(task) {
      this.tasks.push({
        id: nextTaskId++,
        description: task,
        done: false,
        priority: false
      });
    }
  },
  computed: {
    displayedTasks() {
      return this.tasks.filter(
        task => !this.onlyPending || !task.done
      );
    }
  }
});
app.component('todo-list-item', {
  props:{
    task: {
      type: Object
    }
  },
  template: `<div class="bg-white shadow-sm rounded-md text-gray-700 text-xs md:text-sm p-4">{{task.description}}</div>`,
});

app.component('add-task-input', {
  emits: ['added'],
  data() {
    return {
      task: ''
    }
  },
  methods: {
    add() {
      this.$emit('added', this.task);
      this.task='';
    }
  },
  template: `<input type="text" placeholder="Enter task and hit enter" @keyup.enter="add" v-model="task" class="block w-full rounded-md shadow-sm text-lg p-4" />`,
});

app.component('base-checkbox', {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    }
  },
  emits: ['update:modelValue'],
  methods: {
    onChange() {
      this.$emit(
        'update:modelValue', !this.modelValue
      );
    }
  },
  template: `<div class="flex items-center">
    <input type="checkbox" 
      class="h-4 w-4 text-indigo-600 border-gray-300 rounded mr-2"
      :checked="modelValue"
      @change="onChange"/>
    <label>{{label}}</label>
  </div>`
});
app.mount('#app');