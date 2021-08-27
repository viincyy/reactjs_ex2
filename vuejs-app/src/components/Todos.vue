<template>
    <TodoItem v-for="todo in todos" :key="todo.id" v-bind:todoProps="todo" />
</template>

<script>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

export default {
    name: 'Todos',
    components: { TodoItem },
    setup() {
        const todos = ref([
            {
                id: 1,
                title: 'Viec 1',
                completed: true,
            },
            {
                id: 2,
                title: 'Viec 2',
                completed: false,
            },
            {
                id: 3,
                title: 'Viec 3',
                completed: false,
            },
        ]);
        return {
            todos: todos,
        };
    },
};
</script>

<style></style>
