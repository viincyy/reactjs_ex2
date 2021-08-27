<template>
    <p :class="['todo-item', todoProps.completed ? 'is-completed' : '']">
        <input type="checkbox" :checked="todoProps.completed" />
        {{ todoProps.title }}
        <button class="del-btn">Delete</button>
    </p>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todoProps'],
};
</script>

<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    margin: 0;
    border-bottom: 1px #ccc dotted;
}

.del-btn {
    background-color: #ff0000;
    color: #fff;
    border: none;
    cursor: pointer;
    float: right;
    font-size: 20px;
}

.is-completed {
    text-decoration: line-through;
}
</style>
