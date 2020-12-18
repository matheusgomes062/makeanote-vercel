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
          src="https://images.lojanike.com.br/320x320/produto/271172_2462673_20200903150720.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Air Zoom Tempo Next% Masculino</p>
        <p>R$ 1.099,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/271200_2510500_20200917170642.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Air Zoom Tempo Next% Feminino</p>
        <p>R$ 1.099,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/270107_2456039_20200903144507.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Zoom Fly 3 Feminino</p>
        <p>R$ 749,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/270058_2455776_20200903144430.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Zoom Fly 3 Masculino</p>
        <p>R$ 749,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/260706_2580824_20200929113544.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Air VaporMax 2020 Flyknit Masculino</p>
        <p>Até 10x de R$ 129,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/256082_2517738_20200917172309.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Air Force 1 Crater Masculino</p>
        <p>R$ 599,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/268112_2565835_20200922092616.jpg"
          alt="tenis"
        />
        <p>Camiseta Nike Liverpool Strike Masculina</p>
        <p>R$ 209,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/320x320/produto/260761_2473299_20200903155620.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Air Force 1 '07 RS Masculino</p>
        <p>R$ 499,99</p>
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
  name: "lancamentos",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
@import "./ofertas.scss";
</style>
