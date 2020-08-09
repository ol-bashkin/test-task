<template>
    <main class="home">
        <LoginForm class="home__form" />
        <p class="home__text">
            или
            <router-link class="home__link" to="/registration">
                Зарегистрируйтесь
            </router-link>
        </p>
    </main>
</template>

<script>
import LoginForm from "@/components/forms/LoginForm.vue";

export default {
    name: "Home",
    components: {
        LoginForm
    }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/vars";
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    &__form {
        margin: 0 0 20px;
    }
    &__text {
        margin: 0;
        color: $gray-5;
    }
    &__link {
        color: $violet;
    }
}
</style>
