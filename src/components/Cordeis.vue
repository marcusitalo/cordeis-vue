<template>
  <div class="cordeisView">
    <div v-for="(cordel, index) in cordeis" :key="index" class="cordel">
      <router-link :to="'/cordel/' + index">
        <p class="title">{{ cordel.title }}</p>
        <img v-if="cordel.image" class="image" :src="cordel.image" />
        <img v-else src="../assets/images/not-found.png" />
        <p class="author">{{ cordel.author }}</p>
        <p class="description">{{ cordel.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cordeis",
  props: {
    cordeis: Array,
  },
};
</script>

<style scoped>
.cordeisView {
  display: flex;
  width: 80vw;
  overflow: auto;
  margin-top: 50px;
}
.cordel {
  flex: none;
  width: 180px;
  padding: 5px;
  margin: 5px;
  box-shadow: 1px 1px 5px -2px #b7a074;
  height: 380px;
  background-color: #fffffb;
}
a {
  text-decoration: none;
  color: #333333;
  font-size: 10px;
  text-align: justify;
}
.cordel img {
  width: 180px;
  height: 230px;
}
p.title {
  font-size: 9px;
  font-weight: bolder;
  text-align: center;
  vertical-align: top;
  height: 35px;
  font-family: "Cordelina";
}
p.author {
  font-size: 10px;
  text-align: center;
  margin-bottom: 5px;
  font-weight: bolder;
  font-family: "Cordelina";
}
p.description {
  font-size: 9px;
  padding: 0px 5px;
  text-indent: 15px;
}
</style>
