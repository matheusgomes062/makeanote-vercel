<template>
  <div class="wrapperContent">
    <div class="filterContainer">
      <div class="filter">
        <p>FILTROS</p>
        <div class="color">
          <p>COR</p>
          <div class="colorBox">
            <div>
              <div style="background-color: white" />
              <p>Branco</p>
            </div>
            <div>
              <div style="background-color: blue" />
              <p>Azul</p>
            </div>
            <div>
              <div style="background-color: yellow" />
              <p>Amarelo</p>
            </div>
            <div>
              <div style="background-color: green" />
              <p>Verde</p>
            </div>
            <div>
              <div style="background-color: red" />
              <p>Vermelho</p>
            </div>
            <div>
              <div style="background-color: grey" />
              <p>Cinza</p>
            </div>
            <div>
              <div style="background-color: gold" />
              <p>Dourado</p>
            </div>
            <div>
              <div style="background-color: blue" />
              <p>Multicolor</p>
            </div>
            <div>
              <div style="background-color: silver" />
              <p>Prata</p>
            </div>
            <div>
              <div style="background-color: black" />
              <p>Preto</p>
            </div>
            <div>
              <div style="background-color: purple" />
              <p>Roxo</p>
            </div>
            <div>
              <div style="background-color: pink" />
              <p>Rosa</p>
            </div>
            <div>
              <div style="background-color: orange" />
              <p>Laranja</p>
            </div>
            <div>
              <div style="background-color: beige" />
              <p>Bege</p>
            </div>
            <div>
              <div style="background-color: brown" />
              <p>Marrom</p>
            </div>
          </div>
        </div>
      </div>
      <div class="size">
        <p>TAMANHO</p>
        <div class="sizeBox">
          <div>P</div>
          <div>M</div>
          <div>G</div>
          <div>GG</div>
        </div>
      </div>
    </div>
    <div class="contentContainer">
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/201680_2501662_20200914141022.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Air Zoom Vomero 14 Feminino</p>
        <p>R$ 749,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/255192_2497378_20200910112921.jpg"
          alt="tenis"
        />
        <p>Top Nike Indy Icon Clash Feminino</p>
        <p>Até 3x de R$ 49,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/259323_2219824_20200616135053.jpg"
          alt="tenis"
        />
        <p>Blusão Nike Sportswear Essential Feminino</p>
        <p>Até 5x de R$ 41,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/219542_2006073_20200310132811.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Drop-Type Premium Masculino</p>
        <p>R$ 319,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/214093_2061544_20200414182606.jpg"
          alt="tenis"
        />
        <p>Jaqueta Nike Sportswear Masculina</p>
        <p>R$ 229,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/246393_2522956_20200921155012.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Joyride Run Flyknit Feminino</p>
        <p>Até 10x de R$ 74,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/218382_2335086_20200723173636.jpg"
          alt="tenis"
        />
        <p>Camiseta Nike Sportswear Feminina</p>
        <p>R$ 79,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/252005_2246282_20200625113340.jpg"
          alt="tenis"
        />
        <p>Tênis Nike React Art3mis Feminino</p>
        <p>R$ 579,99</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<script>
import TheHeader from "@/components/Atividade3/Header/TheHeader.vue";
import TheFooter from "@/components/Atividade3/Footer/TheFooter.vue";
export default {
  name: "ofertas",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
@import "./ofertas.scss";
</style>
