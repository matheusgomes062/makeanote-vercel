<template>
  <div id="main">
    <div id="aboutContainer">
      <div id="imgContainer">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHD2VTOY5tyQA/profile-displayphoto-shrink_200_200/0/1602727285269?e=1612396800&v=beta&t=1lLXvOT1lF66aFyQWlNJzYQPkReIBMcrVtvsf-0LNv8" alt="profile-picture">
      </div>
      <div id="aboutSection">
        <section>
          <h2>Sobre</h2>
          <p v-html="about"/>
        </section>
        <section>
          <h2>Objetivo</h2>
          <p v-html="objective"/>
        </section>
      </div>
    </div>
    <div id="quickInfo">
      <table>
        <tr>
          <th v-for="column in tableTitles" :key="column">{{ column }}</th>
        </tr>
        <tr v-for="item in tableContent" :key="item.id">
          <td><ul><li>{{item.formation}}</li></ul></td>
          <td><ul><li>{{item.qualification}}</li></ul></td>
          <td><ul><li>{{item.experience}}</li></ul></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
  },
  components: {
  },
  data() {
    return {
      about: "Trabalho como desenvolvedor Full Stack desde 2018 e atualmente estou me aprofundando em desenvolvimento web, .NET e DDD + Clean Code.</br>Por fim, sou viciado em trabalho, empreendedorismo e hackathons, sobre este último já participei de alguns e minha melhor posição foi quarto lugar na américa latina e segundo lugar no Brasil!",

      objective: "Um dia trabalhar numa empresa FANG (Facebook, Amazon, Netflix, Google), ou viajar pelo mundo gerindo minha própria empresa!",

      tableTitles: ["Formação", "Qualificação Técnica", "Experiências Profissinais"],

      tableContent: [
        { formation: "Ensino Médio Completo", qualification: "VueJs", experience: "Redator Conteúdo Web"},
        { formation: "Licenciatura em Matemática incompleto",  qualification: "ReactJs", experience: "Full Stack Developer - Agrotools"},
        { formation: "Bacharelado em Ciência e Tecnologia em curso", qualification: ".NET Core", experience: "Full Stack Engineer - Ânima Educação"}
      ],
      offsetWidthMain: 0,
    };
  },
  mounted() {
    this.offsetWidthMain = document.getElementById('quickInfo').offsetWidth
  },
  methods: {
  },
  computed: {
    getWidthOfDiv() {
        return `width: ${this.offsetWidthMain}px;`
    }
  }
};
</script>

<style lang="scss" scoped>
    @import "./home.scss";
</style>