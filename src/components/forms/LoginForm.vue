<template>
    <form class="l-form" @submit.prevent="login">
        <BaseInput
            :model="email"
            @input="inputText($event, 'email')"
            @blur="touchEmail"
            class="l-form__input"
        />
        <BaseInput
            :model="password"
            @input="inputText($event, 'password')"
            @blur="touchPassword"
            class="l-form__input"
        />
        <BaseButton type="submit" :inverse="true">Войти</BaseButton>
    </form>
</template>

<script>
import { emailMixin, pwdMixin, inputMixin } from "@/mixins/validationMixins";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
export default {
    mixins: [emailMixin, pwdMixin, inputMixin],
    components: {
        BaseInput,
        BaseButton
    },
    methods: {
        hasAnyErrors() {
            this.touchEmail();
            this.touchPassword();
            return this.email.error || this.password.error;
        },
        async login() {
            if (!this.hasAnyErrors()) {
                let response = await this.$store.dispatch("user/login", {
                    email: this.email.value,
                    password: this.password.value
                });
                if (response === "Success") {
                    this.$router.push("welcome");
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.l-form {
    max-width: 300px;
    width: 100%;
    &__input {
        &:not(:last-child) {
            margin: 0 0 16px;
        }
    }
}
</style>
