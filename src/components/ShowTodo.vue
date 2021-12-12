<template>
  <div v-if="todos.length == 0">
    <h3>Add New Todo</h3>
  </div>
  <ul v-for="todo in todos" :key="todo">
    <div class="list">
      <li>
        {{ todo }}
      </li>
      <span @click="removeTodo(todo)">X</span>
    </div>
  </ul>
</template>

<script>
export default {
  name: "ShowTodo",
  props: {
    todos: Array,
  },
  methods: {
    removeTodo(todo) {
      this.$emit("remove-todo", todo);
    },
  },
};
</script>

<style scoped>
.list {
  background: #ccc;
  width: 40%;
  margin-left: -110px;
  padding: 20px;
  border-radius: 1px;
  display: flex;
  justify-content: space-between;
}
li {
  list-style: none;
}
span {
  cursor: pointer;
  color: red;
}
</style>
