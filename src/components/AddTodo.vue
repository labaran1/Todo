<template>
  <div>
    <input
      v-model="todo"
      type="text"
      name="add"
      id="add"
      placeholder="enter todo"
    />
    <button @click="addtodo">Add Todo</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddTodo',
  data() {
    return {
      todo: '',
    };
  },

  methods: {
    ...mapActions(['addTodo']),
    addtodo() {
      if (this.todo === '' || this.todo === null || this.todo === undefined) {
        confirm('Please Enter a Todo');
      } else {
        this.addTodo(this.todo);
        this.todo = '';
      }
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px;
  width: 40%;
  border-radius: 5px;
  margin: 5px;
  border: 0.5px solid #ccc;
  outline: none;
}
button {
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
