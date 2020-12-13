<template>
    <footer>
        <div :style="getWidthOfDiv">
            <p>Email: matheusgomes062@gmail.com</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer",
    data() {
        return {
            offsetWidthMain: 0,
        }
    },
    mounted () {
        this.offsetWidthMain = document.getElementById('quickInfo').offsetWidth
    },
    computed: {
        getWidthOfDiv() {
            return `width: ${this.offsetWidthMain}px;`
        }
    }
}
</script>


<style lang="scss" scoped>
    @import "./theFooter.scss";
</style>