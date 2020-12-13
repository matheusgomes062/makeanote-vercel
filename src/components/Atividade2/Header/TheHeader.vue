<template>
  <header>
    <nav>
      <section class="headerSection" :style="getWidthOfDiv">
        <a href="/Home">
          <p>Home</p>
        </a>
        <p>
          (index.html)
        </p>
        -
        <a href="#">
          <p>
            Contato
          </p>
        </a>
        (mail)
      </section>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {
      offsetWidthMain: 0
    };
  },
  mounted() {
    this.offsetWidthMain = document.getElementById("quickInfo").offsetWidth;
  },
  computed: {
    getWidthOfDiv() {
      return `width: ${this.offsetWidthMain}px;`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./theHeader.scss";
</style>
