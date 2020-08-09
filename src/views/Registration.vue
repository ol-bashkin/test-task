<template>
    <main class="registration">
        <RegisterForm class="registration__form" />
        <p class="registration__text">
            или
            <router-link class="registration__link" to="/">
                Авториузуйтесь
            </router-link>
        </p>
    </main>
</template>

<script>
import RegisterForm from "@/components/forms/RegisterForm.vue";

export default {
    components: {
        RegisterForm
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars";
.registration {
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
