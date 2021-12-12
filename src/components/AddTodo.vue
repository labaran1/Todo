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
export default {
  name: "AddTodo",
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addtodo() {
      if (this.todo === "" || this.todo === null || this.todo === undefined) {
        confirm("Please Enter a Todo");
      } else {
        this.$emit("add-todo", this.todo);
        this.todo = "";
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
