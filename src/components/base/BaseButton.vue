<template>
    <button
        :type="type"
        :class="{ 'button--inverse': inverse }"
        class="button"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        inverse: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: "button"
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars";
.button {
    display: block;
    width: 100%;
    padding: 11px 20px 10px;
    background: transparent;
    color: $gray-5;
    border: 1px solid $gray-5;
    border-radius: $radius-small;
    font-weight: 500;
    font-family: inherit;
    font-size: 14px;
    line-height: 27px;
    letter-spacing: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color $transition, box-shadow $transition,
        border-color $transition;
    &:hover {
        background: $violet;
        border-color: $violet;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px $gray-5;
    }
    &--inverse {
        padding: 12px 20px 11px;
        background-color: $violet;
        border: none;
        &:hover {
            background-color: $violetdark;
        }
    }

    @media screen and (max-width: $sm-desktop-break) {
        padding: 7px 20px 6px;
        &--inverse {
            padding: 8px 20px 7px;
            background-color: $violet;
        }
    }
    @media screen and (max-width: $tablet-break) {
        padding: 7px 5px 6px;
        font-size: 11px;
        line-height: 27px;
        letter-spacing: 1.5px;
        &--inverse {
            padding: 8px 8px 7px;
            background-color: $violet;
        }
    }
}
</style>
