<template>
  <div id="app">
    <TheHeader/>
    <main>
      <router-view />
    </main>
    <TheFooter>

    </TheFooter>
  </div>
</template>

<script>
  import TheHeader from "@/components/Header/TheHeader.vue";
  import TheFooter from "@/components/Footer/TheFooter.vue";

  export default {
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
    };
  },
  created() {
  },
  destroyed() {
  },
  methods: {
  }
};
</script>
