<template>
  <div>
    <TheHeader />
    <main>
      <div class="containerFoto">
        <div class="contentContainer">
          <img
            src="https://images.lojanike.com.br/hotsitevitrine/ni/0/1607723916/assets/img/nike-yoga.jpg"
            alt="nike-yoga"
          />
          <div class="textAndButtonsContainer">
            <h2>COLEÇÃO NIKE YOGA</h2>
            <p>Com Nike Infinalon, nosso material mais elve e elástico já produzido.</p>
            <div class="buttons">
              <button>Ver Feminino</button>
              <button>Ver Masculino</button>
              <button>Saiba mais</button>
            </div>
          </div>
        </div>
      </div>
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
  }
};
</script>

<style lang="scss" scoped>
@import "./Atividade3.scss";
</style>
