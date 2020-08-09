<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
import { heightMixin } from "@/mixins/heightMixin.js";
export default {
    mixins: {
        heightMixin
    }
};
</script>
<style lang="scss">
@import "@/assets/scss/vars";
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    min-height: 600px;
}
body {
    background-color: $gray-1;
    margin: 0;
}
</style>
