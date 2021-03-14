<template>
  <div>
    <h1>Cordeis</h1>
    <p>Cultura nordestina em versos</p>
  </div>
</template>

<script>
export default {
  name: "Title",
};
</script>

<style scoped>
div {
  font-family: "Cordelina";
  padding-top: 20px;
}

@media screen and (max-width: 576px) {
  div {
    padding: 30px 0px 0px 40px;
    text-align: left;
  }
  div p {
    font-size: 13px;
  }
}
</style>
