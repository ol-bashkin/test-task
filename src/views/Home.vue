<template>
    <main class="home">
        <LoginForm />
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
