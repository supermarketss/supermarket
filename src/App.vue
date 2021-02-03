<template>
    <div id="app">
      <router-view></router-view>
      <main-tar-bar></main-tar-bar>
    </div>
</template>

<script>
    import MainTarBar from "components/content/mainTarbar/MainTarBar";

    export default {
        name: "App",
        components: {MainTarBar}
    }
</script>

<style scoped>
    @import "assets/css/base.css";

</style>
