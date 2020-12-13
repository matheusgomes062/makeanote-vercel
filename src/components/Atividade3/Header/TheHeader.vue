<template>
  <header>
    <div class="logo">
      <img src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png" />
    </div>
    <nav>
      <div class="navBarOptions">
        <a href="/Ofertas">OFERTAS</a>
        <a href="/Lançamentos">LANÇAMENTOS</a>
        <a href="/Masculino">MASCULINO</a>
        <a href="/Feminino">FEMININO</a>
        <a href="/Snkrs">SNKRS</a>
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
