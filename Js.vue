<script setup>
import { ref } from 'vue';
//////////////////////////////////////
const count = ref (0);
const increment = () => {
    count.value++
};
const decrement = () => {
    count.value--
}
//////////////////////////////////////////////n

const text = ref('')
</script>

<template>

    <button @click="increment">افزایش:{{ count }}</button>;
    <button @click="decrement">کاهش:{{ count }}</button>
///////////////////////////////////////////////////////

<input v-modal="text" placeholder="What is your name?">
<p>Your name:{{ text }}</p>
</template>

