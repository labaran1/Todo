<template>
  <center class="home">
    <AddTodo />
    <ShowTodo />
  </center>
</template>

<script>
// @ is an alias to /src
import AddTodo from '@/components/AddTodo';
import ShowTodo from '../components/ShowTodo.vue';

export default {
  name: 'Home',
  components: {
    AddTodo,
    ShowTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {},
};
</script>

<style></style>
