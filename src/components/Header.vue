<template>
  <div>
    <h1>Todo App</h1>
    <span>
      <router-link to="/" class="link">Home</router-link> |
      <router-link to="/about" class="link">About</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;

  margin: auto;
  text-align: center;
}
.link {
  text-decoration: none;
  cursor: pointer;
  color: #000;
  font-size: 18px;
  margin: 1px;
}
</style>
