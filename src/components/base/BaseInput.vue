<template>
    <div
        class="input"
        :class="{
            'input--error': model.required && model.error
        }"
    >
        <label class="input__label">
            <span
                v-html="model.label"
                :class="{ 'input__text--rised': model.value !== '' }"
                class="input__text"
            ></span>
            <BaseIcon
                class="input__icon"
                :name="model.name"
                width="24"
                height="24"
            />
            <input
                :type="model.type"
                :value="model.value"
                :autocomplete="model.autocomplete"
                @input="$emit('input', $event.target.value)"
                @blur="$emit('blur')"
                class="input__input"
            />
        </label>
        <p
            v-if="model.required"
            v-html="model.message"
            class="input__error"
        ></p>
    </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";
export default {
    components: {
        BaseIcon
    },
    props: {
        model: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars";
.input {
    $i: &;
    position: relative;
    width: 100%;
    padding: 0 0 16px;
    transition: padding $transition;
    &--error {
        .input {
            &__error {
                transition: visibility 0s linear 0s, opacity $transition;
                visibility: visible;
                opacity: 1;
            }
            &__text {
                color: $error;
            }
            &__input {
                border-color: $error;
                color: $error;
            }
        }
    }
    &__label {
        display: block;
        width: 100%;
        &:focus-within {
            #{$i} {
                &__text {
                    top: -8px;
                    font-size: 12px;
                    line-height: 16px;
                    background-color: $gray-5;
                    color: $violet;
                }
                &__icon {
                    fill: $violet;
                }
            }
        }
    }
    &__input {
        appearance: none;
        box-sizing: border-box;
        width: 100%;
        padding: 12px 16px 12px 30px;
        border-radius: 0;
        border: 1px solid $gray-3;
        color: $gray-2;
        font-family: inherit;
        font-size: 14px;
        line-height: 24px;
        transition: border-color $transition, color $transition;
        &:focus {
            outline: none;
            border-color: $violet;
        }
    }
    &__error {
        position: absolute;
        visibility: hidden;
        margin: 2px 0 0;
        opacity: 0;
        color: $error;
        font-size: 12px;
        line-height: 16px;
        transition: visibility 0s linear 0.4s, opacity $transition;
    }
    &__icon {
        position: absolute;
        top: 13px;
        left: 4px;
        fill: $gray-3;
        transition: fill $transition;
    }
    &__text {
        position: absolute;
        left: 23px;
        top: 13px;
        margin: 0;
        padding: 0 8px;
        font-size: 14px;
        border-radius: 8px;
        line-height: 24px;
        color: $gray-3;
        transition: top $transition, font-size $transition, color $transition,
            opacity $transition;
        &--rised {
            font-size: 12px;
            line-height: 16px;
            top: -8px;
            background-color: #fff;
        }
    }
    @media screen and (max-width: $sm-desktop-break) {
        &__input {
            padding: 8px 16px 8px 30px;
        }
        &__text {
            top: 9px;
            &--rised {
                top: -8px;
            }
        }
        &__icon {
            top: 9px;
        }
    }
    @media screen and (max-width: $tablet-break) {
        &__input {
            padding: 6px 16px 6px 30px;
        }
        &__text {
            top: 7px;
            &--rised {
                top: -6px;
            }
        }
        &__icon {
            top: 7px;
        }
    }
}
</style>
