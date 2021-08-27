<template>
    <p v-for="todo in todos" :key="todo">{{ todo }}</p>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Todos',
    setup() {
        const todos = ref(['Viec 1', 'Viec 2', 'Viec 3']);
        return {
            todos: todos,
        };
    },
};
</script>

<style></style>
