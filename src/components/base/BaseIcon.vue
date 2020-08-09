<template>
    <svg
        class="icon"
        :width="width"
        :height="height"
        xversion="1.1"
        baseProfile="full"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <use
            v-bind="{ 'xlink:href': '/img/sprites/' + sprite + '.svg#' + name }"
        />
    </svg>
</template>

<script>
export default {
    props: {
        sprite: {
            type: String,
            default: "system_sprite"
        },
        name: {
            type: String,
            required: true
        },
        width: {
            type: [Number, String],
            default: 24
        },
        height: {
            type: [Number, String],
            default: 24
        }
    }
};
</script>
