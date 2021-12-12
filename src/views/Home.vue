<template>
  <center class="home">
    <AddTodo @add-todo="Add" />
    <ShowTodo :todos="todos" @remove-todo="Remove" />
  </center>
</template>

<script>
// @ is an alias to /src
import AddTodo from "@/components/AddTodo";
import ShowTodo from "../components/ShowTodo.vue";

export default {
  name: "Home",
  components: {
    AddTodo,
    ShowTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    Add(todo) {
      this.todos = [...this.todos, todo];
    },
    Remove(todo) {
      this.todos = this.todos.filter((tod) => todo !== tod);
    },
  },
};
</script>

<style></style>
