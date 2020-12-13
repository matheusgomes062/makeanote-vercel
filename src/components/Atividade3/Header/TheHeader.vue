<template>
  <header>
    <div class="logo" @click="$router.replace('/Atividade3/home')">
      <img src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" />
    </div>
    <nav>
      <div class="navBarOptions">
        <router-link :to="{ path: 'ofertas' }">OFERTAS</router-link>
        <router-link :to="{ path: 'lancamentos' }" replace>LANÇAMENTOS</router-link>
        <router-link :to="{ path: 'masculino' }" replace>MASCULINO</router-link>
        <router-link :to="{ path: 'feminino' }" replace>FEMININO</router-link>
        <router-link :to="{ path: 'snkrs' }" replace>SNKRS</router-link>
        <!-- <a href="Atividade3/ofertas">OFERTAS</a>
        <a href="Atividade3/Lançamentos">LANÇAMENTOS</a>
        <a href="Atividade3/Masculino">MASCULINO</a>
        <a href="Atividade3/Feminino">FEMININO</a>
        <a href="Atividade3/Snkrs">SNKRS</a> -->
      </div>
    </nav>
    <div class="searchBar">
      <div>
        <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" />
        <input type="text" placeholder="O que você procura?" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {};
  },
  mounted() {},
  computed: {}
};
</script>

<style lang="scss" scoped>
@import "./theHeader.scss";
</style>
