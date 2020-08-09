<template>
    <form class="r-form" @submit.prevent="register">
        <BaseInput
            :model="name"
            @input="inputText($event, 'name')"
            class="r-form__input"
        />
        <BaseInput
            :model="email"
            @input="inputText($event, 'email')"
            @blur="touchEmail"
            class="r-form__input"
        />
        <BaseInput
            :model="newPassword"
            @input="inputText($event, 'newPassword')"
            @blur="touchNewPassword"
            class="r-form__input"
        />
        <BaseInput
            :model="rePassword"
            @input="inputText($event, 'rePassword')"
            @blur="touchRePassword"
            class="r-form__input"
        />
        <BaseButton type="submit" :inverse="true">
            Зарегистрироваться
        </BaseButton>
    </form>
</template>

<script>
import {
    nameMixin,
    emailMixin,
    newPwdMixin,
    rePwdMixin,
    inputMixin
} from "@/mixins/validationMixins";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
export default {
    mixins: [nameMixin, emailMixin, newPwdMixin, rePwdMixin, inputMixin],
    components: {
        BaseInput,
        BaseButton
    },
    methods: {
        hasAnyErrors() {
            this.touchEmail();
            this.touchNewPassword();
            this.touchRePassword();
            return (
                this.email.error ||
                this.newPassword.error ||
                this.rePassword.error
            );
        },
        async register() {
            if (!this.hasAnyErrors()) {
                let response = await this.$store.dispatch("user/register", {
                    name: this.name.value,
                    email: this.email.value,
                    password: this.newPassword.value
                });
                console.log(response);
                if (response === "Success") {
                    this.$router.push("/");
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.r-form {
    max-width: 300px;
    width: 100%;
    &__input {
        &:not(:last-child) {
            margin: 0 0 16px;
        }
    }
}
</style>
