export const emailMixin = {
    data() {
        return {
            email: {
                type: "email",
                name: "email",
                label: "Email",
                autocomplete: "email",
                value: "",
                error: false,
                message: "Введите корректный email",
                mask: /.+@.+\..+/,
                required: true
            }
        };
    },
    methods: {
        touchEmail() {
            this.email.error =
                this.email.required && !this.email.mask.test(this.email.value);
        }
    }
};
export const pwdMixin = {
    data() {
        return {
            password: {
                type: "password",
                name: "password",
                label: "Пароль",
                autocomplete: "current-password",
                value: "",
                error: false,
                message: "Введите пароль",
                required: true
            }
        };
    },
    methods: {
        touchPassword() {
            this.password.error =
                this.password.required && this.password.value.length === 0;
        }
    }
};
export const newPwdMixin = {
    data() {
        return {
            newPassword: {
                type: "password",
                name: "password",
                label: "Пароль",
                autocomplete: "new-password",
                value: "",
                error: false,
                minLength: 8,
                message: "Пароль должен быть длиннее 8 символов",
                required: true
            }
        };
    },
    methods: {
        touchNewPassword() {
            this.newPassword.error =
                this.newPassword.required &&
                this.newPassword.value.length < this.newPassword.minLength;
        }
    }
};
export const rePwdMixin = {
    data() {
        return {
            rePassword: {
                type: "password",
                name: "password",
                label: "Повторите пароль",
                autocomplete: "off",
                value: "",
                error: false,
                message: `Пароли не совпадают`,
                required: true
            }
        };
    },
    methods: {
        touchRePassword() {
            this.rePassword.error =
                this.rePassword.required &&
                this.rePassword.value !== this.newPassword.value;
        }
    }
};

export const nameMixin = {
    data() {
        return {
            name: {
                type: "text",
                name: "name",
                label: "Имя",
                autocomplete: "given-name",
                value: ""
            }
        };
    }
};

export const inputMixin = {
    methods: {
        inputText(value, model) {
            this[model].error = false;
            this[model].value = value;
        }
    }
};
