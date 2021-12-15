<template>
  <div v-if="allTodos.length == 0">
    <h3>Add New Todo</h3>
  </div>
  <ul v-for="todo in allTodos" :key="todo.title">
    <div class="list">
      <li>
        {{ todo.title }}
      </li>
      <span @click="removeTod(todo.id)">X</span>
    </div>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ShowTodo',
  props: {
    todos: Array,
  },
  methods: {
    ...mapActions(['removeTodo']),
    removeTod(id) {
      this.removeTodo(id);
    },
  },
  computed: mapGetters(['allTodos']),
  created() {
    // console.log(this.allTodos);
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
