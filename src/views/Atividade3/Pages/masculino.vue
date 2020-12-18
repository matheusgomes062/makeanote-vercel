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
          src="https://images.lojanike.com.br/500x500/produto/193496_2433692_20200811152848.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Air Max 90 Masculino</p>
        <p>R$ 549,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/500x500/produto/59030_196379_20190603151231.png"
          alt="tenis"
        />
        <p>Tênis Nike Air Max 97 Masculino</p>
        <p>R$ 799,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/500x500/produto/25890_1569665_20190801134152.png"
          alt="tenis"
        />
        <p>Tênis Nike Air Force 1 '07 Masculino</p>
        <p>R$ 499,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/515x515/produto/261261_2576709_20200924102642.jpg"
          alt="tenis"
        />
        <p>Air Jordan 4</p>
        <p>R$ 1.099,99</p>
      </div>
      <div>
        <img
          src="https://static.cloud-boxloja.com/lojas/ym522/produtos/8796b8c8-1b61-48fa-a884-1cf1e0297694.jpg"
          alt="tenis"
        />
        <p>Nike SB Dunk Low - J-Pack "Chicago" (2020)</p>
        <p>R$ 589,90</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/500x500/produto/209065_2028867_20200327134653.jpg"
          alt="tenis"
        />
        <p>Tênis Nike SB Zoom Blazer Mid Unissex</p>
        <p>R$ 449,99</p>
      </div>
      <div>
        <img
          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b93a2b84-d7f0-4b66-a69f-e6d0bcbc8f74/air-jordan-11-retro-mens-shoe-ZNF1qX.jpg"
          alt="tenis"
        />
        <p>Nike Air Jordan 11 Retro</p>
        <p>R$ 2099,99</p>
      </div>
      <div>
        <img
          src="https://images.lojanike.com.br/500x500/produto/189912_1841891_20191125095331.jpg"
          alt="tenis"
        />
        <p>Tênis Nike Air Max 720 Undercover Masculino</p>
        <p>R$ 529,99</p>
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
  name: "masculino",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss" scoped>
@import "./ofertas.scss";
</style>
