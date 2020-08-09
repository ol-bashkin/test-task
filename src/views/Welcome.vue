<template>
    <div class="welcome">
        <h1 class="welcome__title">Привет, {{ getUserName }}</h1>
        <BaseButton class="welcome__button" @click="logout">Выйти</BaseButton>
    </div>
</template>
<script>
import { mapState } from "vuex";
import BaseButton from "@/components/base/BaseButton.vue";
export default {
    components: {
        BaseButton
    },
    computed: {
        ...mapState(["user"]),
        getUserName() {
            return this.user.user && this.user.user.name
                ? this.user.user.name
                : "%username%";
        }
    },
    methods: {
        logout() {
            this.$store.dispatch("user/logout");
        }
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/vars";
.welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    color: $gray-5;
    &__title {
        margin: 0 0 60px;
    }
    &__button {
        max-width: 300px;
    }
}
</style>
