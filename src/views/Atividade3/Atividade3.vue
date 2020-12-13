<template>
  <div>
    <TheHeader />
    <main>
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Atividade3/Header/TheHeader.vue";
import TheFooter from "@/components/Atividade3/Footer/TheFooter.vue";
export default {
  name: "Atividade3",
  components: {
    TheHeader,
    TheFooter
  },
  created() {
    this.pushHome();
  },
  methods: {
    pushHome() {
      this.$router.replace("Atividade3/home");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Atividade3.scss";
</style>
